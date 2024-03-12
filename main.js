
const addform = document.getElementById
("form-validation");
addform.addEventListener("submit", (Event)=>{
    if(addform.checkValidity() === false){
        Event.preventDefault();
        Event.stopPropagation();
        addform.classList.add('was-validated');
        return false
    }

});