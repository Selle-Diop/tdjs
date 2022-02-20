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
                correcte :"d"

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
     choix.forEach(ch =>ch.Checked=false)
 }
 function reponseSelectionne (){
     let reponse
     reponse.forEach(ch =>{
         if(ch.Checked){
             reponses=ch.id
         }
     })
      return reponse 
        
 }
//  -------------------------events----------------------

btnValider.addEventListener('click',()=>{
    const rep = reponseSelectionne ()
    if (rep) {
        if (rep=== lesQuiz[monQuiz].correcte) {
            score++
            
        }
        monQuiz++
    }
    if (monQuiz < lesQuiz.length) {
        samaQuiz()
        
    }
    else{
        quiz.innerHTML =
        `<h2>Votre reponse ${score}/$(monQuiz.lenght)</h2>
        <button onclick="location.reload()">`
    }
})


