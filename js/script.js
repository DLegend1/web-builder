const builder = document.getElementById("builder");


function AddElement(tagname) {
    var input = document.getElementById("inline-text").value;
    //to be added more Hs
    const newElement = document.createElement(tagname);
    debugger;
    if (input.length == 0 && tagname != "hr") {
        newElement.innerText = `${tagname} element`;
    }
    else if (input.length != 0 && tagname != "hr" ) {
        newElement.innerText = input;
    } 

    builder.appendChild(newElement);
}
