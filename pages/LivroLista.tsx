import { useState, useEffect } from 'react';
import Head from 'next/head';
import Menu from '../componentes/Menu';
import styles from '../styles/Home.module.css';

const baseURL = "http://localhost:3000/api/livros";

// Defina a interface Livro aqui ou importe-a de um arquivo de tipos
interface Livro {
    codigo: number;
    titulo: string;
    autor: string;
    ano: number;
}

const LivroLista: React.FC = () => {
    const [livros, setLivros] = useState<Array<Livro>>([]);
    const [carregado, setCarregado] = useState<boolean>(false);

    const obter = async () => {
        const resposta = await fetch(baseURL);
        return resposta.json();
    }

    const excluirLivro = async (codigo: number) => {
        const resposta = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
        return resposta.ok;
    }

    const excluir = async (codigo: number) => {
        const excluido = await excluirLivro(codigo);
        if (excluido) {
            setCarregado(false);
        }
    }

    useEffect(() => {
        if (!carregado) {
            obter().then(data => {
                setLivros(data);
                setCarregado(true);
            });
        }
    }, [carregado]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Lista de Livros</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />

            <main className="container mt-4">
                <h1 className="mb-4">Lista de Livros</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Ano</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro: Livro) => (
                            <tr key={livro.codigo}>
                                <td>{livro.titulo}</td>
                                <td>{livro.autor}</td>
                                <td>{livro.ano}</td>
                                <td>
                                    <button onClick={() => excluir(livro.codigo)} className="btn btn-danger">Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default LivroLista;
