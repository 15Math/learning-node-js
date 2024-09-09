const validatePassword = (password, confirmPass, next) => {
    const minLength = 8;

    if (password.length < minLength) {
        return alert("A senha deve ter no mínimo " + minLength + " caracteres.");
    }
    if (!/\d/.test(password)) {
        return alert("A senha deve conter pelo menos um número.");
    }

    if (!/[a-zA-Z]/.test(password)) {
        return alert("A senha deve conter pelo menos uma letra.");
    }

    if (password !== confirmPass) {
        return alert("As senhas não coincidem.");
    }
    next();
};

module.exports({
    validatePassword
})