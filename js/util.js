function CommonUtil () {
    this.yearNow = new Date().getFullYear()
    this.$warning = $('#warning-container')
    this.$loading = $('#loading')
    this.pageExecute = {
        fileContents: 'null'
    }
    this.alertMessage = function (alertType, yourMessage) {
        return `<div class="alert alert-${alertType}" role="alert">${yourMessage}</div>`
    }
    this.isEmpty = function (str) {
        return str.trim().length === 0 && str.trim() === ''
    }
    this.firstLetterCapitalize = function (str) {
        return str.charAt(0).toUpperCase() + str.substr(1)
    }
    this.clearThis = function (elem) {
        $(elem).prev('input').val('')
    }
    this.showHintFirstName = function (input) {
        $.ajax({
            url: 'model/gethint.php',
            data: {first_name: input},
            dataType: 'text',
            success: function (data) {
                $('#txtHint_firstName').html(data)
            }
        })
    }
    this.showHintLastName = function (input) {
        $.ajax({
            url: 'model/gethint.php',
            data: {last_name: input},
            dataType: 'text',
            success: function (data) {
                $('#txtHint_lastName').html(data)
            }
        })
    }
    this.readTextFile = function (file) {
        let result = null
        let rawFile = new XMLHttpRequest() // variable for making a request
        rawFile.open('GET', file, false)
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status === 0) {
                    result = rawFile.responseText
                }
            }
        }
        rawFile.send(null)
        return result
    }
    this.givenHrefUseModule = function (fileName) {
        return (location.href.substring(location.href.lastIndexOf('/') + 1)) === fileName
    }
    this.statsHeader = {
        PLAYER_ID: 0,
        RANK: 1,
        PLAYER: 2,
        TEAM: 3,
        GP: 4,
        MIN: 5,
        FGM: 6,
        FGA: 7,
        FG_PCT: 8,
        FG3M: 9,
        FG3A: 10,
        FG3_PCT: 11,
        FTM: 12,
        FTA: 13,
        FT_PCT: 14,
        OREB: 15,
        DREB: 16,
        REB: 17,
        AST: 18,
        STL: 19,
        BLK: 20,
        TOV: 21,
        PF: 22,
        PTS: 23,
        EFF: 24,
        AST_TOV: 25,
        STL_TOV: 26
    }
    this.statsHeaderMeaning = [
        'PLAYER_ID,Player ID',
        'RANK,Rank',
        "PLAYER,Player's name",
        'TEAM,Team',
        'GP,Games played',
        'MIN,Minutes',
        'FGM,Field goals made',
        'FGA,Field goals attempted',
        'FG_PCT,Field goals percentage',
        'FG3M,Three-point field goals made',
        'FG3A,Three-point field goals attempted',
        'FG3_PCT,Three-point field goals percentage',
        'FTM,Free throws made',
        'FTA,Free throws attempted',
        'FT_PCT,Free throws percentage',
        'OREB,Offensive rebounds',
        'DREB,Defensive rebounds',
        'REB,Rebounds total',
        'AST,Total assists',
        'STL,Total steals',
        'BLK,Total blocks',
        'TOV,Turnovers',
        'PF,Personal fouls',
        'PTS,Total points',
        'EFF,Efficiency rating',
        'AST_TOV,Assist to turnover ratio',
        'STL_TOV,Steal to turnover ratio'
    ]
    this.teamJson = [
        {'teamId': 1610612737, 'abbreviation': 'ATL', 'teamName': 'Atlanta Hawks'},
        {'teamId': 1610612738, 'abbreviation': 'BOS', 'teamName': 'Boston Celtics'},
        {'teamId': 1610612751, 'abbreviation': 'BKN', 'teamName': 'Brooklyn Nets'},
        {'teamId': 1610612766, 'abbreviation': 'CHA', 'teamName': 'Charlotte Hornets'},
        {'teamId': 1610612741, 'abbreviation': 'CHI', 'teamName': 'Chicago Bulls'},
        {'teamId': 1610612739, 'abbreviation': 'CLE', 'teamName': 'Cleveland Cavaliers'},
        {'teamId': 1610612742, 'abbreviation': 'DAL', 'teamName': 'Dallas Mavericks'},
        {'teamId': 1610612743, 'abbreviation': 'DEN', 'teamName': 'Denver Nuggets'},
        {'teamId': 1610612765, 'abbreviation': 'DET', 'teamName': 'Detroit Pistons'},
        {'teamId': 1610612744, 'abbreviation': 'GSW', 'teamName': 'Golden State Warriors'},
        {'teamId': 1610612745, 'abbreviation': 'HOU', 'teamName': 'Houston Rockets'},
        {'teamId': 1610612754, 'abbreviation': 'IND', 'teamName': 'Indiana Pacers'},
        {'teamId': 1610612746, 'abbreviation': 'LAC', 'teamName': 'Los Angeles Clippers'},
        {'teamId': 1610612747, 'abbreviation': 'LAL', 'teamName': 'Los Angeles Lakers'},
        {'teamId': 1610612763, 'abbreviation': 'MEM', 'teamName': 'Memphis Grizzlies'},
        {'teamId': 1610612748, 'abbreviation': 'MIA', 'teamName': 'Miami Heat'},
        {'teamId': 1610612749, 'abbreviation': 'MIL', 'teamName': 'Milwaukee Bucks'},
        {'teamId': 1610612750, 'abbreviation': 'MIN', 'teamName': 'Minnesota Timberwolves'},
        {'teamId': 1610612740, 'abbreviation': 'NOP', 'teamName': 'New Orleans Pelicans'},
        {'teamId': 1610612752, 'abbreviation': 'NYK', 'teamName': 'New York Knicks'},
        {'teamId': 1610612760, 'abbreviation': 'OKC', 'teamName': 'Oklahoma City Thunder'},
        {'teamId': 1610612753, 'abbreviation': 'ORL', 'teamName': 'Orlando Magic'},
        {'teamId': 1610612755, 'abbreviation': 'PHI', 'teamName': 'Philadelphia 76ers'},
        {'teamId': 1610612756, 'abbreviation': 'PHX', 'teamName': 'Phoenix Suns'},
        {'teamId': 1610612757, 'abbreviation': 'POR', 'teamName': 'Portland Trail Blazers'},
        {'teamId': 1610612758, 'abbreviation': 'SAC', 'teamName': 'Sacramento Kings'},
        {'teamId': 1610612759, 'abbreviation': 'SAS', 'teamName': 'San Antonio Spurs'},
        {'teamId': 1610612761, 'abbreviation': 'TOR', 'teamName': 'Toronto Raptors'},
        {'teamId': 1610612762, 'abbreviation': 'UTA', 'teamName': 'Utah Jazz'},
        {'teamId': 1610612764, 'abbreviation': 'WAS', 'teamName': 'Washington Wizards'}
    ]
}
