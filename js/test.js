

// var box1 = document.querySelectorAll(".box1");



// for (var j = 0; j < change.length;j++) { 
// var box1active = document.querySelector(".box1active");
// f1(box1active);


// }

var box = document.querySelector(".box");


box.onclick = function (e) { 
  console.log(6);
  e = e || window.event;
  var target = e.target || e.srcElement;
  if (target.nodeName=="BUTTON"&&target.parentNode.parentNode.parentNode.className.indexOf("box1active")!=-1) { 
    var a = target.parentNode.parentNode.parentNode;
    console.log(a);

    f1(a);






    
  }
}








