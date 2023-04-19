document.addEventListener("DOMContentLoaded", () => {
    // código que depende do DOM estar carregado



localStorage.setItem('scrollPosition', window.pageYOffset);
    
window.scrollTo(0, localStorage.getItem('scrollPosition'));

const abas = document.querySelectorAll('.abas_parte');
const abasselect = document.querySelectorAll('.abas_parte_selecionado');
const estilo = document.querySelector('.estilo_aba');



// PARTE DO SCROLL ---->>>>>>>>
/* */
abas.forEach(aba => {
  aba.addEventListener('click', () => {
    if (!aba.classList.contains('abas_parte_selecionado')) {
      abas.forEach(abaselect => {
        abaselect.classList.remove('abas_parte_selecionado');
      });
      aba.classList.add('abas_parte_selecionado');
      
    }
  });
});
 

// PARTE DO SCROLL  REMOVER---->>>>>>>>
const dot = document.querySelectorAll('.scroll_indicador a');

const removeActiveClass = () => {
dot.forEach((remover) => {
    remover.classList.remove('ativado')
});
};


// PARTE DO SCROLL ATIVADO ---->>>>>>>>






const addActiveClass = (alvo) => {
    alvo.forEach((valor) => {
        if(valor.isIntersecting){
         
            
            const verificarsessao = document.querySelector(
                `.scroll_indicador a[href = '#${valor.target.id}']`
                );
                console.log(valor.target);
                removeActiveClass();
                verificarsessao.classList.add('ativado');
            
        };


    });
};



const options = {
    threshold:1
};

const observer = new IntersectionObserver(addActiveClass,options)
const sections = document.querySelectorAll("section");

sections.forEach (section =>{
    observer.observe(section);
})







// PARTE DO abas ---->>>>>>>>





});



