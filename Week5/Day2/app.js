let displayUl = document.getElementById("displayUL");
let userEmailBox = document.getElementById("userEmailBox");
let userCoffeeBox = document.getElementById("userCoffeeBox");
let orderCreateSubmit = document.getElementById("orderCreateSubmit");
let getOrderEmailBox = document.getElementById("getOrderEmailBox");
let getOrderSubmit = document.getElementById("getOrderSubmit");
let deleteOrderEmailBox = document.getElementById("deleteOrderEmailBox");
let deleteOrderSubmit = document.getElementById("deleteOrderSubmit");
let getEmailDisplay = document.getElementById("getEmailDisplay");

function getOrders(callback) {
    let request = new XMLHttpRequest();
    request.open("GET", 'https://dc-coffeerun.herokuapp.com/api/coffeeorders/');
    request.addEventListener("load", function() {
        let result = Object.values(JSON.parse(request.responseText));
        callback(result);
    });
    request.send();
};

function showOrders(orders) {
    orders.map(function(item) {
    let displayLi = `<li> <h3>${item.emailAddress}</h3>
    <p>${item.coffee}</p> </li>`;
    displayUl.insertAdjacentHTML('beforeend', displayLi)    
    })
}

function sendOrders() {
    if (userEmailBox.checkValidity()) {
        let userAddress = userEmailBox.value;
        let userCoffee = userCoffeeBox.value;
        let requestObject = {
            "emailAddress": userAddress,
            "coffee": userCoffee
        };

        let sendRequest = new XMLHttpRequest();
        sendRequest.open("POST", 'https://dc-coffeerun.herokuapp.com/api/coffeeorders/');
        sendRequest.setRequestHeader('Content-Type', 'application/json');
        sendRequest.send(JSON.stringify(requestObject));
    } else {
        alert("Not a valid email.")
    }
};

function showGetOrders(order) {
    let displayLi = `<li> <h3>${order[2]}</h3>
    <p>${order[1]}</p> </li>`;
    getEmailDisplay.insertAdjacentHTML('beforeend', displayLi)    
};

function getEmailOrder(callback) {
    if (getOrderEmailBox.checkValidity()) {
        let getAddress = getOrderEmailBox.value;
        let getLink = "https://dc-coffeerun.herokuapp.com/api/coffeeorders/" + getAddress;
        let getRequest = new XMLHttpRequest();
        getRequest.open("GET", getLink);
        getRequest.addEventListener("load", function() {
            let result = Object.values(JSON.parse(getRequest.responseText));
            console.log(result)
            callback(result);
        });
        getRequest.send();
    } else {
        alert("Not a valid email.")
    }
};

function deleteOrders(deleteAddress) {
    let deleteRequest = new XMLHttpRequest();
    let deleteLink = "https://dc-coffeerun.herokuapp.com/api/coffeeorders/" + deleteAddress;
    deleteRequest.open("DELETE", deleteLink);
    deleteRequest.send();
};

getOrders(showOrders);
orderCreateSubmit.addEventListener("click", sendOrders);
getOrderSubmit.addEventListener("click", () => {getEmailOrder(showGetOrders)});
deleteOrderSubmit.addEventListener("click", () => {deleteOrders(deleteOrderEmailBox.value)});
deleteOrderEmailBox.addEventListener("invalid", function(event) {
    event.target.setCustomValidity('Not a valid email.');
});