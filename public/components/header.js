class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="layout.css">
    <script src="front.js" type="text/javascript"></script>
    </head>
    <body>
    <nav class="navbar navzinha justify-content-between">
    <ul class="navbar-nav d-flex flex-row align-items-center w-100">
      <li class="nav-item mx-3">
        <a href="index.html">
          <img src="images/logoinvertida.png" style="width:30%">
        </a>
      </li>
      <li class="nav-item mx-3">
        <a href="informacoes.html">Informações</a>
      </li>
      <li class="nav-item mx-5">
      </li>    
        <li class="nav-item mx-5">
      </li>
      <li class="nav-item mx-3">
      <a href="" onclick="temporario()">Calculadora</a>
    </li>
        <li class="nav-item mx-5">
        </li>     
        <li class="nav-item mx-5">
      </li>
      <li class="nav-item mx-3">
        <a href="opcaoCadastro.html" class="d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill mr-2" viewBox="0 0 16 16">
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
          </svg>
          Cadastro
        </a>
      </li>

      <li class="nav-item mx-3">
        <a href="login.html" class="d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person mr-2" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
          </svg>
            Login
        </a>
      </li>
    </ul>
  </nav>

  
  
  
`
}
}

customElements.define('header-component', Header);