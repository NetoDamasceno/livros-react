import React from 'react';
import ControleEditora from '../controle/ControleEditora'; 
import { Livro } from '../modelo/Livro'; 

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
    livro: Livro;
    excluir: (codigo: number) => void;
}

const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span>{livro.titulo}</span>
                    <button
                        onClick={() => excluir(livro.codigo)}
                        className="btn btn-danger mt-2"
                        style={{ height: '35px', width: '100px' }}
                    >
                        Excluir
                    </button>
                </div>
            </td>
            <td style={{ maxWidth: '300px', wordWrap: 'break-word' }}>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};

export default LinhaLivro;
