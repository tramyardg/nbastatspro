var util = new CommonUtil();
var StatsTable = (function () {
    var table = {};
    var fnShowTableData = {};
    var fnAddColHeaderTooltip = {};
    return {
        init: function () {
            table = $("#sortable-stats");
            fnShowTableData = null;
            fnAddColHeaderTooltip = null;
            this.bindStatsTableActions();
        },
        bindStatsTableActions: function () {
            var playerData = util.readTextFile("../nbastatspro/data/players_data.json");
            var jsonStr = JSON.parse(playerData);
            $.map(jsonStr, function (data) {
                data[util.statsHeader.FT_PCT] = (data[util.statsHeader.FT_PCT] * 100).toFixed(1);
                data[util.statsHeader.FG_PCT] = (data[util.statsHeader.FG_PCT] * 100).toFixed(1);
                data[util.statsHeader.FG3_PCT] = (data[util.statsHeader.FG3_PCT] * 100).toFixed(1);
            });
            $(table).DataTable({
                data: jsonStr,
                "pageLength": 5,
                "lengthChange": false,
                searching: false,
                "displayStart": 1,
                "columns": [
                    {"title": "PLAYER ID"},
                    {"title": "RANK"},
                    {"title": "PLAYER"},
                    {"title": "TEAM"},
                    {"title": "GP"},
                    {"title": "MIN"},
                    {"title": "FGM", "visible": false},
                    {"title": "FGA", "visible": false},
                    {"title": "FG_PCT"},
                    {"title": "FG3M", "visible": false},
                    {"title": "FG3A", "visible": false},
                    {"title": "FG3_PCT"},
                    {"title": "FTM", "visible": false},
                    {"title": "FTA", "visible": false},
                    {"title": "FT_PCT"},
                    {"title": "OREB", "visible": false},
                    {"title": "DREB", "visible": false},
                    {"title": "REB"},
                    {"title": "AST"},
                    {"title": "STL"},
                    {"title": "BLK"},
                    {"title": "TOV"},
                    {"title": "PF"},
                    {"title": "PTS"},
                    {"title": "EFF"},
                    {"title": "AST_TOV", "visible": false},
                    {"title": "STL_TOV", "visible": false}
                ]
            });
        }
    };
})();