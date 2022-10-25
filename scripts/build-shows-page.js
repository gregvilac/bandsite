let shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

function addShows(shows, ul) {
  ul.innerText = "";

  //set loop for array
  for (let i = 0; i < shows.length; ++i) {
    //Create each element for each container

    const dateHeading = document.createElement("h3");
    dateHeading.classList.add("tickets__show-heading");
    dateHeading.innerText = "DATE";

    const date = document.createElement("p");
    date.classList.add("tickets__show-date");
    date.innerText = shows[i].date;

    const venueHeading = document.createElement("h3");
    venueHeading.classList.add("tickets__show-heading");
    venueHeading.innerText = "VENUE";

    const venue = document.createElement("p");
    venue.classList.add("tickets__show-info");
    venue.innerText = shows[i].venue;

    const locationHeading = document.createElement("h3");
    locationHeading.classList.add("tickets__show-heading");
    locationHeading.innerText = "LOCATION";

    const location = document.createElement("p");
    location.classList.add("tickets__show-info");
    location.innerText = shows[i].location;

    let buyTicketsButton = document.createElement("button");
    buyTicketsButton.classList.add("tickets__buy-button");
    buyTicketsButton.innerText = "Buy Tickets";

    //Create container for each show. In this case its a list item

    const showLI = document.createElement("li");
    showLI.classList.add("tickets__show-list-item");

    //append children elements to the showLI

    showLI.appendChild(dateHeading);
    showLI.appendChild(date);
    showLI.appendChild(venueHeading);
    showLI.appendChild(venue);
    showLI.appendChild(locationHeading);
    showLI.appendChild(location);
    showLI.appendChild(buyTicketsButton);

    //append li to container which was passed in as parameter

    ul.appendChild(showLI);
  }
}

const showsList = document.querySelector(".tickets__shows-list");

addShows(shows, showsList);

//Add hover and select events

let showListItem = document
  .querySelectorAll(".tickets__show-list-item")
  .forEach((li) => {
    li.addEventListener("mouseenter", (event) => {
      li.classList.add("tickets__show-list-item--hover");
    });
    li.addEventListener("mouseleave", (event) => {
      li.classList.remove("tickets__show-list-item--hover");
    });

    li.addEventListener("click", function (event) {
      const showListItemSelected = document.querySelector(
        ".tickets__show-list-item--selected"
      );
      if (showListItemSelected) {
        showListItemSelected.classList.remove(
          "tickets__show-list-item--selected"
        );
      }
      console.log(this);
      li.classList.add("tickets__show-list-item--selected");
    });
  });
