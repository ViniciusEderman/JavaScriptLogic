<?php
$data = file_get_contents("../json_teste");
$jsonData = json_decode($data, true);
$produtos = $jsonData['dividas_calculadas']['produtos']['produto'];
$cliente = $jsonData['dividas_calculadas']['cliente'];

function main()
{
    global $cliente;
    $resultadoPorUsuario = [];

    $usuarioResult = [
        'nome' => $cliente['cli_nom'],
        'codigo' => $cliente['cli_cod'],
        'resultados' => [
            'resultadoA' => calcularTotalParcelasComDescontos(),
            'resultadoB' => calcularTotalPorProduto(),
            'resultadoC' => calcularTotalComDescontoPorProduto(),
            'resultadoD' => calcularOpcoesParcelamento(),
            'resultadoE' => calcularTotalTitulosPorProduto(),
        ],
    ];

    $resultadoPorUsuario[] = $usuarioResult;
    echo json_encode($resultadoPorUsuario, JSON_PRETTY_PRINT);
    return $resultadoPorUsuario;
}

// Função A
function calcularTotalParcelasComDescontos()
{
    global $produtos;
    $totalDescontos = 0;

    for ($i = 0; $i < count($produtos); $i++) {
        $produto = $produtos[$i];
        for ($j = 0; $j < count($produto['formasNegociacao']['forma_negociacao']); $j++) {
            $forma = $produto['formasNegociacao']['forma_negociacao'][$j];
            for ($k = 0; $k < count($forma['parcelas']['parcela']); $k++) {
                $parcela = $forma['parcelas']['parcela'][$k];
                for ($l = 0; $l < count($parcela['lancamentos']['item']); $l++) {
                    $item = $parcela['lancamentos']['item'][$l];
                    $valor = (float) str_replace(',', '.', $item['valor']);
                    $maximoDesconto = (float) str_replace(',', '.', $item['maximo_desconto']) / 100;
                    $aplicandoDesconto = $valor - $valor * $maximoDesconto;

                    $totalDescontos += $aplicandoDesconto;
                }
            }
        }
    }
    return number_format($totalDescontos, 2, '.', '');
}

// Função B
function calcularTotalPorProduto()
{
    global $produtos;
    $resultadoPorProduto = [];

    for ($i = 0; $i < count($produtos); $i++) {
        $produto = $produtos[$i];
        $nomeProduto = $produto['pro_nom'];
        $formaNegociacaoAvista = $produto['formasNegociacao']['forma_negociacao'][0];
        $totalDivida = 0;

        for ($j = 0; $j < count($formaNegociacaoAvista['parcelas']['parcela']); $j++) {
            $parcela = $formaNegociacaoAvista['parcelas']['parcela'][$j];
            for ($k = 0; $k < count($parcela['lancamentos']['item']); $k++) {
                $item = $parcela['lancamentos']['item'][$k];
                $valor = (float) str_replace(',', '.', $item['valor']);
                $totalDivida += $valor;
            }
        }

        $resultadoPorProduto[$nomeProduto] = number_format($totalDivida, 2, '.', '');
    }
    return $resultadoPorProduto;
}

// Função C
function calcularTotalComDescontoPorProduto()
{
    global $produtos;
    $resultadoComDesconto = [];

    for ($i = 0; $i < count($produtos); $i++) {
        $produto = $produtos[$i];
        $nomeProduto = $produto['pro_nom'];
        $formaNegociacaoAvista = $produto['formasNegociacao']['forma_negociacao'][0];
        $totalDividaComDesconto = 0;

        for ($j = 0; $j < count($formaNegociacaoAvista['parcelas']['parcela']); $j++) {
            $parcela = $formaNegociacaoAvista['parcelas']['parcela'][$j];
            for ($k = 0; $k < count($parcela['lancamentos']['item']); $k++) {
                $item = $parcela['lancamentos']['item'][$k];
                $valor = (float) str_replace(',', '.', $item['valor']);
                $maximoDesconto = (float) str_replace(',', '.', $item['maximo_desconto']) / 100;
                $aplicandoDesconto = $valor - ($valor * $maximoDesconto);
                $totalDividaComDesconto += $aplicandoDesconto;
            }
        }

        $resultadoComDesconto[$nomeProduto] = number_format($totalDividaComDesconto, 2, '.', '');
    }
    return $resultadoComDesconto;
}

// Função D
function calcularOpcoesParcelamento()
{
    global $produtos;
    $resultadoOfertas = [];

    for ($i = 0; $i < count($produtos); $i++) {
        $produto = $produtos[$i];
        $nomeProduto = $produto['pro_nom'];
        $resultadoOfertas[$nomeProduto] = [];

        for ($j = 0; $j < count($produto['formasNegociacao']['forma_negociacao']); $j++) {
            $forma = $produto['formasNegociacao']['forma_negociacao'][$j];
            $valoresParcelas = [];
            $minParcelas = (int) $forma['regras_acordo']['regra_acordo']['aco_minnumpar'];
            $maxParcelas = (int) $forma['regras_acordo']['regra_acordo']['aco_maxnumpar'];

            for ($k = 0; $k < count($forma['parcelas']['parcela']); $k++) {
                $parcela = $forma['parcelas']['parcela'][$k];
                $valorTotal = 0;

                for ($l = 0; $l < count($parcela['lancamentos']['item']); $l++) {
                    $item = $parcela['lancamentos']['item'][$l];
                    $valor = (float) str_replace(',', '.', $item['valor']);
                    $valorTotal += $valor;
                }
                $valoresParcelas[] = number_format($valorTotal, 2, '.', '');
            }

            $resultadoOfertas[$nomeProduto][] = [
                'forma_negociacao' => $forma['for_nom'],
                'min_parcelas' => $minParcelas,
                'max_parcelas' => $maxParcelas,
                'parcelas' => $valoresParcelas,
            ];
        }
    }
    return $resultadoOfertas;
}

// Função E
function calcularTotalTitulosPorProduto()
{
    global $produtos;
    $titulosPorProduto = [];

    for ($i = 0; $i < count($produtos); $i++) {
        $produto = $produtos[$i];
        $nomeProduto = $produto['pro_nom'];
        $totalTitulos = 0;

        for ($j = 0; $j < count($produto['formasNegociacao']['forma_negociacao']); $j++) {
            $forma = $produto['formasNegociacao']['forma_negociacao'][$j];
            $parcelas = $forma['parcelas']['parcela'];
            $totalTitulos += count($parcelas);
        }
        
        $titulosPorProduto[$nomeProduto] = $totalTitulos;
    }
    return $titulosPorProduto;
}

main();
