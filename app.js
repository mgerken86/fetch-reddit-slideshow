console.log('hello')


const formButton = document.getElementById('form-button')
formButton.addEventListener('click', (e) => {
    
    // e.preventDefault()
    getCats()
    const form = document.querySelector('form')
    const paragraph = document.querySelector('p')
    // form.classList.add('hide')
    paragraph.classList.add('hide')
    console.log('button pressed')
})

// const form = document.querySelector('form')
// console.log(form)
function getCats() {
    const userInput = document.querySelector('.text-input').value
    fetch(`http://www.reddit.com/search.json?q=${userInput}+nsfw:no`) 
  .then((responseData)=>{
    return responseData.json();
  })
  .then((jsonData)=>{
    console.log("Here is the data:", jsonData);
    const imgContainer = document.getElementById('img-container')
    imgContainer.src = jsonData.data.children[Math.floor(Math.random() * 25)].data.thumbnail
  })}

