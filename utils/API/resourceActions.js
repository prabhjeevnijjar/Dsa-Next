import API from '../../config/endpoints.json';
import Cookies from 'js-cookie';

export const addBookmarkHandler = async ({ userData, resData }) => {
  if (!userData.isLogin) window.$('#loginModal').modal('show');
  else {
    try {
      const token = await Cookies.get('auth-token');
      const response = await fetch('https://dsa-help-platform.onrender.com' + API.addBookmarkApi + '?resid=' + resData.data[0]._id, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return await response.json();
    } catch (err) {}
  }
};

export const upVoteHandler = ({ userData }) => {
  if (!userData.isLogin) window.$('#loginModal').modal('show');
};

export const downVoteHandler = ({ userData }) => {
  if (!userData.isLogin) window.$('#loginModal').modal('show');
};

export const showCommentsHandler = ({ userData }) => {
  if (!userData.isLogin) window.$('#loginModal').modal('show');
};
