// Exercício de Prática Guiada

// const megaSena = [
//   [1, 2, 3, 4, 5, 6,],
//   [11, 12, 13, 14, 15, 16],
//   [21, 22, 23, 24, 25, 26],
//   [31, 32, 33, 34, 35, 36]
// ];

// Parte 1 - Laços dentro de condicionais e dentro de laços

// if (megaSena.length === 4) {
//   // Percorre o Array principal
//   for (let i = 0; i < megaSena.length; i++) {
//     let sorteio = `Sorteio ${i + 1}: `
//     // Percorre os Arrays do Array principal
//     for (let j = 0; j < megaSena[i].length; j++) {
//       sorteio += `${megaSena[i][j]} `
//       // console.log(megaSena[i][j]);;
//     }
//     console.log(sorteio);
//   }
// } else {
//   console.log("É necessário alterar o número de itens do array.");
// }

// Parte 2 - for... in... e for... of...

// if (megaSena.length === 4) {
//   // Percorre o Array principal
//   for (let i in megaSena) {
//     let sorteio = `Sorteio ${+i + 1}: `
//     // Percorre os Arrays do Array principal
//     for (let j of megaSena[i]) {
//       sorteio += `${j} `
//       // console.log(megaSena[i][j]);;
//     }
//     console.log(sorteio);
//   }
// } else {
//   console.log("É necessário alterar o número de itens do array.");
// }

// Exercício de Fixação

const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

for (let f in filmes) {
  console.log(`\nFilme: ${filmes[f].titulo}\nAno: ${filmes[f].ano}\nDiretor: ${filmes[f].diretor} \n\nTem no elenco:`);
  for (let e of filmes[f].elenco) {
    console.log(`${e}`);
  }
}