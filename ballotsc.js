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

function togglePopup(){
    document.querySelector("#popup-1").classList.toggle("active");

    document.querySelector(".candidateList-popup").innerHTML = itemList;

  }

let candidateLi = document.querySelectorAll("#candidate-list li");

function button1F () {
    let item = document.querySelector(".button1").value;
    if(itemList.includes(item) == false) {
        if(itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
        }
    }

    showList();
}

function button2F () {

    let item = document.querySelector(".button2").value;
    if(itemList.includes(item) == false) {
        if(itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
        }
    }

    showList();
}

function button3F () {
    let item = document.querySelector(".button3").value;
    if(itemList.includes(item) == false) {
        if(itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
        }
    }

    showList();
}

function button4F () {
    let item = document.querySelector(".button4").value;
    if(itemList.includes(item) == false) {
        if(itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
        }
    }

    showList();
}

function button5F () {
    let item = document.querySelector(".button5").value;
    if(itemList.includes(item) == false) {
        if(itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
        }
    }

    showList();
}

function button6F () {
    let item = document.querySelector(".button6").value;
    if(itemList.includes(item) == false) {
        if(itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
        }
    }

    showList();
}

function button7F () {
    let item = document.querySelector(".button7").value;
    if(itemList.includes(item) == false) {
        if(itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
        }
    }

    showList();
}

function button8F () {
    let item = document.querySelector(".button8").value;
    if(itemList.includes(item) == false) {
        if(itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
        }
    }

    showList();
}

function button9F () {
    let item = document.querySelector(".button9").value;
    if(itemList.includes(item) == false) {
        if(itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
        }
    }

    showList();
}

function button10F () {
    let item = document.querySelector(".button10").value;
    if(itemList.includes(item) == false) {
        if(itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
        }
    }

    showList();
}

function button11F () {
    let item = document.querySelector(".button11").value;
    if(itemList.includes(item) == false) {
        if(itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
        }
    }

    showList();
}

function button12F () {
    let item = document.querySelector(".button12").value;
    if(itemList.includes(item) == false) {
        if(itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
        }
    }

    showList();
}

function button13F () {
    let item = document.querySelector(".button13").value;
    if(itemList.includes(item) == false) {
        if(itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
        }
    }

    showList();
}

function button14F () {
    let item = document.querySelector(".button14").value;
    if(itemList.includes(item) == false) {
        if(itemList.length === 5) {
            return;
        } else {
            itemList.push(item);
        }
    }

    showList();
}


function showList() {
    let list = "<ol id = 'candidate-list'>"
    for (let i = 0; i <itemList.length; i++) {
        list += `<li class = 'candidate-li'><span class = 'candidate-name'>${itemList[i]}</span><span class='close' id='${i}'>&times;</span></li>
        <input type="button" class="upButton" value="up" id='${i}'"/>
        <input type="button" class="downButton" value="down" id='${i}'"/>
        `;
    }
    list += '</ol>'
    document.querySelector(".candidateList").innerHTML = list;

  //  candidateList.appendChild(candidateLi);
    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }
    // down buttons
    let downButtons = document.querySelectorAll(".downButton");
    for (let i = 0; i < deleteButtons.length; i++) {
        downButtons[i].addEventListener("click", downButton);
    }

    // up buttons
    let upButtons = document.querySelectorAll(".upButton");
    for (let i = 0; i < deleteButtons.length; i++) {
        upButtons[i].addEventListener("click", upButton);
    }
}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}
// up button
function upButton(){
    let id = this.getAttribute("id");
    console.log(`up button with ${itemList[id]}`);
    showList();
}

// down button
function downButton(){
    let id = this.getAttribute("id");
    console.log(`down button with ${itemList[id]}`);

    let f = itemList.splice(id, 1)[0];
    if(id !== 0 && id < itemList.length){
        itemList.splice(id-1, 0, f);
    }
    showList();
}

let itemList = [];
