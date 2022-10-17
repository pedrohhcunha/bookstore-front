import axios, { AxiosResponse } from 'axios'
import { IBook } from "../Interfaces/IBook.interface";

export interface ICreatBook {
	title: string;
	author: string;
	genre: string;
}

export async function createBook(data: ICreatBook): Promise<IBook> {
	try{
		const response: AxiosResponse = await axios.post('/books', data);
		return response.data.book;
	} catch (error) {
		throw new Error('Error to create a book!')
	}
}
