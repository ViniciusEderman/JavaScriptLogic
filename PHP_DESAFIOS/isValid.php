<?php

function isValidIP(string $str) {
    if(empty($str)) {
        return false;
    }

    $trimmedStr = trim($str);
    if (strpos($trimmedStr, ' ') !== false) {
        return false;
    }

    $array = explode(".", $str);

    if (count($array) !== 4) {
        return false;
    }

    for($i = 0; $i < count($array); $i++) {
        $valuePosition = $array[$i];
        $valuePositionInt = (int)$valuePosition;

        if ($valuePositionInt < 0 || $valuePositionInt > 255 || (string)$valuePositionInt !== $valuePosition) {
            return false;
        }
    }

    return true;
}

isValidIP(' 1.2.3.4');