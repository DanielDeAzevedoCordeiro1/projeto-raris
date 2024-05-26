class HeaderLoggedUser extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="layout.css">
      </head>
      <body>
      <nav class="navbar navzinha justify-content-between">
      <ul>
      <a href = "index.html">LOGOAIRIS</a>
      </ul>
      <ul>
        <a>Informações</a>
        </ul>
        <ul class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Calculadora</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Impostos</a>
          <div class="dropdown-divider"></div> <!-- é só uma barrinha -->
          <a class="dropdown-item" href="#">Receita</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Taxa de</a>
        </div>
      </ul>

        <ul>
        <a href = "opcaoCadastro.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
</svg>
        Cadastro</a>

        <a href = "logout.html"> <!-- Adicionei um link de logout -->
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.5 3.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H9V9.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V6H2.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h6zm3.354 8.646a.5.5 0 0 1 0-.708L13.793 9H8.5a.5.5 0 0 1 0-1h5.293l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"/>
</svg>
      Logout</a>
</ul>
    </nav>
`
}
}

customElements.define('header-loggeduser-component', HeaderLoggedUser);
