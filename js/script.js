function removeClass(){
	var list = document.getElementById('list');
	var item = list.getElementsByTagName("li");
		for (var i = 0; i < item.length; i++){
				item[i].removeAttribute("class");
				};
};

function firstElement(form) {
	removeClass();
	var first = document.getElementById('list').firstElementChild;
		first.setAttribute("class", "active");
};

function lastElement(form) {
	removeClass();
	var last = document.getElementById('list').lastElementChild;
		last.setAttribute("class", "active");
};

function mextElement(form) {
	var elem = document.querySelector('#list>li.active');
	var first = document.getElementById('list').firstElementChild;
	var next = elem.nextElementSibling;
	if (next == null) {
		first.setAttribute("class", "active");
		elem.removeAttribute("class");
	}
	else
	next.setAttribute("class", "active");
	elem.removeAttribute("class");
};

function prevElement(form) {
	var elem = document.querySelector('#list>li.active');
	var last = document.getElementById('list').lastElementChild;
	var prev = elem.previousElementSibling;
	if (prev == null) {
		last.setAttribute("class", "active");
		elem.removeAttribute("class");
	}
	else
		prev.setAttribute("class", "active");
		elem.removeAttribute("class");
	};

function addNevElement(form) {
		if (form.input.value == "") {
			alert("Пожалуйста, введите  строку!")
		}
		else {
			removeClass();
			var newItem = document.createElement("li");
			newItem.innerHTML = form.input.value;
			document.getElementById('list').appendChild(newItem);
			newItem.setAttribute("class", "active");
		}
};



function appBefore(form) {
	var list = document.getElementById('list');
	var first = document.getElementById('list').firstElementChild;
	var appElement = document.createElement("li");
		if (form.input.value == "")
			alert("Пожалуйста, введите  строку!")
		else {
			var formValue = form.input.value;
			appElement.innerHTML = "<em>" + formValue + "</em>";
			list.insertBefore(appElement, first);
			}
};






function removeElement(form) {
			removeClass();
			first = document.getElementById('list').firstElementChild;
			var list = document.getElementById('list');
				while (list.childNodes.length > 3){
					var removeLi = list.lastChild;
					list.removeChild(removeLi);
				}
			first.setAttribute("class", "active");
};
