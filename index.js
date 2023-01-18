const Livro = require("./Livro");
const Pilha = require("./Pilha");

const pilha = new Pilha();

// teste 1
console.log("** teste 1 **");
pilha.imprimirPilha();
console.log(`Quantidade de elementos: ${pilha.tamanhoDaPilha()}`);

// teste 2
console.log("** teste 2 **");
pilha.push(new Livro("Casais Inteligentes Enriquecem Juntos", "Gustavo Cerbasi", 192));
pilha.imprimirPilha();
console.log(`Quantidade de elementos: ${pilha.tamanhoDaPilha()}`);

// teste 3
console.log("** teste 3 **");
console.log(pilha.pop());
pilha.imprimirPilha();
console.log(`Quantidade de elementos: ${pilha.tamanhoDaPilha()}`);

// teste 4
console.log("** teste 4 **");
pilha.push(new Livro("Casais Inteligentes Enriquecem Juntos", "Gustavo Cerbasi", 192));
pilha.push(new Livro("O Monge e o Executivo", "James C. Hunter", 159));
pilha.push(new Livro("O Mundo de Sofia", "Jostein Gaarder", 560));
pilha.imprimirPilha();
console.log(`Quantidade de elementos: ${pilha.tamanhoDaPilha()}`);

// teste 5
console.log("** teste 5 **");
console.log(pilha.pop());
pilha.imprimirPilha();
console.log(`Quantidade de elementos: ${pilha.tamanhoDaPilha()}`);

// teste 6
console.log("** teste 6 **");
console.log(pilha.pop());
pilha.imprimirPilha();
console.log(`Quantidade de elementos: ${pilha.tamanhoDaPilha()}`);

// teste 7
console.log("** teste 7 **");
console.log(pilha.pop());
pilha.imprimirPilha();
console.log(`Quantidade de elementos: ${pilha.tamanhoDaPilha()}`);

// teste 8
console.log("** teste 8 **");
console.log(pilha.pop());
pilha.imprimirPilha();
console.log(`Quantidade de elementos: ${pilha.tamanhoDaPilha()}`);

// teste 9
console.log("** teste 9 **");
console.log(pilha.pop());
pilha.imprimirPilha();
console.log(`Quantidade de elementos: ${pilha.tamanhoDaPilha()}`);

// teste 10
console.log("** teste 10 **");
pilha.push(new Livro("Casais Inteligentes Enriquecem Juntos", "Gustavo Cerbasi", 192));
pilha.imprimirPilha();
console.log(`Quantidade de elementos: ${pilha.tamanhoDaPilha()}`);

// teste 11
console.log("** teste 11 **");
console.log(pilha.pop());
pilha.imprimirPilha();
console.log(`Quantidade de elementos: ${pilha.tamanhoDaPilha()}`);

// teste 12
console.log("** teste 12 **");
console.log(pilha.pop());
pilha.imprimirPilha();
console.log(`Quantidade de elementos: ${pilha.tamanhoDaPilha()}`);
