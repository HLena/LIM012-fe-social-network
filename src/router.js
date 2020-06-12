import { controllers } from './controller/mainController.js';
import sendEmailView from './view/sendEmail.js';


export const changeView = (hash) => {
  const sectionMain = document.getElementById('container');
  sectionMain.innerHTML = '';
  let view = '';
  switch (hash) {
    case '#/login':
      view = controllers.signInCtrl();
      break;
    case '#/register':
      view = controllers.signUpCtrl();
      break;
    case '#/email':
      view = sendEmailView();
      break;
    case '#/home':
      view = controllers.homeCtrl();
      break;
    default:
      view = controllers.signInCtrl('hola');
  }
  return sectionMain.append(view);
};
