// HARD MODE: There is a js file called "sources.js" in the attached download. Use that file to display all the sources. 
// When the user clicks on a particular source then show the user news from that source. If there is no news for the source then display no news found. 
// HARDER MODE: Only display the sources which contains at least one news item. 
// Needs to be styled

let displayEl = document.getElementById("displayEl");
let articles = news.articles;
let sourceCon = document.getElementById("sourceCon");
let sourcesArray = sources.sources;
let addedSources = [];
let articleChildren = displayEl.children;
let sourceChildren = sourceCon.children;

for (i = 0; i < articles.length; i++) {
    let article = articles[i];
    let literals = [];
    literals.push(`<li>`);
    if (article.urlToImage != null) {literals.push(`<img src="${article.urlToImage}" alt="News Article Image">`)};
    literals.push(`<h3>${article.title}</h3>`);
    if (article.author != null && article.author.includes("https://www.facebook.com") == false) {literals.push(`<h4>${article.author}</h4>`)};
    if (article.description != null) {literals.push(`<p>${article.description}</p>`)};
    if (article.url != null) {literals.push(`<a href="${article.url}">Source</a>`)};
    if (article.publishedAt != null) {literals.push(`<p>${article.publishedAt}</p>`)};
    literals.push(`</li>`);
    let newsPost = literals.join(' ');
    displayEl.insertAdjacentHTML('beforeend', newsPost);

    addSource(article.source.id);
};

function getSourceUrl(sourceId) {
    let foundSource = sourcesArray.find((source) => {
        return source.id == sourceId;
    });
    return foundSource == null ? "": foundSource.url;
};

function addSource(sourceId) {
    if (sourceId != null && addedSources.includes(sourceId) === false) {
        let sourceDisplay = `<button>${sourceId}</button>`;
        sourceCon.insertAdjacentHTML('beforeend', sourceDisplay);
        addedSources.push(`${sourceId}`);
    };
};

let idCounter = 0;

function showSources() {
    let sourceName = this.innerHTML;
    let matchingSourceURL = getSourceUrl(sourceName);
    this.insertAdjacentHTML('beforeend', `<ul class="showSourceCon" id="showSourceCon${idCounter}"></ul>`);
    let innerSourceCon = document.getElementById(`showSourceCon${idCounter}`);
    idCounter++;

    for (i = 0; i < articles.length; i++) {
        let article = articles[i];
        if (article.source.id == sourceName) {
            let literals = [];
            literals.push(`<li><a href="${matchingSourceURL}"><button>Website</button></a>`);
            if (article.urlToImage != null) {literals.push(`<img src="${article.urlToImage}" alt="News Article Image">`)};
            literals.push(`<h3>${article.title}</h3>`);
            if (article.author != null) {literals.push(`<h4>${article.author}</h4>`)};
            if (article.description != null) {literals.push(`<p>${article.description}</p>`)};
            if (article.url != null) {literals.push(`<a href="${article.url}">Source</a>`)};
            if (article.publishedAt != null) {literals.push(`<p>${article.publishedAt}</p>`)};
            literals.push(`</li>`);
            let newsPost = literals.join(' ');
            innerSourceCon.insertAdjacentHTML('beforeend', newsPost);
        };
    };
};

for (j = 0; j < sourceChildren.length; j++) {
    sourceChildren.item(j).addEventListener("click", showSources);
};