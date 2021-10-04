// Dream WEB Tool Project
// ripemd160 encode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _ripemd160_encode(Str) {
    //var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var ripemd160Res = CryptoJS.RIPEMD160(Str);
    var ripemd160str = ripemd160Res.toString()
    //var ripemd160str = CryptoJS.hmac.ripemd160.stringify(wordArray)
    return ripemd160str
}



function ripemd160_encode() {
    try {
        var inputstr = $("#ripemd160_input").val()
        var outputstr = _ripemd160_encode(inputstr)
        $("#ripemd160_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

