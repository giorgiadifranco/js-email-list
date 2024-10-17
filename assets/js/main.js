

//Selezioniamo gli elementi dalla DOM, in questo caso la lista

const mailListEL = document.querySelector('.ul')
const btnGenerateEL = document.querySelector('button')

btnGenerateEL.addEventListener('click', function(){

  axios("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response =>{
  //richiesta al server e la stampo
  console.log(response);

 //inserisco in una variabile la risposta del server
  const mail = response.data.respose;

  console.log(mail);
  


  //creo un elemento lista tramite createelement  
  const listEl = document.createElement("li")

  listEl.innerText = `new mail: ${mail}`

  //console.log(listEl)
  mailListEL.appendChild(listEl)
  
})

})

/*axios("https://flynn.boolean.careers/exercises/api/random/mail")
.then(respose => respose.json())
  .then(data => {
    console.log(data);

   ////document.querySelector('li').innerHTML = data.response


    

  })

  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(response => {
    const data = response.data;

    console.log(data);
    


  })
.cath(error =>{ 
    console.error(error)
})
.then(()=>{

})*/