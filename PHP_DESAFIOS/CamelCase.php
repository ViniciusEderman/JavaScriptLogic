<?php

function camel_case(string $s) {
   if ( empty($s) ) {
    return "";
   }

   $s = str_replace(' ', '', $s);
   $s = lcfirst(ucwords($s));   

   return $s;
}

camel_case("camel case method");