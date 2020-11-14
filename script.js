var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var clearBtn = document.getElementById("clearItms");


function inputLen(){
	return input.value.length;
}

function addItem(){
	var li = document.createElement("li");
	var X_btn = document.createElement("button");
	X_btn.classList.add("remove");
	X_btn.appendChild(document.createTextNode("X"));

	li.appendChild(X_btn);
	li.appendChild(document.createTextNode('\xa0' + input.value));
	ul.insertBefore(li, ul.childNodes[0]);
	input.value = '';
}


function addItemOnClick(){
	if (inputLen() > 0) {
		addItem();
	}
}

function addItemOnEnter(event){
	if (event.keyCode === 13 && inputLen() > 0) {
		addItem();
	}
}

function scoreOut(event2){
	event2.target.classList.toggle('done');
}

function removeItem(event3){
	if (event3.target.nodeName === 'BUTTON') {
		event3.target.parentNode.remove();
	}
}

function clearList(){
	while (ul.firstChild) {
    	ul.removeChild(ul.lastChild);
  }
}


button.addEventListener("click", addItemOnClick);

input.addEventListener('keydown', addItemOnEnter);

ul.addEventListener('click', scoreOut);

ul.addEventListener('click', removeItem);

clearBtn.addEventListener('click', clearList);



