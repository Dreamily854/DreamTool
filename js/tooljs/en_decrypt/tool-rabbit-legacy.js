// Dream WEB Tool Project
// rabbit-legacy encrypt&decrypt

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _rabbit_legacy_encrypt(Str, Key,) {

    let srcs = CryptoJS.enc.Utf8.parse(Str);
    var result = CryptoJS.RabbitLegacy.encrypt(
        srcs,Key
        //CryptoJS.enc.Utf8.parse(Key)
    )
    return result.toString()
}

function _rabbit_legacy_decrypt(Str, Key) {


    var decrypted = CryptoJS.RabbitLegacy.decrypt(
        Str,Key
    )
    //console.log(decrypted)
    var decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
    return decryptedStr

    //var parsedWordArray = CryptoJS.enc.rabbit-legacy.parse(rabbit-legacystr)
    //var parsedstr = parsedWordArray.toString(CryptoJS.enc.Utf8)
    //return parsedstr

}

function rabbit_legacy_encrypt() {
    try {
        var inputstr = $("#rabbit-legacy_input").val()
        var key = $("#rabbit-legacyKey").val()
        var outputstr = _rabbit_legacy_encrypt(inputstr, key)
        $("#rabbit-legacy_output").val(outputstr)
        mdui.snackbar({
            message: '加密完成'
        });
    }
    catch {
        mdui.alert('加密错误！请检查。', '错误');
    }

}

function rabbit_legacy_decrypt() {
    try {
        var inputstr = $("#rabbit-legacy_input").val()
        var key = $("#rabbit-legacyKey").val()
        var outputstr = _rabbit_legacy_decrypt(inputstr, key)

        //var outputstr = _rabbit-legacy_decrypt(inputstr)
        $("#rabbit-legacy_output").val(outputstr)
        mdui.snackbar({
            message: '解密完成'
        });
    }
    catch {
        mdui.alert('解密错误！请检查。', '错误');
    }

}

