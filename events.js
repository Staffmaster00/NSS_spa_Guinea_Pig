let articles = document.getElementsByClassName("article-section");
let lonelyH1 = document.getElementById("page-title");
let output = document.getElementById("output-target");
let input = document.getElementById("keypress-input");
let colorBtn = document.getElementById("add-color");
let sizeBtn = document.getElementById("make-large");
let borderBtn = document.getElementById("add-border");
let roundBtn = document.getElementById("add-rounding");
for (i = 0; i < articles.length; i++) {
    articles[i].addEventListener("click", function(event) {
        let location = event.target.id;
        output.innerHTML = `You clicked on the ${location} section`;
    })
};
lonelyH1.addEventListener("mouseenter", function() {
    output.innerHTML = `You moved your mouse over the header.`
});
lonelyH1.addEventListener("mouseleave", function() {
    output.innerHTML = `You left me!`
});
console.log("inputValue outside", input.value);
input.addEventListener("keyup", function() {
    output.innerHTML = input.value
});
colorBtn.addEventListener("click", function(){
	output.classList.toggle("color")
});
sizeBtn.addEventListener("click", function(){
	output.classList.toggle("size")
});
borderBtn.addEventListener("click", function(){
	output.classList.toggle("border")
});
roundBtn.addEventListener("click", function(){
	output.classList.toggle("round")
});

