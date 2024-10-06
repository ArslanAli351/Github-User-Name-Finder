let from = document.getElementById("form");
let headDiv = document.getElementById("hide");
let h4 = document.getElementById("error");

let text;

from.addEventListener("submit", async (event) => {
    event.preventDefault();
    const value = event.target.children[0].value;
    const API_URL = `https://api.github.com/users/${value}`
    const imgtag = headDiv.children[0];
    const para = headDiv.children[1];
    const anchorTag = document.getElementById("AnchorTag");
    const h5Tag = headDiv.children[3];
    const para1 = headDiv.children[4];
    const h1 = headDiv.children[5];
    try {
        const response = await axios(API_URL)
        console.log(response);
        imgtag.src = response.data.avatar_url
        para.innerHTML = `Repositories:<span>${response.data.public_repos}</span>`
        anchorTag.href = response.data.html_url
        h5Tag.innerHTML = `Bio: <span>${response.data.bio}</span>`
        para1.innerHTML = `Location: <span>${response.data.location}</span>`
        h1.innerHTML = `User Name: <span>${response.data.name}</span>`

    } catch (error) {
        h4.innerHTML = "User Not Found"
        text = h4.innerHTML = "User Not Found"
        setTimeout(() => {
            h4.innerHTML = ""
        }, 1000)
    }
    if (text !== "User Not Found") {
        headDiv.id = "head"
    }
})
