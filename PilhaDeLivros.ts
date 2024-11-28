export class PilhaDeLivros {
    private livros: string[] = []

    public adicionarLivro(livro: string): void {
        this.livros.push(livro)
        console.log(`${livro} colocado na pilha`)
    }

    public retirarLivro(): string | undefined {
        let livro = this.livros.pop()
        if (livro) {
            console.log(`${livro} removido da pilha`)
        } else {
            console.log('pilha vazia')
        }
        return livro
    }

    public estaVazia(): boolean {
        return this.livros.length === 0
    }

    public tamanho(): number {
        return this.livros.length
    }

    public adicionarAutomatico(): void {
        this.livros = ['L1', 'L2', 'L3', 'L4', 'L5']

        for (let i = 0; i < this.livros.length; i++){
            let elementos = this.livros[i]
            console.log(elementos, 'adicionado a pilha')
        }
    }

    public removerAutomatico(): void {

        for (let i = this.livros.length - 1; i > -1; i--){
            console.log(this.livros[i], 'removido da pilha')
            let elementos = this.livros.pop[i]
        }
    }
}

let pilhaLivros = new PilhaDeLivros()

pilhaLivros.adicionarAutomatico()
pilhaLivros.removerAutomatico()