// Dream WEB Tool Project
// hmacsha512 encode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _hmacsha512_encode(Str,Key) {
    //var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var hmacsha512Res = CryptoJS.HmacSHA512(Str,Key);
    var hmacsha512str = hmacsha512Res.toString()
    //var hmacsha512str = CryptoJS.hmac.hmacsha512.stringify(wordArray)
    return hmacsha512str
}



function hmacsha512_encode() {
    try {
        var inputstr = $("#hmacsha512_input").val()
        var inputkey = $("#hmacsha512Key").val()
        var outputstr = _hmacsha512_encode(inputstr,inputkey)
        $("#hmacsha512_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

