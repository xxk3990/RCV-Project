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

const helpBtn = document.querySelector("#ballot-help-icon");
helpBtn.onclick = loadHelpPopup;

function loadHelpPopup() {
    document.querySelector('#help-popup').classList.toggle('active')
}
/*
click anywhere to select candidate (DONE)
candidate name position (left-aligned) (DONE)
candidate name should not move (DONE)
candidate name/dem weight difference (DONE), unable to do in list of five 
help pop-up
My Ballot box size should stay fixed (DONE)
My ballot border radius and color
My Ballot text alignment and content (DONE)
My Ballot line separating text and candidates (DONE)
My Ballot Need help? button on right side
Select a candidate text should be blue before selecting first candidate
little check mark icon^
submit and review same size
make sure all fonts are inter and correct weight (especially review page)
make sure all colors are correct, anything black should be #3a3a3a 

*/

function togglePopup() {
    if (itemList.length > 0) {
        document.querySelector("#popup-1").classList.toggle("active");
        let list = "<ol id = 'candidate-list'>"
        for (let i = 0; i < itemList.length; i++) {
            list += `<li class = 'candidate-li'><section class = 'candidate-data'><span class = 'candidate-name'>${itemList[i]}</span></section></li>
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
            const reviewBtn = document.querySelector(".postButton");
            reviewBtn.classList.add('submit-btn');
            itemList.push(item);
            this.style.backgroundColor = "#3272E9";
            this.style.color = "white";
            //console.log(itemList.indexOf(item));
            const bi = document.querySelector('.ballot-instructions')
            this.id = `b-${itemList.indexOf(item).toString()}`;
            if(itemList.length > 0 && itemList.length < 4 && !document.querySelector('.result').contains(bi)) {
                const result = document.querySelector('.result');
                result.insertAdjacentHTML('beforeend','<p class ="ballot-instructions"><strong>Review</strong> your ballot or <strong>select</strong> another candidate</p>')
            }
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
            const reviewBtn = document.querySelector(".postButton");
            reviewBtn.classList.add('submit-btn');
            itemList.push(item);
            this.style.backgroundColor = "#3272E9";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
            const bi = document.querySelector('.ballot-instructions');
            if(itemList.length > 0 && itemList.length < 4 && !document.querySelector('.result').contains(bi)) {
                const result = document.querySelector('.result');
                result.insertAdjacentHTML('beforeend','<p class ="ballot-instructions"><strong>Review</strong> your ballot or <strong>select</strong> another candidate</p>')
            }
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
            const reviewBtn = document.querySelector(".postButton");
            reviewBtn.classList.add('submit-btn');
            itemList.push(item);
            this.style.backgroundColor = "#3272E9";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
            const bi = document.querySelector('.ballot-instructions');
            if(itemList.length > 0 && itemList.length < 4 && !document.querySelector('.result').contains(bi)) {
                const result = document.querySelector('.result');
                result.insertAdjacentHTML('beforeend','<p class ="ballot-instructions"><strong>Review</strong> your ballot or <strong>select</strong> another candidate</p>')
            }
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
            const reviewBtn = document.querySelector(".postButton");
            reviewBtn.classList.add('submit-btn');
            itemList.push(item);
            this.style.backgroundColor = "#3272E9";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
            const bi = document.querySelector('.ballot-instructions');
            if(itemList.length > 0 && itemList.length < 4 && !document.querySelector('.result').contains(bi)) {
                const result = document.querySelector('.result');
                result.insertAdjacentHTML('beforeend','<p class ="ballot-instructions"><strong>Review</strong> your ballot or <strong>select</strong> another candidate</p>')
            }
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
            const reviewBtn = document.querySelector(".postButton");
            reviewBtn.classList.add('submit-btn');
            itemList.push(item);
            this.style.backgroundColor = "#3272E9";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
            const bi = document.querySelector('.ballot-instructions');
            if(itemList.length > 0 && itemList.length < 4 && !document.querySelector('.result').contains(bi)) {
                const result = document.querySelector('.result');
                result.insertAdjacentHTML('beforeend','<p class ="ballot-instructions"><strong>Review</strong> your ballot or <strong>select</strong> another candidate</p>')
            }
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
            const reviewBtn = document.querySelector(".postButton");
            reviewBtn.classList.add('submit-btn');
            itemList.push(item);
            this.style.backgroundColor = "#3272E9";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
            const bi = document.querySelector('.ballot-instructions');
            if(itemList.length > 0 && itemList.length < 4 && !document.querySelector('.result').contains(bi)) {
                const result = document.querySelector('.result');
                result.insertAdjacentHTML('beforeend','<p class ="ballot-instructions"><strong>Review</strong> your ballot or <strong>select</strong> another candidate</p>')
            }
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
            const reviewBtn = document.querySelector(".postButton");
            reviewBtn.classList.add('submit-btn');
            itemList.push(item);
            this.style.backgroundColor = "#3272E9";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
            const bi = document.querySelector('.ballot-instructions');
            if(itemList.length > 0 && itemList.length < 4 && !document.querySelector('.result').contains(bi)) {
                const result = document.querySelector('.result');
                result.insertAdjacentHTML('beforeend','<p class ="ballot-instructions"><strong>Review</strong> your ballot or <strong>select</strong> another candidate</p>')
            }
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
            const reviewBtn = document.querySelector(".postButton");
            reviewBtn.classList.add('submit-btn');
            itemList.push(item);
            this.style.backgroundColor = "#3272E9";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
            const bi = document.querySelector('.ballot-instructions');
            if(itemList.length > 0 && itemList.length < 4 && !document.querySelector('.result').contains(bi)) {
                const result = document.querySelector('.result');
                result.insertAdjacentHTML('beforeend','<p class ="ballot-instructions"><strong>Review</strong> your ballot or <strong>select</strong> another candidate</p>')
            }
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
            const reviewBtn = document.querySelector(".postButton");
            reviewBtn.classList.add('submit-btn');
            itemList.push(item);
            this.style.backgroundColor = "#3272E9";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
            const bi = document.querySelector('.ballot-instructions');
            if(itemList.length > 0 && itemList.length < 4 && !document.querySelector('.result').contains(bi)) {
                const result = document.querySelector('.result');
                result.insertAdjacentHTML('beforeend','<p class ="ballot-instructions"><strong>Review</strong> your ballot or <strong>select</strong> another candidate</p>')
            }
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
            const reviewBtn = document.querySelector(".postButton");
            reviewBtn.classList.add('submit-btn');
            itemList.push(item);
            this.style.backgroundColor = "#3272E9";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
            const bi = document.querySelector('.ballot-instructions');
            if(itemList.length > 0 && itemList.length < 4 && !document.querySelector('.result').contains(bi)) {
                const result = document.querySelector('.result');
                result.insertAdjacentHTML('beforeend','<p class ="ballot-instructions"><strong>Review</strong> your ballot or <strong>select</strong> another candidate</p>')
            }
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
            const reviewBtn = document.querySelector(".postButton");
            reviewBtn.classList.add('submit-btn');
            itemList.push(item);
            this.style.backgroundColor = "#3272E9";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
            const bi = document.querySelector('.ballot-instructions');
            if(itemList.length > 0 && itemList.length < 4 && !document.querySelector('.result').contains(bi)) {
                const result = document.querySelector('.result');
                result.insertAdjacentHTML('beforeend','<p class ="ballot-instructions"><strong>Review</strong> your ballot or <strong>select</strong> another candidate</p>')
            }
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
            const reviewBtn = document.querySelector(".postButton");
            reviewBtn.classList.add('submit-btn');
            itemList.push(item);
            this.style.backgroundColor = "#3272E9";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
            const bi = document.querySelector('.ballot-instructions');
            if(itemList.length > 0 && itemList.length < 4 && !document.querySelector('.result').contains(bi)) {
                const result = document.querySelector('.result');
                result.insertAdjacentHTML('beforeend','<p class ="ballot-instructions"><strong>Review</strong> your ballot or <strong>select</strong> another candidate</p>')
            }
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
            this.style.backgroundColor = "#3272E9";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
            const bi = document.querySelector('.ballot-instructions');
            if(itemList.length > 0 && itemList.length < 4 && !document.querySelector('.result').contains(bi)) {
                const result = document.querySelector('.result');
                result.insertAdjacentHTML('beforeend','<p class ="ballot-instructions"><strong>Review</strong> your ballot or <strong>select</strong> another candidate</p>')
            }
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
            this.style.backgroundColor = "#3272E9";
            this.style.color = "white";
            this.id = `b-${itemList.indexOf(item).toString()}`;
            const bi = document.querySelector('.ballot-instructions');
            if(itemList.length > 0 && itemList.length < 4 && !document.querySelector('.result').contains(bi)) {
                const result = document.querySelector('.result');
                result.insertAdjacentHTML('beforeend','<p class ="ballot-instructions"><strong>Review</strong> your ballot or <strong>select</strong> another candidate</p>')
            }
        }
    }

    showList();
}

let id;
function showList() {
    let list = "<ul id = 'candidate-list'>"
    for (let i = 0; i < itemList.length; i++) {
        list += `<li class = 'candidate-li'><section class = 'candidate-data'><span class = 'candidate-name'>${itemList[i]}</span><span class='close' id='${i}'>&times;</span></section><section class = "up-down"><section class = "up-down-btns"><button type="button" class="upButton" value="up" id='${i}'>&#x25B2;</button>
        <button type="button" class="downButton" value="down" id='${i}'">&#x25BC;</button></section></section></li>
        `;
    }
    list += '</ul>'
    document.querySelector(".candidateList").innerHTML = list;
    if(itemList.length === 5) {
        const result = document.querySelector('.result');
        const instructions = result.querySelector('.ballot-instructions')
        instructions.style.display = "none";
    } else {
        const result = document.querySelector('.result');
        const instructions = result.querySelector('.ballot-instructions')
        instructions.style.display = "block"
    }
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
        allLi[i].onclick = () => {
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
    

    //  const candidateButtons = document.querySelector(".candidateButtons");
    //  const buttonToDeselect = candidateButtons.querySelector(`#b-${id}`);
    //  buttonToDeselect.style.backgroundColor = "white";
    // buttonToDeselect.style.color = "black";

function deleteItem(deleteBtn) {
    let id = deleteBtn.getAttribute("id");
    console.log(id);
    let parseId = parseInt(id);
    const candidateButtons = document.querySelector(".candidateButtons");
    const buttonToDeselect = candidateButtons.querySelector(`#b-${id}`);

    //console.log(buttonToDeselect.id);
    buttonToDeselect.style.backgroundColor = "white";
    buttonToDeselect.style.color = "black";
    itemList.splice(id, 1);
    console.log(itemList);
    const reviewBtn = document.querySelector(".postButton");
   
    if(itemList.length === 0 && reviewBtn.classList.contains('submit-btn')) {
        reviewBtn.classList.remove('submit-btn');
    }
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

    }
    if(parseId == 3){
        const btd10 = candidateButtons.querySelector(`#b-${4}`);
        btd10.setAttribute('id', `b-${3}`);

    }


    

}
// up button
function upButton(upBtn) {
    let id = upBtn.getAttribute('id');
    console.log(upBtn);
    let parseId = parseInt(id);
    let f = itemList.splice(parseId, 1)[0];
    if (parseId <= itemList.length) {
        const candidateButtons = document.querySelector(".candidateButtons");
        const buttonToDeselect = candidateButtons.querySelector(`#b-${id}`);
        //console.log(f);
        itemList.splice(parseId - 1, 0, f);
        upBtn.id = parseId - 1;
        // buttonToDeselect.removeAttribute('id');
        // buttonToDeselect.setAttribute('id', `b-${parseId - 1}`);
        if(parseId == 1){
            const btda = candidateButtons.querySelector(`#b-${0}`);
            const btdb = candidateButtons.querySelector(`#b-${1}`);

            btda.setAttribute('id', `b-${1}`);
            btdb.setAttribute('id', `b-${0}`);
        }
        if(parseId == 2){
            const btda = candidateButtons.querySelector(`#b-${1}`);
            const btdb = candidateButtons.querySelector(`#b-${2}`);

            btda.setAttribute('id', `b-${2}`);
            btdb.setAttribute('id', `b-${1}`);
        }

        if(parseId == 3){
            const btda = candidateButtons.querySelector(`#b-${2}`);
            const btdb = candidateButtons.querySelector(`#b-${3}`);

            btda.setAttribute('id', `b-${3}`);
            btdb.setAttribute('id', `b-${2}`);
        }
        if(parseId == 4){
            const btda = candidateButtons.querySelector(`#b-${3}`);
            const btdb = candidateButtons.querySelector(`#b-${4}`);

            btda.setAttribute('id', `b-${4}`);
            btdb.setAttribute('id', `b-${3}`);
        }
    }
    showList();
}

// down button
function downButton(downBtn) {
    let id = downBtn.getAttribute('id');
    let parseId = parseInt(id);
    let f = itemList.splice(parseId, 1)[0];
    if (parseId <= itemList.length) {
        const candidateButtons = document.querySelector(".candidateButtons");
        const buttonToDeselect = candidateButtons.querySelector(`#b-${id}`);
        //console.log(f);
        itemList.splice(parseId + 1, 0, f);
        downBtn.id = parseId + 1;
        //   buttonToDeselect.removeAttribute('id');
        // buttonToDeselect.setAttribute('id', `b-${parseId + 1}`);
        if(parseId == 0){
            const btda = candidateButtons.querySelector(`#b-${1}`);
            const btdb = candidateButtons.querySelector(`#b-${0}`);

            btda.setAttribute('id', `b-${0}`);
            btdb.setAttribute('id', `b-${1}`);
        }

        
        if(parseId == 1){
            const btda = candidateButtons.querySelector(`#b-${2}`);
            const btdb = candidateButtons.querySelector(`#b-${1}`);

            btda.setAttribute('id', `b-${1}`);
            btdb.setAttribute('id', `b-${2}`);
        }

        if(parseId == 2){
            const btda = candidateButtons.querySelector(`#b-${3}`);
            const btdb = candidateButtons.querySelector(`#b-${2}`);

            btda.setAttribute('id', `b-${2}`);
            btdb.setAttribute('id', `b-${3}`);
        }
        if(parseId == 3){
            const btda = candidateButtons.querySelector(`#b-${4}`);
            const btdb = candidateButtons.querySelector(`#b-${3}`);

            btda.setAttribute('id', `b-${3}`);
            btdb.setAttribute('id', `b-${4}`);
        }
    }
    showList();
}

let itemList = [];