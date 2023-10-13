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