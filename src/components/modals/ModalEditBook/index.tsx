import { Box, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@mui/material';
import {useState, ChangeEvent, useEffect} from "react";
import {IBook} from "../../../Interfaces/IBook.interface";

interface Props {
	open: boolean;
	book: IBook | null;
	onClose: () => void;
	onEdit: (book: IBook) => void;
}

export function ModalEditBook(props: Props): JSX.Element {

	const [formData, setFormData] = useState<IBook>({
		id: props.book?.id || 0,
		title: props.book?.title || '',
		author: props.book?.author || '',
		genre: props.book?.genre || '',
	});

	useEffect(() => {
		if (props.book) setFormData(props.book);
	}, [props.book]);

	const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	const TextFieldProps = {
		fullWidth: true,
		variant: 'outlined' as const,
		onChange: onFormChange,
	}

	return  (
		<Dialog open={props.open} onClose={props.onClose}>
			<DialogTitle>Edit a book</DialogTitle>
			<DialogContent>
				<Box width={400} sx={{
					gap: 2,
					display: "flex",
					flexDirection: "column",
					paddingTop: 1,
				}}>
					<TextField
						{...TextFieldProps}
						label="Title"
						name="title"
						value={formData.title}
					/>
					<TextField
						{...TextFieldProps}
						label="Author"
						name="author"
						value={formData.author}
					/>
					<TextField
						{...TextFieldProps}
						label="Genre"
						name="genre"
						value={formData.genre}
					/>
				</Box>
			</DialogContent>
			<DialogActions>
				<Button
					variant='text'
					onClick={props.onClose}
				>Cancel</Button>
				<Button
					variant='text'
					onClick={() => {
						props.onEdit(formData);
						props.onClose();
					}}
				>Edit</Button>
			</DialogActions>
		</Dialog>
	);
}
