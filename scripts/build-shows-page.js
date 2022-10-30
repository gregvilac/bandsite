const apiKey = "f5e438b2-2b7c-4b5c-b49a-b70c5fd889d5";

function displayShows(array) {
  const showsList = document.querySelector(".tickets__shows-list");
  showsList.innerText = "";

  //set loop for array
  for (let i = 0; i < array.length; i++) {
    //Create each element for each container

    const dateHeading = document.createElement("h3");
    dateHeading.classList.add("tickets__show-heading");
    dateHeading.innerText = "DATE";

    const date = document.createElement("p");
    date.classList.add("tickets__show-date");
    showTimestamp = new Date(array[i].date);
    date.innerText = showTimestamp.toDateString();

    const venueHeading = document.createElement("h3");
    venueHeading.classList.add("tickets__show-heading");
    venueHeading.innerText = "VENUE";

    const venue = document.createElement("p");
    venue.classList.add("tickets__show-info");
    venue.innerText = array[i].place;

    const locationHeading = document.createElement("h3");
    locationHeading.classList.add("tickets__show-heading");
    locationHeading.innerText = "LOCATION";

    const location = document.createElement("p");
    location.classList.add("tickets__show-info");
    location.innerText = array[i].location;

    let buyTicketsButton = document.createElement("button");
    buyTicketsButton.classList.add("tickets__buy-button");
    buyTicketsButton.innerText = "Buy Tickets";

    const showLI = document.createElement("li");
    showLI.classList.add("tickets__show-list-item");

    showLI.addEventListener("mouseenter", (event) => {
      showLI.classList.add("tickets__show-list-item--hover");
    });
    showLI.addEventListener("mouseleave", (event) => {
      showLI.classList.remove("tickets__show-list-item--hover");
    });

    showLI.addEventListener("click", function (event) {
      const showListItemSelected = document.querySelector(
        ".tickets__show-list-item--selected"
      );
      if (showListItemSelected) {
        showListItemSelected.classList.remove(
          "tickets__show-list-item--selected"
        );
      }

      showLI.classList.add("tickets__show-list-item--selected");
    });

    //append children elements to the showLI

    showLI.appendChild(dateHeading);
    showLI.appendChild(date);
    showLI.appendChild(venueHeading);
    showLI.appendChild(venue);
    showLI.appendChild(locationHeading);
    showLI.appendChild(location);
    showLI.appendChild(buyTicketsButton);

    showsList.appendChild(showLI);
  }
}
function addShows() {
  axios
    .get("https://project-1-api.herokuapp.com/showdates?api_key=" + apiKey)
    .then((response) => {
      displayShows(response.data);
    });
}

addShows();
