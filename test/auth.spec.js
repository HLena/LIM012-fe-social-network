import './firebase';
import {
  signInUser,
  createUser,
  signInWithGoogle,
  signInWithFacebook,
  sendConfirmationEmail,
  signOut,
} from '../src/model/user.model.js';

describe('Function signInUser()', () => {
  it('Should SignIn', () => signInUser('lala06@gmail.com', '123456')
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});

describe('Function createUser()', () => {
  it('Should send a email verification to the user registered', () => {
    createUser('lucy@gmail.com', '123456')
      .then(() => {
        expect(sendConfirmationEmail).toBe('REGISTRADO EXITOSAMENTE');
      });
  });
});

describe('Function signInWithGoogle', () => {
  it('Should SingIn with Google', () => signInWithGoogle()
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});
describe('Function signInWithFacebook', () => {
  it('Should SingIn with Facebook', () => signInWithFacebook()
    .then((user) => {
      expect(user.isAnonymous).toBe(false);
    }));
});
describe('Function signOut', () => {
  it('LogOut ', () => signOut()
    .then((result) => {
      expect(result).toBe(true);
    }));
});
