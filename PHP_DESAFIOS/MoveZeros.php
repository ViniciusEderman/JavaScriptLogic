<?php
function moveZeros(array $items) {
    $auxArr = [];
    $countZeros = 0;

    for ($i = 0; $i < count($items); $i++) {
        if ($items[$i] !== 0 && $items[$i] !== 0.0) {
            array_push($auxArr, $items[$i]);
        } else { 
            $countZeros += 1;
        }
    }

    for ($i = 0; $i < $countZeros; $i++) {
        $auxArr[] = 0;
    }
   
    return $auxArr;
}

moveZeros(["a",0,0,"b",null,"c","d",0,1,false,0,1,0,3,[],0,1,9,0,0,0,0,9]);
// ouput --> ["a","b",null,"c","d",1,false,1,3,[],1,9,9,0,0,0,0,0,0,0,0,0,0]