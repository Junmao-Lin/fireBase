// let mainDisplayBox = document.querySelector("#mainBlogContainer");
let usernameElement = document.querySelector("#username");
let messageElement = document.querySelector("#message");
let titleElement = document.querySelector("#title");
let button = document.querySelector("#submitButton");
// Set database object REFERENCE here:
let database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
button.onclick = function updateDB(event){
    event.preventDefault(); //stop refreshing
    let title = titleElement.value;
    let username = usernameElement.value;
    let message = messageElement.value;
    usernameElement.value = "";
    messageElement.value  = "";
    titleElement.value = "";
    
    // Update database here
    let newData = {
        TITLE: title,
        NAME: username,
        MESSAGE: message
    }

    database.push(newData);
}

// database.on("child_added", addPostToBoard);

// function addPostToBoard(rowData){
//     let post = rowData.val();

//     let newBlogContainer = document.createElement("div");
//     newBlogConatiner.id = "singleDivs";

//     let title = doucment.createElement("h2");
//     let name = document.createElement("h4");
//     let content = document.createElement("p");

//     title.innerHTML = post.TITLE;
//     newBlogContainer.appendChild(title);

//     name.innerHTML = post.NAME;
//     newBlogContainer.appendChild(name);

//     content.innerHTML = post.MESSAGE;
//     newBlogContainer.appendChild(content);

//     mainDisplayBox.appendChild(newBlogContainer);
// }