function u(e) {
  return "color:#fff; background: linear-gradient(to right , ".concat(e, "); padding:5px; border-radius: 5px;");
}
function f() {
  for (var e = u("#0088FF, #54FBFB"), c = [{
    date: "5-12",
    remark: "四川汶川县发生里氏8.0级地震"
  }, {
    date: "9-18",
    remark: "九·一八事变"
  }, {
    date: "12-13",
    remark: "南京大屠杀死难者国家公祭日"
  }], n = "普普通通的一天~", o = /* @__PURE__ */ new Date(), y = o.getFullYear(), s = o.getMonth() + 1, g = o.getDate(), d = s + "-" + g, t = !1, a = 0; a < c.length; a++) {
    var i = c[a];
    if (d === i.date) {
      n = i.remark, t = !0, e = u("#9C9C9C, #C4C4C4");
      break;
    }
  }
  if (t) {
    var r = document.getElementsByTagName("html")[0], l = "grayscale(100%)";
    r.style.setProperty("filter", l), r.style.setProperty(".-moz-filter", l), r.style.setProperty(".-o-filter", l), r.style.setProperty("-webkit-filter", "grayscale(1)");
  }
  console.log("%cA u t o G r a y", e), console.log("%c指定日期网站自动添加灰色遮罩", e), console.log("%cBy: 真心", e), console.log("%c个人主页: https://zhenxin.me", e), console.log("%c今天是".concat(y, "年").concat(s, "月").concat(g, "日"), e), console.log("%c" + n, e), t && console.log("%c全局灰色遮罩已生效", e);
}
f();
