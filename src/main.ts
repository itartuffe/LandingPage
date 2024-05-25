import "./style.css";
const is_weixin = /micromessenger/i.test(navigator.userAgent)
const mask = document.getElementsByClassName("mask")[0];
if(is_weixin){
  mask.setAttribute("style", "display: block;");  
}
const down = document.getElementById("down")!;
down.addEventListener(
  "click",
  function () {
    const param = {
      type: "APP_DOWNLOAD_TYPE",
      subType: "701",
      osType: "401",
      deptId: "3301",
    };
    var xhr = new XMLHttpRequest(); // IE8/9需用window.XDomainRequest兼容
    // 前端设置是否带cookie
    xhr.withCredentials = true;
    xhr.open(
      "POST",
      "https://xcx.zjnm.cn/v1/portal/portalAccessStatistics/count",
      true
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.send(JSON.stringify(param));
  },
  false
);