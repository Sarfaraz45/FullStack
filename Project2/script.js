//Select DOM Elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;


populateUI()

//Save the Movie Data to Local Storage
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice)
}

//Get data from local storage and populate UI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) 
    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add('selected')
            }
        })
    };

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex
    }

}



function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const seatsIndex = [...selectedSeats].map(seat=>[...seats].indexOf(seat))
    console.log(seatsIndex)
    const selectedSeatsCount = selectedSeats.length;
    count.innerHTML = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount * ticketPrice;
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
} 
//Event Listeners
//Event Listener for container to check for click on seats
container.addEventListener('click', e=>{
if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected');
    
    updateSelectedCount();
}
})


//Event Listerner for Movie Select


movieSelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value)
    updateSelectedCount()
})

//Initial Count and Toal Seats
updateSelectedCount()

