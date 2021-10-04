// Dream WEB Tool Project
// sha512 encode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _sha512_encode(Str) {
    //var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var sha512Res = CryptoJS.SHA512(Str);
    var sha512str = sha512Res.toString()
    //var sha512str = CryptoJS.hmac.sha512.stringify(wordArray)
    return sha512str
}



function sha512_encode() {
    try {
        var inputstr = $("#sha512_input").val()
        var outputstr = _sha512_encode(inputstr)
        $("#sha512_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

