function openTopic(evt, topicName) {
  var i, postercontent, posterlink;
  postercontent = document.getElementsByClassName("postercontent");
  for (i = 0; i < postercontent.length; i++) {
    postercontent[i].style.display = "none";
  }
  posterlink = document.getElementsByClassName("posterlink");
  for (i = 0; i < posterlink.length; i++) {
    posterlink[i].className = posterlink[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} 