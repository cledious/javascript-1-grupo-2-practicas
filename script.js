const data = [
        {
        id: 7,
        email: "michael.lawson@reqres.in",
        age: 30,
        userAccount: "Premium",
        first_name: "Michael",
        last_name: "Lawson",
        description: "Lorem ipsum"
        },
        {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        age: 78,
        userAccount: "Basic",
        first_name: "Lindsay",
        last_name: "Ferguson",
        description: "Lorem ipsum"
        },
        {
        id: 9,
        email: "tobias.funke@reqres.in",
        age: 23,
        userAccount: "Basic",
        first_name: "Tobias",
        last_name: "Funke",
        description: "Lorem ipsum"
        },
        {
        id: 10,
        email: "byron.fields@reqres.in",
        age: 86,
        userAccount: "Basic",
        first_name: "Byron",
        last_name: "Fields",
        description: "Lorem ipsum"
        },
        {
        id: 11,
        email: "george.edwards@reqres.in",
        age: 30,
        userAccount: "Premium",
        first_name: "George",
        last_name: "Edwards",
        description: "Lorem ipsum"
        },
        {
        id: 12,
        email: "rachel.howell@reqres.in",
        age: 67,
        userAccount: "Premium",
        first_name: "Rachel",
        last_name: "Howell",
        description: "Lorem ipsum"
        },
        {
        id: 13,
        email: "adrian.bell@reqres.in",
        age: 54,
        userAccount: "Basic",
        first_name: "Adrian",
        last_name: "Bell",
        description: "Lorem ipsum"
        },
        {
        id: 14,
        email: "adrian.bell@reqres.in",
        age: 54,
        userAccount: "",
        first_name: "Adrian",
        last_name: "Bell",
        description: "Lorem ipsum"
        }
    ]

let mainContainer = document.getElementById('mainContainer')
const impUsers = (list) => {
    const mainContainer = document.getElementById('mainContainer');
    data.forEach((user) => {
        const contenedor = document.createElement('div')
        const id = document.createElement('h2')
        const first_name = document.createElement('h3')
        const last_name = document.createElement('h3')
        const userAccount = document.createElement('h4')
        const email = document.createElement('p')
        const description = document.createElement('p')

        id.textContent = `id: ${user.id}`;
        first_name.textContent = `first_name: ${user.first_name}`;
        last_name.textContent = `last_name: ${user.last_name}`;
        userAccount.textContent = `userAccount: ${user.userAccount}`;
        email.textContent = `email: ${user.email}`;
        description.textContent = `description: ${user.description}`;

        contenedor.append(id ,first_name ,last_name ,userAccount ,email ,description);
        mainContainer.appendChild(contenedor);
    });
}

console.log(data)
impUsers(data);
/*-----------------------------------------------------*/
