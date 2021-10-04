// Dream WEB Tool Project
// sha3 encode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _sha3_encode(Str) {
    //var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var sha3Res = CryptoJS.SHA3(Str);
    var sha3str = sha3Res.toString()
    //var sha3str = CryptoJS.hmac.sha3.stringify(wordArray)
    return sha3str
}



function sha3_encode() {
    try {
        var inputstr = $("#sha3_input").val()
        var outputstr = _sha3_encode(inputstr)
        $("#sha3_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

