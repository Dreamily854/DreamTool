// Dream WEB Tool Project
// sha256 encode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _sha256_encode(Str) {
    //var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var sha256Res = CryptoJS.SHA256(Str);
    var sha256str = sha256Res.toString()
    //var sha256str = CryptoJS.hmac.sha256.stringify(wordArray)
    return sha256str
}



function sha256_encode() {
    try {
        var inputstr = $("#sha256_input").val()
        var outputstr = _sha256_encode(inputstr)
        $("#sha256_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

