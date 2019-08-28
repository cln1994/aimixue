var box1active = document.querySelector(".box1active");
// console.log(box1active);




f1(box1active);


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
