let image1 = document.getElementById('image1');
let title = document.querySelector('.title');
window.addEventListener('scroll', function(){
    let initialPoint = window.scrollY;
    //console.log(initialPoint);
    image1.style.left = -initialPoint * 0.5 + 'px';
    title.style.top = initialPoint * 0.5 +'px';
})

//Proporcionando animnación a los elementos de la página
let section = document.querySelectorAll('section');
window.addEventListener('scroll', function(){
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        if(top >= offset && top < offset + height){
            sec.classList.add('animation-show');
        }else{
            sec.classList.remove('animation-show');
        }
    })
})