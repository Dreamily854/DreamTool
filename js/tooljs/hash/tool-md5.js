// Dream WEB Tool Project
// md5 encode&decode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _md5_encode(Str) {
    //var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var md5Res = CryptoJS.MD5(Str);
    var md5str = md5Res.toString()
    //var md5str = CryptoJS.hmac.md5.stringify(wordArray)
    return md5str
}



function md5_encode() {
    try {
        var inputstr = $("#md5_input").val()
        var outputstr = _md5_encode(inputstr)
        $("#md5_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

