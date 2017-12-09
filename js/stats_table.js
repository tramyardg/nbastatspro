let StatsTable = (function () {
    let table = null
    let fnShowTableData = null
    let fnAddColHeaderTooltip = null
    return {
        setUtil: function(aUtil) {
            StatsTable.util = aUtil
        },
        init: function () {
            table = $('#sortable-stats')
            fnShowTableData = null
            fnAddColHeaderTooltip = null
            this.bindStatsTableActions()
        },
        bindStatsTableActions: function () {
            let playerData = StatsTable.util.readTextFile('data/players_data.json')
            let jsonStr = JSON.parse(playerData)
            $.map(jsonStr, function (data) {
                data[StatsTable.util.statsHeader.FT_PCT] = (data[StatsTable.util.statsHeader.FT_PCT] * 100).toFixed(1)
                data[StatsTable.util.statsHeader.FG_PCT] = (data[StatsTable.util.statsHeader.FG_PCT] * 100).toFixed(1)
                data[StatsTable.util.statsHeader.FG3_PCT] = (data[StatsTable.util.statsHeader.FG3_PCT] * 100).toFixed(1)
            })
            $(table).DataTable({
                data: jsonStr,
                'pageLength': 15,
                'lengthChange': false,
                searching: false,
                "scrollX": true,
                'displayStart': 1,
                "columnDefs": [{
                    "targets": [0, 4, 5],
                    "visible": false
                }],
                'columns': [
                    {'title': 'PLAYER ID'},
                    {'title': 'RANK'},
                    {'title': 'PLAYER'},
                    {'title': 'TEAM'},
                    {'title': 'GP'},
                    {'title': 'MIN'},
                    {'title': 'FGM', 'visible': false},
                    {'title': 'FGA', 'visible': false},
                    {'title': 'FG_PCT'},
                    {'title': 'FG3M', 'visible': false},
                    {'title': 'FG3A', 'visible': false},
                    {'title': 'FG3_PCT'},
                    {'title': 'FTM', 'visible': false},
                    {'title': 'FTA', 'visible': false},
                    {'title': 'FT_PCT'},
                    {'title': 'OREB', 'visible': false},
                    {'title': 'DREB', 'visible': false},
                    {'title': 'REB'},
                    {'title': 'AST'},
                    {'title': 'STL'},
                    {'title': 'BLK'},
                    {'title': 'TOV'},
                    {'title': 'PF'},
                    {'title': 'PTS'},
                    {'title': 'EFF'},
                    {'title': 'AST_TOV', 'visible': false},
                    {'title': 'STL_TOV', 'visible': false}
                ]
            })
        }
    }
})()
