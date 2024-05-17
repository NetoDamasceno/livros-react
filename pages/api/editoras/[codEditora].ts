// pages/api/editoras/[codEditora].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from './controleEditora';

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const codEditora = parseInt(req.query.codEditora as string);

            if (isNaN(codEditora)) {
                res.status(400).json({ error: 'Invalid editora code' });
                return;
            }

            console.log('Requested codEditora:', codEditora);

            const nomeEditora = controleEditora.getNomeEditora(codEditora);
            if (nomeEditora) {
                res.status(200).json({ nome: nomeEditora });
            } else {
                res.status(404).json({ error: 'Editora not found' });
            }
        } else {
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error fetching editora:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
