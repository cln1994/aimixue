
var biao = document.querySelectorAll(".biao");

for (var i = 0; i < biao.length;i++) { 
  biao[i].onmouseover = function () { 
    
    this.parentNode.querySelector(".pii-box").style.opacity = "1";
    this.parentNode.querySelector(".pi-bottom").innerHTML = "AS VIST AS THE SEA";
  }
  biao[i].onmouseout = function () { 
    this.parentNode.querySelector(".pii-box").style.opacity = "0";
    this.parentNode.querySelector(".pi-bottom").innerHTML = this.parentNode.querySelector("span").innerHTML;
  }
}
















