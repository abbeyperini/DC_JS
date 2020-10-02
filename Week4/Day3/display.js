function displayMenu(menu) {
    let array = menu;
    
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    };
    
    for (i = 0; i < dishes.length; i++) {
        let dish = array[i];
        
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
};