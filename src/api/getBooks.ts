import axios, {AxiosResponse} from 'axios'
import { IBook } from "../Interfaces/IBook.interface";

export async function getBooks(): Promise<Array<IBook>> {
	try{
		const response: AxiosResponse = await axios.get('/books');
		return response.data.books.map((book: any): IBook => ({
			id: book.id,
			title: book.title,
			author: book.author,
			genre: book.genre,
		}));
	} catch (error) {
		throw new Error('Error to get the books!')
	}
}
