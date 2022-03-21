var getNameApi ="http://localhost:3000/names";
fetch(getNameApi)
  .then(function(response){
    return response.json();
  })
  .then(function(names){
    localStorage.setItem("name", JSON.stringify(names));
  })

  var listName = JSON.parse(localStorage.getItem("name"));
  var getListName = document.getElementById("myUL");
  for(i = 0; i< listName.length; i++){
    var get_name = listName[i].name;
    var list_Name =
    `<ul id="myUL">
        <li>${get_name}</li> 
    </ul>`
    getListName.innerHTML += list_Name;
    console.log(getListName);
    
  }


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Xóa");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    // localStorage.removeItem('Mydata');
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Hãy nhập vào cái gì đó đi !");
  } else {
    var myData = document.getElementById("myUL").appendChild(li).innerHTML;
  }
  localStorage.setItem('Mydata',myData)
  

  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Xóa");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      localStorage.removeItem('Mydata')[i];
    }
  }
}
