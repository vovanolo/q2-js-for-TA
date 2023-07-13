let btn = document.querySelector('.btn');
btn.addEventListener('click', async function(){
    let res = await fetch('./app.json')
    let date = await res.json();
    btn.innerHTML = date
})


//2
let btn1 = document.querySelector('.btn1')
let author = document.querySelector('.names');

btn1.addEventListener('click', async function(){
    let response = await fetch('./books.json')
    let date= await response.json()
    date.map(el => {
        author.innerHTML += `<li>${el.name}</li>`
    })
})