const ObjectOne: {
  readonly keyOne: string; // readonly deixa com que a chave não possa ser alterada
  keyTwo: string;
  [key: string]: unknown; // Forma para inserir mais chaves no objeto
} = {
  keyOne: 'Value One',
  keyTwo: 'Value Two',
};

ObjectOne.name = 'Aslap';

console.log(ObjectOne);
