//Get Dom Elements

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const selectmovie = document.getElementById('movie');
const video = document.getElementById('video');
const source = document.getElementById('source');


populateUI();

let ticketPrice =+selectmovie.value;



// Save the movie data to local storage
function setMovieData(movieIndex, moviePrice) {
    // Saving selected movie index to local storage
    localStorage.setItem('selectedMovieIndex', movieIndex);
    // Saving selected movie ticket price to local storage
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Get data from localstorage and populate UI
function populateUI() {
    // Get selected seats from local storage and convert from string to array
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    // check if selected seats is not null and not empty, and if true, then loop through all seats and mark matching seats with class selected
    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    };
    // Get the selected movie index from local storage
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    // Using the value from local storage, select the movie on page load
    if(selectedMovieIndex !== null) {
        selectmovie.selectedIndex = selectedMovieIndex;
    }
}



//get the ticket price from the selected Movie dropdown

//Function to update counts

function updateCount(){
    if(selectmovie.value !== '') {
    //Calculate how many seats selected!!
    const selectedSeats  = document.querySelectorAll('.row .seat.selected');

    //create an array using the node List
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    console.log('array',seatsIndex);
    
    //Get the number of seats from nodeList
    const _selectedSeatsLenght  = selectedSeats.length;
    console.log(_selectedSeatsLenght);

    count.innerText = _selectedSeatsLenght;

    //update the DOM with Price
    total.innerText = _selectedSeatsLenght*ticketPrice;
    console.log(selectedSeats);

    //Save Data to local Storage
    localStorage.setItem('seletedseats',JSON.stringify(seatsIndex));
    }
};

//Event Listeneres
//1. Listen for click on container

container.addEventListener('click',(e)=>{
    //console.log(e.target.classList.contains('seat'));
    if((e.target.classList.contains('seat')) && (!e.target.classList.contains('occupied'))){
        //console.log(e.target);
        //Add or remove class from class on click
        e.target.classList.toggle('selected');
        //update the count of selected seats
        updateCount();
        }
    })


//2. Listen for change in movie selection
selectmovie.addEventListener('change',e=>{
    
    ticketPrice=+e.target.value;
    // Calling function to set data in local storage
    setMovieData(e.target.selectedIndex, e.target.value);
    //Upate ticket price for selected movie and update the count
    updateCount();
    if(selectmovie.value==="50"){
       source.setAttribute('src', 'movies/venom.mkv');
        video.load();
        video.play();
    }
    else if(selectmovie.value==="20"){
        source.setAttribute('src', 'movies/spiderman.mkv');
        video.load();
        video.play();
    }
    else{
        source.setAttribute('src', 'movies/soon.mkv');
        video.load();
        video.play();
    }
})

// Initial count and total price
updateCount();