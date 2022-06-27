const btnSubmit = document.getElementById('input-submit');
const listContainer = document.getElementById('list__container')
const listDiv = document.getElementById('list');
let checkDone = document.createElement("input");

const inputText = document.getElementById('input-text');
let node;


btnSubmit.addEventListener('click',() =>{
	if(inputText.value){
	const nodeDiv=document.createElement("div");
	nodeDiv.id="nodeDiv";
	nodeDiv.classList.add("nodeDiv");

	node=document.createElement("li");
	node.id ="nodeLi";

	const textNode = document.createTextNode(`${inputText.value}`);
	node.appendChild(textNode);

	checkDone = document.createElement("input");
	checkDone.setAttribute("type","checkbox");
	checkDone.id = "checkDone";
	
	checkDone.addEventListener('change',function(e){
		if(e.target='checked'){
			node.style.textDecoration = "line-through";

		}
	});
	
	list.appendChild(nodeDiv);
	nodeDiv.appendChild(node);
	nodeDiv.appendChild(checkDone);
	inputText.value="";
	}
})






