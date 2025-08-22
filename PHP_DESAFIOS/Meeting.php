<?php

function meeting($s) {
    $array = explode(';', $s);
    $result = [];

    for($i = 0; $i < count($array); $i++) {
        $fullName = strtoupper($array[$i]);
        list($firstName, $lastName) = explode(':', $fullName);
        $formattedName = "($lastName, $firstName)";
        array_push($result, $formattedName);
    }

    usort($result, function($a, $b) {
        list($lastA, $firstA) = explode(', ', trim($a, '()'));
        list($lastB, $firstB) = explode(', ', trim($b, '()'));

        $compareLast = strcmp($lastA, $lastB);
        
        if ($compareLast === 0) {
            return strcmp($firstA, $firstB);
        }
        
        return $compareLast;
    });

    $finalString = implode('', $result);
    return $finalString;
}

meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:KERN;Megan:Stan;Alex:Korn");