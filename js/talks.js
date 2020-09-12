function openVideo(evt, videoPart) {
  // Declare all variables
  var i, tabcontent;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("video");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(videoPart).style.display = "block";
}
