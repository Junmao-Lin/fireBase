let mainDisplayBox = document.querySelector("#mainBlogContainer");

let database = firebase.database().ref();

database.on("child_added", addPostToBoard);

function addPostToBoard(rowData){
    let post = rowData.val();

    let newBlogContainer = document.createElement("div");
    newBlogContainer.id = "singleDivs";

    let title = document.createElement("h2");
    let name = document.createElement("h4");
    let content = document.createElement("p");

    title.innerHTML = post.TITLE;
    newBlogContainer.appendChild(title);

    name.innerHTML = post.NAME;
    newBlogContainer.appendChild(name);

    content.innerHTML = post.MESSAGE;
    newBlogContainer.appendChild(content);

    mainDisplayBox.appendChild(newBlogContainer);
}