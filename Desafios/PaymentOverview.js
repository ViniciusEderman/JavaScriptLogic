const fs = require("fs");
const data = fs.readFileSync("../json_teste");
const jsonData = JSON.parse(data);
const usuarios = jsonData.dividas_calculadas.cliente;
const produtos = jsonData.dividas_calculadas.produtos.produto;

function main() {
  const resultadoPorUsuario = [];

  const usuario = {
    nome: usuarios.cli_nom,
    codigo: usuarios.cli_cod,
    resultados: {
      resultadoA: calcularTotalParcelasComDescontos(),
      resultadoB: calcularTotalPorProduto(),
      resultadoC: calcularTotalComDescontoPorProduto(),
      resultadoD: calcularOpcoesParcelamento(),
      resultadoE: calcularTotalTitulosPorProduto(),
    },
  };
  resultadoPorUsuario.push(usuario);
  console.log(JSON.stringify(resultadoPorUsuario, null, 2));
  return resultadoPorUsuario
}

// LETTER A
function calcularTotalParcelasComDescontos() {
  let totalDescontos = 0;
  let resultado;

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    const formasNegociacao = produto.formasNegociacao.forma_negociacao;

    for (let j = 0; j < formasNegociacao.length; j++) {
      const forma = formasNegociacao[j];
      const parcelas = forma.parcelas.parcela;

      for (let k = 0; k < parcelas.length; k++) {
        const parcela = parcelas[k];
        const itens = parcela.lancamentos.item;

        for (let l = 0; l < itens.length; l++) {
          const item = itens[l];
          const valor = Number(item.valor.replace(",", "."));
          const maximoDesconto = Number(item.maximo_desconto.replace(",", ".")) / 100;
          const aplicandoDesconto = valor - valor * maximoDesconto;

          totalDescontos += aplicandoDesconto;
        }
      }
    }
  }
  resultado = Number(totalDescontos.toFixed(2));
  return resultado;
}

// Letter B
function calcularTotalPorProduto() {
  const resultadoPorProduto = {};

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    const nomeProduto = produto.pro_nom;
    const formaNegociacaoAvista = produto.formasNegociacao.forma_negociacao[0];
    const parcelas = formaNegociacaoAvista.parcelas.parcela;
    let totalDivida = 0;

    for (let j = 0; j < parcelas.length; j++) {
      const parcela = parcelas[j];
      const itens = parcela.lancamentos.item;

      for (let k = 0; k < itens.length; k++) {
        const item = itens[k];
        const valor = Number(item.valor.replace(",", "."));
        totalDivida += valor;
      }
    }

    resultadoPorProduto[nomeProduto] = Number(totalDivida.toFixed(2));
  }
  return resultadoPorProduto;
}

// letter C
function calcularTotalComDescontoPorProduto(data) {
  const resultadoComDesconto = {};

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    const nomeProduto = produto.pro_nom;
    
    const formaNegociacaoAvista = produto.formasNegociacao.forma_negociacao[0]; 
    const parcelas = formaNegociacaoAvista.parcelas.parcela;
    let totalDividaComDesconto = 0;

    for (let j = 0; j < parcelas.length; j++) {
      const parcela = parcelas[j];
      const itens = parcela.lancamentos.item;

      for (let k = 0; k < itens.length; k++) {
        const item = itens[k];
        const valor = Number(item.valor.replace(",", "."));
        const maximoDesconto = Number(item.maximo_desconto.replace(",", ".")) / 100;
        const aplicandoDesconto = valor - (valor * maximoDesconto);
        totalDividaComDesconto += aplicandoDesconto;
      }
    }

    resultadoComDesconto[nomeProduto] = Number(totalDividaComDesconto.toFixed(2));
  }
  return resultadoComDesconto;
}

// letter D
function calcularOpcoesParcelamento() {
  const resultadoOfertas = {};

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    const formasNegociacao = produto.formasNegociacao.forma_negociacao;
    const nomeProduto = produto.pro_nom;

    if (!resultadoOfertas[nomeProduto]) {
      resultadoOfertas[nomeProduto] = [];
    }

    for (let j = 0; j < formasNegociacao.length; j++) {
      const forma = formasNegociacao[j];
      const parcelas = forma.parcelas.parcela;
      const minParcelas = Number(forma.regras_acordo.regra_acordo.aco_minnumpar);
      const maxParcelas = Number(forma.regras_acordo.regra_acordo.aco_maxnumpar);

      let valoresParcelas = [];

      for (let k = 0; k < parcelas.length; k++) {
        const parcela = parcelas[k];
        const itens = parcela.lancamentos.item;

        let valorTotal = 0;

        for (let l = 0; l < itens.length; l++) {
          const item = itens[l];
          const valor = Number(item.valor.replace(",", "."));
          valorTotal += valor;
        }

        valoresParcelas.push(Number(valorTotal.toFixed(2)));
      }

      resultadoOfertas[nomeProduto].push({
        forma_negociacao: forma.for_nom,
        min_parcelas: minParcelas,
        max_parcelas: maxParcelas,
        parcelas: valoresParcelas,
      });
    }
  }
  return resultadoOfertas;
}

// letter E
function calcularTotalTitulosPorProduto() {
  const titulosPorProduto = {};

  for (let i = 0; i < produtos.length; i++) {
    const nomeProduto = produtos[i].pro_nom;
    const formasNegociacao = produtos[i].formasNegociacao.forma_negociacao;
    let totalTitulos = 0;

    for (let j = 0; j < formasNegociacao.length; j++) {
      const parcela = formasNegociacao[j].parcelas.parcela;

      if (parcela) {
        totalTitulos += parcela.length;
      }
    }
    titulosPorProduto[nomeProduto] = totalTitulos;
  } 
  return titulosPorProduto;
}

main();