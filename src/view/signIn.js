export default () => {
  const divElemt = document.createElement('div');
  divElemt.classList.add('screen-background');
  divElemt.innerHTML = `
    <div class="logo-container">
    <img src="../img/eco-trans-white.png" alt="" class="logo">
    <span class="app-name">eco-chat...</span>
    </div>
    <div class="form-container">
    <h1 class="form-title">Iniciar sesión</h1>
    <p class="wellcome-msg">¡Bienvenid@! Por favor ingrese su correo y contraseña para iniciar sesión en su cuenta</p>
    <form id="sign-in-form">
    <div class="form-control">
    <i class="far fa-envelope icon-input"></i>
    <input type="text" name="email" id="email" class="form-field user" placeholder="Correo Electrónico" autocomplete="on">
    <small></small>
    </div>
    <div class="form-control">
    <i class="fa fa-key icon-input" aria-hidden="true"></i>
    <i id="show-password" class="fas fa-eye icon-psw hide cursor"></i>
    <i id="hide-password" class="fas fa-eye-slash icon-psw cursor"></i>
    <input type="password" name="password" id="password" class="password" placeholder="Contraseña"autocomplete="on">
    <small></small>
    </div>
    <button id="sign-un-btn">Iniciar Sesión</button>
    </form>
    <span class="msg-err">error aqui</span>
    <span class="text-deco"> O bien ingresa con...</span>
    <div class="social-media-container">
    <button class ="icon-google">
    <i id="btn-google"class="fa fa-google" aria-hidden="true"></i>
    </button>
    <button class ="icon-facebook">
    <i id="btn-facebook"class="fa fa-facebook" aria-hidden="true"></i>          
    </button>
    </div>
    <span class="text-deco">¿No tienes una cuenta aún? <a href="#/register">Registrarse</a></span>
    </div>
    </div>`;

  return divElemt;
};
