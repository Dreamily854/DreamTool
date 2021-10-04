// Dream WEB Tool Project
// hmacmd5 encode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _hmacmd5_encode(Str,Key) {
    var hmacmd5Res = CryptoJS.HmacMD5(Str,Key);
    var hmacmd5str = hmacmd5Res.toString()
    //var hmacmd5str = CryptoJS.hmac.hmacmd5.stringify(wordArray)
    return hmacmd5str
}



function hmacmd5_encode() {
    //try {
        var inputstr = $("#hmacmd5_input").val()
        var inputkey = $("#hmacmd5Key").val()
        var outputstr = _hmacmd5_encode(inputstr,inputkey)
        $("#hmacmd5_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    // }
    // catch {
    //     mdui.alert('编码错误！请检查。', '错误');
    // }

}

