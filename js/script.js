const builder = document.getElementById("builder");
const selector = document.getElementById("element-selector");
const textbox = document.getElementById("inline-text");
document.getElementById("event-builder").addEventListener("click",test);
selector.addEventListener("change", selectElement);
textbox.addEventListener("input", updateElement)

const elements = [];
let selectedElement = undefined;
let selectedIndex = 0;

function AddElement(tagname) {
    let input = textbox.value;
    //to be added more Hs
    let newElement = document.createElement(tagname);
    if (input.length == 0 && tagname != "hr") {
        newElement.innerText = `${tagname} element`;
    }
    else if (input.length != 0 && tagname != "hr" ) {
        newElement.innerText = input;
    } 
    addToSelector(newElement.innerText);
    builder.appendChild(newElement);
    elements.push(newElement);
}

function addToSelector(name){
    let option = document.createElement("option");
    option.innerText = name;
    option.value = elements.length;
    selector.appendChild(option);

}

function selectElement(){
    selectedElement = elements[this.value]
    selectedIndex = this.value
    if(selectedElement){
        textbox.value = selectedElement.innerText
    }
}

function updateElement(){
    if(selectedElement){
        selectedElement.innerText = textbox.value
        selector.children[selectedIndex].innerText = textbox.value
    }
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