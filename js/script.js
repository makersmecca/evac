var firebaseConfig = {
    apiKey: "AIzaSyBbxf_UzMXbo0w47qlIaghwyBoHY1WOfg0",
    authDomain: "counter-99162.firebaseapp.com",
    projectId: "counter-99162",
    storageBucket: "counter-99162.appspot.com",
    messagingSenderId: "640170582989",
    databaseURL:"https://wireless-database-4a51b-default-rtdb.asia-southeast1.firebasedatabase.app/",
    appId: "1:640170582989:web:fc7509f83490077eb31a84"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  
let stateValue = document.getElementById("stateVal")
let state = 0
console.log("value of state")
console.log(state)

if(state == 0)
{
    stateValue.textContent = "OFF"
}

else
{
    stateValue.textContent = "ON"
}



