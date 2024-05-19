// ==UserScript==
// @name         知乎免登录
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  重定向知乎登录页面到发现页面
// @author       wj
// @match        https://www.zhihu.com/signin?*
// @grant        none
// ==/UserScript==
//
(function () {
  "use strict";

  // 检查当前URL是否包含特定的字符串
  if (window.location.href.indexOf("https://www.zhihu.com/signin?") !== -1) {
    // 如果URL匹配，跳转到指定页面
    window.location.href = "https://www.zhihu.com/explore";
  }
})();
