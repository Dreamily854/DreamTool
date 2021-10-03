// Dream WEB Tool Project
// latin1 encode&decode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _latin1_encode(Str) {
    var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var latin1str = CryptoJS.enc.Latin1.stringify(wordArray)
    return latin1str
}

function _latin1_decode(latin1str) {
    var parsedWordArray = CryptoJS.enc.Latin1.parse(latin1str)
    var parsedstr = parsedWordArray.toString(CryptoJS.enc.Utf8)
    return parsedstr

}

function latin1_encode() {
    //try {
        var inputstr = $("#latin1_input").val()
        var outputstr = _latin1_encode(inputstr)
        $("#latin1_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    // }
    // catch {
    //     mdui.alert('编码错误！请检查。', '错误');
    // }

}

function latin1_decode() {
    try {
        var inputstr = $("#latin1_input").val()
        var outputstr = _latin1_decode(inputstr)
        $("#latin1_output").val(outputstr)
        mdui.snackbar({
            message: '解码完成'
        });
    }
    catch {
        mdui.alert('解码错误！请检查。', '错误');
    }

}

