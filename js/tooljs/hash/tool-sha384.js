// Dream WEB Tool Project
// sha384 encode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _sha384_encode(Str) {
    //var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var sha384Res = CryptoJS.SHA384(Str);
    var sha384str = sha384Res.toString()
    //var sha384str = CryptoJS.hmac.sha384.stringify(wordArray)
    return sha384str
}



function sha384_encode() {
    try {
        var inputstr = $("#sha384_input").val()
        var outputstr = _sha384_encode(inputstr)
        $("#sha384_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

