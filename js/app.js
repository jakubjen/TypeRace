const template = [
    "Testowyraz",
	"ala ma kota",
];

const index = Math.floor(Math.random()*template.length);
const textToEnter = template[index];

const textDisplay = document.querySelector(".textContainer .display");
textDisplay.innerText='';
[...textToEnter].forEach((char, i) => {
    const newSpan = document.createElement('span');
		newSpan.innerText = char;
		newSpan.classList.add(`char`)
		newSpan.classList.add(`char${i}`)
		textDisplay.appendChild(newSpan);
});

const textInput = document.querySelector('#textInput');
textInput.value="";

textInput.addEventListener('input', (e) => {
	let correct = true;
	[...textToEnter].forEach((char, i) => {
		console.log(correct);
		const value = e.target.value;
		const charSpan = document.querySelector(`.char${i}`);
		if(value[i]===char && correct === true) {
			charSpan.classList.add("correct");
			if(i===textToEnter.length-1){
				alert('You win!');
			}
		} else {
			charSpan.classList.remove("correct");
			correct = false;
		}
	});
});
