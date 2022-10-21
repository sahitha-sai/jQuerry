document.addEventListener('DOMContentLoaded', function(){
h1Element = document.querySelector('.color-green');
h1Element.setAttribute('style',"color:red");
})
document.getElementById("addbtn").addEventListener("click",()=>{
    let val = document.querySelector( "#input2" ).value;
    h1Element.classList.add(val)
})
document.getElementById("removebtn").addEventListener("click",()=>{
    let val = document.querySelector( "#input2" ).value;
    h1Element.classList.remove(val)

})