<?php

function capitals($word) {
    $arrCaracters = str_split($word);
    $result = [];

    for($i = 0; $i < count($arrCaracters); $i++) {
        if (ctype_upper($arrCaracters[$i])) {
          array_push($result, $i);
        }
    }

    return $result;
};

capitals('CodEWaRs');