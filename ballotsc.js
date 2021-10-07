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

function button1F () {
    console.log(itemList);
    let item = document.querySelector(".button1").value;

    itemList.push(item);
    
    showList();
}

function button2F () {
    let item = document.querySelector(".button2").value;
    itemList.push(item);

    showList();
}

function button3F () {
    let item = document.querySelector(".button3").value;
    itemList.push(item);

    showList();
}

function button4F () {
    let item = document.querySelector(".button4").value;
    itemList.push(item);

    showList();
}

function button5F () {
    let item = document.querySelector(".button5").value;
    itemList.push(item);

    showList();
}

function button6F () {
    let item = document.querySelector(".button6").value;
    itemList.push(item);

    showList();
}

function button7F () {
    let item = document.querySelector(".button7").value;
    itemList.push(item);

    showList();
}

function button8F () {
    let item = document.querySelector(".button8").value;
    itemList.push(item);

    showList();
}

function button9F () {
    let item = document.querySelector(".button9").value;
    itemList.push(item);

    showList();
}

function button10F () {
    let item = document.querySelector(".button10").value;
    itemList.push(item);

    showList();
}

function button11F () {
    let item = document.querySelector(".button11").value;
    itemList.push(item);

    showList();
}

function button12F () {
    let item = document.querySelector(".button12").value;
    itemList.push(item);

    showList();
}

function button13F () {
    let item = document.querySelector(".button13").value;
    itemList.push(item);

    showList();
}

function button14F () {
    let item = document.querySelector(".button14").value;
    itemList.push(item);

    showList();
}

function showList() {
    let list = "<ul>"
    for (let i = 0; i <itemList.length; i++) {
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">" + "&times;" + "</span></li>";
    }
    list += "</ul>";
    document.querySelector(".candiateList").innerHTML = list;


    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }
}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}

let itemList = [];
