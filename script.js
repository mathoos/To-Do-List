var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");



// Petite fonction pour retourner la longueur de l'input

function inputLength(){
    return input.value.length;
}

// fonction principale : créer un élément et le rajouter à la liste

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";


    // fonction pour valider une tâche

    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    // Rajouter le bouton pour suprimmer une tâche

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("x"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    // Créer la fonction pour supprimer la tâche 

    function deleteListItem(){
        li.classList.add("delete");
        dBtn.classList.add("delete")
    }
}

// Fonction pour créer une nouvelle tâche

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.which === 13){ // Le 13 équivaut à la touche "entrée" du clavier
        createListElement();

    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

