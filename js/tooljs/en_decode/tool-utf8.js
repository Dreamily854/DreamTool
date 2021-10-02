// Dream WEB Tool Project
// UTF8 encode&decode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _utf8_encode(Str) {
    var wordArray = CryptoJS.enc.Utf8.parse(Str)
    //var utf8str = CryptoJS.enc.utf8.stringify(wordArray)
    return wordArray
}

function _utf8_decode(utf8str) {
    var parsedWordArray = CryptoJS.enc.utf8.parse(utf8str)
    var parsedstr = parsedWordArray.toString(CryptoJS.enc.Utf8)
    return parsedstr

}

function utf8_encode() {
    try {
        var inputstr = $("#utf8_input").val()
        var outputstr = _utf8_encode(inputstr)
        $("#utf8_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

function utf8_decode() {
    try {
        var inputstr = $("#utf8_input").val()
        var outputstr = _utf8_decode(inputstr)
        $("#utf8_output").val(outputstr)
        mdui.snackbar({
            message: '解码完成'
        });
    }
    catch {
        mdui.alert('解码错误！请检查。', '错误');
    }

}

