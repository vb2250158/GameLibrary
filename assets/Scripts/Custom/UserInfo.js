

var jq = require("./jquery-3.3.1.min");
const key = "jdvip11@";
/**
* 字符串解密
*/
function decrypt(str) {
    if (str == "") return "";
    let pwd = escape(key);
    if (str == null || str.length < 8) {
        // alert("A salt value could not be extracted from the encrypted message because it's length is too short. The message cannot be decrypted.");
        return "";
    }
    if (pwd == null || pwd.length <= 0) {
        // alert("Please enter a password with which to decrypt the message.");
        return "";
    }
    let prand = "";
    for (let I = 0; I < pwd.length; I++) {
        prand += pwd.charCodeAt(I).toString();
    }
    let sPos = Math.floor(prand.length / 5);
    let mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
    let incr = Math.round(pwd.length / 2);
    let modu = Math.pow(2, 31) - 1;
    let salt = parseInt(str.substring(str.length - 8, str.length), 16);
    str = str.substring(0, str.length - 8);
    prand += salt;
    while (prand.length > 10) {
        prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
    }
    prand = (mult * prand + incr) % modu;
    let enc_chr = "";
    let enc_str = "";
    for (let I = 0; I < str.length; I += 2) {
        enc_chr = parseInt(parseInt(str.substring(I, I + 2), 16) ^ Math.floor((prand / modu) * 255));
        enc_str += String.fromCharCode(enc_chr);
        prand = (mult * prand + incr) % modu;
    }
    return unescape(enc_str);
}
/**
* 用来读取特定的cookie值。
*/
function getCookie(name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    }
    else {
        return null;
    }
}

function setCookie(name, value) {
    let Days = 30;
    let exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getPar(par) {
    //获取当前URL
    let local_url = document.location.href;
    //获取要取得的get参数位置
    let get = local_url.indexOf(par + "=");
    if (get == -1) {
        return false;
    }
    //截取字符串
    let get_par = local_url.slice(par.length + get + 1);
    //判断截取后的字符串是否还有其他get参数
    let nextPar = get_par.indexOf("&");
    if (nextPar != -1) {
        get_par = get_par.slice(0, nextPar);
    }
    return get_par;
}
/**
 * 用户数据
 */
let UserData = function () {
    this.phone = "";
    this.score = 0;
    this.game_name = "";
    this.live_time = "";
    this.play_number = 0;
    this.gold = 0;
    this.token = "";

}

module.exports= {
    user:new UserData(),
    InitGame(){
        this.user.token = decrypt(this.getPar("token"));    
        window.user=this.user;

    },
    
}
