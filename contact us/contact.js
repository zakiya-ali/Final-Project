function removeStuff () {
    var dropmenu = document.getElementById("check");
  
    if(dropmenu.checked == true) {
      document.getElementById("rcontact").style.display = "none";
      document.getElementById("rform").style.display = "none";
    } 
    else {
      document.getElementById("rcontact").style.display = "block";
      document.getElementById("rform").style.display = "block";
    }
  }
// function alert() {
//     alert('Thank you for your comments. We will get back to you with a response as soon as we can.')
// }