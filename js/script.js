const actionbtn = document.querySelectorAll('.action-btn');
const faqans = document.querySelectorAll('.faq-answer');

close_accordion()

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