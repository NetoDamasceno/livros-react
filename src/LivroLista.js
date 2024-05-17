import React, { useState, useEffect } from 'react';
import ControleLivros from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

function Livro({ livro, excluir }) {
    const controleEditora = new ControleEditora();
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
}

function LivroLista() {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);
    const controleLivro = new ControleLivros();

    useEffect(() => {
        const carregarLivros = async () => {
            const livros = await controleLivro.obterLivros();
            setLivros(livros);
            setCarregado(true);
        };

        if (!carregado) {
            carregarLivros();
        }
    }, [carregado]);

    const excluir = (codigoLivro) => {
        controleLivro.excluir(codigoLivro);
        setCarregado(false);
    };

    return (
        <main>
            <h1>Catálogo de Livros</h1>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr className="bg-black text-white">
                            <th>Título</th>
                            <th>Resumo</th>
                            <th>Editora</th>
                            <th>Autores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <Livro key={livro.codigo} livro={livro} excluir={excluir} />
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default LivroLista;
