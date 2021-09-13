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

let fname = document.querySelector("#first")
let lname = document.querySelector("#last")
let email = document.querySelector("#email")
let message = document.querySelector("#message")

document.querySelector("#submit").addEventListener("click",()=>{
    var contactDB= firebase.database().ref(`UserResponses`);
    let store = contactDB.child(`${fname.value}`.trim()).set({
        Firstname :fname.value.trim(),
        Lastname:lname.value.trim(),
        Year :email.value.trim(),
        Stream :message.value.trim()
      })
    store.then(() => {
        // TO DISPLAY SUCCESS IN UI
        setTimeout(()=>{
            window.location="/contact.html"
          },600)
      })
    console.log(fname.value,lname.value,email.value,message.value)
})

