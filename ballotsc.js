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
    if (itemList.length > 0) {
        document.querySelector("#popup-1").classList.toggle("active");
        let list = "<ol id = 'candidate-list'>"
        for (let i = 0; i < itemList.length; i++) {
            list += `<li class = 'candidate-li'><span class = 'candidate-name'>${itemList[i]}</span></li>
        `;
        }
        list += '</ol>'
        document.querySelector(".candidateList-popup").innerHTML = list;
    } else {
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
            console.log(itemList.indexOf(item));
            //  this.id = `b-${itemList.indexOf(item).toString()}`;
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
            //  this.id = `b-${itemList.indexOf(item).toString()}`;
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
            //  this.id = `b-${itemList.indexOf(item).toString()}`;
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
            // this.id = `b-${itemList.indexOf(item).toString()}`;
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
            // this.id = `b-${itemList.indexOf(item).toString()}`;
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
            // this.id = `b-${itemList.indexOf(item).toString()}`;
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
            // this.id = `b-${itemList.indexOf(item).toString()}`;
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
            //this.id = `b-${itemList.indexOf(item).toString()}`;
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
            // this.id = `b-${itemList.indexOf(item).toString()}`;
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
            //this.id = `b-${itemList.indexOf(item).toString()}`;
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
            //this.id = `b-${itemList.indexOf(item).toString()}`;
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
            //this.id = `b-${itemList.indexOf(item).toString()}`;
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
            // this.id = `b-${itemList.indexOf(item).toString()}`;
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
            // this.id = `b-${itemList.indexOf(item).toString()}`;
        }
    }

    showList();
}


function showList() {
    let list = "<ul id = 'candidate-list'>"
    for (let i = 0; i < itemList.length; i++) {
        list += `<li class = 'candidate-li'><section class = 'candidate-data'><span class = 'candidate-name'>${itemList[i]}</span><section class = "up-down"><section class = "up-down-btns"><button type="button" class="upButton" value="up" id='${i}'>&#x25B2;</button>
        <button type="button" class="downButton" value="down" id='${i}'">&#x25BC;</button></section></section><span class='close' id='${i}'>&times;</span></section></li>
        `;
    }
    list += '</ul>'
    document.querySelector(".candidateList").innerHTML = list;

    //  candidateList.appendChild(candidateLi);
    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        const li = deleteButtons[i].parentElement;
        deleteButtons[i].onclick = () => {
            li.classList.add('delete-animation');
        }
        li.ontransitionend = () => {
            deleteItem(deleteButtons[i]);
            li.classList.remove('delete-animation');
        }
    }
    // down buttons
    const allLi = document.querySelectorAll('.candidate-li');
    for (let i = 0; i < allLi.length; i++) {
        const cName = allLi[i].querySelector(".candidate-name");
        cName.onclick = () => {
            deleteButtons.forEach(db => {
                const upDown = allLi[i].querySelector(".up-down");
                const section = allLi[i].querySelector('.candidate-data');
                section.classList.add('selected');
                allLi[i].classList.add('candidate-selected');
                upDown.classList.add('up-down-visible');
                db.classList.add('close-white');
                upArrows(deleteButtons, db);
                downArrows(deleteButtons)
                let otherCandidates = [...allLi].filter(arr => [...allLi].indexOf(arr) !== i);
                otherCandidates.forEach(oc => {
                    const otherSections = oc.querySelector('.candidate-data')
                    const otherArrows = oc.querySelector('.up-down');
                    const otherDeletes = oc.querySelector('.close');
                    if(oc.classList.contains('candidate-selected')) {
                        oc.classList.remove('candidate-selected');
                    }
                    if(otherSections.classList.contains('selected')) {
                        otherSections.classList.remove('selected');
                    }
                    if(otherArrows.classList.contains('up-down-visible')) {
                        otherArrows.classList.remove('up-down-visible');
                    }
                    if(otherDeletes.classList.contains('close-white')) {
                        otherDeletes.classList.remove('close-white')
                    }
                })
            });
        }


    }

    // up buttons
}

function upArrows(deleteButtons) {
    let upButtons = document.querySelectorAll(".upButton");
    for (let i = 0; i < deleteButtons.length; i++) {
        let li = deleteButtons[i].parentElement;
        upButtons[i].onclick = () => {
            upButton(upButtons[i])
           // li.classList.add('up-animation');
        }
        // li.ontransitionend = () => {
        //     upButton(upButtons[i])
        //     li.classList.remove('up-animation');
        // }
        
    }
}

function downArrows(deleteButtons) {
    let downButtons = document.querySelectorAll('.downButton');
    for (let i = 0; i < deleteButtons.length; i++) {
        let li = deleteButtons[i].parentElement;
        downButtons[i].onclick = () => {
            downButton(downButtons[i])
          //  li.classList.add('down-animation');
        }
        // li.ontransitionend = () => {
        //     downButton(downButtons[i])
        //     li.classList.remove('down-animation');
        // }
    }
}

function deleteItem(deleteBtn) {
    let id = deleteBtn.getAttribute("id");

    //  const candidateButtons = document.querySelector(".candidateButtons");
    //  const buttonToDeselect = candidateButtons.querySelector(`#b-${id}`);
    //  buttonToDeselect.style.backgroundColor = "white";
    // buttonToDeselect.style.color = "black";

    itemList.splice(id, 1);
    console.log(itemList);
    showList();
    //deleteBtn.classList.remove('delete-animation');

    // buttonToDeselect.removeAttribute('id');
}
// up button
function upButton(upBtn) {
    let id = upBtn.getAttribute('id');
    console.log(upBtn);
    let parseId = parseInt(id);
    let f = itemList.splice(parseId, 1)[0];
    if (parseId <= itemList.length) {
        //   const candidateButtons = document.querySelector(".candidateButtons");
        //   const buttonToDeselect = candidateButtons.querySelector(`#b-${id}`);
        console.log(f);
        itemList.splice(parseId - 1, 0, f);
        upBtn.id = parseId - 1;
        // buttonToDeselect.removeAttribute('id');
        // buttonToDeselect.setAttribute('id', `b-${parseId - 1}`);
    }
    showList();
}

// down button
function downButton(downBtn) {
    let id = downBtn.getAttribute('id');
    let parseId = parseInt(id);
    let f = itemList.splice(parseId, 1)[0];
    if (parseId <= itemList.length) {
        //    const candidateButtons = document.querySelector(".candidateButtons");
        //   const buttonToDeselect = candidateButtons.querySelector(`#b-${id}`);
        console.log(f);
        itemList.splice(parseId + 1, 0, f);
        downBtn.id = parseId + 1;
        //   buttonToDeselect.removeAttribute('id');
        // buttonToDeselect.setAttribute('id', `b-${parseId + 1}`);
    }
    showList();
}

let itemList = [];