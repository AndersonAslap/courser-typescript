// Ultilizar o tipo any em ultimo caso
// type any = qualquer tipo

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage('2'));
console.log(showMessage([1, 2, 3]));
console.log(showMessage(2));
