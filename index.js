async function getQuoteData() {
    let data = await fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .catch(error => console.log("Error"));
    console.log(data);
    displayQuoteData(data);
}

let red;
let blue;
let green;

let displayQuoteData = (data) => {
    let quote = data.content;
    let author = data.author;
    document.getElementById("quote").innerHTML = "\"" + quote + "\"";
    document.getElementById("author").innerHTML = "-" + author; 
    document.getElementById('body').style.transition = 'background-color 0.5s ease';
    generate_randomColor();
    document.getElementById('body').style.background = `rgb(${red}, ${blue}, ${green})`;
};

let generate_randomColor = () => {
    red = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
}
