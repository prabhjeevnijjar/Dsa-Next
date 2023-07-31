import * as API from '../../config/endpoints.json';
import Cookies from 'js-cookie';

const bookmarksCallHandler = async () => {
  const token = await Cookies.get('auth-token');
  await fetch('https://dsa-help-platform.onrender.com' + API.getBookmarksApi, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((data) => {
      return data;
    })
    .catch(() => {
      return [];
    });
};

const profilePostsCallHandler = async () => {
  const token = await Cookies.get('auth-token');
  await fetch('https://dsa-help-platform.onrender.com' + API.myPostsApi, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log('----', data);
      return data;
    })
    .catch(() => {
      return [];
    });
};

export { bookmarksCallHandler, profilePostsCallHandler };
