// Dream WEB Tool Project
// Base64 encode&decode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _base64_encode(Str) {
    var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var base64str = CryptoJS.enc.Base64.stringify(wordArray)
    return base64str
}

function _base64_decode(base64str) {
    var parsedWordArray = CryptoJS.enc.Base64.parse(base64str)
    var parsedstr = parsedWordArray.toString(CryptoJS.enc.Utf8)
    return parsedstr

}

function base64_encode() {
    try {
        var inputstr = $("#base64_input").val()
        var outputstr = _base64_encode(inputstr)
        $("#base64_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

function base64_decode() {
    try {
        var inputstr = $("#base64_input").val()
        var outputstr = _base64_decode(inputstr)
        $("#base64_output").val(outputstr)
        mdui.snackbar({
            message: '解码完成'
        });
    }
    catch {
        mdui.alert('解码错误！请检查。', '错误');
    }

}

