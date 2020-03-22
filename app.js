const refresh = document.getElementById('refresh');
const listContainer = document.querySelector('.list-container');
const item = document.getElementsByClassName('list-item');
const addItemIcon = document.getElementById('plus');
const inputText = document.getElementById('input-text');
let innerDay = document.getElementById('day')
let fullDate = new Date();

// Create the day not the number
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
let wDay = weekday[fullDate.getDay()];

// Create the month not the number
var numMonth = new Array();
numMonth[0] = "January";
numMonth[1] = "February";
numMonth[2] = "March";
numMonth[3] = "April";
numMonth[4] = "May";
numMonth[5] = "June";
numMonth[6] = "July";
numMonth[7] = "August";
numMonth[8] = "September";
numMonth[9] = "October";
numMonth[10] = "November";
numMonth[11] = "December";
let month = numMonth[fullDate.getMonth()]
 
let index = 0;

function writeDay(wDay, month) {
    innerDay.innerHTML = `${wDay}, ${month}  ${fullDate.getDate()}`
}


function listenCheckBox(checkBox) {
    checkBox.addEventListener('click', () => {
        checkBox.src = './img/checked.png';
        // itemName.style.fontStyle = "italic";
    });
}

function listenClear(clear, nodeChild) {
    clear.addEventListener('click', () => {
        nodeChild.parentNode.removeChild(nodeChild)
    })
}

function clearPage() {
    refresh.addEventListener('click', () => {
        listContainer.innerHTML = null;
    })
}

function addItem() {
    
}

function main() {

    writeDay(wDay, month);

    refresh.addEventListener('click', function() {
        clearPage();
    })

    addItemIcon.addEventListener('click',() => {
        if (inputText.value !== '' && inputText.value.length < 26) {
            listContainer.insertAdjacentHTML("afterbegin",
                `<li class="list-item i${index}">
                    <img src="img/unchecked.png" alt="" class="to-do-func" id="check-box">
                    <p class="item-name" id="to-do-name ">${inputText.value}</p>
                    <img src="./img/delete.png" alt="" class="to-do-func" id="delete">
                </li>`);

            var nodeChild = document.querySelector(`.i${index}`)
            const checkBox = document.getElementById('check-box');
            // const itemName = document.getElementById('to-do-name')
            const clear = document.getElementById('delete');
            inputText.value = '';
            inputText.placeholder = 'Add a To Do';
            index++;

            listenCheckBox(checkBox);
            listenClear(clear, nodeChild);

            } else{
                inputText.value = '';
                inputText.placeholder = "Item can't exceed 25 characters"; // A to do cannot be over 25 characters.
            }

        });

};

main();