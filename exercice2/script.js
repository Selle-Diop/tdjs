// let p= document.querySelectorAll(p)
const divGauche = document.getElementById('divGauche')
var tab=["Mon Premier","Mon Deuxieme","Mon Troisieme","Mon Quatrieme"];
  tab.forEach(element => {
      const p =document.createElement('p')
     p.innerHTML=`<p>${element}</p><br>`
     divGauche.appendChild(p)    
 });
 
 const pAll = document.querySelectorAll('p')
 const pDroite = document.querySelectorAll('.divDroite ')
//  const divGauche = document.getElementById('divGauche')
 const divDroite = document.getElementById('divDroite')
 const left = document.querySelector('#left')
 const right = document.querySelector('#right')
 for (let i =0; i < pAll.length; i++) {
      
     pAll[i].addEventListener('mouseover',function(){
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
 
 activerBouton (divDroite,left)
 activerBouton (divGauche,right) 
 })

 left.addEventListener('click',function() {
    //   prompt("bonjour")
 const pdroite = divDroite.querySelectorAll('p')
 pdroite.forEach(element => {   
     if (element.className=='active') {
         divGauche.appendChild(element)
         
     }
     
     
 });

activerBouton (divDroite,left)
 activerBouton (divGauche,right)
 });
 

  function activerBouton (parent,bouton) { 
     
     if (parent.childNodes.length == 0) {
        
        bouton.disabled = true;
         
     }
     else { 
     bouton.disabled = false;
    }

 }
  
 activerBouton(divDroite,left)
 
 

//--------------------------Functions-----------------------------------








//--------------------------Evenements-------------------------------------s