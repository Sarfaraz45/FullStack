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

//Function to Double Money of all Users
function doubleMoney(){
console.log("Old User data", data);
    //Loop through all users in the user data array
    //For each user, return the user data
    //overwrite the data array with the new data array created by map

    data = data.map(user => {
        return { ...user, balance: user.balance * 2  }
    });

    console.log("New User daata", data)
    //Update the DOM using the new user data array
    updateDOM();

}


//Function to filter the Millionaire Users

function filterUsers(){
    //Filter out all users whose balance is less than million
  data =  data.filter(user => user.balance > 1000000);
  // Update the DOM with new User data
  updateDOM();
}

//Function to sort Users by balance

function sortByBalance(){
    //Sort users by balance using a compare function inside sort
    data.sort((a,b)=>a.balance - b.balance);
    // Update the DOM with new User data
    updateDOM();
}

// Function to sum all user balance into total balance
function totalBalance(){
       // Update the DOM with new User data
       updateDOM();
    // Add up all balance from all users
    // Accumulator starts at 0 and adds the current users balance for each iteration

    const balance = data.reduce((acc, user) => (acc += user.balance), 0);

    //Create a Div for balance
    const balanceElement = document.createElement('div');
    //Set the inner HTML for the new Div
    balanceElement.innerHTML = `<h3>Total Balance:  ${formatNumberToDollar(balance)}</h3>`;

    //Append balance in main eleement
    main.appendChild(balanceElement);
   

}



//Function to Format random number as money
function formatNumberToDollar(number){
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
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
    userDiv.innerHTML = `<strong>${user.name}</strong> ${formatNumberToDollar(user.balance)}`
    //Add the new element into the DOM
    main.appendChild(userDiv);
 });

}


//Event Listeners
// 1. Listen For click on Add User
addUserBtn.addEventListener('click', getRandomUser);

//2. Listen for the click on the Double Button

doubleBtn.addEventListener('click', doubleMoney)

//3. Listen for click on Filter Button
filterBtn.addEventListener('click', filterUsers);

//4. Listen for click on Sort Button
sortBtn.addEventListener('click',sortByBalance);

//5. Listen for click on Sum Button
SumBtn.addEventListener('click', totalBalance);
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();



