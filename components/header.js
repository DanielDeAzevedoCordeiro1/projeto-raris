class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand">Airis logo</a>
        <a>Calculadora</a>
        <ul>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Informações
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Beneficios de ser MEI</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Taxas</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li></ul>

        <ul>
        <a>Login</a>
        <a>Cadastro</a>
</ul>
    </nav>
`
}
}

customElements.define('header-component', Header);