// Dream WEB Tool Project
// sha224 encode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _sha224_encode(Str) {
    //var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var sha224Res = CryptoJS.SHA224(Str);
    var sha224str = sha224Res.toString()
    //var sha224str = CryptoJS.hmac.sha224.stringify(wordArray)
    return sha224str
}



function sha224_encode() {
    try {
        var inputstr = $("#sha224_input").val()
        var outputstr = _sha224_encode(inputstr)
        $("#sha224_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

