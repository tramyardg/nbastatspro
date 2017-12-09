<?php
if(isset($_GET["runCode"])) {
    $runCode  = $_GET["runCode"];
    if($runCode == "leo") {
        $data = file_get_contents("http://stats.nba.com/stats/leagueLeaders?LeagueID=00&PerMode=Totals&Scope=S&Season=2017-18&SeasonType=Regular+Season&StatCategory=PTS");
        $jArr = json_decode($data, true);
        $rowSet = $jArr["resultSet"]["rowSet"];

        file_put_contents("../data/players_data.json", json_encode($rowSet));
        print "01100100 01101111 01101110 01100101 "; // this is the response -> means success
    }
} else {
    print '<h2>You do not have permission to access this module.</h2>'; // did not update means failed
}
