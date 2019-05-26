function showFact1() {
    if (fact1.style.display == "none") {
        document.getElementById("fact1").setAttribute("style", "display: block");
        document.getElementById("n1").setAttribute("style", "display: none");
    } else {
        document.getElementById("fact1").setAttribute("style", "display: none");
        document.getElementById("n1").setAttribute("style", "display: block");
    }
}

function showFact2() {
    if (fact2.style.display == "none") {
        document.getElementById("fact2").setAttribute("style", "display: block");
        document.getElementById("n2").setAttribute("style", "display: none");
    } else {
        document.getElementById("fact2").setAttribute("style", "display: none");
        document.getElementById("n2").setAttribute("style", "display: block");
    }
}

function showFact3() {
    if (fact3.style.display == "none") {
        document.getElementById("fact3").setAttribute("style", "display: block");
        document.getElementById("n3").setAttribute("style", "display: none");
    } else {
        document.getElementById("fact3").setAttribute("style", "display: none");
        document.getElementById("n3").setAttribute("style", "display: block");
    }
}

function showFact4() {
    if (fact4.style.display == "none") {
        document.getElementById("fact4").setAttribute("style", "display: block");
        document.getElementById("n4").setAttribute("style", "display: none");
    } else {
        document.getElementById("fact4").setAttribute("style", "display: none");
        document.getElementById("n4").setAttribute("style", "display: block");
    }
}

function showFact5() {
    if (fact5.style.display == "none") {
        document.getElementById("fact5").setAttribute("style", "display: block");
        document.getElementById("n5").setAttribute("style", "display: none");
    } else {
        document.getElementById("fact5").setAttribute("style", "display: none");
        document.getElementById("n5").setAttribute("style", "display: block");
    }
}

function showFact6() {
    if (fact6.style.display == "none") {
        document.getElementById("fact6").setAttribute("style", "display: block");
        document.getElementById("n6").setAttribute("style", "display: none");
    } else {
        document.getElementById("fact6").setAttribute("style", "display: none");
        document.getElementById("n6").setAttribute("style", "display: block");
    }
}

//end of fun fact script - start of script for api//

fetch("http://api.open-notify.org/astros.json")
.then (function(response) {
    return response.json();
}) 
.then (function(response){
    console.log(response);
    console.log(response.number);
    getInfo(response);
    peopleInSpace(response);
});

function getInfo(response) {
    for(let i=0; i<response.people.length; i++) {
        createAstronautCard(response.people[i]);
    }
}

function createAstronautCard(object) {
    let cardContainer = document.getElementById("cardcontainer");
    let card = document.createElement("div");
    let imageContainer = document.createElement("div");
    let infoContainer = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardName = document.createElement("h4");
    let personName = document.createElement("p");
    let cardCraft = document.createElement("h4");
    let craftName = document.createElement("p");

    cardContainer.appendChild(card);
    card.appendChild(imageContainer);
    card.appendChild(infoContainer);
    imageContainer.appendChild(cardImage);
    infoContainer.appendChild(cardName);
    infoContainer.appendChild(personName);
    infoContainer.appendChild(cardCraft);
    infoContainer.appendChild(craftName);
    imageContainer.setAttribute("class", "image_box");
    infoContainer.setAttribute("class", "info_box");
    card.setAttribute("class", "card");

    cardName.innerHTML = "Name:";
    personName.innerHTML = object.name;
    cardCraft.innerHTML = "Craft:";
    craftName.innerHTML = object.craft;
    cardImage.setAttribute("src", "photos/astronaut_icon.png");
}

function peopleInSpace(response) {
    let spaceWrapper = document.getElementById("section_title");
    let inSpace = document.createElement("div");
    let numberSpace = document.createElement("h3");
    spaceWrapper.appendChild(inSpace);
    inSpace.appendChild(numberSpace);
    inSpace.setAttribute("class", "people_space");

    numberSpace.innerHTML = "There's currently this many people in space:" + " " + response.number;
}

//timeline show hide toggle//

function displayTimeline() {
    if (hidden_timeline.style.display == "none") {
        document.getElementById("hidden_timeline").setAttribute("style", "display: block");
    } else {
        document.getElementById("hidden_timeline").setAttribute("style", "display: none");
    }
}



