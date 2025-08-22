<?php

function wave($people)
{
    $arr = [];

    for ($i = 0; $i < strlen($people); $i++) {
        if ($people[$i] != ' ') {
            $modified = substr_replace($people, strtoupper($people[$i]), $i, 1);
            array_push($arr, $modified);
        }
    }

    //print_r($arr);
    return $arr;
}
wave("two words");

function waveTwo($people)
{
    $caracters = str_split($people);
    $result = [];


    for ($i = 0; $i < count($caracters); $i++) {
        if ($people[$i]) {
            $upperCaracter = strtoupper($caracters[$i]);
            $copyArr = str_split($people);
            $copyArr[$i] = $upperCaracter;
            array_push($result, $copyArr);
        } else {
            // checar se ha index i + 1 se houver, a gente faz um Upper, se não, a gente faz nada 
        }
    }

    print_r($result);
}
waveTwo("two words");
