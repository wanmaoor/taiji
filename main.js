// @ts-nocheck
let html = document.querySelector("#demo");
let style = document.querySelector("#style");
let n = 0;
let intro = `
/* 你好, 我是一个前端新人.
 * 我要开始秀操作了
 * 先准备一个div
 */
#div1 {
  width: 200px;
  height: 200px;
}
/* 接下来把div变成一个八卦图!
 * 首先把div变成圆圈
 */
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,.5);
  border: none;
}
/* 八卦是阴阳形成
 * 一黑一白
 */
#div1{
  background: linear-gradient(90deg, rgba(36,30,0,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(0,0,0,1) 49%, rgba(0,0,0,1) 100%);
  animation: rotate 5s linear infinite;

}
/* 黑白两极 */
#div1::before {
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(36,30,0,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
  border-radius: 50%;
}
#div1::after {
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(36,30,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
  border-radius: 50%;
}
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

let string2 = "";
let step = () => {
  setTimeout(() => {
    if (intro[n] === "\n") {
      string2 += "<br>";
    } else if (intro[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += intro[n];
    }

    html.innerHTML = string2;
    style.innerHTML = intro.substring(0, n);
    window.scrollTo(0, 1000);
    html.scrollTo(0, 1000);
    if (n < intro.length - 1) {
      n += 1;
      step();
    }
  }, 0);
};

step();
