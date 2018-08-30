function showPic() {
  if (!document.getElementById) return false;
  var imgEl = document.getElementById('pic-holder'); 
  var href = this.getAttribute('href'); 
  imgEl.setAttribute('src', href); 
  return false;
}


links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++) {
  var link = links[i];
  link.onclick = showPic;
}
