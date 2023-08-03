import API from '../../config/endpoints.json';
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

const profilePostsCallHandler = async (endpoint) => {
  if (endpoint) {
    try {
      const token = await Cookies.get('auth-token');
      const response = await fetch('https://dsa-help-platform.onrender.com' + endpoint, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return await response.json();
    } catch (e) {}
  }
};

export { bookmarksCallHandler, profilePostsCallHandler };
