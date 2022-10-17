import { IBook } from "../../Interfaces/IBook.interface";
import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import { BookRow } from "../BookRow";
import Typography from "@mui/material/Typography";

interface Props {
	books: Array<IBook>;
	onBookDelete: (id: number) => void;
	onBookEdit: (book: IBook) => void;
}

export function BooksTable(props: Props): JSX.Element {
	return (
		props.books.length > 0 ?
			<Table
				aria-label="simple table"
			>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Title</TableCell>
						<TableCell>Author</TableCell>
						<TableCell>Genre</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				{props.books.map((book) => (
					<BookRow book={book} onDelete={props.onBookDelete} onEdit={() => props.onBookEdit(book)} />
				))}
			</Table>
		:
			<Typography variant="h6" component="h2" gutterBottom>
				No books found
			</Typography>
	)
}
