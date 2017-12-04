var util = new CommonUtil();
var SearchActions = (function () {
    var fnPlayerGeneralInfo = {},
        fnPlayerStats = {},
        statsCard = {},
        statsCardBox = {},
        playerCard = {},
        playerCardBox = {};
    var firstName = {},
        lastName = {},
        playerImg = {};
    var searchBtn = {};
    return {
        init: function () {
            searchBtn = $("#search-player-btn");
            firstName = $("#input-player-first-name");
            lastName = $("#input-player-last-name");
            playerCardBox = $("#player-card-container");
            statsCardBox = $("#stats-card-box");
            playerImg = $("#player-img");
            fnPlayerGeneralInfo = null;
            fnPlayerStats = null;
            statsCard = null;
            playerCard = null;
            this.bindSearchActions();
        },
        bindSearchActions: function () {
            $(searchBtn).click(function () {
                var errMsg = "Please provide the first name and the last name of the player you want to search.";
                var f_name = $(firstName).val(),
                    l_name = $(lastName).val();
                if (util.isEmpty(f_name) || util.isEmpty(l_name)) {
                    util.$warning.empty();
                    util.$warning.append(util.alertMessage("warning", errMsg));
                } else if (util.isEmpty(f_name) && util.isEmpty(l_name)) {
                    util.$warning.empty();
                    util.$warning.append(util.alertMessage("warning", errMsg));
                } else {
                    fnPlayerGeneralInfo(
                        util.firstLetterCapitalize($(firstName).val().trim()),
                        util.firstLetterCapitalize($(lastName).val().trim())
                    );
                    fnPlayerStats(
                        util.firstLetterCapitalize($(firstName).val().trim()),
                        util.firstLetterCapitalize($(lastName).val().trim())
                    );
                }
            });
            fnPlayerGeneralInfo = function (first_name, last_name) {
                var jqxhr = $.ajax({
                    url: "../nbastatspro/data/bio.json",
                    dataType: 'json',
                    success: function (data) {
                        var full_name = first_name + " " + last_name;
                        $.map(data, function (elem) {
                            if (elem.fullName === full_name) {
                                util.$warning.empty();
                                $(playerCardBox).empty();
                                $(playerCardBox).append(
                                    playerCard(
                                        elem.playerId, elem.firstName, elem.lastName,
                                        elem.team, elem.position, elem.uniformNumber,
                                        elem.height, elem.weight, elem.rookieYear
                                    )
                                );
                                $(playerCardBox).show("slow");
                            } else {

                            }
                        });
                    }
                });
                jqxhr.done(function () {
                    alert('Done loading!');
                });
                jqxhr.fail(function () {
                    util.$warning.empty();
                    util.$warning.append(util.alertMessage("warning", "There must be an error. Please try again later."));
                });
            };
            fnPlayerStats = function (first_name, last_name) {
                var jqxhr = $.ajax({
                    url: "../nbastatspro/data/players_data.json",
                    dataType: 'json',
                    success: function (data) {
                        var full_name = first_name + " " + last_name;
                        for (var i = 0; i < data.length; i++) {
                            if (data[i][util.statsHeader.PLAYER] === full_name) {
                                // parameters for stats card
                                var ppg, asg, rbg, fg_pct, team, fg3m, ft_pct = null;
                                ppg = (data[i][util.statsHeader.PTS] / data[i][util.statsHeader.GP]).toFixed(1);
                                asg = (data[i][util.statsHeader.AST] / data[i][util.statsHeader.GP]).toFixed(1);
                                rbg = (data[i][util.statsHeader.REB] / data[i][util.statsHeader.GP]).toFixed(1);
                                fg_pct = (data[i][util.statsHeader.FG_PCT] * 100).toFixed(2);
                                fg3m = data[i][util.statsHeader.FG3M];
                                ft_pct = (data[i][util.statsHeader.FT_PCT]) * 100;
                                team = data[i][util.statsHeader.TEAM];
                                $(statsCardBox).empty();
                                $(statsCardBox).append(
                                    statsCard(ppg, rbg, asg, fg_pct, fg3m, ft_pct, team)
                                );
                                $(statsCardBox).show("slow");
                                break;
                            }
                        }
                    }
                });
                jqxhr.done(function () {
                    // util.$loading_img.hide();
                });
                jqxhr.fail(function () {
                    util.$warning.empty();
                    util.$warning.append(util.alertMessage("warning", "There must be an error. Please try again later."));
                });
            };
            statsCard = function (ppg, rpg, apg, fg_pct, fg3m, ft_pct, team) {
                return '   <div class="col-md-8">  ' +
                    '     <div class="panel panel-default panel-font">  ' +
                    '   	 <div class="panel-heading">  ' +
                    '   		<h3 class="panel-title">2016 Season Stats</h3>  ' +
                    '   	 </div>  ' +
                    '   	 <div class="panel-body team-color ' + team + '">  ' +
                    '   		<div class="col-md-12 pull-left margin-bottom-1em">  ' +
                    '   		   <div class="col-md-6 text-center">  ' +
                    '   			  <p class="margin-less">Points per game</p>  ' +
                    '   			  <span>' + ppg + '</span>  ' +
                    '   		   </div>  ' +
                    '   		   <div class="col-md-6 text-center">  ' +
                    '   			  <p class="margin-less">Rebounds per game</p>  ' +
                    '   			  <span>' + rpg + '</span> ' +
                    '   		   </div>  ' +
                    '   		</div>  ' +
                    '   		<div class="col-md-12 pull-right margin-bottom-1em">  ' +
                    '   		   <div class="col-md-6 text-center">  ' +
                    '   			  <p class="margin-less">Assists per game</p>  ' +
                    '   			  <span>' + apg + '</span>  ' +
                    '   		   </div>  ' +
                    '   		   <div class="col-md-6 text-center">  ' +
                    '   			  <p class="margin-less">Field goal %</p>  ' +
                    '   			  <span>' + fg_pct + '</span>  ' +
                    '   		   </div>  ' +
                    '   		</div>  ' +
                    '           <div class="col-md-12 pull-left margin-bottom-1em">  ' +
                    '               <div class="col-md-6 text-center">  ' +
                    '                   <p class="margin-less">3 Points made</p>  ' +
                    '                   <span>' + fg3m + '</span>' +
                    '               </div>  ' +
                    '               <div class="col-md-6 text-center">  ' +
                    '                   <p class="margin-less">Free throw %</p>  ' +
                    '                   <span>' + ft_pct + '</span>' +
                    '               </div>  ' +
                    '           </div>  ' +
                    '   	 </div>  ' +
                    '     </div>  ' +
                    '  </div>  ';
            };
            playerCard = function (playerId, fName, lName, team, pos, uniformNumber, ht, wt, rookieYear) {
                return '      <div class="col-md-4">  ' +
                    '         <div class="thumbnail">  ' +
                    '            <img src="http://stats.nba.com/media/players/230x185/' + playerId + '.png" alt="' + fName.concat(" " + lName) + '">  ' +
                    '            <div class="caption">  ' +
                    '               <h3 class="text-center"><small>#' + uniformNumber + '</small> ' + fName + ' <strong>' + lName + '</strong></h3>  ' +
                    '               <h4 class="text-center">' + ht + ' | ' + wt + ' lbs </h4> ' +
                    '               <h4 class="text-center">Rookie year: ' + rookieYear + '</h4>  ' +
                    '               <h4 class="text-center">' + pos + ' | ' + team + '</h4>  ' +
                    '            </div>  ' +
                    '         </div>  ';
            }
        }
    };
})();