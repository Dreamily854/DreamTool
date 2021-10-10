// DreamTool Project 
// PasswordGenerate Tool

// 2021年10月9日
const listNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const listUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const listlowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const listSymbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', ':', '{', '}', '_', '+', '-', '=', '[', ']', ';', ',', '.', '?', '/']



function randomString(length, chars) {
    var result = ''
    for (var i = length; i > 0; --i) {
        var rnum = Math.floor(Math.random() * chars.length)
        result += chars[rnum]
    }
    return result

}

function isInArray(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            return true;
        }
    }
    return false;
}

function passwordStrCheck(pwdStr, num, uppercase, lowercase, symbol) {
    pwdArray = pwdStr.split("")
    var chkNum = false
    var chkUpperCase = false
    var chkLowerCase = false
    var chkSymbol = false
    var pwdLength = pwdArray.length
    for (var i = 0, len = pwdLength; i < len; i++) {
        if (isInArray(listNum, pwdArray[i])) { chkNum = true }
        if (isInArray(listUpperCase, pwdArray[i])) { chkUpperCase = true }
        if (isInArray(listlowerCase, pwdArray[i])) { chkLowerCase = true }
        if (isInArray(listSymbol, pwdArray[i])) { chkSymbol = true }
    }
    var checked = [chkNum, chkUpperCase, chkLowerCase, chkSymbol]
    var originres = [num, uppercase, lowercase, symbol]
    console.log(["checked:", checked].join())
    console.log(["origin:", originres].join())
    if (checked.toString() == originres.toString()) {
        return true
    } else {
        return false
    }
}

function __makepassword(length, number, uppercase, lowercase, symbol) {
    while (true) {
        var runArray = []
        if (number) { runArray = runArray.concat(listNum) }
        if (uppercase) { runArray = runArray.concat(listUpperCase) }
        if (lowercase) { runArray = runArray.concat(listlowerCase) }
        if (symbol) { runArray = runArray.concat(listSymbol) }
        var rString = randomString(length, runArray)
        if (passwordStrCheck(rString, number, uppercase, lowercase, symbol)) {
            return rString
        }
    }
}

function makePassWord(length, count, number, uppercase, lowercase, symbol) {
    var result = ""
    for (var i = 0, len = count; i < len; i++) {
        result += __makepassword(length, number, uppercase, lowercase, symbol)
        result += "\n"
    }
    return result
}


function passwordGenerate() {
    var number = $("#number")[0].checked
    var uppercase = $("#uppercase")[0].checked
    var lowercase = $("#lowercase")[0].checked
    var symbol = $("#symbol")[0].checked
    var length = $("#length").val()
    var count = $("#count").val()
    var passwordGenerateConf = {
        "includeNumber": number,
        "includeUpperCase": uppercase,
        "includeLowerCase": lowercase,
        "includeSymbol": symbol,
        "passwordLength": length,
        "passwordCount": count
    }
    console.log("密码生成配置文件")
    console.table(passwordGenerateConf)
    res = makePassWord(length, count, number, uppercase, lowercase, symbol)
    console.log(res)
    $("#passwordres").val(res)


}
