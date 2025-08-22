<?php

function parse($data) {
    $strToArr = str_split($data);
    $pointer = 0;
    $result = [];

    for($i = 0; $i < count($strToArr); $i++) {
        if($strToArr[$i] == 'i') {
            $pointer += 1;
        }
        if($strToArr[$i] == 'd') {
            $pointer -= 1;
        }
        if($strToArr[$i] == 's') {
            $pointer = $pointer * $pointer; // ^^ 2
        }
        if($strToArr[$i] == 'o') {
            array_push($result, $pointer);
        }

    }
   return $result;
}

parse("iiisdoso");