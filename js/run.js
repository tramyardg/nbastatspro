var util = new CommonUtil();
var RunActions = (function () {
    var runBtn = {},
        runPassword = {},
        ajaxReq = {};
    return {
        init: function () {
            runBtn.btn = $("#scrap-player-data");
            runPassword = null;
            ajaxReq = null;
            this.bindRunActions();
        },
        bindRunActions: function () {
            runBtn.btn.click(function () {
                util.$loading.show();
                var ele = $(this);
                var $inputGroup = ele.parent().parent().parent().parent();
                runPassword = $inputGroup.children().find("#run-password").val();
                ajaxReq = $.ajax({
                    url: "../nbastatspro/model/update_stats.php?runCode=" + runPassword.toString(),
                    success: function (response) {
                        if (response.length > 1 && response.length < 40) {
                            util.$warning.empty();
                            util.$warning.append(util.alertMessage("success", "Done downloading data."));
                            console.log("done");
                        } else {
                            util.$warning.empty();
                            util.$warning.append(util.alertMessage("warning", "There must be an error."));
                            console.log("error");
                        }
                    }
                });
                ajaxReq.done(function () {
                    util.$loading.hide();
                });

            });
        }
    };
})();