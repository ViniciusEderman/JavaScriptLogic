<?php

function toWeirdCase($string) {
    $words = explode(' ', $string);

    for ($i = 0; $i < count($words); $i++) {
        $chars = str_split($words[$i]);

        for ($c = 0; $c < count($chars); $c++) {
            if ($c % 2 == 0) {
                $chars[$c] = strtoupper($chars[$c]);
            } else {
                $chars[$c] = strtolower($chars[$c]);
            }
        }

        $words[$i] = implode('', $chars);
    }

    return implode(' ', $words);
}

toWeirdCase("Hello world foo bar baz");