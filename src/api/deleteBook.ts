import axios from 'axios'

export async function deleteBook(id: number): Promise<void> {
	try{
		await axios.delete(`/books/${id}`);
	} catch (error) {
		throw new Error('Error to delete the book!')
	}
}
