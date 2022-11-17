export function ReceitasTotais(dataLeite) {
  var testes = 0;
  for (var i in dataLeite) {
    testes += (dataLeite[i].precoL * dataLeite[i].prodL);
  }
  const precoLeite = testes;
  return precoLeite;
}
