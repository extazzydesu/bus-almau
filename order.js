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

document.getElementById("orderWindowId").addEventListener("submit", submitOrder);
const form = document.querySelector("form");
function submitOrder(event)  {
    const data = new FormData(form);
    var routeValue = document.getElementById("route-select").value;
    var timeValue = data.get("route-time");
    var addressValue = document.getElementById("address").value;
    saveOrder(routeValue, timeValue, addressValue);
}

const saveOrder = (routeValue, timeValue, addressValue) => {
    var orderDetails = regFormDB.push();

    orderDetails.set({
        route: routeValue,
        time: timeValue,
        address: addressValue
    }
    )
}