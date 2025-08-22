<?php

function reverseWords($str) {

    $palavras = explode(" ", $str);
    $result = [];
    
    foreach ($palavras as $palavra) {
        $result[] = strrev($palavra); 
    }
    
    $stringInvertida = implode(" ", $result);
    
    return $stringInvertida;
}

reverseWords('ehT kciuq nworb xof spmuj revo eht yzal .god');