import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getEditoras } from '../services/editoraService';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';

interface Editora {
    codEditora: number;
    nome: string;
}

interface Livro {
    codigo: number;
    titulo: string;
    resumo: string;
    autores: string[];
    codEditora: number;
}

const baseURL = 'http://localhost:3000/api/livros';

async function incluirLivro(livro: Livro) {
    try {
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(livro),
        });
        return response.ok;
    } catch (error) {
        console.error('Erro ao incluir livro:', error);
        return false;
    }
}

const LivroDados: React.FC = () => {
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(0);
    const [opcoes, setOpcoes] = useState<Editora[]>([]);
    const router = useRouter();

    useEffect(() => {
        async function carregarEditoras() {
            const editoras = await getEditoras();
            setOpcoes(editoras);
        }
        carregarEditoras();
    }, []);

    const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const livro: Livro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split('\n'),
            codEditora,
        };
        const sucesso = await incluirLivro(livro);
        if (sucesso) {
            router.push('/LivroLista');
        } else {
            alert('Erro ao incluir livro. Por favor, tente novamente.');
        }
    };

    return (
        <div className="container">
            <Head>
                <title>Livro Dados</title>
            </Head>

            <main className="main-content">
                <h1>Incluir Livro</h1>
                <form onSubmit={incluir}>
                    <div className="mb-3">
                        <label className="form-label">Título:</label>
                        <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Resumo:</label>
                        <textarea className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Autores (um por linha):</label>
                        <textarea className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Editora:</label>
                        <select className="form-select" value={codEditora} onChange={tratarCombo} required>
                            <option value="">Selecione uma editora</option>
                            {opcoes.map((opcao) => (
                                <option key={opcao.codEditora} value={opcao.codEditora}>
                                    {opcao.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Incluir Livro</button>
                </form>
            </main>
        </div>
    );
};

export default LivroDados;
