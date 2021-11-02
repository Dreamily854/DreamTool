// Dreamtool Projcet 
// Idcard tool

var inst = new mdui.Dialog('#res');
var locationcode 
$.get({
    url: './location.json',
    data: {},
    success: function (data) {
        //console.log(data)
        locationcode = data
    }
});
const WeightNumber = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
// 校验码
const check_code = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
// 参考 国家标准GB 11643-1999

function __idcardcheck(cid) {
    cid = cid.toString()
    if (cid.length == 18) {
        return true
    }
    else {
        return false
    }
}

function idcardcheck(cid) {
    if (__idcardcheck(cid)) {
        cid = cid.toString()
        CIDArray = cid.split("")
        var num = 0
        for (var i = 0; i < 17; i++) {
            num += CIDArray[i] * WeightNumber[i]
        }
        var remainder = num % 11
        var CheckCode = check_code[remainder]
        if (CheckCode.toString() == CIDArray[17].toString()) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

function __getlocation(regioncode){
    code1 = regioncode.substring(0,2)
    code2 = regioncode.substring(2,4)
    code3 = regioncode.substring(4,6)
    code4 = code1+"0000"
    code5 = code1+code2 +"00"
    if 
}

function Idcard_analyze(cid) {
    if (idcardcheck(cid)) {
        cid = cid.toString()
        var RegionCode = cid.substring(0, 6)
        var birthday = cid.substring(6, 14)
        var GenderCode = cid.substring(16, 17)
        var gender = ''
        if ((GenderCode % 2) == 1) {
            gender = "男"
        } else {
            gender = "女"
        }
        var strbirthday = [birthday.substring(0, 4), "-", birthday.substring(4, 6), '-', birthday.substring(6, 8)]
        $("#gender").html(gender)
        $("#birthday").html(strbirthday)
        $("#gender").html(gender)
        $("#gender").html(gender)
        inst.open()
    } else {
        mdui.alert("身份证号码未通过校验！", "错误")
    }
}
