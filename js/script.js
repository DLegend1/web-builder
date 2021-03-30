const builder = document.getElementById("builder");
document.getElementById("event-builder").addEventListener("click",test);
const selector = document.getElementById("element-selector");


function AddElement(tagname) {
    let input = document.getElementById("inline-text").value;
    //to be added more Hs
    let newElement = document.createElement(tagname);
    if (input.length == 0 && tagname != "hr") {
        newElement.innerText = `${tagname} element`;
    }
    else if (input.length != 0 && tagname != "hr" ) {
        newElement.innerText = input;
    } 
    addToSelector(tagname);
    builder.appendChild(newElement);
}

function addToSelector(tagname){
    let option = document.createElement("option");
    option.innerText = tagname;
    option.value = 1;
    selector.appendChild(option);

}

function test(){
    debugger;
    var children = builder.children;
    for (let index = 0; index < children.length; index++) {
        const newButton = document.createElement("button");
        newButton.className += "builder-button";
        newButton.innerText = `Element ${index}`;
        newButton.addEventListener("click", e => { alert(e.target.innerText) })
        children[index].appendChild(newButton);
    }
}
function prevent(e) {
    e.preventDefault();
}

function test2(){
    debugger;
    const children = builder.children;
    const newButton = document.createElement("button");
    newButton.className += "builder-button";
    children.length.forEach(element => {
        newButton.innerText = `Element ${index}`;
        children.append(newButton);
    });
}