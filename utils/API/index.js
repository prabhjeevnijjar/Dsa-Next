import { toast } from 'react-hot-toast';
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

const updateProfileHandler = async (body) => {
  try {
    const token = await Cookies.get('auth-token');
    const response = await fetch('https://dsa-help-platform.onrender.com' + API.updateProfileApi, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body,
    });
    const res = await response.json();
    if (res.code === 201) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  } catch (e) {}
};

const fetchCommentsOnPost = async (setComments, resourceId) => {
  try {
    const response = await fetch('http://localhost:3001' + API.fetchCommentsOnPostApi + `?resourceId=${resourceId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const res = await response.json();
    console.log(res);
    if (res.code === 200) {
      setComments(res.data);
    }
  } catch (e) {}
};

const addCommentsOnPostHandler = async (comments, setComments, resourceId, newComment) => {
  try {
    const token = await Cookies.get('auth-token');

    const response = await fetch('http://localhost:3001' + API.addCommentOnPostApi + `?resourceId=${resourceId}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        commentText: newComment,
      }),
    });
    const res = await response.json();
    console.log(res);
    console.log({ comments });
    if (res.code === 201) fetchCommentsOnPost(setComments, resourceId);
    // else window.$('#loginModal').modal('show');
  } catch (e) {}
};

export { bookmarksCallHandler, profilePostsCallHandler, updateProfileHandler, fetchCommentsOnPost, addCommentsOnPostHandler };
