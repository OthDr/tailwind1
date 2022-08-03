
let grid_container2 = document.querySelector("#horizontal_grid");

let first_name = document.querySelector("#first_name");
let last_name = document.querySelector("#last_name");
let articles_counter = document.querySelector("#articles_counter")



let grid_bottom_articles = "";

const token = window.localStorage.getItem("accessToken");



async function getUserProfile() {
    let id = null;

    try {
        const response = await fetch(`http://localhost:3001/v2/api/authors/me`, {
            method: 'GET',
            headers: {
                'authorization': 'Bearer ' + token
            }
        });

        const result = await response.json();
        console.log(result);

        if (!result.error) {
            first_name.innerHTML = result.firstname;
            last_name.innerHTML = result.lastname;
            id = result.id;
            getUserArticles(id);
        } else {
            window.location.href = "signup.html";
        }

    } catch (error) {
        console.log(error);

    }

}

async function getUserArticles(id) {

    grid_container2.innerHTML = "grid_bottom_articles";

    try {
        const response = await fetch(`http://localhost:3001/v2/api/authors/${id}/articles`);
        const articles = await response.json();
        console.log(articles.length);
        let counter = 0;
        articles.forEach(element => {
            counter++;
            grid_bottom_articles +=
                `<div class="flex flex-col items-start">
                    <img class="w-full" src="${element.urlToImage}">
                    <div class="text-sm font-bold">${element.title}</div>
                    <div class="flex flex-row justify-start text-sm">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="font-bold">${element.createdAt.split('T')[0]}</span> 
                        </div>
                        <span class="border-solid border-r border-gray-400 mx-2 my-1"></span>
                        <span class="">${element.category}</span>
                    </div>
                </div>
                `;

        });
        articles_counter.innerHTML = String(counter) + ' Articles published';
        grid_container2.innerHTML = grid_bottom_articles;
    } catch (error) {
        console.log(error);
    }
}

function SignOut() {
    localStorage.clear();
    window.location.href = "index.html";
}


getUserProfile();

