import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from './controleLivro';

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'DELETE') {
            const codigo = parseInt(req.query.codigo as string);

            if (isNaN(codigo)) {
                res.status(400).json({ error: 'Invalid book code' });
                return;
            }

            controleLivro.excluir(codigo);
            res.status(200).json({ message: 'Livro excluído com sucesso' });
        } else {
            res.setHeader('Allow', ['DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
