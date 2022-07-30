let grid_container1 = document.querySelector("#grid_container");
let grid_container2 = document.querySelector("#horizontal_grid");
let side_box = document.querySelector("#side_content");
//grid_container1.innerHTML=" ";
let grid_articles = "";
let grid_bottom_articles = "";
let side_articles = "";

async function getAllArticles() {

    try {
        const response = await fetch("http://localhost:3001/v2/api/news");
        const articles = await response.json();
        console.log(articles.length);


        let counter = 0;
        articles.forEach(element => {
            // console.log(element.title);

            if (counter < 6) {

                counter++;
                grid_articles +=
                    `
                <div class="flex flex-col bg-white p-2 shadow text-sky-600"><!-- main Article -->
                    <div class="flex flex-col ">
                        <span class="font-bold text-md">${element.title}</span>
                        
                    </div>
                    <img class="" src="${element.urlToImage}" alt="">
                </div>
                `;
            } else if (counter < 11) {
                console.log(element.title);
                counter++;

                grid_bottom_articles +=
                    `
                        <div class=" flex flex-col items-start rounded-sm overflow-hidden shadow">
							<img class="w-full h-full" src="${element.urlToImage}">
							<div class="text-sm font-bold">${element.title}</div>
							<div class="flex-row justify-start text-sm">
								<span class="">${element.category}</span>
							</div>
							<div class="bg-white flex rounded-full px-2 absolute mt-2 ml-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<span class="">3h</span>
							</div>
						</div>
                `;
            } else if (counter < 14) {
                counter++;
                side_articles +=
                    `
                        <div class="flex flex-col items-start mb-2 m-1">
								<span class="font-bold">${element.title}</span>
								<span class="text-sm">${element.content}</span>
						</div>
                        
                        <div class="flex justify-around my-4">
							<span class="nav w-full border-b border-solid mx-3"></span>
						</div>
                    `;
            }


        });

        //console.log(grid_articles);
        grid_container1.innerHTML = grid_articles;
        grid_container2.innerHTML = grid_bottom_articles;
        side_box.innerHTML = side_articles;

    } catch (error) {
        console.log(error);
    }
}





getAllArticles(); // to fill the first grid box
