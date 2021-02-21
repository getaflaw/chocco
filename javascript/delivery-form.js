const formBtn = document.querySelector('.form-order');
const myForm = document.querySelector('#delivery-form');
const feedbackMsg = document.querySelector('.form-msg');
const responseClose = document.getElementById('responseClose');
const xhr = new XMLHttpRequest();

formBtn.addEventListener('click', function(item){
    item.preventDefault();
    if (validateForm(myForm)){
        const data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            streat: myForm.elements.streat.value,
            comment: myForm.elements.coments.value,
            to: "my@mail.com"
        }
        xhr.responseType='json';
        xhr.open('POST','https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', ()=> {
            feedbackMsg.classList.add('form-msg_show');
            console.log(xhr.response.message);
            feedbackMsg.childNodes[1].textContent=xhr.response.message;
            responseClose.addEventListener('click', ()=> {
                feedbackMsg.classList.remove('form-msg_show');
                feedbackMsg.childNodes[1].textContent="";
            })
        })
    }
});

function validateForm(Form) {
    let valide = true;
    if (!validateField(Form.elements.name)){
        valide = false;
    };
    if (!validateField(Form.elements.phone)){
        valide = false;
    };
    if (!validateField(Form.elements.streat)){
        valide = false;
    };
    if (!validateField(Form.elements.house)){
        valide = false;
    };
    if (!validateField(Form.elements.door)){
        valide = false;
    };
    return valide;
}

function validateField(field) {
    if (!field.checkValidity()){
        field.classList.add('delivery-form__error');
        field.placeholder = field.validationMessage;
    }
    setTimeout(function(){
        field.classList.remove('delivery-form__error');
        field.placeholder = "";
    },1500);
    return field.checkValidity();
}

