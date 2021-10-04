// Dream WEB Tool Project
// hmacripemd160 encode

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _hmacripemd160_encode(Str,Key) {
    //var wordArray = CryptoJS.enc.Utf8.parse(Str)
    var hmacripemd160Res = CryptoJS.HmacRIPEMD160(Str,Key);
    var hmacripemd160str = hmacripemd160Res.toString()
    //var hmacripemd160str = CryptoJS.hmac.hmacripemd160.stringify(wordArray)
    return hmacripemd160str
}



function hmacripemd160_encode() {
    try {
        var inputstr = $("#hmacripemd160_input").val()
        var inputkey = $("#hmacripemd160Key").val()
        var outputstr = _hmacripemd160_encode(inputstr,inputkey)
        $("#hmacripemd160_output").val(outputstr)
        mdui.snackbar({
            message: '编码完成'
        });
    }
    catch {
        mdui.alert('编码错误！请检查。', '错误');
    }

}

