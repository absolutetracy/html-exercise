addEvent(prepareGallery);
function showPic(whichPic){
  var source = whichPic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);
  var text = whichPic.getAttribute("title");
  var description = document.getElementById("description");
  description.firstChild.nodeValue = text;
}

function addEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "Function") {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function prepareGallery(){ 
  if (!document.getElementById) {
    return false;
  }
  if (!document.getElementsByTagName) {
    return false;
  }
  if (!document.createElement) {
    return false;
  }
  if (!document.createTextNode) {
    return false;
  }

  var galleryList = document.getElementById("gallery");
  
  if (!galleryList) {
    return false;
  }
  
  var placeholder = document.createElement("img");
  placeholder.setAttribute("id", "placeholder");
  placeholder.setAttribute("src", "./images/placeholder.gif");
  placeholder.setAttribute("alt", "my image gallery"); 
  
  var para = document.createElement("p");
  para.setAttribute("id", "description");
  var txt = document.createTextNode("Choose an image");
  para.appendChild(txt);
  

  // insert the dynamic create element into document tree
  insertAfter(placeholder, galleryList);
  insertAfter(para, placeholder);

  var links = galleryList.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.onclick = function() {
      showPic(this);
      return false;
    }
  }
    
}

function insertAfter(newNode, targetNode) {

  var parent = targetNode.parentNode;

  if (parent.lastChild == targetNode) {

    parent.appendChild(newNode);
  } else {
    parent.insertBefore(newNode, targetNode.nextSibling);    
  }
  
}
