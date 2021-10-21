let button1 = document.querySelector(".button1");
button1.addEventListener("click", button1F);
let button2 = document.querySelector(".button2");
button2.addEventListener("click", button2F);
let button3 = document.querySelector(".button3");
button3.addEventListener("click", button3F);
let button4 = document.querySelector(".button4");
button4.addEventListener("click", button4F);
let button5 = document.querySelector(".button5");
button5.addEventListener("click", button5F);
let button6 = document.querySelector(".button6");
button6.addEventListener("click", button6F);
let button7 = document.querySelector(".button7");
button7.addEventListener("click", button7F);
let button8 = document.querySelector(".button8");
button8.addEventListener("click", button8F);
let button9 = document.querySelector(".button9");
button9.addEventListener("click", button9F);
let button10 = document.querySelector(".button10");
button10.addEventListener("click", button10F);
let button11 = document.querySelector(".button11");
button11.addEventListener("click", button11F);
let button12 = document.querySelector(".button12");
button12.addEventListener("click", button12F);
let button13 = document.querySelector(".button13");
button13.addEventListener("click", button13F);
let button14 = document.querySelector(".button14");
button14.addEventListener("click", button14F);

function togglePopup() {
    if(itemList.length > 0){
    document.querySelector("#popup-1").classList.toggle("active");
    let list = "<ol id = 'candidate-list'>"
    for (let i = 0; i <itemList.length; i++) {
        list += `<li class = 'candidate-li'><span class = 'candidate-name'>${itemList[i]}</span></li>
        `;
    }
    list += '</ol>'
    document.querySelector(".candidateList-popup").innerHTML = list;
    }
    else{
        alert("Choose at least one candidate.");
    }
}

//let candidateLi = document.querySelectorAll("#candidate-list li");

function button1F() {
    let item = document.querySelector(".button1").value;
    if (itemList.includes(item) == false) {
        if (itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
            this.style.backgroundColor = "#446CD1";
            this.style.color = "white";
            //console.log(itemList.indexOf(item));
            this.id = `b-${itemList.indexOf(item).toString()}`;
        }
    }

    showList();
}

function button2F() {

    let item = document.querySelector(".button2").value;
    if (itemList.includes(item) == false) {
        if (itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
            this.style.backgroundColor = "#446CD1";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
        }
    }

    showList();
}

function button3F() {
    let item = document.querySelector(".button3").value;
    if (itemList.includes(item) == false) {
        if (itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
            this.style.backgroundColor = "#446CD1";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
        }
    }

    showList();
}

function button4F() {
    let item = document.querySelector(".button4").value;
    if (itemList.includes(item) == false) {
        if (itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
            this.style.backgroundColor = "#446CD1";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
        }
    }

    showList();
}

function button5F() {
    let item = document.querySelector(".button5").value;
    if (itemList.includes(item) == false) {
        if (itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
            this.style.backgroundColor = "#446CD1";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
        }
    }

    showList();
}

function button6F() {
    let item = document.querySelector(".button6").value;
    if (itemList.includes(item) == false) {
        if (itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
            this.style.backgroundColor = "#446CD1";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
        }
    }

    showList();
}

function button7F() {
    let item = document.querySelector(".button7").value;
    if (itemList.includes(item) == false) {
        if (itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
            this.style.backgroundColor = "#446CD1";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
        }
    }

    showList();
}

function button8F() {
    let item = document.querySelector(".button8").value;
    if (itemList.includes(item) == false) {
        if (itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
            this.style.backgroundColor = "#446CD1";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
        }
    }

    showList();
}

function button9F() {
    let item = document.querySelector(".button9").value;
    if (itemList.includes(item) == false) {
        if (itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
            this.style.backgroundColor = "#446CD1";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
        }
    }

    showList();
}

function button10F() {
    let item = document.querySelector(".button10").value;
    if (itemList.includes(item) == false) {
        if (itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
            this.style.backgroundColor = "#446CD1";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
        }
    }

    showList();
}

function button11F() {
    let item = document.querySelector(".button11").value;
    if (itemList.includes(item) == false) {
        if (itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
            this.style.backgroundColor = "#446CD1";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
        }
    }

    showList();
}

function button12F() {
    let item = document.querySelector(".button12").value;
    if (itemList.includes(item) == false) {
        if (itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
            this.style.backgroundColor = "#446CD1";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
        }
    }

    showList();
}

function button13F() {
    let item = document.querySelector(".button13").value;
    if (itemList.includes(item) == false) {
        if (itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
            this.style.backgroundColor = "#446CD1";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
        }
    }

    showList();
}

function button14F() {
    let item = document.querySelector(".button14").value;
    if (itemList.includes(item) == false) {
        if (itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
            this.style.backgroundColor = "#446CD1";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
        }
    }

    showList();
}

