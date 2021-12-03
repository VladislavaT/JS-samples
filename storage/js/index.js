function visitLink(path) {
	if(localStorage.getItem(path) === null){
		localStorage.setItem(path, 1)
	} else {
		localStorage[path]++
	}
}

console.log(11,localStorage.getItem('Page1'));

function viewResults() {
	if(!localStorage.Page1){
		localStorage.Page1 = 0
	}
	if(!localStorage.Page2){
		localStorage.Page2 = 0
	}
	if(!localStorage.Page3){
		localStorage.Page3 = 0
	}
	let list = document.createElement('ul')
	list.innerHTML = 
					`<li> visited Page1 ${localStorage.Page1} </li>
					<li> visited Page2 ${localStorage.Page2}</li>
					<li> visited Page3 ${localStorage.Page3}</li>`
	let div = document.getElementById('content')
	div.append(list)

	console.log(list);

	console.log(div);
	localStorage.clear()
}
