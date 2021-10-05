// Dream WEB Tool Project
// rabbit encrypt&decrypt

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _rabbit_encrypt(Str, Key,) {

    let srcs = CryptoJS.enc.Utf8.parse(Str);
    var result = CryptoJS.Rabbit.encrypt(
        srcs,Key
        //CryptoJS.enc.Utf8.parse(Key)
    )
    return result.toString()
}

function _rabbit_decrypt(Str, Key) {


    var decrypted = CryptoJS.Rabbit.decrypt(
        Str,Key
    )
    //console.log(decrypted)
    var decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
    return decryptedStr

    //var parsedWordArray = CryptoJS.enc.rabbit.parse(rabbitstr)
    //var parsedstr = parsedWordArray.toString(CryptoJS.enc.Utf8)
    //return parsedstr

}

function rabbit_encrypt() {
    try {
        var inputstr = $("#rabbit_input").val()
        var key = $("#rabbitKey").val()
        var outputstr = _rabbit_encrypt(inputstr, key)
        $("#rabbit_output").val(outputstr)
        mdui.snackbar({
            message: '加密完成'
        });
    }
    catch {
        mdui.alert('加密错误！请检查。', '错误');
    }

}

function rabbit_decrypt() {
    try {
        var inputstr = $("#rabbit_input").val()
        var key = $("#rabbitKey").val()
        var outputstr = _rabbit_decrypt(inputstr, key)

        //var outputstr = _rabbit_decrypt(inputstr)
        $("#rabbit_output").val(outputstr)
        mdui.snackbar({
            message: '解密完成'
        });
    }
    catch {
        mdui.alert('解密错误！请检查。', '错误');
    }

}

