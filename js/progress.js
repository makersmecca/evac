
$(document).ready(function() {
  
    $(".my-progress-bar").circularProgress({
        line_width: 6,
        color: "#18ffff",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        padding:"10px",
        text: ""
    }).circularProgress('animate', val, 5000);
});



let val = 90;

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
firebase.initializeApp(firebaseConfig)
  