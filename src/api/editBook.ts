import axios, { AxiosResponse } from 'axios'
import { IBook } from "../Interfaces/IBook.interface";

export async function editBook(book: IBook): Promise<IBook> {
	try{
		const response: AxiosResponse = await axios.patch(`/books/${book.id}`, {
			title: book.title,
			author: book.author,
			genre: book.genre,
		});
		return response.data.book;
	} catch (error) {
		throw new Error('Error to edit a book!')
	}
}
