import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { IBook } from "../../Interfaces/IBook.interface";
import { BooksTable } from "../../components/BooksTable";
import { getBooks } from "../../api/getBooks";
import Typography from "@mui/material/Typography";
import { deleteBook } from "../../api/deleteBook";
import { Button, CircularProgress, Stack } from "@mui/material";
import { ModalCreateBook } from "../../components/modals/ModalCreateBook";
import { createBook, ICreatBook } from "../../api/createBook";
import {editBook} from "../../api/editBook";
import {ModalEditBook} from "../../components/modals/ModalEditBook";

export function Books(): JSX.Element {

	const [books, setBooks] = useState<Array<IBook>>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);
	const [editModalOpen, setEditModalOpen] = useState<IBook | null>(null);

	useEffect(() => {
		const fetchBooks = async () => {
			const books = await getBooks();
			setBooks(books);
			setLoading(false);
		};
		fetchBooks();
	}, []);

	const onBookDelete = async (id: number) => {
		await deleteBook(id);
		setBooks(books.filter(book => book.id !== id));
	};
	const onBookEdit = async (data: IBook) => {
		const bookEdited: IBook = await editBook(data);
		setBooks(books.map(book => book.id === bookEdited.id ? bookEdited : book));
	};
	const onBookCreate = async (data: ICreatBook) => {
		const bookCreated: IBook = await createBook(data);
		setBooks([...books, bookCreated]);
	};

	return (
		<Box sx={{
			p: 4,
			gap: 2,
			display: "flex",
			flexDirection: "column",
		}}>
			{loading ?
				<CircularProgress
					size={24}
					sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
				/>
			:
				<>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography variant="h5" component="h1" gutterBottom>
							Books
						</Typography>
						<Button
							variant="contained"
							color="primary"
							onClick={() => setCreateModalOpen(true)}
						>Create a book</Button>
					</Stack>
					<BooksTable
						books={books}
						onBookDelete={onBookDelete}
						onBookEdit={(book) => setEditModalOpen(book)}
					/>
					<ModalCreateBook
						open={createModalOpen}
						onClose={() => setCreateModalOpen(false)}
						onAdd={onBookCreate}
					/>
					<ModalEditBook
						open={Boolean(editModalOpen)}
						book={editModalOpen}
						onClose={() => setEditModalOpen(null)}
						onEdit={onBookEdit}
					/>
				</>
			}
		</Box>
	)
}
