// Dream WEB Tool Project
// sha1 encode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _hmacsha1_encode(Str,Key) {
    //var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var sha1Res = CryptoJS.HmacSHA1(Str,Key);
    var sha1str = sha1Res.toString()
    //var sha1str = CryptoJS.hmac.sha1.stringify(wordArray)
    return sha1str
}



function hmacsha1_encode() {
    try {
        var inputstr = $("#hmacsha1_input").val()
        var inputkey = $("#hmacsha1Key").val()
        var outputstr = _hmacsha1_encode(inputstr,inputkey)
        $("#hmacsha1_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

