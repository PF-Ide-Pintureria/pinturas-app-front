const reName = /^(?!.*\s{2})[a-zA-Z\s]{2,30}$/;
const reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const formValidation = ({ name, email }) => {
    const errors = {}
    if (!reName.test(name)) errors.name = "Debe ingresar un nombre válido"
    if (!reEmail.test(email)) errors.email = 'Debe ingresar un email válido'

    return errors;
};

export default formValidation;