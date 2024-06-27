//for adding password to the table
const addPasswords = () => {
    let table = document.querySelector("table");
    let data = localStorage.getItem("passwords");
    if(data == null){
        table.innerHTML = "No data to show";
    }
    else{
        table.innerHTML = `<tr>
                    <th>Website</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Delete</th>
                </tr>`;
        let json = JSON.parse(data);
        let row = "";
        for (const element of json) {
            row += `<tr>
            <td>${element.website}</td>
            <td>${element.username}</td>
            <td>${element.password}</td>
            <td><button class="btn2 delete" onclick="deletePassword('${element.website}')">Delete</button></td>
            </tr>`
        }
        table.innerHTML += row;
    }
    website.value = "", username.value = "", password.value = "";
}
//for deleting password from the table
const deletePassword = (website) => {
    let data = localStorage.getItem("passwords");
    let json = JSON.parse(data);
    let new_json = json.filter((e) => {
        return e.website != website;
    })
    localStorage.setItem("passwords", JSON.stringify(new_json));
    addPasswords();
}

console.log("Let's write JavaScript..")
addPasswords();

//when submit button is clicked
document.querySelector(".submit").addEventListener("click", (e) => {
    e.preventDefault();
    console.log(website.value, username.value, password.value);
    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if (passwords == null) {
        let json = []
        let obj = {
            website: website.value,
            username: username.value,
            password: password.value
        }
        json.push(obj);
        localStorage.setItem("passwords", JSON.stringify(json));
    }
    else {
        let json = JSON.parse(localStorage.getItem("passwords"));
        let obj = {
            website: website.value,
            username: username.value,
            password: password.value
        }
        json.push(obj);
        localStorage.setItem("passwords", JSON.stringify(json));
    }
    addPasswords();
})