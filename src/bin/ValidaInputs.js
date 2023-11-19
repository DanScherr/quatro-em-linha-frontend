export function validaNome(nome) {
    if (nome == null) 
        return "O campo 'nome' deve ser preenchido";
    if (nome.length < 3)
        return "O nome deve ter ao menos 3 caracteres";

    return null;
}

export function validaEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == null) 
        return "O campo 'email' deve ser preenchido";
    if (!regex.test(email))
        return "Você digitou um e-mail inválido"
    
    return null;
}

export function validaSenha(senha) {
    if (senha == null) 
        return "O campo 'senha' deve ser preenchido";
    if (senha.length < 5)
        return "A senha deve ter ao menos 5 caracteres";

    return null;
}

export function validaValor(valor) {
    let isNumeric = isNumber(valor);

    console.log("VALOR " + valor)

    if (valor == null) 
        return "O campo deve ser preenchido";
    if (!isNumeric)
        return "O valor precisa ser um número válido";
    if (valor < 1)
        return "O valor não pode ser menor ou igual a 0";

    return null;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}