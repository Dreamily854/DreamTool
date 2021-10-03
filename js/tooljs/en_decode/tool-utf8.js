// Dream WEB Tool Project
// UTF8 encode&decode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/


//参考 https://www.matools.com/code-convert-utf8


function _utf8_encode(Str) {

    $("#utf8_output").val(unescape(Str.replace(/&#x/g, '%u').replace(/;/g, '')));


    // var wordArray = CryptoJS.enc.Utf8.parse(Str)
    // var utf8str = CryptoJS.enc.Utf8.stringify(wordArray)
    //console.log(wordArray)
    // return utf8str
}

function _utf8_decode(utf8str) {
    // var utf8str = $("#utf8strource").val();
    $("#utf8_output").val(utf8str.replace(/[^\u0000-\u00FF]/g, function($0) {
        return escape($0).replace(/(%u)(\w{4})/gi, "&#x$2;")
    }));
    // var parsedWordArray = CryptoJS.enc.utf8.parse(utf8str)
    // var parsedstr = parsedWordArray.toString(CryptoJS.enc.Utf8)
    // return parsedstr

}

function utf8_encode() {
    //try {
        var inputstr = $("#utf8_input").val()
        var outputstr = _utf8_encode(inputstr)
        // var outputstr = encodeUtf8(inputstr)
        // $("#utf8_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    // }
    // catch {
    //     mdui.alert('编码错误！请检查。', '错误');
    // }

}

function utf8_decode() {
    // try {
        var inputstr = $("#utf8_input").val()
        var outputstr = _utf8_decode(inputstr)
        // var outputstr = decodeUtf8(inputstr)
        // $("#utf8_output").val(outputstr)
        mdui.snackbar({
            message: '解码完成'
        });
    // }
    // catch {
    //     mdui.alert('解码错误！请检查。', '错误');
    // }

}

