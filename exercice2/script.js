// let p= document.querySelectorAll(p)
const divGauche = document.getElementById('divGauche')
var tab=["Mon Premier","Mon Deuxieme","Mon Troisieme","Mon Quatrieme"];
  tab.forEach(element => {
      const p =document.createElement('p')
     p.innerHTML=`<p>${element}</p>`
     divGauche.appendChild(p)    
 });
 
 const pAll = document.querySelectorAll('p')
 const pDroite = document.querySelectorAll('.divDroite p')
//  const divGauche = document.getElementById('divGauche')
 const divDroite = document.getElementById('divDroite')
 const left = document.querySelector('#left')
 const right = document.querySelector('#right')
 for (let i =0; i < pAll.length; i++) {
      
     pAll[i].addEventListener('click',function(){
         pAll[i].classList.toggle('active')
         
            
     })
    
 }
 right.addEventListener('click',function() {
    //   prompt("bonjour")
 const pgauche = divGauche.querySelectorAll('p')
 pgauche.forEach(element => {   
     if (element.className=='active') {
         divDroite.appendChild(element)
         
     }
     
 });
     
 })

 left.addEventListener('click',function() {
    //   prompt("bonjour")
 const pdroite = divDroite.querySelectorAll('p')
 pdroite.forEach(element => {   
     if (element.className=='active') {
         divGauche.appendChild(element)
         
     }
     
 });

     
 })


//--------------------------Functions-----------------------------------








//--------------------------Evenements-------------------------------------s