const btnSubmit = document.getElementById('input-submit');
const listContainer = document.getElementById('list__container')
const ulList = document.querySelector('.ul-list');
const listDiv = document.getElementById('list');

const inputText = document.getElementById('input-text');
let TodoList = [];


btnSubmit.addEventListener('click',()=>{
	const todoListObj={};

	const todoLi = document.createElement("li");
	todoLi.classList.add("todoLi")
	todoListObj.name = inputText.value;
	todoListObj.checked = false;
	let date = new Date
	let randNum = date.valueOf()
	console.log(randNum)
	const todoItem = 
	`
	<div class = "node"><input type = "checkbox" class = "check${randNum}"/>
	<div class = "nodeText">${todoListObj.name}</div> </div>
	<div class = "removeBtn">
	<button class = "removeTodoBtn${randNum}">X</button>
	</div>`
	todoLi.innerHTML=todoItem;
	ulList.appendChild(todoLi);
	inputText.value = "";

let checkDone = document.querySelector(`.check${randNum}`);
let removeTodoBtn = document.querySelector(`.removeTodoBtn${randNum}`)

checkDone.addEventListener('change',function(e){

	if(e.target.checked){
		console.log('TRUE');
		checkDone.closest(".node").style.textDecoration = "line-through"
		

	}else{
		console.log('false')
		checkDone.closest(".node").style.textDecoration = "none"
	}
	
	
});

removeTodoBtn.addEventListener('click', function(e){
	const curBtn = e.currentTarget;
	console.log('TRUE');
	curBtn.closest("li").remove()

});

});