let id;
function showList() {
    let list = "<ul id = 'candidate-list'>"
    for (let i = 0; i < itemList.length; i++) {
        list += `<li class = 'candidate-li'><span class = 'candidate-name'>${itemList[i]}</span><section class = "up-down"><section class = "up-down-btns"><button type="button" class="upButton" value="up" id='${i}'>&#x25B2;</button>
        <button type="button" class="downButton" value="down" id='${i}'">&#x25BC;</button></section></section><span class='close' id='${i}'>&times;</span></li>
        `;
    }
    list += '</ul>'
    document.querySelector(".candidateList").innerHTML = list;

    //  candidateList.appendChild(candidateLi);
    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }
    // down buttons
    const allLi = document.querySelectorAll(".candidate-li");

    for (let i = 0; i < allLi.length; i++) {
        allLi[i].onclick = () => {
            deleteButtons.forEach(db => {
                showArrows(allLi[i], deleteButtons, db)
                //let otherCandidates = [...allLi].filter(arr => [...allLi].indexOf(arr) !== i);
                //otherCandidates.forEach(oc => {
                //    oc.classList.add('disabled')
                //})
            });
        }
    }
    // up buttons
}

function showArrows(listItem, deleteButtons, closeBtn) {
    const upDown = listItem.querySelector(".up-down");
    upDown.style.display = "block";
    upDown.style.float = "right";
    listItem.style.backgroundColor = "#3272E9";
    listItem.style.color = "white";
    closeBtn.style.color = "white";
    closeBtn.style.marginRight = "30px";
    let upButtons = document.querySelectorAll(".upButton");
    for (let i = 0; i < deleteButtons.length; i++) {
        upButtons[i].addEventListener('click', upButton);
    }
    let downButtons = document.querySelectorAll('.downButton');
    for (let i = 0; i < deleteButtons.length; i++) {
        downButtons[i].addEventListener('click', downButton);
    }
}

function deleteItem() {
    let id = this.getAttribute("id");
    console.log(id);
    let parseId = parseInt(id);
    const candidateButtons = document.querySelector(".candidateButtons");
    const buttonToDeselect = candidateButtons.querySelector(`#b-${id}`);

    //console.log(buttonToDeselect.id);
    buttonToDeselect.style.backgroundColor = "white";
    buttonToDeselect.style.color = "black";
    itemList.splice(id, 1);
    showList();
    buttonToDeselect.removeAttribute('id');
    // const buttonToDeselect2 = candidateButtons.querySelector(`#b-${parseId+1}`);
    // buttonToDeselect2.setAttribute('id', `b-${parseId}`);

    if(parseId == 0){
        const btd1 = candidateButtons.querySelector(`#b-${1}`);
        btd1.setAttribute('id', `b-${0}`);
        const btd2 = candidateButtons.querySelector(`#b-${2}`);
        btd2.setAttribute('id', `b-${1}`);
        const btd3 = candidateButtons.querySelector(`#b-${3}`);
        btd3.setAttribute('id', `b-${2}`);
        const btd4 = candidateButtons.querySelector(`#b-${4}`);
        btd4.setAttribute('id', `b-${3}`);
    }

    if(parseId == 1){
        const btd5 = candidateButtons.querySelector(`#b-${2}`);
        btd5.setAttribute('id', `b-${1}`);
        const btd6 = candidateButtons.querySelector(`#b-${3}`);
        btd6.setAttribute('id', `b-${2}`);
        const btd7 = candidateButtons.querySelector(`#b-${4}`);
        btd7.setAttribute('id', `b-${3}`);
    }
    if(parseId == 2){
        const btd8 = candidateButtons.querySelector(`#b-${3}`);
        btd8.setAttribute('id', `b-${2}`);
        const btd9 = candidateButtons.querySelector(`#b-${4}`);
        btd9.setAttribute('id', `b-${3}`);
        // const buttonToDeselect4 = candidateButtons.querySelector(`#b-${4}`);
        // buttonToDeselect4.setAttribute('id', `b-${3}`);
    }
    if(parseId == 3){
        const btd10 = candidateButtons.querySelector(`#b-${4}`);
        btd10.setAttribute('id', `b-${3}`);
        // const buttonToDeselect6 = candidateButtons.querySelector(`#b-${4}`);
        // buttonToDeselect6.setAttribute('id', `b-${3}`);
        // const buttonToDeselect4 = candidateButtons.querySelector(`#b-${4}`);
        // buttonToDeselect4.setAttribute('id', `b-${3}`);
    }
    // const buttonToDeselect2 = candidateButtons.querySelector(`#b-${temp+1}`);
    // buttonToDeselect2.setAttribute('id', `b-${0}`);

    

}
// up button
function upButton() {
    let id = this.getAttribute('id');
    let parseId = parseInt(id);
    let f = itemList.splice(parseId, 1)[0];
    if (parseId <= itemList.length) {
        const candidateButtons = document.querySelector(".candidateButtons");
        const buttonToDeselect = candidateButtons.querySelector(`#b-${id}`);
        //console.log(f);
        itemList.splice(parseId - 1, 0, f);
        this.id = parseId - 1;
        //buttonToDeselect.removeAttribute('id');
        //buttonToDeselect.setAttribute('id', `b-${parseId - 1}`);
    }
    showList();
}

// down button
function downButton() {
    let id = this.getAttribute('id');
    let parseId = parseInt(id);
    let f = itemList.splice(parseId, 1)[0];
    if (parseId <= itemList.length) {
        const candidateButtons = document.querySelector(".candidateButtons");
        const buttonToDeselect = candidateButtons.querySelector(`#b-${id}`);
        //console.log(f);
        itemList.splice(parseId + 1, 0, f);
        this.id = parseId + 1;
        //buttonToDeselect.removeAttribute('id');
        //buttonToDeselect.setAttribute('id', `b-${parseId + 1}`);
    }
    showList();
}

let itemList = [];