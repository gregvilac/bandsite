const comments = [
  {
    name: "Miles Acosta",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    date: "12/20/2020",
  },

  {
    name: "Emilie Beach",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "01/09/2021",
  },

  {
    name: "Connor Walton",
    text: "This is art. This is inexplicable magic expressed in the purest way everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "02/17/2021",
  },
];

function displayComments() {
  const commentsUL = document.querySelector(".comments__list");
  commentsUL.innerText = "";
  for (let i = 0; i < comments.length; i++) {
    //create dynamic elements
    const commenterName = document.createElement("h3");
    commenterName.classList.add("comments__commenter-name-text");
    commenterName.innerText = comments[i].name;

    const commentText = document.createElement("p");
    commentText.classList.add("comments__comment-text");
    commentText.innerText = comments[i].text;

    const commentDate = document.createElement("p");
    commentDate.classList.add("comments__comment-date");
    commentDate.innerText = comments[i].date;

    //create image element
    const commenterImage = document.createElement("img");
    commenterImage.classList.add("comments__commenter-image");
    commenterImage.setAttribute("src", "../assets/images/Mohan-muruge.jpg");

    //create left div
    const commentLeftDiv = document.createElement("div");
    commentLeftDiv.classList.add("comments__comment-left-div");

    //create right div

    const commentRightDiv = document.createElement("div");
    commentRightDiv.classList.add("comments__comment-right-div");

    //create upper right div

    const commentUpperDiv = document.createElement("div");
    commentUpperDiv.classList.add("comments__comment-upper-div");

    //create lower right div

    const commentLowerDiv = document.createElement("div");
    commentLowerDiv.classList.add("comments__comment-lower-div");

    //create li to hold each comment

    const commentListItem = document.createElement("div");
    commentListItem.classList.add("comments__comment-list-item");

    //append elements to inner divs

    commentRightDiv.appendChild(commentUpperDiv);
    commentRightDiv.appendChild(commentLowerDiv);

    commentLeftDiv.appendChild(commenterImage);

    commentLowerDiv.appendChild(commentText);
    commentUpperDiv.appendChild(commenterName);
    commentUpperDiv.appendChild(commentDate);

    //append left and right divs to comment list item
    commentListItem.appendChild(commentLeftDiv);
    commentListItem.appendChild(commentRightDiv);

    //append list item to ul

    commentsUL.appendChild(commentListItem);
  }
}
displayComments();

//Form Handler

const commentForm = document.querySelector(".comments__form");
commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submitted");

  const comment = event.target.comment.value;
  const name = event.target.name.value;

  if (name === "") {
    alert("You must enter your name");
    return;
  }

  if (comment.includes("fuck")) {
    alert("Let's keep it pg-13 please.");
    return;
  }

  const newComment = {
    name: event.target.name.value,
    text: event.target.comment.value,
    date: new Date().toLocaleDateString(),
  };

  comments.push(newComment);

  displayComments();
});

// var today = new Date();
// var date =
//   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
// var time =
//   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date + " " + time;

// console.log(dateTime);
