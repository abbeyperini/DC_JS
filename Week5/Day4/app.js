let userCat = document.getElementById("userCat");
let userAddr = document.getElementById("userAddr");
let submitUserCat = document.getElementById("submitUserCat");
let displayCat = document.getElementById("displayCat");
let displayItems = document.getElementById("displayItems");
let addItemBox = document.getElementById("addItemBox");
let submitItem = document.getElementById("submitItem");
let storeNameBox = document.getElementById("storeNameBox");
let showAllItems = document.getElementById("showAllItems");

function addGroceryCat(category, address) {
    db.collection("gCat").add({
        name: category,
        address: address,
    })
    .then((docRef) => {
        dispGroceryCats()
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
};

function dispGroceryCats() {
    while (displayCat.firstChild) {
        displayCat.removeChild(displayCat.firstChild)
    };

    db.collection("gCat").get().then(snapshot => {
        snapshot.forEach((doc) => {
            let data = doc.data();
            let displayItem = `<li>
            <label>${data.name} - ${data.address}</label>
            <button>Add Items</button>
            <button onclick="deleteGroceryCats('${doc.id}')">Delete</button>
            </li>`;
            displayCat.insertAdjacentHTML('beforeend', displayItem);
        })
    })
};

function deleteGroceryCats(docId) {
    db.collection('gCat').doc(docId).delete().then(function() {
        dispGroceryCats();
    }).catch(function(error) {
        console.error("Error adding document: ", error);
    });
};

submitUserCat.addEventListener("click", () => {
    addGroceryCat(userCat.value, userAddr.value);
    dispGroceryCats();
});

dispGroceryCats();

submitItem.addEventListener("click", () => {addItems(addItemBox.value, storeNameBox.value)})

function addItems(item, storeName) {
    db.collection("gCat").get().then(snapshot => {
        snapshot.forEach((doc) => {
            let data = doc.data();
            if (storeName == data.name) {
                if (data.items) {
                    let itemsArray = [item]
                    for (i = 0; i < data.items.length; i++) {
                        itemsArray.push(data.items[i])
                    };

                    db.collection("gCat").doc(doc.id)
                    .update({
                    items: itemsArray 
                    })
                } else { let itemsArray = [item]

                    db.collection("gCat").doc(doc.id)
                    .update({
                    items: itemsArray 
                    })}
            }
        })
    })
};

function showItems() {
    while (displayItems.firstChild) {
        displayItems.removeChild(displayItems.firstChild)
    };

    db.collection("gCat").get().then(snapshot => {
        snapshot.forEach((doc) => {
            let data = doc.data();
            let items = data.items;
            let displayArray = [] 
            displayArray.push(`<label>${data.name}</label>`)
            for (i = 0; i < items.length; i++) {
                displayArray.push(`<li>${items[i]}</li>`)
            };
            let newList = displayArray.join(' ')
            displayItems.insertAdjacentHTML('beforeend', newList);
        })
    })
}

showAllItems.addEventListener("click", showItems)