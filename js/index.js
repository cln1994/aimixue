// 轮播
var courser = document.querySelector(".carousel");
var btns = courser.querySelectorAll("button");
var lis = courser.querySelectorAll("li");
var carousel_content = courser.querySelector(".carousel-content");
var imgs = carousel_content.getElementsByTagName("img");


var j = 0;
// 左右轮播
for (var i = 0; i < btns.length;i++) { 
  btns[i].onclick = function () { 
    if (this.innerHTML == "&gt;") {
      moveright();
    } else { 
      j--;
      if (j == -1) {
        j = 2;
      }
      clear();
      imgs[j].className = "img active";
      lis[j].className = "active";
    }
  }
}
// 点击小圆点轮播
for (var i = 0; i < lis.length;i++){
  lis[i].onclick = function () { 
    j = this.getAttribute("on");
    clear();
    this.className = "active";
    imgs[j].className = "img active";
  }
}
//设置开启定时器
var timer = setInterval(moveright, 4000);
// 鼠标移入定时器停止
courser.onmouseover = function () {
  clearTimeout(timer);
}
// 鼠标移出又触发定时器
courser.onmouseout = function () {
  timer = setInterval(moveright,3000);
}


// 点击按钮向左轮播封装为一个函数便于定时器调用
function moveright() { 
  j++;
  if (j == 3) {
    j = 0;
  }
  clear();
  imgs[j].className = "img active";
  lis[j].className = "active";
}

// 封装清除class=active
// console.log(imgs.length);
function clear() { 
  for (var i = 0; i < imgs.length; i++) { 
    // console.log(imgs.length);
    imgs[i].className = "img";
    lis[i].className = "";
  }
}



























var design_list = document.querySelector(".design-list");

design_list.onmouseover = function (e) { 
  e = e || window.event;
  var target = e.target || e.srcElement;
  
  if (target.className == "po") { 
    target.parentNode.querySelector("img").style.transform="scale(1.1)";
    target.parentNode.querySelector("span").style.color="#f76a56";
  }
}
design_list.onmouseout = function (e) { 
  e = e || window.event;
  var target = e.target || e.srcElement;
  if (target.className=="po") { 
    target.parentNode.querySelector("img").style.transform="";
    target.parentNode.querySelector("span").style.color="";
  }
}




























