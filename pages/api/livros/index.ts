import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from './controleLivro';

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            
            const livros = controleLivro.obterLivros();
            res.status(200).json(livros);
        } else if (req.method === 'POST') {
            
            const livro = req.body;
            controleLivro.incluir(livro);
            res.status(200).json({ message: 'Livro incluído com sucesso' });
        } else {
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
