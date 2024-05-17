import axios from 'axios';

export async function getEditoras() {
    try {
        const response = await axios.get('/api/editoras');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar editoras:', error);
        return [];
    }
}
