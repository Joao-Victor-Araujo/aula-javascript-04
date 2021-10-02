// 1)      Criar um array com valores numéricos:  25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56.
// a)       Coloque eles em ordem crescente.
// b)      Exibir no Console.

let arrayNumericos = [25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56];
arrayNumericos.sort();

console.log(arrayNumericos);

// 2) Dado um array com os times: Santos, Sport, Santa Cruz, Vasco, Chapecó.
// a) Adicionar o time "Flamengo" no final do array.
// b) Remover o time que está no início do array.
// c) Adicionar o time "Palmeiras" no início do array.
// d) Adicionar o time "Grêmio" no final do array.
// e) Adicionar os times "São Paulo" e "Santos" do início do array.
// f) Exibir, no console, a quantidade de elementos no array.
// g) Remover o time que está no final do array.
// h) Exibir, no console, em ordem crescente os times que estão no array.


let arrayTimes = ['Santos', 'Sport', 'Santa Cruz', 'Vasco', 'Chapecó'];
arrayTimes.push("Flamengo");
arrayTimes.shift();
arrayTimes.unshift("Palmeiras");
arrayTimes.push("Gremio")
arrayTimes.unshift("São paulo", "Santos");
arrayTimes.pop();
console.log(arrayTimes.length);
console.log(arrayTimes.reverse());

// 3)      Criar um array contendo 7 atividades que você faz durante o dia.
// a)      Exibir no console as atividades na ordem inversa.
// b)      Selecionar e exibir no console, os elementos nas posições 3 e 6.
// c)      Exibir no console seu array transformado em string. Substituir a vírgula pelo símbolo " - " (hífen).
// d)      Criar um array com 2 atividades que você mais gosta e juntar com o array das atividades que você faz durante o dia. E exibir no console o resultado.


let diaDia = [" acordar ", " comer ", " codar ", " Dormir ", " Jogar ", " estudar ", " correr "];
console.log(diaDia.reverse());
let posicoes = diaDia.slice(3, 6);
console.log(posicoes);
console.log(diaDia.join(" - "))
let Best = [" cagar ", " deitar no chão "];
console.log(diaDia.concat(Best));
