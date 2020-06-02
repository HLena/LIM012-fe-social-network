export default () => {
  const registryView = `
  <div class="welcome">
    <img src="../img/eco-trans-white.png" alt="chat" class="logo"/>
    <p class="app-name-text">eco-chat...</p>
  </div>
  <div class="holder">
    <h2 class="holder-title">Iniciar Sesión</h2>
      <form id="sign-in-form" name="login">
        <div class="form-control">
          <i class="far fa-envelope"></i>
          <input type="text" name="email" id="email" class="form-field user" placeholder="Correo Electrónico">
          <small>Mensaje de error</small>
        </div>
        <div class="form-control">
          <i class="fas fa-key"></i>
          <input type="password" name="password" id="password" class="form-field password" placeholder="Contraseña">
          <small>Mensaje de error</small>
        </div>
        <button id="sign-in-btn" class="form-btn">Iniciar Sesión</button>
      </form>
      <p class="aid-text"> O bien ingresa con...</p>
      <div class="social-media">
        <i class="fa fa-google" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </div>
      <p class="aid-text">¿No tienes una cuenta? <a href="#/register"> Regístrate</a></p>
  </div>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('screen-background');
  divElemt.innerHTML = registryView;
  return divElemt;
};
