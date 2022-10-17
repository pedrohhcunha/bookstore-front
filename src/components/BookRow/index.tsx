import { IBook } from "../../Interfaces/IBook.interface";
import { Button, ButtonGroup, TableCell, TableRow } from "@mui/material";

interface Props {
	book: IBook;
	onDelete: (id: number) => void;
	onEdit: (id: number) => void;
}

export function BookRow(props: Props): JSX.Element {
	return (
		<TableRow>
			<TableCell>{props.book.id}</TableCell>
			<TableCell>{props.book.title}</TableCell>
			<TableCell>{props.book.author}</TableCell>
			<TableCell>{props.book.genre}</TableCell>
			<TableCell>
				<ButtonGroup>
					<Button
						color="primary"
						onClick={() => props.onEdit(props.book.id)}
					>Edit</Button>
					<Button
						color="error"
						onClick={() => props.onDelete(props.book.id)}
					>Delete</Button>
				</ButtonGroup>
			</TableCell>
		</TableRow>
	)
}
