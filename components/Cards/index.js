// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then( res =>{
      const keysArray =  Object.keys(res.data.articles)
	    for (let i=0; i < keysArray.length; i++) {
	        const key = keysArray[i];
	        res.data.articles[`${key}`].forEach(element => {
                cardMaker(element)
	        });
	       }
	  console.log(keysArray)
        }).catch(err =>{
        console.log(err, 'you have failed')
      })


function cardMaker(key) {
    /*-------------------Variables---------------- */
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorCont = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const author = document.createElement('span');
    

    /*----------------Classes---------------------- */
    card.classList.add('card');
    headline.classList.add('headline');
    authorCont.classList.add('author');
    imgCont.classList.add('img-container');

    /*--------------Text Content------------------- */
    headline.textContent = key.headline;
    img.src = key.authorPhoto;
    author.textContent = `By ${key.authorName}`

    /*---------------Appendages-----------------------*/
    card.appendChild(headline);
    card.appendChild(authorCont);

    authorCont.appendChild(imgCont);
    authorCont.appendChild(author);

    imgCont.appendChild(img);

    const cardContainer = document.querySelector(".cards-container")
    cardContainer.appendChild(card)

    return cardContainer
}


/*axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then( res =>{
	  const keysArray =  Object.keys(res.data.articles)
	    for (var key in articles) {
	        const key = keysArray[index];
	        res.data.articles[`${key}`].forEach(element => {
	            cardMaker(element)
	        });
	       }
	  console.log(keysArray)
	    }).catch(err =>{
        })
        */

        /*const articleCards = [];
const newCard = cardMaker(item);

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then (response => {
    for (var property in response.data.articles.javascript) {
        if (response.data.articles.javascript.hasOwnProperty(property)) {
            articleCards.push(response.data.articles.javascript);
        }
    }
    for (var property in response.data.articles.bootstrap) {
        if (response.data.articles.bootstrap.hasOwnProperty(property)) {
            articleCards.push(response.data.articles.bootstrap);
        }
    }
    for (var property in response.data.articles.technology) {
        if (response.data.articles.technology.hasOwnProperty(property)) {
            articleCards.push(response.data.articles.technology);
        }
    }
    for (var property in response.data.articles.jquery) {
        if (response.data.articles.jquery.hasOwnProperty(property)) {
            articleCards.push(response.data.articles.jquery);
        }
    }
    for (var property in response.data.articles.node) {
        if (response.data.articles.jquery.hasOwnProperty(property)) {
            articleCards.push(response.data.articles.node);
        }
    }
    
    articleCards.forEach(item => {
        const newCard = cardMaker(item);
        cardEntry.appendChild(newCard)
    })
})
*/