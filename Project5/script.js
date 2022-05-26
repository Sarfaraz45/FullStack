// Get DOM Elements
const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const filterBtn = document.getElementById('filter');
const sortBtn = document.getElementById('sort');
const SumBtn = document.getElementById('sum');


//Initialize user data array
let data = [];

//Fetch random user from randomuser.me API

async  function getRandomUser(){
    // Wait for the results from API
    const res = await fetch('https://randomuser.me/api/')
    // Wait for response to convert into JSON
    const data = await res.json();
    //console.log(data);

    //Get User Name
    const user = data.results[0];
   // console.log(user);

    // Create the New User
    const newUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        balance: Math.floor(Math.random()*100000)
    }
    //console.log(newUser);

    //Add the new user to the data array
    addData(newUser);
}


//Function to add User data into user array

function addData(newUser){
    //aDD the new User data into the user data array
 data.push(newUser);
 console.log(data)
 //console.log("data Aray" , data);
//Update the DOM to display users in the data array

updateDOM();

}

//Function to the Update the UI with data from the user data array
function updateDOM(userData = data){
  //Clear Previous UI
 main.innerHTML = `<h2><strong>User</strong> Wealth</h2>`
 //Loop through User data and render in the UI
 userData.forEach(user =>{
     //console.log(data.length,user)

     //Create a new div element for the user
     const userDiv = document.createElement('div');
     //Apply the user class to the new div
     userDiv.classList.add('user');
        //Add inner HTML to the user div
    userDiv.innerHTML = `<strong>${user.name}</strong> ${user.balance}`
    //Add the new element into the DOM
    main.appendChild(userDiv);
 });

}
getRandomUser();
getRandomUser();



