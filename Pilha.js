const No = require("./No");

class Pilha {
    constructor() {
        this.topo = null;
        this.quantidadeNos = 0;
    }

    /**
     * Empilha um livro na pilha
     */
    push(livro) {
        const novoNo = new No(livro, this.topo);
        this.topo = novoNo;
        this.quantidadeNos++;
    }

    /**
     * Desempilha um livro na pilha
     */
    pop() {
        const topo = this.topo;
        if (topo != null) {
            this.topo = topo.no;
            this.quantidadeNos--;
            return topo.livro;
        }
        return null;
    }

    /**
     * Retorna a quantidade de livros na pilha
     */
    tamanhoDaPilha() {
        return this.quantidadeNos;
    }

    /**
     * Imprime os livros na pilha
     */
    imprimirPilha() {
        let atual = this.topo;
        while (atual != null) {
            atual.livro.imprimir();
            atual = atual.no;
        }
    }

}

module.exports = Pilha;
