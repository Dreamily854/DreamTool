// Dream WEB Tool Project
// rc4 encrypt&decrypt

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _rc4_encrypt(Str, EncodeMode, Key, iv) {
    
    let srcs = CryptoJS.enc.Utf8.parse(Str);
    var result = CryptoJS.RC4.encrypt(
        srcs,
        CryptoJS.enc.Utf8.parse(Key),
        {
            iv: CryptoJS.enc.Utf8.parse(iv),
            
        })
    var hexStr = result.ciphertext.toString().toUpperCase();

    //console.log('hexStr->' + hexStr);
    var oldHexStr = CryptoJS.enc.Hex.parse(hexStr);
    // 将密文转为Base64的字符串
    var base64Str = CryptoJS.enc.Base64.stringify(oldHexStr);
    if (EncodeMode == 1) {
        //var parsedWordArray = CryptoJS.enc.Hex.parse(result)
        var parsedstr = hexStr
    } else if (EncodeMode == 2) {
        //var parsedWordArray = CryptoJS.enc.Base64.parse(result)
        var parsedstr = base64Str
    }

    return parsedstr
}

function _rc4_decrypt(Str, EncodeMode, Key, iv) {
    
    if (EncodeMode == 1) {
        //var parsedWordArray = CryptoJS.enc.Hex.parse(result)
        //var parsedstr = hexStr
        var srcs_0 = CryptoJS.enc.Hex.parse(Str);
        var srcs = CryptoJS.enc.Base64.stringify(srcs_0)
    } else if (EncodeMode == 2) {
        //var parsedWordArray = CryptoJS.enc.Base64.parse(result)
        //var parsedstr = base64Str
        //var srcs = CryptoJS.enc.Base64.parse(Str);
        var srcs = Str

    }
    console.log(srcs)
    var decrypted = CryptoJS.RC4.decrypt(srcs, CryptoJS.enc.Utf8.parse(Key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
    })
    console.log(decrypted)
    var decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
    return decryptedStr

    //var parsedWordArray = CryptoJS.enc.rc4.parse(rc4str)
    //var parsedstr = parsedWordArray.toString(CryptoJS.enc.Utf8)
    //return parsedstr

}

function rc4_encrypt() {
    try {
        var inputstr = $("#rc4_input").val()
        var key = $("#rc4Key").val()
        var iv = $("#rc4IV").val()

        var EncodeMode = $("#rc4EncodeMode").val()

        //var bit = $("#rc4Bit").val()
        var outputstr = _rc4_encrypt(inputstr, EncodeMode, key, iv)
        $("#rc4_output").val(outputstr)
        mdui.snackbar({
            message: '加密完成'
        });
    }
    catch {
        mdui.alert('加密错误！请检查。', '错误');
    }

}

function rc4_decrypt() {
    try {
        var inputstr = $("#rc4_input").val()
        var key = $("#rc4Key").val()
        var iv = $("#rc4IV").val()
        //var Mode = $("#rc4Mode").val()
        var EncodeMode = $("#rc4EncodeMode").val()
        //var Padding = $("#rc4Padding").val()
        //var bit = $("#rc4Bit").val()
        var outputstr = _rc4_decrypt(inputstr, EncodeMode, key, iv)

        //var outputstr = _rc4_decrypt(inputstr)
        $("#rc4_output").val(outputstr)
        mdui.snackbar({
            message: '解密完成'
        });
    }
    catch {
        mdui.alert('解密错误！请检查。', '错误');
    }

}

