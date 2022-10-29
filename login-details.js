const firebaseConfig = {
    apiKey: "AIzaSyBtwT0xWbvxH-d-dNX9-xRB6faQFTK5sVE",
    authDomain: "busalmau1.firebaseapp.com",
    databaseURL: "https://busalmau1-default-rtdb.firebaseio.com",
    projectId: "busalmau1",
    storageBucket: "busalmau1.appspot.com",
    messagingSenderId: "677981562226",
    appId: "1:677981562226:web:82c1c11a060daf79fd29eb"
  };

firebase.initializeApp(firebaseConfig);

const regFormDB = firebase.database().ref("almau-db");

document.getElementById("regForm").addEventListener("submit", submitReg);
document.getElementById("loginFormId").addEventListener("submit", submitLog);

async function submitReg(event) {
    event.preventDefault();

    var login = document.getElementById("loginRegid").value;
    var password = document.getElementById("logpswId").value;

    console.log(login, password)
    saveMessages(login, password);

    try {
        const data = await firebase.auth().createUserWithEmailAndPassword(login, password);
        console.log(data.user.uid)
    } catch(error) {
        console.log(error.message);
        alert(error.message);
    }
}

const saveMessages = (login, password) => {
    var newRegDetails = regFormDB.push();

    newRegDetails.set({
        lgn: login,
        paswd: password
    }
    )
}

async function submitLog(event2) {
    event2.preventDefault();

    var login = document.getElementById("loginId").value;
    var password = document.getElementById("passwordId").value;
    try {
        const data = await firebase.auth().signInWithEmailAndPassword(login, password);
        console.log(data.user.uid);
        window.open("./index.html","_self");
    } catch(error) {
        console.log(error.message);
        alert(error.message);
    }

    console.log(login, password);
}


function myFunction() {
    var x = document.getElementById("passwordId");
    if (x.type === "password") {
    x.type = "text";
    } else {
    x.type = "password";
    }
}