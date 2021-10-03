// Dream WEB Tool Project
// tripledes encrypt&decrypt

//  USE CryptoJS
// https://cryptojs.gitbook.io/docs/

function _tripledes_encrypt(Str, Mode, Padding, EncodeMode, Key, iv) {
    var tripledesMode = {
        1: CryptoJS.mode.ECB,
        2: CryptoJS.mode.CBC,
        3: CryptoJS.mode.CTR,
        4: CryptoJS.mode.CFB,
        5: CryptoJS.mode.OFB
    }
    var tripledesPadding = {
        1: CryptoJS.pad.Iso10126,
        2: CryptoJS.pad.Pkcs7,
        3: CryptoJS.pad.NoPadding,
        4: CryptoJS.pad.AnsiX923,
        5: CryptoJS.pad.ZeroPadding,
        6: CryptoJS.pad.Iso97971
    }
    let srcs = CryptoJS.enc.Utf8.parse(Str);
    var result = CryptoJS.TripleDES.encrypt(
        srcs,
        CryptoJS.enc.Utf8.parse(Key),
        {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: tripledesMode[Mode],
            padding: tripledesPadding[Padding]
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

function _tripledes_decrypt(Str, Mode, Padding, EncodeMode, Key, iv) {
    var tripledesMode = {
        1: CryptoJS.mode.ECB,
        2: CryptoJS.mode.CBC,
        3: CryptoJS.mode.CTR,
        4: CryptoJS.mode.CFB,
        5: CryptoJS.mode.OFB
    }
    var tripledesPadding = {
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
    var decrypted = CryptoJS.TripleDES.decrypt(srcs, CryptoJS.enc.Utf8.parse(Key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: tripledesMode[Mode],
        padding: tripledesPadding[Padding]
    })
    console.log(decrypted)
    var decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
    return decryptedStr

    //var parsedWordArray = CryptoJS.enc.tripledes.parse(tripledesstr)
    //var parsedstr = parsedWordArray.toString(CryptoJS.enc.Utf8)
    //return parsedstr

}

function tripledes_encrypt() {
    try {
        var inputstr = $("#tripledes_input").val()
        var key = $("#tripledesKey").val()
        var iv = $("#tripledesIV").val()
        var Mode = $("#tripledesMode").val()
        var EncodeMode = $("#tripledesEncodeMode").val()
        var Padding = $("#tripledesPadding").val()
        //var bit = $("#tripledesBit").val()
        var outputstr = _tripledes_encrypt(inputstr, Mode, Padding, EncodeMode, key, iv)
        $("#tripledes_output").val(outputstr)
        mdui.snackbar({
            message: '加密完成'
        });
    }
    catch {
        mdui.alert('加密错误！请检查。', '错误');
    }

}

function tripledes_decrypt() {
    try {
        var inputstr = $("#tripledes_input").val()
        var key = $("#tripledesKey").val()
        var iv = $("#tripledesIV").val()
        var Mode = $("#tripledesMode").val()
        var EncodeMode = $("#tripledesEncodeMode").val()
        var Padding = $("#tripledesPadding").val()
        //var bit = $("#tripledesBit").val()
        var outputstr = _tripledes_decrypt(inputstr, Mode, Padding, EncodeMode, key, iv)

        //var outputstr = _tripledes_decrypt(inputstr)
        $("#tripledes_output").val(outputstr)
        mdui.snackbar({
            message: '解密完成'
        });
    }
    catch {
        mdui.alert('解密错误！请检查。', '错误');
    }

}

