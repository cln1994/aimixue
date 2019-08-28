var a = null;
var mbl_item = document.querySelectorAll(".mbl-item");
var mbl_bot = document.querySelector(".mbl-bot");
var mt_text = document.querySelector(".mt-text");
var ps = mbl_bot.querySelectorAll("p");
var box1 = document.querySelectorAll(".box1");
console.log(box1);
for (var i = 0; i < mbl_item.length; i++) {
  mbl_item[i].index = i;
  mbl_item[i].onclick = function () { 
        for (var i = 0; i < ps.length;i++) { 
          ps[i].className = "";
          ps[i].nextElementSibling.className = "";
          // box1[i].style.opacity = "0";
          box1[i].className = "mb-right box1";
        }
        this.children[1].className = "active";
        this.children[2].className = "iconfont icon-arrow-right";
        mt_text.children[mt_text.children.length - 1].innerHTML = this.children[1].innerHTML;
        // box1[this.index].style.opacity = "1";
        box1[this.index].className = "mb-right box1 box1active";
    
        if (this.parentNode.previousElementSibling.children[2].innerHTML == "设计团队") { 
          a = box1[this.index];
          f1(a);
        } 
      }
    
}










function f1(box1active) { 
 

  var change = box1active.querySelector(".change");
  console.log(change);
    var bb_box = box1active.querySelector(".bb-box");
    var ch_btns =change.querySelectorAll("button");
    var ch_spans =change.querySelectorAll("span");
    var n = 0;
    var size = 1064;
    var a = null;
    ch_btns[0].onclick = function () { 
      for (var i = 0; i < ch_spans.length;i++) { 
        ch_spans[n].className = "";
      }
      n--;
      if (n==-1) { 
        n = 0;
      }
      a=size * n;
      console.log('${a}px');
      bb_box.style.marginLeft =`-${a}px`;
      ch_spans[n].className = "active";
    }
    ch_btns[1].onclick = function () { 
      for (var i = 0; i < ch_spans.length;i++) { 
        ch_spans[n].className = "";
      }
      n++;
      if (n==ch_spans.length) { 
        n = ch_spans.length - 1;
      }
      a=size *n;
      console.log(a);
      bb_box.style.marginLeft = `-${a}px`;
      ch_spans[n].className = "active";
     
    }
    
  
  }
  





