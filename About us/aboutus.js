document.getElementById('popupbtnvid').addEventListener("click", function() {
    document.querySelector('.bg-modalvid').style.display = "flex";
  });
  document.querySelector('.closevid').addEventListener("click", function() {
    document.querySelector('.bg-modalvid').style.display = "none";
  });

//Drop-down bar
function removeStuff () {
  var dropmenu = document.getElementById("check");

  if(dropmenu.checked == true) {
    document.getElementById("rvideo").style.display = "none";
  } 
  else {
    document.getElementById("rvideo").style.display = "block";
  }
}
