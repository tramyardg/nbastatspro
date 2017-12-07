let RunActions = (function () {
    let runBtn = null
    let runPassword = null
    let ajaxReq = null
    return {
        init: function () {
            runBtn = $('#scrap-player-data')
            runPassword = null
            ajaxReq = null
            this.bindRunActions()
        },
        bindRunActions: function () {
            let util = new CommonUtil()
            runBtn.click(function () {
                util.$loading.show()
                let ele = $(this)
                let $inputGroup = ele.parent().parent().parent().parent()
                runPassword = $inputGroup.children().find('#run-password').val()
                ajaxReq = $.ajax({
                    url: 'model/update_stats.php?runCode=' + runPassword.toString(),
                    success: function (response) {
                        if (response.length > 1 && response.length < 40) {
                            util.$warning.empty()
                            util.$warning.append(util.alertMessage('success', 'Done downloading data.'))
                            console.log('done')
                        } else {
                            util.$warning.empty()
                            util.$warning.append(util.alertMessage('warning', 'There must be an error.'))
                            console.log('error')
                        }
                    }
                })
                ajaxReq.done(function () {
                    util.$loading.hide()
                })
            })
        }
    }
})()
