

//Selezioniamo gli elementi dalla DOM, in questo caso la lista

const mailListEL = document.querySelector('.ul .li')
const btnGenerateEL = document.querySelector('.button')

btnGenerateEL.addEventListener('click', function(){

  axios("https://flynn.boolean.careers/exercises/api/random/mail")
.then(respose =>{
  console.log(response);


  const mail = response.data.response;
  
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