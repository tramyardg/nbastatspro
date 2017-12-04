var util = new CommonUtil();
$(document).ready(function () {
    if (util.givenHrefUseModule("index.php")) {
        SearchActions.init();
        StatsTable.init();
    }
    if (util.givenHrefUseModule("run.php")) {
        RunActions.init();
    }
    var columnHeader = $("#sortable-stats th");
    for (var i = 0; i < columnHeader.length; i++) {
        $(columnHeader[i]).attr("data-toggle", $(columnHeader[i]).text());
        for (var j = 0; j < util.statsHeaderMeaning.length; j++) {
            var header = util.statsHeaderMeaning[j].substr(0, util.statsHeaderMeaning[j].indexOf(","));
            var headerMeaning = util.statsHeaderMeaning[j].substr(util.statsHeaderMeaning[j].indexOf(",") + 1);
            if ($(columnHeader[i]).text() === header) {
                $(columnHeader[i]).attr("title", headerMeaning);
            }
        }
    }
});
