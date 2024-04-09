const signupBtn = document.querySelector('#signup')
const nameInput = document.querySelector('#name')
const emailnput = document.querySelector('#email')
const ageInput = document.querySelector('#age')
const passInput = document.querySelector('#password')
const dbPassInput = document.querySelector('#password-check')

const nameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z]+$/
const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const ageRegex = /^[0-9]+$/
const passRegex = /^[a-z0-9_}\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{4,20}$/;

const validCheckP = document.querySelector('div > p')

function valid_check(type, regex) {
    if (regex == true) {
        if (type == 'name') {
            validCheckP[0].innerHTML = 'asdjasjd'
        }
        if (type == 'email') {
    
        }
        if (type == 'age') {
    
        }
        if (type == 'pass') {
    
        }
        if (type == 'dbPass') {
    
        }
        if (type == 'signup') {
    
        }
    }
}

nameInput.addEventListener('input', ()=>{
    valid_check('name',nameRegex.test(nameInput))
})
emailnput.addEventListener('input', ()=>{

})
ageInput.addEventListener('input', ()=>{

})
passInput.addEventListener('input', ()=>{

})
dbPassInput.addEventListener('input', ()=>{

})
signupBtn.addEventListener('input', ()=>{

})