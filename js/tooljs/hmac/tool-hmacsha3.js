// Dream WEB Tool Project
// sha3 encode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _hmacsha3_encode(Str,Key) {
    //var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var sha3Res = CryptoJS.HmacSHA3(Str,Key);
    var sha3str = sha3Res.toString()
    //var sha3str = CryptoJS.hmac.sha3.stringify(wordArray)
    return sha3str
}



function hmacsha3_encode() {
    try {
        var inputstr = $("#hmacsha3_input").val()
        var inputkey = $("#hmacsha3Key").val()
        var outputstr = _hmacsha3_encode(inputstr,inputkey)
        $("#hmacsha3_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

