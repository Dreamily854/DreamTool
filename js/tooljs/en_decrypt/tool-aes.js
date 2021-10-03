// Dream WEB Tool Project
// aes encrypt&decrypt

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _aes_encrypt(Str, Mode, Padding, EncodeMode, Key, iv) {
    var aesMode = {
        1: CryptoJS.mode.ECB,
        2: CryptoJS.mode.CBC,
        3: CryptoJS.mode.CTR,
        4: CryptoJS.mode.CFB,
        5: CryptoJS.mode.OFB
    }
    var aesPadding = {
        1: CryptoJS.pad.Iso10126,
        2: CryptoJS.pad.Pkcs7,
        3: CryptoJS.pad.NoPadding,
        4: CryptoJS.pad.AnsiX923,
        5: CryptoJS.pad.ZeroPadding,
        6: CryptoJS.pad.Iso97971
    }
    let srcs = CryptoJS.enc.Utf8.parse(Str);
    var result = CryptoJS.AES.encrypt(
        srcs,
        CryptoJS.enc.Utf8.parse(Key),
        {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: aesMode[Mode],
            padding: aesPadding[Padding]
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

function _aes_decrypt(Str, Mode, Padding, EncodeMode, Key, iv) {
    var aesMode = {
        1: CryptoJS.mode.ECB,
        2: CryptoJS.mode.CBC,
        3: CryptoJS.mode.CTR,
        4: CryptoJS.mode.CFB,
        5: CryptoJS.mode.OFB
    }
    var aesPadding = {
        1: CryptoJS.pad.Iso10126,
        2: CryptoJS.pad.Pkcs7,
        3: CryptoJS.pad.NoPadding,
        4: CryptoJS.pad.AnsiX923,
        5: CryptoJS.pad.ZeroPadding,
        6: CryptoJS.pad.Iso97971
    }
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
    var decrypted = CryptoJS.AES.decrypt(srcs, CryptoJS.enc.Utf8.parse(Key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: aesMode[Mode],
        padding: aesPadding[Padding]
    })
    console.log(decrypted)
    var decryptedStr = decrypted.toString(CryptoJS.enc.Utf8); 
    return decryptedStr

    //var parsedWordArray = CryptoJS.enc.aes.parse(aesstr)
    //var parsedstr = parsedWordArray.toString(CryptoJS.enc.Utf8)
    //return parsedstr

}

function aes_encrypt() {
    try {
        var inputstr = $("#aes_input").val()
        var key = $("#aesKey").val()
        var iv = $("#aesIV").val()
        var Mode = $("#aesMode").val()
        var EncodeMode = $("#aesEncodeMode").val()
        var Padding = $("#aesPadding").val()
        //var bit = $("#aesBit").val()
        var outputstr = _aes_encrypt(inputstr, Mode, Padding, EncodeMode, key, iv)
        $("#aes_output").val(outputstr)
        mdui.snackbar({
            message: '加密完成'
        });
    }
    catch {
        mdui.alert('加密错误！请检查。', '错误');
    }

}

function aes_decrypt() {
    try {
        var inputstr = $("#aes_input").val()
        var key = $("#aesKey").val()
        var iv = $("#aesIV").val()
        var Mode = $("#aesMode").val()
        var EncodeMode = $("#aesEncodeMode").val()
        var Padding = $("#aesPadding").val()
        //var bit = $("#aesBit").val()
        var outputstr = _aes_decrypt(inputstr, Mode, Padding, EncodeMode, key, iv)

        //var outputstr = _aes_decrypt(inputstr)
        $("#aes_output").val(outputstr)
        mdui.snackbar({
            message: '解密完成'
        });
    }
   catch {
       mdui.alert('解密错误！请检查。', '错误');
   }

}

