const options = document.querySelectorAll('.options')
const submit = document.getElementById('submit')
const presstext = document.getElementById('pressed')
const thankYou = document.querySelector('.thank-you-state')
let pressed = -1;
for (let index=0;index<options.length;index++){
    options[index].addEventListener('click',()=>{
        if(index === pressed){
            options[index].classList.toggle('clicked');
            pressed = -1;
        }
        else if(pressed===-1){
            pressed = index;
            options[pressed].classList.toggle('clicked')
        }else{
            options[pressed].classList.toggle('clicked')
            options[index].classList.toggle('clicked');
            pressed = index;
            
        }
        presstext.innerHTML=pressed+1
        })
}
submit.addEventListener('click',(e)=>{
    if(pressed === -1){
        e.preventDefault()
    }else{
        thankYou.style['visibility']='visible';
    }
})