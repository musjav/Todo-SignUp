// //Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { ref, getDatabase, push, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBW_0ZKWVUgB4h-sDuajGs--1w1TL88LBI",
    authDomain: "fire-base-data-base-ba3d9.firebaseapp.com",
    projectId: "fire-base-data-base-ba3d9",
    storageBucket: "fire-base-data-base-ba3d9.appspot.com",
    messagingSenderId: "483630919452",
    appId: "1:483630919452:web:a14fc38928917c667594d9",
    measurementId: "G-66EBBX1TSN"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
// var inp = document.getElementById("inp");
const auth = getAuth();
var model = {};
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var signupSection = document.getElementById('signup-section');
var todoSection = document.getElementById('todo-section');
// ... (previous code)
window.signUp = function (e) {
    e.preventDefault();
    if (username.value !== '' && email.value !== '' && password.value !== '') {
        model.email = email.value;
        model.username = username.value;
        model.password = password.value;
        console.log(model);
        createUserWithEmailAndPassword(auth, model.email, model.password)
            .then(function (res) {
                console.log(res.user.uid, "Success Response");
                model.id = res.user.uid;
                var reference = ref(database, `use/${model.id}`);
                onValue(reference, function (user) { console.log(user.val()); })

                email.value = "";
                username.value = "";
                password.value = "";

                // Call showTodo here
                showTodo();

            })
            .catch(function (err) {
                console.log((err, "error response"),
                    alert(err.message)
                )
            });
    } else {
        mesg.innerHTML = 'First Register Yourself';
    }

    var formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,  
        email: document.getElementById('email').value
    };

    formData.id = push(ref(database, "Information/")).key;
    var reference = ref(database, `Information/${formData.id}`);
    set(reference, formData);
}


function getData() {
    var reference = ref(database, "Tasks/");
    onValue(reference, function (data) {
        tasks = Object.values(data.val());
        renderList();
    });
}

// Uncomment the next line if you want to retrieve data from the database
getData();
    
    var info = formData;
    // // // give path for going in node ...reference made for putting it in firebase data base
    info.id = push(ref(database, "Information/")).key;
    var reference = ref(database, `Information/${info.id}`);
    set(reference, info);// // //bracket text send to data base

function showTodo() {
    signupSection.style.display = 'none';
    todoSection.style.display = 'block';
}
createUserWithEmailAndPassword(auth, model.email, model.password)
    .then(function (res) {
        // Success block
        console.log(res.user.uid, "Success Response");
        model.id = res.user.uid;
        var reference = ref(database, `use/${model.id}`);
        onValue(reference, function (user) { console.log(user.val()); });
        showTodo(); // Move the showTodo() call here
    })
    .catch(function (err) {
        // Error block
        console.error(err, "Error Response");
        alert(err.message);
    });







// var showList=document.getElementById('showList ')
// var tasks;
// window.add = function () {
//         var obj = {
//                text: inp.value,
//            };
//         //    var obj = formData;
//            //     // // // give path for going in node ...reference made for putting it in firebase data base
//                obj.id = push(ref(database, "Tasks/")).key;
//                var reference = ref(database, `Tasks/${obj.id}`);
//                set(reference, obj);// // //bracket text send to data base

// };
// function renderList() {
//     for (var i = 0; i < tasks.length; i++) {
// showList.innerHTML+= `<li>${tasks[i].text}</li>`;
//     }
// }
// function getData() {
//     var reference = ref(database, "Tasks/");
//     onValue(reference, function (data) {
//         var tasks = Object.values(data.val());
//         renderList();
//         // console.log(data.val());
//         // console.log(task);
//     });
// }
// getData();

