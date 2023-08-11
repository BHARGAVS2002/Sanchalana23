//shrinkable header
const token = localStorage.getItem("cookie");                                                     //acquiring token from local storage

const navigation = document.getElementById("head");
const heading = document.getElementById("heading");

document.body.onscroll = function () {
  
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {                     //the size of heading at the top decreases on scrolling
    navigation.style.height = "50px";
    heading.style.fontSize = "2rem";
  } else {
    navigation.style.height = "80px";
    heading.style.fontSize = "3rem";
  }
};

let back = document.querySelector(".back");

back.addEventListener("click", ()=>{                                                                                   //takes the user to the previous location
    window.history.back();
  })

var i;

if(token) {
function buyAnimate(i) {
  document.querySelector(".buy" + i).addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(".card" + i).classList.toggle("expanded");                                   //toggling the expanded class when user clicks on buy button
    setTimeout(function () {document.querySelector(".card" + i).classList.toggle("expanded");}, 3000);
  });
}

for (i = 1; i <= 6; i++) {
  buyAnimate(i);
}
}


