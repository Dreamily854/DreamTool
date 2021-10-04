// Dream WEB Tool Project
// hmacsha256 encode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _hmacsha256_encode(Str,Key) {
    //var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var hmacsha256Res = CryptoJS.HmacSHA256(Str,Key);
    var hmacsha256str = hmacsha256Res.toString()
    //var hmacsha256str = CryptoJS.hmac.hmacsha256.stringify(wordArray)
    return hmacsha256str
}



function hmacsha256_encode() {
    try {
        var inputstr = $("#hmacsha256_input").val()
        var inputkey = $("#hmacsha256Key").val()
        var outputstr = _hmacsha256_encode(inputstr,inputkey)
        $("#hmacsha256_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

