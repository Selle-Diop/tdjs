 const quiz = document.getElementById('quiz')
 const choix = document.querySelectorAll('.choix')
 const questions = document.getElementById('question')
 const jav = document.getElementById('jav')
 const cshap = document.getElementById('cshap')
 const pyt = document.getElementById('pyt')
 const javsp = document.getElementById('javsp')
 const btnValider = document.getElementById('submit')
 const lesQuiz=[
     {
         question : "Quel est le meilleur langage de Programmation en 2022",
                a :"java",
                b :"C",
                c :"Python",
                d:"javascipt",
                reponse :"d",

            },
            {
                question: "Qui est le meilleur joueur du monde?",
                a: "Lionel Messi",
                b: "Christiano Ronaldo",
                c: "Sadio Mane",
                d: "Kylian Mbappe",
                reponse: "c",
            },
            {
                question: "Qui a gagné la derniere Can?",
                a: "Senegal",
                b: "Cameroun",
                c: "Burkina Faso",
                d: "Egypte",
                reponse: "a",
            },
            {
                question: "Quel plat vous aimez le plus",
                a: "Mafé",
                b: "Thiep",
                c: "Yassa",
                d: "Soupe Kandja",
                reponse: "b",
            }
 ]

//--------------------------------Function----------------------

let monQuiz=0
let score = 0
samaQuiz()

function samaQuiz () {
    pasReponseSelectionne()
    const mesQuiz = lesQuiz[monQuiz]
    questions.innerText=mesQuiz.question
    jav.innerText=mesQuiz.a
    cshap.innerText=mesQuiz.b
    pyt.innerText=mesQuiz.c
    javsp.innerText=mesQuiz.d
   
}
 function pasReponseSelectionne(){
     choix.forEach(ch =>ch.checked=false)
 }
 function reponseSelectionne (){
     let reponse
     choix.forEach(ch =>{
         if(ch.checked){
             reponse=ch.id
         }
     })
      return reponse 
        
 }
//  -------------------------events---------------

btnValider.addEventListener('click',()=>{
    const rep = reponseSelectionne ()
    if (rep) {
        if (rep=== lesQuiz[monQuiz].reponse) {
            score++
            
        }
        monQuiz++
    }
    if (monQuiz < lesQuiz.length) {
        samaQuiz()
        
    }
    else{
        quiz.innerHTML =
        `<h2>Votre score est ${score}/${4}.</h2>
        <button onclick="location.reload()"> Rejouer !</button>`
    }
})


