// Dream WEB Tool Project
// hex encode&decode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _hex_encode(Str) {
    var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var hexstr = CryptoJS.enc.Hex.stringify(wordArray)
    return hexstr
}

function _hex_decode(hexstr) {
    var parsedWordArray = CryptoJS.enc.Hex.parse(hexstr)
    var parsedstr = parsedWordArray.toString(CryptoJS.enc.Utf8)
    return parsedstr

}

function hex_encode() {
    // try {
        var inputstr = $("#hex_input").val()
        var outputstr = _hex_encode(inputstr)
        $("#hex_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    // }
    // catch {
    //     mdui.alert('编码错误！请检查。', '错误');
    // }

}

function hex_decode() {
    try {
        var inputstr = $("#hex_input").val()
        var outputstr = _hex_decode(inputstr)
        $("#hex_output").val(outputstr)
        mdui.snackbar({
            message: '解码完成'
        });
    }
    catch {
        mdui.alert('解码错误！请检查。', '错误');
    }

}

