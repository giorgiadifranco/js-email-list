

//Selezioniamo gli elementi dalla DOM, in questo caso la lista

const mailListEL = document.querySelector('ul')
const btnGenerateEL = document.querySelector('button')

  
btnGenerateEL.addEventListener('click', function(){

  for(let i = 0; i < 10; i++){
    
    mailListEL.innerHTML = ''
  

  axios("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(response =>{
    //richiesta al server e la stampo
    console.log(response);
  
   //inserisco in una variabile la risposta del server
   
   const mail = response.data.response;

   
   

  //creo un elemento lista tramite createelement  

  //for(let i = 0; i < 10; i++){
  const listEl = document.createElement("li")

  listEl.innerText = `new mail: ${mail}`

  //console.log(listEl)
  mailListEL.appendChild(listEl)
})
}
  


})

