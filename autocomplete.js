var DropDown=null;
alert("#autocomplete-add#");
document.addEventListener('DOMContentLoaded', function () {
    
    inputs = document.getElementsByTagName("input");
    console.log("found " + inputs.length + " inputs");
    for(i = 0; i <inputs.length; i++){
        inputs[i].addEventListener('input',OnFocusGet)
        //inputs[i].addEventListener('focusout',OnFocusLost);
        inputs[i].addEventListener('keydown',OnInputKey);
    }

});

function OnFocusGet(element){
    
    var value = element.originalTarget.value;
    var input = element.originalTarget;
    if(input.nextElementSibling == null || input.nextElementSibling.className != ".autocomplete-dropdown"){
        input.parentNode.insertBefore(makeDropDown(["Test","Auto"]),input.nextElementSibling);
    }
    alert("created "+ DropDown.className);
}
function OnFocusLost(element){
    
    DropDown.parentElement.removeChild(DropDown);
    DropDown = null;
}
function OnSelectElement(element){
    DropDown.previousElementSibling.value = element.originalTarget.innerText;
}
function OnInputKey(key){
    //if(key == )
}

function makeDropDown(values){
    if(DropDown != null){
        DropDown.parentElement.removeChild(DropDown);
    }
    DropDown = document.createElement("div");
    DropDown.className = "autocomplete-dropdown";
    DropDown.setAttribute("data-focused",1);
    for(i=0;i< values.length;i++){
        var Child = document.createElement("p");
        Child.nodeName = "value "+i;
        Child.innerText = values[i];
        Child.addEventListener("mousedown",OnSelectElement);
        DropDown.appendChild(Child)
    }
    
    return DropDown;
}