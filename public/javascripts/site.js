let quote = '';

const quoteElement = document.getElementById('quote-text');

function fetchQuote() {

  axios.get('/quote')
  .then(function (response) {
    quoteElement.innerHTML = response.data.quote;
  })
  .catch(function (error) {
    console.log(error);
  });
}

// start here...

fetchQuote();
