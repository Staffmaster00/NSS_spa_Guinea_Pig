let articles = document.getElementsByClassName("article-section");
for (i = 0; i < articles.length; i++) {
    articles[i].addEventListener("click", function(event) {
        console.log("functioning?", event);

        let location = event.target.id;
        
        document.getElementById("output-target").innerHTML = `You clicked on the ${location} section`;
    })
};

let lonelyH1 = document.getElementById("page-title");
let output = document.getElementById("output-target")
lonelyH1.addEventListener("mouseenter", function(){
	output.innerHTML = `You moved your mouse over the header.`
});
lonelyH1.addEventListener("mouseleave", function(){
	output.innerHTML = `You left me!`
})