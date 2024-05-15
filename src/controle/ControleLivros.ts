import Livro from '../modelo/Livro'; 

let livros: Livro[] = [
    new Livro(1, 1, "Use a Cabeça: Java", "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.", ["Bert Bates", "Kathy Sierra"]),
    new Livro(2, 2, "Java, Como Programar", "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel", ["Paul Deitel", "Harvey Deitel"]),
    new Livro(3, 3, "Core Java for the Impatient", 'eaders familiar with Horstmanns original, two-volume "Core Java" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact de language and core libraries.', ["Cay Horstmann" ])
];

class ControleLivros {
    
    obterLivros(): Livro[] {
        return livros;
    }

    incluir(livro: Livro): void {
        const novoCodigo = livros.reduce((max, livro) => livro.codigo > max ? livro.codigo : max, 0) + 1;
        livro.codigo = novoCodigo;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(livro => livro.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}

export default ControleLivros;
