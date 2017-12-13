<?php
if(isset($_REQUEST["first_name"])) {

    if(strlen($_REQUEST["first_name"]) != null){
        $q_first_name = $_REQUEST["first_name"];
        $first_names = array_column(bio_data(), 'firstName');
        displayHint($first_names, $q_first_name, "first_name");
    }

}
if(isset($_REQUEST["last_name"])) {
    if(strlen($_REQUEST["last_name"]) != null){
        $q_last_name = $_REQUEST["last_name"];
        $last_names = array_column(bio_data(), 'lastName');
        displayHint($last_names, $q_last_name, "last_name");
    }
}
function displayHint($array_key, $query_str, $for) {
    $hint = "";
    if ($query_str !== "") {
        $query_str = strtolower($query_str);
        $len = strlen($query_str);
        foreach ($array_key as $name) {
            // completes the entered keyword
            if (stristr($query_str, substr($name, 0, $len))) {
                if ($hint === "") {
                    $hint = $name;
                } else {
                    $hint .= ", $name";
                }
            }
        }
    }
    if($for == "first_name") {
        $f = "no player with this first name";
    } else {
        $f = "no player with this last name";
    }
    // Output "no suggestion" if no hint was found or output correct values
    echo $hint === "" ? $f : $hint;
}
function bio_data() {
    $data = file_get_contents('../data/bio.json');
    $json_data = json_decode($data, true);
    return $json_data;
}
