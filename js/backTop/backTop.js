const btnBackTop = document.querySelector('[data-anima="scroll"]');

function ativabtnBackTop(){
    const screenPosition = btnBackTop.getBoundingClientRect().top;
    
    
    if(screenPosition < -200) {
        btnBackTop.classList.add('show_button');
    }else{
        btnBackTop.classList.remove('show_button');
    };
};

window.addEventListener('scroll', ativabtnBackTop);
