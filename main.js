document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json()) // parse response as ON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.value
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}