export function DespesasTotais(dataGas) {
  var testes = 0;
  for (var i in dataGas) {
    testes += (dataGas[i].valorAli / dataGas[i].qtdAli) * dataGas[i].consumoAli;
  }
  const precoCF = testes;
  return precoCF;
}
