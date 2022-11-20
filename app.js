
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("button").classList.toggle('button-rotate')
}
let arrowBtn = document.querySelector('.arrow-btn');

arrowBtn.addEventListener('click', myFunction)

arrowBtn.onclick = function (event) {
    if (!event.target.matches('.arrow-btn')) {
        let arrowBtn = document.querySelector('.arrow-btn');
        // var i;
        for (let i = 0; i < arrowBtn.length; i++) {
            let openDropdown = arrowBtn[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


let signinBtn = document.getElementById('signin-button');
let loginCont = document.querySelector('.login-container');

signinBtn.addEventListener('click', signin);

function signin() {
    loginCont.classList.add('open')
}