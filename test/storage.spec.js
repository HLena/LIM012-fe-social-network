import './firebase.js';

import { uploadImage } from '../src/model/storage-post.js';

describe('uploadImage', () => {
  const file = { name: 'hola.png', type: 'image/png' };
  test('should return the path of the img file', () => uploadImage(file)
    .then(url => expect(url).toBe('/PostsImages/hola.png')));
});
