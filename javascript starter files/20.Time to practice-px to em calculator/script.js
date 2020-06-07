//em = required / parent; 

var calculate = () => {
	var parentValue = document.getElementById('parent').value; 
	var requireValue = document.getElementById('required').value; 
	var result = document.getElementById('result');  
	if(!parentValue | !requireValue){
		alert("Please fill in all fields"); 
	}else{
		result.innerHTML = (requireValue / parentValue);
	}
}

	//adding event listner to query selector

var btn = document.querySelector('button'); 
btn.addEventListener('click', calculate); 