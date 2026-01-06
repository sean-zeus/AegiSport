//sessionStorage
const _mySession = (type, name, value) => {
  try {
    switch (type) {
      case "set": //存資料
        sessionStorage.setItem(name, encodeURIComponent(value));
        return `ok`;
      case "get": //取資料
        return sessionStorage.getItem(decodeURIComponent(name));
      // return JSON.parse(_res) || []
      case "del": //移除特定資料
        sessionStorage.removeItem(name);
        return `ok`;
      case "clear": //一口氣全部清除
        sessionStorage.clear();
        return `ok`;
      default:
        console.log(`err：未指定需求作業`);
        return `err：未指定需求作業`;
    }
  } catch (err) {
    console.log(`err：${err}`);
    return `err：${err}`;
  }
};

//localStorage
const _myStorage = (type, name, value) => {
  try {
    switch (type) {
      case "set": //存資料
        localStorage.setItem(name, encodeURIComponent(value));
        return `ok`;
      case "get": //取資料
        return localStorage.getItem(decodeURIComponent(name));
      // return JSON.parse(_res) || []
      case "del": //移除特定資料
        localStorage.removeItem(name);
        return `ok`;
      case "clear": //一口氣全部清除
        localStorage.clear();
        return `ok`;
      default:
        console.log(`err：未指定需求作業`);
        return `err：未指定需求作業`;
    }
  } catch (err) {
    console.log(`err：${err}`);
    return `err：${err}`;
  }
};

//Cookie
const _myCookie = (type, name, value, exdays = 0) => {
  try {
    switch (type) {
      case "set": //存資料
        let expires = "";
        if (exdays !== 0) {
          let ddd = new Date();
          ddd.setTime(ddd.getTime() + exdays * 24 * 60 * 60 * 1000);
          expires = `expires=${ddd.toGMTString()}`;
        }
        document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}`;
        return `ok`;
      case "get": //取資料
        let cname = name + "=";
        let ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i].trim();
          if (c.indexOf(cname) == 0)
            return decodeURIComponent(c.substring(cname.length, c.length));
        }
        return "";
      //另一種寫法
      // function parseCookie() {
      // 	let cookieObj = {}
      // 	let cookieAry = document.cookie.split(';')
      // 	let cookie
      // 	for (let i = 0, l = cookieAry.length; i < l; ++i) {
      // 		if (cookieAry[i].includes('=')) {
      // 			cookie = cookieAry[i].split('=')
      // 			cookieObj[cookie[0]] = cookie[1]
      // 		}
      // 	}
      // 	return cookieObj
      // }
      // function getCookieByName(name) {
      // 	let value = parseCookie()[name]
      // 	if (value) value = decodeURIComponent(value)
      // 	return value
      // }
      case "del": //移除特定資料
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        document.cookie = `${name}=${encodeURIComponent(
          value
        )}; expires=${exp.toGMTString()}`;
        return `ok`;
      default:
        console.log(`err：未指定需求作業`);
        return `err：未指定需求作業`;
    }
  } catch (err) {
    console.log(`err：${err}`);
    return `err：${err}`;
  }
};