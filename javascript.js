const container = document.querySelector('#container');


let input = MyFunction();


for(let i = 0; i< input; i++)
{
    for(let j = 0; j< input; j++)
    {
        const element = document.createElement("div");
        container.appendChild(element);
        element.classList.add("content");

    }
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", MyFunction);

function MyFunction() {
    return prompt("Number dena behenchod");
}

if(input >= 100)
{
    alert("Limit Exceeded");
}