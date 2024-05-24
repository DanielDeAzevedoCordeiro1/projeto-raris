function conteudoSobre(identifica){

    if(identifica == 'ei'){
        document.getElementById("eireli").style.border = "none";
        document.getElementById("ltda").style.border = "none";

        document.getElementById("ei").style.borderBottom = "3px groove #940000";

        document.getElementById("textoSobre").innerHTML = `
        <h4>Empreendedor Individual (EI)</h4>
        <p>No modelo de Empreendedor Individual, o empreendedor é dono da empresa e não sócio dela, não é permitido trabalho intelectual 
        neste tipo de empresa, por exemplo, advogados, médicos, psicólogos. Não são permitidos quaisquer trabalhos que estejam ligados
         às áreas científicas, literárias ou artísticas.
        </p>
        `
        
    }
    else if(identifica  == 'ltda'){
        document.getElementById("eireli").style.border = "none";
        document.getElementById("ei").style.border = "none";

        document.getElementById("ltda").style.borderBottom = "3px groove #940000";

        document.getElementById("textoSobre").innerHTML = `

        <h4>Sociedade Empresarial Limitada (Ltda)</h4>
                <p>A sociedade limitada é uma categoria que envolve dois ou mais sócios. Mas tudo isso precisa estar presente no contrato social, firmado 
                entre o dono e os sócios investidores. Essa modalidade também possui a separação entre bem jurídico e bem pessoal, portanto,
                 o sócio só responde pelas dívidas da empresa através dos seus bens jurídicos. Outro destaque é a facilidade de incluir e retirar sócios 
                 através do Contrato Social, sem que a empresa precise acabar. É importante que as responsabilidades de cada sócio também estejam 
                 presentes no Contrato Social.
                 </p>
                         
        `
        
    }
    else if(identifica == 'eireli'){
        document.getElementById("ltda").style.border = "none";
        document.getElementById("ei").style.border = "none";

        document.getElementById("eireli").style.borderBottom = "3px groove #940000";

        document.getElementById("textoSobre").innerHTML = `
        <h4> Empresa Individual de Responsabilidade Limitada (EIRELI)</h4>
             <p>   Eireli é uma micro empresa na qual há apenas um sócio, ou seja, o proprietário, ele mesmo. Não tem nenhum limite
                 de faturamento anual, podendo optar pelo Simples Nacional, o empresário não tem seu patrimônio pessoal afetado por dívidas da empresa.
                 </p>
                `
    }
}
function temporario(){
    alert('Em breve')
    }
function redCadastro(){
    window.open('cadastro.html' , '_self')
}