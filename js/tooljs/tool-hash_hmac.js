// Dream WEB Tool Project
// hash & hmac  encode

// HASH ------------------------------------------
// hash MD5
function _hash_md5(Str) {
    var md5Res = CryptoJS.MD5(Str);
    var md5str = md5Res.toString()
    return md5str
}

// hash RIPEMD160
function _hash_ripemd160(Str) {
    var ripemd160Res = CryptoJS.RIPEMD160(Str);
    var ripemd160str = ripemd160Res.toString()
    return ripemd160str
}

// hash SHA-1
function _hash_sha1(Str) {
    var sha1Res = CryptoJS.SHA1(Str);
    var sha1str = sha1Res.toString()
    return sha1str
}

// hash SHA-3
function _hash_sha3(Str) {
    var sha3Res = CryptoJS.SHA3(Str);
    var sha3str = sha3Res.toString()
    return sha3str
}

// hash SHA-224
function _hash_sha224(Str) {
    var sha224Res = CryptoJS.SHA224(Str);
    var sha224str = sha224Res.toString()
    return sha224str
}

// hash SHA-256
function _hash_sha256(Str) {
    var sha256Res = CryptoJS.SHA256(Str);
    var sha256str = sha256Res.toString()
    return sha256str
}

// hash SHA-384
function _hash_sha384(Str) {
    var sha384Res = CryptoJS.SHA384(Str);
    var sha384str = sha384Res.toString()
    return sha384str
}

// hash SHA-512
function _hash_sha512(Str) {
    var sha512Res = CryptoJS.SHA512(Str);
    var sha512str = sha512Res.toString()
    return sha512str
}

// HMAC ------------------------------------------

// HMAC MD5
function _hmac_md5(Str, Key) {
    var hmacmd5Res = CryptoJS.HmacMD5(Str, Key);
    var hmacmd5str = hmacmd5Res.toString()
    return hmacmd5str
}

// HMAC SHA-1
function _hmac_sha1(Str, Key) {

    var sha1Res = CryptoJS.HmacSHA1(Str, Key);
    var sha1str = sha1Res.toString()
    return sha1str
}
// HMAC SHA-3
function _hmac_sha3(Str, Key) {

    var sha3Res = CryptoJS.HmacSHA3(Str, Key);
    var sha3str = sha3Res.toString()
    return sha3str
}

// HMAC SHA-224
function _hmac_sha224(Str, Key) {

    var hmacsha224Res = CryptoJS.HmacSHA224(Str, Key);
    var hmacsha224str = hmacsha224Res.toString()
    return hmacsha224str
}

// HMAC SHA-256
function _hmac_sha256(Str, Key) {

    var hmacsha256Res = CryptoJS.HmacSHA256(Str, Key);
    var hmacsha256str = hmacsha256Res.toString()
    return hmacsha256str
}

// HMAC SHA-384
function _hmac_sha384(Str, Key) {
    var hmacsha384Res = CryptoJS.HmacSHA384(Str, Key);
    var hmacsha384str = hmacsha384Res.toString()
    return hmacsha384str
}

// HMAC SHA-512
function _hmac_sha512(Str, Key) {
    var hmacsha512Res = CryptoJS.HmacSHA512(Str, Key);
    var hmacsha512str = hmacsha512Res.toString()
    return hmacsha512str
}

// HMAC RIPEMD160
function _hmac_ripemd160(Str, Key) {
    var hmacripemd160Res = CryptoJS.HmacRIPEMD160(Str, Key);
    var hmacripemd160str = hmacripemd160Res.toString()
    return hmacripemd160str
}

function dtencode(mode) {
    console.log(mode)
    var inputstr = $("#input").val()
    var inputkey = $("#Key").val()
    var res = ""
    var runMode = ""
    switch (mode) {
        case "hashmd5":
            console.log("Hash MD5")
            runMode = "Hash MD5"
            res = _hash_md5(inputstr)
            break

        case "hashsha1":
            console.log("Hash SHA-1")
            runMode = "Hash SHA-"
            res = _hash_sha1(inputstr)
            break

        case "hashsha3":
            console.log("Hash SHA-3")
            runMode = "Hash SHA-3"
            res = _hash_sha3(inputstr)
            break

        case "hashsha224":
            console.log("Hash SHA-224")
            runMode = "Hash SHA-224"
            res = _hash_sha224(inputstr)
            break

        case "hashsha256":
            console.log("Hash SHA-256")
            runMode = "Hash SHA-256"
            res = _hash_sha256(inputstr)
            break

        case "hashsha512":
            console.log("Hash SHA-512")
            runMode = "Hash SHA-512"
            res = _hash_sha512(inputstr)
            break

        case "hashsha384":
            console.log("Hash SHA-384")
            runMode = "Hash SHA-384"
            res = _hash_sha384(inputstr)
            break

        case "hashripemd160":
            console.log("Hash RIPEMD160")
            runMode = "Hash RIPEMD160"
            res = _hash_ripemd160(inputstr)
            break



        case "hmacmd5":
            console.log("HMAC MD5")
            runMode = "HMAC MD5"
            res = _hmac_md5(inputstr, inputkey)
            break

        case "hmacsha1":
            console.log("HMAC SHA-1")
            runMode = "HMAC SHA-"
            res = _hmac_sha1(inputstr, inputkey)
            break

        case "hmacsha3":
            console.log("HMAC SHA-3")
            runMode = "HMAC SHA-3"
            res = _hmac_sha3(inputstr, inputkey)
            break

        case "hmacsha224":
            console.log("HMAC SHA-224")
            runMode = "HMAC SHA-224"
            res = _hmac_sha224(inputstr, inputkey)
            break

        case "hmacsha256":
            console.log("HMAC SHA-256")
            runMode = "HMAC SHA-256"
            res = _hmac_sha256(inputstr, inputkey)
            break

        case "hmacsha512":
            console.log("HMAC SHA-512")
            runMode = "HMAC SHA-512"
            res = _hmac_sha512(inputstr, inputkey)
            break

        case "hmacsha384":
            console.log("HMAC SHA-384")
            runMode = "HMAC SHA-384"
            res = _hmac_sha384(inputstr, inputkey)
            break

        case "hmacripemd160":
            console.log("HMAC RIPEMD160")
            runMode = "HMAC RIPEMD160"
            res = _hmac_ripemd160(inputstr, inputkey)
            break

    }
    $("#output").val(res)
    mdui.snackbar({
        message: '编码完成'
    });
}