function criarUltimoSubarray(n) {
  let subarrayAtual = [1];
  let novoSubarray = [];

  for (let i = 1; i < n; i++) {
    novoSubarray = [];
    let somador = 1;
    novoSubarray.push(subarrayAtual[0] + 1);

    for (let j = 1; j < subarrayAtual.length; j++) {
      somador += 1;
      novoSubarray.push(subarrayAtual[j] + somador);
    }

    novoSubarray.push(novoSubarray[0]);
    subarrayAtual = novoSubarray;
  }

  console.log(subarrayAtual);
  return subarrayAtual;
}

criarUltimoSubarray(4)