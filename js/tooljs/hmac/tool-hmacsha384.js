// Dream WEB Tool Project
// hmacsha384 encode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _hmacsha384_encode(Str,Key) {
    //var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var hmacsha384Res = CryptoJS.HmacSHA384(Str,Key);
    var hmacsha384str = hmacsha384Res.toString()
    //var hmacsha384str = CryptoJS.hmac.hmacsha384.stringify(wordArray)
    return hmacsha384str
}



function hmacsha384_encode() {
    try {
        var inputstr = $("#hmacsha384_input").val()
        var inputkey = $("#hmacsha384Key").val()
        var outputstr = _hmacsha384_encode(inputstr,inputkey)
        $("#hmacsha384_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

