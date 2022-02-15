/**
 *
 * O tipo void é usado quando uma função ou método não retorna nada
 */

function notReturn(...args: string[]): void {
  console.log(args.join(' '));
}

notReturn('Anderson', 'Aslap');
