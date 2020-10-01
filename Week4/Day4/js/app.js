// HARD MODE: There is a js file called "sources.js" in the attached download. Use that file to display all the sources. 
// When the user clicks on a particular source then show the user news from that source. If there is no news for the source then display no news found. 
// HARDER MODE: Only display the sources which contains at least one news item. 

let displayEl = document.getElementById("displayEl");
let articles = news.articles;
let displaySources = document.getElementById("displaySources");
let sourcesArray = sources.sources;

for (i = 0; i < articles.length; i++) {
    let article = articles[i];
    let literals = []
    literals.push(`<li>`);
    if (article.urlToImage != null) {literals.push(`<img src="${article.urlToImage}" alt="News Article Image">`)};
    literals.push(`<h3>${article.title}</h3>`);
    if (article.author != null) {literals.push(`<h4>${article.author}</h4>`)};
    if (article.description != null) {literals.push(`<p>${article.description}</p>`)};
    if (article.url != null) {literals.push(`<a href="${article.url}">Source</a>`)};
    if (article.publishedAt != null) {literals.push(`<p>${article.publishedAt}</p>`)};
    literals.push(`</li>`);
    let newsPost = literals.join(' ');
    displayEl.insertAdjacentHTML('beforeend', newsPost);
};

// for (i = 0; i < sourcesArray.length; i++) {
//     let source = sourcesArray[i];
//     let counter = 0;

//     for (i = 0; i < articles.length; i++) {
//         let article = articles[i];

//         if (article.source == sourceName) {
//             counter++
//         }
    
//     if (counter > 1) {
//         let sourcesItem = `<button onclick='showArticles()'>${source.name}</button>`;
//         displaySources.insertAdjacentHTML('beforeend', sourcesItem); 
//     };
// };

// function showArticles() {
//     let sourceName = this.innerHTML;
//     let finishedLis = [];
//     for (i = 0; i < articles.length; i++) {
//         let article = articles[i];
//         if (article.source == sourceName) {
//             let shows = [];
//             shows.push(`<li>`);
//             if (article.urlToImage != null) {shows.push(`<img src="${article.urlToImage}" alt="News Article Image">`)};
//             shows.push(`<h3>${article.title}</h3>`);
//             if (article.author != null) {shows.push(`<h4>${article.author}</h4>`)};
//             if (article.description != null) {shows.push(`<p>${article.description}</p>`)};
//             if (article.url != null) {shows.push(`<a href="${article.url}">Source</a>`)};
//             if (article.publishedAt != null) {shows.push(`<p>${article.publishedAt}</p>`)};
//             shows.push(`</li>`);
//             let showsLi = shows.join(' ');
//             finishedLis.push(showsLi);
//         }

//     }
// };