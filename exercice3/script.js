 const longpass = document.querySelector('#longpassword')
 const affichPassword = document.getElementById('afficheMotdepasse')
const maj= document.getElementById('majuscule')
const minu= document.getElementById('minuscule')
const nomb= document.getElementById('nombre')
const carac= document.getElementById('caractere')
 
 
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
    var tab = '';
    for (let i = debut; i <= fin; i++) {
        tab += String.fromCharCode(i) ; 
    }
    return tab.split('');
 }
const tabMaj=Generator(65,90);
const tabMin=Generator(97,122);
const tabNomb=Generator(48,57);
const tabCarac=Generator(33,47);

function estSelect (input){
    return input.checked;
}
function depot (input,tabGene){
    var tabDepot = []
    if(estSelect(input)){
        tabDepot=tabGene;
    }
    return tabDepot;

}
/*
const obtGenerator = {
    majuscule : "ABCDEFGHIJKLMOPQRSTUVWXYZ",
    minuscule : "abcdefghijklmnopqrstuvwxyz",
    nombre :    "0123456789",
    caractere: "!@#$%^&*()_+~\`|}{[]:;?><,./-=",
}
 
//--------------------------evenements-------------------------------

*/
generePassword.addEventListener('click',function (){
    var deposiToire = []
    const tMaj= depot(maj,tabMaj);
    const tMin= depot(minu,tabMin);
    const tNomb= depot(nomb,tabNomb);
    const tCarar= depot(carac,tabCarac)
    deposiToire = deposiToire.concat(tMaj,tMin,tNomb,tCarar)

    var genererPassword = '';
    for (let i = 0; i< longpass.value ;i++) {
        let posTrousseau = Math.floor (Math.random()*deposiToire.length);

        genererPassword +=deposiToire[posTrousseau];        
    }

    affichPassword.value = genererPassword

    // prompt('veuillez cocher au minimun un élément')


})

