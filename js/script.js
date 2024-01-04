const actionbtn = document.querySelectorAll('.action-btn');
const questionbtn = document.querySelectorAll('.faq-question');
const faqans = document.querySelectorAll('.faq-answer');

close_accordion()

questionbtn.forEach(qbtn => {
    qbtn.addEventListener('click', (e) => {
        var qst_target = e.target.getAttribute("aria-controls");
        var qst_element = document.getElementById(qst_target);
        var btn_target = e.target;    
        close_accordion();
        qst_element.setAttribute('aria-expanded', 'true');
        toggle_btnicon(btn_target.nextElementSibling,qst_element.getAttribute('aria-expanded'))
    });
})

actionbtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        var ans_target = e.target.getAttribute("aria-controls");
        var ans_element = document.getElementById(ans_target);
        close_accordion();
        ans_element.setAttribute('aria-expanded', 'true');
        toggle_btnicon(btn,ans_element.getAttribute('aria-expanded'))
    });
})

function close_accordion(){
    faqans.forEach(ansreset => {
        ansreset.setAttribute('aria-expanded', 'false');
    })
    actionbtn.forEach(btn => {
        toggle_btnicon(btn, "false");
    })
}

function toggle_btnicon(target, state){
    if(state=='true'){
        target.classList.add('minus');
    }else{
        target.classList.remove('minus');
    }
}
