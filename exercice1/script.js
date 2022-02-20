



  
 //--------------------------------les functions------------------------------------
 let i = 0;
 function ajouternote (){
     var div1 = document.createElement('div');
     
     div1.setAttribute('id',`area_${i}`);
     div1.innerHTML = `<div class="editcorbeille">
             
     <div class="edit">
         <i id="editer" onclick="editer(${i})" class="fa fa-edit" style="font-size:17px"></i>

         </div>
             <div class="corbeille" id="corbeille" onclick="supprimer(${i})">
                 <i class="fa fa-trash"></i>       

             </div>
 
 </div>

         <textarea name="" id="textarea_${i}" cols="30" rows="30"></textarea>`
         document.body.appendChild(div1);
        
         i++;

   
 }
 function supprimer(i) {
     document.getElementById('area_'+i).remove()
 }
 function editer(n) {   
     let textarea = document.getElementById('textarea_'+n)
     textarea.toggleAttribute('disabled')
     textarea.focus()
     
 }
 

 


 //------------------------------evennement-------------------------------------

 addnote.addEventListener('click', function () {
     ajouternote();
 });