
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {ref, set, getDatabase, push, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBW_0ZKWVUgB4h-sDuajGs--1w1TL88LBI",
    authDomain: "fire-base-data-base-ba3d9.firebaseapp.com",
    databaseURL: "https://fire-base-data-base-ba3d9-default-rtdb.firebaseio.com",
    projectId: "fire-base-data-base-ba3d9",
    storageBucket: "fire-base-data-base-ba3d9.appspot.com",
    messagingSenderId: "483630919452",
    appId: "1:483630919452:web:a14fc38928917c667594d9",
    measurementId: "G-66EBBX1TSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();


var a = document.getElementById('main');
var inp = document.getElementById('inp');
// var inputVAlue=inp.value;
window.createELem = function (e) {
if(inp.value!==''){


 
    var p = document.createElement('P');
    var txt = document.createTextNode(inp.value);
    p.appendChild(txt);
    // // delete button
    p.setAttribute('class', 'para');
    p.setAttribute('id', 'p1');
    var delBtn = document.createElement('BUTTON');
    var delLabel = document.createTextNode('Delete');
    delBtn.appendChild(delLabel);
    delBtn.setAttribute('onclick', 'delTodo(this)');
    p.appendChild(delBtn);
    a.appendChild(p);
    // // edit button
    var editBtn = document.createElement('BUTTON');
    var editLabel = document.createTextNode('EDIT');
    editBtn.appendChild(editLabel);
    editBtn.setAttribute('onclick', 'editTodo(this)');
    p.appendChild(editBtn);
    a.appendChild(p);
    console.log(p);
    var obj = { Originalvalue: inp.value };
    // // // give path for going in node ...reference made for putting it in firebase data base
    obj.id = push(ref(database, "Tasks/")).key;
    var reference = ref(database, `Tasks/${obj.id}`);
    set(reference, obj);// // //bracket text send to data base 
    displayInputValue();
}else{
    `ENTER`
}}
window.editTodo = function (ele) {
    // Get the new value from the user
    var newVal = prompt("Enter new value");

    // Update the DOM element with the new value
    ele.parentNode.firstChild.nodeValue = newVal;

    // Get the ID of the corresponding database entry
    var taskId = ele.parentNode.id;

    // Reference to the specific entry in the database
    var reference = ref(database, `Tasks/${taskId}`);

    // Update the value in the database
    set(reference, { Editedvalue: newVal });
}

window.delTodo = function (elem) {
    var p = elem.parentNode;
    p.remove();
}
window.dltElem = function (e) {

    main.innerHTML = '';

}


function displayInputValue() {
    var inputValue = inp.value;

    // Create a new paragraph element
    var p = document.createElement('p');
    var txt = document.createTextNode(inputValue);
    p.appendChild(txt);

    // Append the paragraph element to the 'main' div
    a.appendChild(p);
}
// Function to display data from the database
// Function to display data from the database
function displayDataFromDatabase() {
    var tasksRef = ref(database, "Tasks");

    // Listen for changes in the data
    onValue(tasksRef, (snapshot) => {
        // Clear existing content
        a.innerHTML = '';

        // Loop through each task in the database
        snapshot.forEach((childSnapshot) => {
            var taskData = childSnapshot.val();

            // Create a new paragraph element
            var p = document.createElement('p');
            var txt = document.createTextNode(taskData.Originalvalue || taskData.Editedvalue);
            p.appendChild(txt);

            // Append the paragraph element to the 'main' div
            a.appendChild(p);
        });
    });
}
displayDataFromDatabase()

// window.createELem=function () {
//     var p = document.createElement('P');
//     var txt = document.createTextNode(inp.value);
//     p.appendChild(txt);
//     // // delete button
//     p.setAttribute('class', 'para');
//     p.setAttribute('id', 'p1');
//     var delBtn = document.createElement('BUTTON');
//     var delLabel = document.createTextNode('Delete');
//     delBtn.appendChild(delLabel);
//     delBtn.setAttribute('onclick', 'delTodo(this)');
//     p.appendChild(delBtn);
//     a.appendChild(p);
//     // // edit button
//     var editBtn = document.createElement('BUTTON');
//     var editLabel = document.createTextNode('EDIT');
//     editBtn.appendChild(editLabel);
//     editBtn.setAttribute('onclick', 'editTodo(this)');
//     p.appendChild(editBtn);
//     a.appendChild(p);
//     console.log(p);
// }
// window.editTodo=function (ele) {
//     var newVal = prompt("enter new value");
//     ele.parentNode.firstChild.nodeValue = newVal;

// }
// window.delTodo=function (elem) {
//     var p = elem.parentNode;
//     p.remove();
// }
// window.dltElem=function () {
//     main.innerHTML = '';
// }

