
// make the switch work
function changebg(){
  var checkBox = document.getElementById("myCheck");
  var checkBox2 = document.getElementById("myCheck");
  var body = document.getElementById("body");

  if (checkBox.checked == true) {
    body.style.background = 'url("fireearth.jpeg")';
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundAttachment = 'fixed';
    body.style.backgroundRepeat = 'no-repeat';
    document.getElementById("popupbtn1").style.backgroundColor='red';
    document.getElementById("popupbtn2").style.backgroundColor='red';
    document.getElementById("popupbtn3").style.backgroundColor='red';
    document.getElementById("popupbtn4").style.backgroundColor='red';
    document.getElementById("popupbtn5").style.backgroundColor='red';
    document.getElementById("popupbtn6").style.backgroundColor='red';
  }
  else {
    body.style.background = 'url("./bakroundaligned.jpeg")';
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundAttachment = 'fixed';
    body.style.backgroundRepeat = 'no-repeat';
    document.getElementById("popupbtn1").style.backgroundColor='yellow';
    document.getElementById("popupbtn2").style.backgroundColor='yellow';
    document.getElementById("popupbtn3").style.backgroundColor='yellow';
    document.getElementById("popupbtn4").style.backgroundColor='yellow';
    document.getElementById("popupbtn5").style.backgroundColor='yellow';
    document.getElementById("popupbtn6").style.backgroundColor='yellow';
  }
}

//Drop-down bar
function removeStuff () {
  var dropmenu = document.getElementById("check");

  if(dropmenu.checked == true) {
    document.getElementById("rreality").style.display = "none";
    document.getElementById("rswitch").style.display = "none";
    document.getElementById("ronoff").style.display = "none";
    document.getElementById("rquiz").style.display = "none";
    document.getElementById("hero-content1").style.display = "none";
    document.getElementById("hero-content2").style.display = "none";
    document.getElementById("hero-content3").style.display = "none";
    document.getElementById("hero-content4").style.display = "none";
    document.getElementById("hero-content5").style.display = "none";
    document.getElementById("hero-content6").style.display = "none";
  } 
  else {
    document.getElementById("rreality").style.display = "block";
    document.getElementById("rswitch").style.display = "block";
    document.getElementById("ronoff").style.display = "block";
    document.getElementById("rquiz").style.display = "block";
    document.getElementById("hero-content1").style.display = "block";
    document.getElementById("hero-content2").style.display = "block";
    document.getElementById("hero-content3").style.display = "block";
    document.getElementById("hero-content4").style.display = "block";
    document.getElementById("hero-content5").style.display = "block";
    document.getElementById("hero-content6").style.display = "block";
  }
}

// make the buttons work

//button specific functions

 document.getElementById('popupbtn1').addEventListener("click", function() {
  document.querySelector('.bg-modal1').style.display = "flex";
});
document.querySelector('.close1').addEventListener("click", function() {
  document.querySelector('.bg-modal1').style.display = "none";
});

document.getElementById('popupbtn2').addEventListener("click", function() {
  document.querySelector('.bg-modal2').style.display = "flex";
});
document.querySelector('.close2').addEventListener("click", function() {
  document.querySelector('.bg-modal2').style.display = "none";
});

document.getElementById('popupbtn3').addEventListener("click", function() {
  document.querySelector('.bg-modal3').style.display = "flex";
});
document.querySelector('.close3').addEventListener("click", function() {
  document.querySelector('.bg-modal3').style.display = "none";
});


document.getElementById('popupbtn4').addEventListener("click", function() {
  document.querySelector('.bg-modal4').style.display = "flex";
});
document.querySelector('.close4').addEventListener("click", function() {
  document.querySelector('.bg-modal4').style.display = "none";
});

document.getElementById('popupbtn5').addEventListener("click", function() {
  document.querySelector('.bg-modal5').style.display = "flex";
});
document.querySelector('.close5').addEventListener("click", function() {
  document.querySelector('.bg-modal5').style.display = "none";
});

document.getElementById('popupbtn6').addEventListener("click", function() {
  document.querySelector('.bg-modal6').style.display = "flex";
});
document.querySelector('.close6').addEventListener("click", function() {
  document.querySelector('.bg-modal6').style.display = "none";
});
