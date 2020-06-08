let currentScore = 0; 
let playing = false; 
let shape1; 
let shape2; 

const shapes = [
	{color: 'blue', width:250, height: 160}, 
	{color: 'red', width:270, height: 170}, 
	{color: 'green', width:290, height: 180}, 
	{color: 'orange', width:310, height: 190}
]

//console.log(shapes[1]); 
/*
if(currentScore<5){
	let currentScore = 10; 
	console.log(currentScore + 'inside'); 
}

console.log(currentScore + 'outside'); 
*/

const selectRandomShape = () => {
	const randomNum = Math.floor(Math.random()*shapes.length); 
	//console.log(randomNum); 
	const randomShape = shapes[randomNum]; 
	console.log(randomShape);
	return randomShape;  
}


// interval would run when click on repeat Random Shape 
const repeatRandomShape = () => {
	setInterval(() => {
	shape1  = selectRandomShape(); 
	shape2  = selectRandomShape(); 
	//console.log(shape1); 
	//console.log(shape2); 

	const shape1Styles = "width:\${shape1.width + 'px'};background:\${shape1.color};height:\${shape1.height+ 'px'};"
	const shape2Styles = "width:\${shape2.width + 'px'};background:\${shape2.color};height:\${shape2.height + 'px'};"

	document.getElementById('shape1').style.cssText = shape1Styles; 
	document.getElementById('shape2').style.cssText = shape2Styles; 
}, 1000); 
}


//start game 

document.getElementById('play').onclick = () =>{
	playing = true; 
	repeatRandomShape(); 
}

//compare 
document.getElementById('match').onclick = () => {
	if(playing){
		if(Object.is(shape1, shape2)){
			currentScore ++; 
			document.getElementById('score').innerHTML = currentScore; 
		}else{
			currentScore--; 
			document.getElementById('score').innerHTML = currentScore; 		}

	}
}











