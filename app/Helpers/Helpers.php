<?php
function lempar($data) {
  die(print_r($data));
}

function decodeJSONFile($file) {
  return json_decode(preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $file), true);
}