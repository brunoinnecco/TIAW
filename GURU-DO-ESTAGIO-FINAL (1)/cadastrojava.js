function leDados () {
    let strDados = localStorage.getItem('aqui');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { Cadastro : [ 
                        {nome: "João da Silva", cidade: "BH", curso: "CC", Genero: "Masculino", Email: "Brunoinnecco@hotmail.com", Senha: "1234"}, 
                        {nome: "Marino", cidade: "BH", curso: "CC", Genero: "Masculino", Email: "suamanar@outlook.com", Senha: "4321"},
                        {nome: "Dogberto", cidade: "BH", curso: "Engenharia", Genero: "Masculino", Email: "subaquistao@hotmail.com", Senha: "5678"},
                    ]}
    }

    return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('Cadastro de Usuarios', JSON.stringify (dados));
}

function incluirCadastro (){
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo cadastro de cliente
    let strNome = document.getElementById ('name').value;
    let strCidade = document.getElementById ('city').value;
    let strCurso = document.getElementById ('Curso').value;
    let strEmail = document.getElementById ('email').value;
    let strSenha = document.getElementById ('password').value;
    let strGenero = document.getElementById ('generos').value;
    let novoCadastro = {
        nome: strNome,
        cidade: strCidade,
        curso: strCurso,
        Email: strEmail,
        Senha: strSenha,
        Genero: strGenero,
    };
    objDados.Cadastro.push (novoCadastro);

    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

    // Atualiza os dados da tela

}



document.getElementById ('CD').addEventListener ('click', incluirCadastro) 
