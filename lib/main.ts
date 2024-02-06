function getColor(color: string): string {
  return `color:#fff; background: linear-gradient(to right , ${color}); padding:5px; border-radius: 5px;`
}

function autoGray() {
  let logColor = getColor("#0088FF, #54FBFB")

  const data = [
    {
      date: "5-12",
      remark: "四川汶川县发生里氏8.0级地震"
    },
    {
      date: "9-18",
      remark: "九·一八事变"
    },
    {
      date: "12-13",
      remark: "南京大屠杀死难者国家公祭日"
    },
  ];

  let remark = "普普通通的一天~";
  const date = new Date();
  const year = date.getFullYear()
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const time = month + "-" + day;
  let isGray = false;
  for (let i = 0; i < data.length; i++) {
    const curData = data[i];
    if (time === curData.date) {
      remark = curData.remark;
      isGray = true;
      logColor = getColor("#9C9C9C, #C4C4C4")
      break;
    }
  }


  if (isGray) {
    const html = document.getElementsByTagName("html")[0];
    const gray = "grayscale(100%)";
    html.style.setProperty("filter", gray);
    html.style.setProperty(".-moz-filter", gray);
    html.style.setProperty(".-o-filter", gray);
    html.style.setProperty("-webkit-filter", "grayscale(1)");
  }

  console.log("%cA u t o G r a y", logColor);
  console.log("%c指定日期网站自动添加灰色遮罩", logColor);
  console.log("%cBy: 真心", logColor);
  console.log("%c个人主页: https://zhenxin.me", logColor);
  console.log(`%c今天是${year}年${month}月${day}日`, logColor);
  console.log("%c" + remark, logColor);
  if (isGray) {
    console.log("%c全局灰色遮罩已生效", logColor);
  }
}

autoGray()