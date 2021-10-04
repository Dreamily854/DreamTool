// Dream WEB Tool Project
// hmacsha224 encode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _hmacsha224_encode(Str,Key) {
    //var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var hmacsha224Res = CryptoJS.HmacSHA224(Str,Key);
    var hmacsha224str = hmacsha224Res.toString()
    //var hmacsha224str = CryptoJS.hmac.hmacsha224.stringify(wordArray)
    return hmacsha224str
}



function hmacsha224_encode() {
    try {
        var inputstr = $("#hmacsha224_input").val()
        var inputkey = $("#hmacsha224Key").val()
        var outputstr = _hmacsha224_encode(inputstr,inputkey)
        $("#hmacsha224_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

