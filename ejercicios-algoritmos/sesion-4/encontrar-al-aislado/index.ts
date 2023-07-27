export default function buscarAislado(numeros: number[]): number {
  // TODO: implementar
 const aisladoEsPar = numeros.filter((numero) => numero % 2 === 0).length ===1;

 return numeros.find((numero) => aisladoEsPar ? numero % 2 === 0 : numero % 2 !==0) as number;
}
