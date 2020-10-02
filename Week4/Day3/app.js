let container = document.getElementById("menuContain");
let mainMenuButton = document.getElementById("mainMenu");
let startersButton = document.getElementById("starters");
let entreesButton = document.getElementById("entrees");
let dessertsButton = document.getElementById("desserts");


function displayMenu(course) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    };
    
    if (course == 'all') {
        
        for (i = 0; i < dishes.length; i++) {
            let dish = dishes[i];
            
            const dishLi = `
                    <li>
                        <div class="imgContain">
                            <img src="${dish.imageURL}" alt="${dish.title}">
                        </div>
                        <h3>${dish.title}</h3>
                        <h5>$${dish.price}</h5>
                        <p>${dish.description}</p>
                    </li>
            `;
            container.insertAdjacentHTML('beforeend', dishLi);
        }
    } else if (course == 'start') {
        let starters = dishes.filter(function(dish) {
            return dish.course == "Starters"});
        
        for (i = 0; i < dishes.length; i++) {
            let dish = starters[i];

            const dishLi = `
                        <li>
                            <div class="imgContain">
                                <img src="${dish.imageURL}" alt="${dish.title}">
                            </div>
                            <h3>${dish.title}</h3>
                            <h5>$${dish.price}</h5>
                            <p>${dish.description}</p>
                        </li>
                `;
                container.insertAdjacentHTML('beforeend', dishLi);
        }
    } else if (course == 'entree') {
        let entrees = dishes.filter(function(dish) {
            return dish.course == "Entrees"});
        
        for (i = 0; i < dishes.length; i++) {
            let dish = entrees[i];

            const dishLi = `
                        <li>
                            <div class="imgContain">
                                <img src="${dish.imageURL}" alt="${dish.title}">
                            </div>
                            <h3>${dish.title}</h3>
                            <h5>$${dish.price}</h5>
                            <p>${dish.description}</p>
                        </li>
                `;
                container.insertAdjacentHTML('beforeend', dishLi);
        }
    } else if (course == 'dessert') {
        let desserts = dishes.filter(function(dish) {
            return dish.course == "Desserts"});
        
        for (i = 0; i < dishes.length; i++) {
            let dish = desserts[i];

            const dishLi = `
                        <li>
                            <div class="imgContain">
                                <img src="${dish.imageURL}" alt="${dish.title}">
                            </div>
                            <h3>${dish.title}</h3>
                            <h5>$${dish.price}</h5>
                            <p>${dish.description}</p>
                        </li>
                `;
                container.insertAdjacentHTML('beforeend', dishLi);
        }
    }
};

displayMenu('all')
// .addEventListener("click", displayMenu<-- just calls a function)
mainMenuButton.addEventListener("click", () => {displayMenu('all')});
startersButton.addEventListener("click", () => {displayMenu('start')});
entreesButton.addEventListener("click", () => {displayMenu('entree')});
dessertsButton.addEventListener("click", () => {displayMenu('dessert')});