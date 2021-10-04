// Dream WEB Tool Project
// sha1 encode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _sha1_encode(Str) {
    //var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var sha1Res = CryptoJS.SHA1(Str);
    var sha1str = sha1Res.toString()
    //var sha1str = CryptoJS.hmac.sha1.stringify(wordArray)
    return sha1str
}



function sha1_encode() {
    try {
        var inputstr = $("#sha1_input").val()
        var outputstr = _sha1_encode(inputstr)
        $("#sha1_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

