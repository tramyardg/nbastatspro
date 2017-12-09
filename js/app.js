$(document).ready(function () {
    let util = new CommonUtil()
    if (util.givenHrefUseModule("index.php")) {
        SearchActions.init();
    }
    if (util.givenHrefUseModule("regular-season.php")) {
        StatsTable.setUtil(new CommonUtil());
        StatsTable.init();
    }
    if (util.givenHrefUseModule("run.php")) {
        RunActions.init();
    }
    let columnHeader = $("#sortable-stats th");
    for (let i = 0; i < columnHeader.length; i++) {
        $(columnHeader[i]).attr("data-toggle", $(columnHeader[i]).text());
        for (let j = 0; j < util.statsHeaderMeaning.length; j++) {
            let header = util.statsHeaderMeaning[j].substr(0, util.statsHeaderMeaning[j].indexOf(","));
            let headerMeaning = util.statsHeaderMeaning[j].substr(util.statsHeaderMeaning[j].indexOf(",") + 1);
            if ($(columnHeader[i]).text() === header) {
                $(columnHeader[i]).attr("title", headerMeaning);
            }
        }
    }
});
