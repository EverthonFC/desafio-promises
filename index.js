// const fs = require("fs/promises");

// const conteudo = fs.readFile("./arquivo.txt")
// .then((conteudo) => console.log (conteudo))
// .catch ((erro) => console.log ("deu ruim"))

// console.log("teste depois da leitura")

// function criarCartao(nome) {
//     return new Promise(async (reject, resolve) => {
//       if (nome == "vinicius") {
//         return reject("Nome não é permitido");
//       }
  
//       await fs.appendFile("cartao-visita.txt", `Olá meu nome é ${nome}`);
//       resolve();
//     });
//   }
  
//   criarCartao("");
  

const fs = require("fs/promises");

function soma(n1, n2){
    return new Promise(async (resolve, reject) => {
      if (typeof n1 !== "number" || typeof n2 !== "number") {
        return reject("Não são números");
      }

        await fs.appendFile('resultado.txt', ` A soma entre ${n1} + ${n2} é igual a ${n1 + n2}\n`);
    })
}

soma(2,50);



