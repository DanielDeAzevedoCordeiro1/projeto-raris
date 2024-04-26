// const http = require('http')
// const server = http.createServer((req,res) => {
//     res.writeHead(200, {'Content-Type':'text/plain'})
//     res.end("Hello world!")
// })

// const porta = 3000

// server.listen(porta,'localhost', () => {
//     console.log(`Listening on porta https://localhost: ${porta}`)
// })







// const $button = document.querySelector("button")

// $button.addEventListener('click', () => {
//    console.log('Acessado abrindo o youtube')
// })  

function newButton(text,callback){

    const  $body = document.querySelector('body')
    const $button = document.createElement('button');
    $button.textContent = text
    
    callback($button)

    $body.insertAdjacentElement('beforeend',$button)
    return $button
}


newButton("Login", (button) => {
    button.style.cssText = `background-color: green;
                            color: orange;
                            font-size: 50px;
                            border-radius: 7px;                        
    `
})

newButton("Signup", (button) => {
    button.style.cssText = `
        background-color: gold;
        color: white;
        font-size: 50px;
        border-radius: 5px;
        margin-left: 100px
    `

    button.addEventListener('click', () => {
        console.log("Oi")
    })
})

// login.style.cssText = `font-size: 40px;
//                         background-color: red;
//                         color: white`


// signup.style.cssText = `
//     font-size: 40px;
//     border-radius: 5px;
//     margin-left: 20px;


//     background-color: green;
//     color:white
// `




