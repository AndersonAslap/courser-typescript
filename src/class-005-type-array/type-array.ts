// Array<T> - T[]

function multiplacateArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function unionString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

function toUpper(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiplacateArgs(1, 2, 3);

console.log(result);
console.log(unionString('Anderson', ' ', 'Adolfo'));
console.log(toUpper('a', 'b', 'c'));
