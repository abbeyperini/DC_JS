let container = document.getElementById("menuContain");
let mainMenuButton = document.getElementById("mainMenu");
let startersButton = document.getElementById("starters");
let entreesButton = document.getElementById("entrees");
let dessertsButton = document.getElementById("desserts");

startersButton.addEventListener("click", function starters() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    };
    
    for (i = 0; i < dishes.length; i++) {
        let starters = dishes.filter(function(dish) {
            return dish.course == "Starters"
        })

        let starter = starters[i]
        
        const dishLi = `
                <li>
                    <div class="imgContain">
                        <img src="${starter.imageURL}" alt="${starter.title}">
                    </div>
                    <h3>${starter.title}</h3>
                    <h5>$${starter.price}</h5>
                    <p>${starter.description}</p>
                </li>
        `
        container.insertAdjacentHTML('beforeend', dishLi)
    }
});

entreesButton.addEventListener("click", function entrees() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    };
    
    for (i = 0; i < dishes.length; i++) {
        let entrees = dishes.filter(function(dish) {
            return dish.course == "Entrees"
        })

        let entree = entrees[i]
        
        const dishLi = `
                <li>
                    <div class="imgContain">
                        <img src="${entree.imageURL}" alt="${entree.title}">
                    </div>
                    <h3>${entree.title}</h3>
                    <h5>$${entree.price}</h5>
                    <p>${entree.description}</p>
                </li>
        `
        container.insertAdjacentHTML('beforeend', dishLi)
    }
});

dessertsButton.addEventListener("click", function desserts() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    };
    
    for (i = 0; i < dishes.length; i++) {
        let desserts = dishes.filter(function(dish) {
            return dish.course == "Desserts"
        })

        let dessert = desserts[i]
        
        const dishLi = `
                <li>
                    <div class="imgContain">
                        <img src="${dessert.imageURL}" alt="${dessert.title}">
                    </div>
                    <h3>${dessert.title}</h3>
                    <h5>$${dessert.price}</h5>
                    <p>${dessert.description}</p>
                </li>
        `
        container.insertAdjacentHTML('beforeend', dishLi)
    }
});

function mainMenu() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    };
    
    for (i = 0; i < dishes.length; i++) {
        let dish = dishes[i]
        
        const dishLi = `
                <li>
                    <div class="imgContain">
                        <img src="${dish.imageURL}" alt="${dish.title}">
                    </div>
                    <h3>${dish.title}</h3>
                    <h5>$${dish.price}</h5>
                    <p>${dish.description}</p>
                </li>
        `
        container.insertAdjacentHTML('beforeend', dishLi)
    }
};