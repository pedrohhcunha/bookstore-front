import { Box, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@mui/material';
import { useState, ChangeEvent } from "react";
import { ICreatBook } from "../../../api/createBook";

interface Props {
	open: boolean;
	onClose: () => void;
	onAdd: (book: ICreatBook) => void;
}

export function ModalCreateBook(props: Props): JSX.Element {

	const [formData, setFormData] = useState<ICreatBook>({
		title: '',
		author: '',
		genre: '',
	});

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
			<DialogTitle>Create a book</DialogTitle>
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
						props.onAdd(formData);
						props.onClose();
					}}
				>Create</Button>
			</DialogActions>
		</Dialog>
	);
}
