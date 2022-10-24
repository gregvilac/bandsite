const comments = [
  {
    name: "Miles Acosta",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    date: "12/20/2020",
    image: undefined,
  },

  {
    name: "Emilie Beach",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "01/09/2021",
    image: undefined,
  },

  {
    name: "Connor Walton",
    text: "This is art. This is inexplicable magic expressed in the purest way everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "02/17/2021",
    image: undefined,
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

    //check this later//
    if (comments.image === undefined) {
      commenterImage.classList.add("comments__commenter-image--undefined");
    } else {
      commenterImage.src = comments[i].image;
    }

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

    commentLowerDiv.appendChild(commentText);
    commentUpperDiv.appendChild(commenterName);
    commentUpperDiv.appendChild(commentDate);

    commentRightDiv.appendChild(commentUpperDiv);
    commentRightDiv.appendChild(commentLowerDiv);

    commentLeftDiv.appendChild(commenterImage);

    //append left and right divs to comment list item
    commentListItem.appendChild(commentLeftDiv);
    commentListItem.appendChild(commentRightDiv);

    //append list item to ul

    commentsUL.appendChild(commentListItem);
  }
}
displayComments();

//remove placeholder text on forms when focused
const nameInput = document.querySelector(".comments__name-input");
nameInput.addEventListener("focus", (event) => {
  nameInput.setAttribute("placeholder", "");
});

const commentInput = document.querySelector(".comments__comment-input");
commentInput.addEventListener("focus", (event) => {
  commentInput.setAttribute("placeholder", "");
});

//return placeholder text and remove error classes if present when focused off
nameInput.addEventListener("focusout", (event) => {
  nameInput.setAttribute("placeholder", "Enter your name");

  const nameInputError = document.querySelector(".comments__name-input--error");
  if (nameInputError) {
    nameInputError.classList.remove("comments__name-input--error");
  }
});

commentInput.addEventListener("focusout", (event) => {
  commentInput.setAttribute("placeholder", "Add a new comment");

  const commentInputError = document.querySelector(
    ".comments__comment-input--error"
  );
  if (commentInputError) {
    commentInputError.classList.remove("comments__comment-input--error");
  }
});

//Form Handler

const commentForm = document.querySelector(".comments__form");
commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submit clicked");

  //If there are error classes. This will remove them. This goes before the if statements that handle errors because the return statements send us back to the start of the function.

  const nameInputError = document.querySelector(".comments__name-input--error");
  if (nameInputError) {
    nameInputError.classList.remove("comments__name-input--error");
  }

  const commentInputError = document.querySelector(
    ".comments__comment-input--error"
  );
  if (commentInputError) {
    commentInputError.classList.remove("comments__comment-input--error");
  }

  //Specify how to handle errors.

  const comment = event.target.comment.value;
  const name = event.target.name.value;

  if (name === "") {
    const nameInput = document.querySelector(".comments__name-input");
    nameInput.classList.add("comments__name-input--error");
    nameInput.setAttribute("placeholder", "You must enter your name.");
    return;
  } else if (comment === "") {
    const commentInput = document.querySelector(".comments__comment-input");
    commentInput.classList.add("comments__comment-input--error");
    commentInput.setAttribute("placeholder", "You must enter a comment.");

    return;
  } else if (comment.includes("fuck")) {
    alert("That's inappropriate.");
    return;
  }

  //save time snapshot
  const commentTimeStamp = new Date().getTime();
  //create new object for each comment

  const newComment = {
    name: event.target.name.value,
    text: event.target.comment.value,
    date: getElapsedTime(commentTimeStamp, Date.now()),
  };

  comments.push(newComment);

  //Reset input fields back to placeholders.

  nameInput.value = "";
  commentInput.value = "";

  displayComments();
});

//Get elapsed time function

function getElapsedTime(commentTime, timeNow) {
  let elapsed = timeNow - commentTime;
  // let elapsed = 5000000000;
  const elapsedSeconds = Math.round(elapsed / 1000);
  const elapsedMinutes = Math.round(elapsedSeconds / 60);
  const elapsedHours = Math.round(elapsedMinutes / 60);
  const elapsedDays = Math.round(elapsedHours / 24);

  if (elapsedSeconds < 10) {
    return "Just now";
  } else if (elapsedSeconds < 60) {
    return elapsedSeconds + " seconds ago";
  } else if (elapsedMinutes < 60) {
    return elapsedMinutes + " minutes ago";
  } else if (elapsedHours < 24) {
    return elapsedHours + " hours ago";
  } else if (elapsedDays < 365) {
    return elapsedDays + " days ago";
  } else if (elapsedDays > 365) {
    return "More than a year ago";
  }
}
