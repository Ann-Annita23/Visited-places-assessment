//constructor
function Destination(location,landmark,time,note){
    this.location = location;
    this.landmark = landmark;
    this.time = time;
    this.note = note
}

//Prototypes
//Method to create the LI element
Destination.prototype.renderListItem = function(){
    const li = document.createElement("li");
    li.textContent = `${this.location}-${this.landmark}`;
    li.addEventListener("click", () =>{
        this.showDetails();
    });
    return li;
};

// Method to show specific details
Destination.prototype.showDetails = function(){
    document.getElementById("detail-location").textContent = this.location;
    document.getElementById("detail-landmark").textContent = this.landmark;
    document.getElementById("detail-time").textContent = this.time;
    document.getElementById("detail-note").textContent = this.note;
    document.getElementById("place-details").classList.remove("hidden");
};

// wrapping logics in the listener
document.addEventListener("DOMContentLoaded", function(){
    //logics
const form = document.getElementById("new-places");
const placelist = document.getElementById("place-list");
form.addEventListener("submit", recordDestination);

function recordDestination(event){
    event.preventDefault();

//Using getElementById for constistency and fixed typos
const location = document.getElementById("new-location").value;
const landmark = document.getElementById("new-landmark").value;
const time = document.getElementById("new-time").value;
const note = document.getElementById("new-note").value;

// Create instance
const destination = new Destination(location,landmark,time,note);

//Append to the list
placelist.appendChild(destination.renderListItem());

//Reset form
form.reset();
}
});

