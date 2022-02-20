 const number = document.querySelector('#number')
 const majuscule = document.querySelector('#majuscule')
 const minuscule = document.querySelector('#minuscule')
 const nombre = document.querySelector('#nombre')
 const caractere = document.querySelector('#caractere')
 const generePassword = document.querySelector('#generePassword')

 //--------------------------Functions--------------------------------------
//  function Majuscule (){
//      return String.fromCharCode(Math.floor(math.randon()*26)+97)
//  }
//  fonction qui retourne des minuscule
 
/*  debut-fin 
a-z 97-122
 A-Z  65-90
 caracterespeciaux 33-47
 nombre 48-57 
*/
function Generator (debut,fin){
    var tab = ''
    for (let i = debut; i <= fin; i++) {
        tab += String.fromCharCode(i)  
    }
   return tab.split('')
}

  
 
