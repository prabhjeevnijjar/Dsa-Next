import API from '../../config/endpoints.json';
import Cookies from 'js-cookie';
import axios from 'axios';

const bookmarksCallHandler = async () => {
  const token = await Cookies.get('auth-token');
  await fetch(process.env.NEXT_PUBLIC_BASE_URL + API.getBookmarksApi, {
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
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + endpoint, {
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

const updateProfileHandler = async (body, isProfileImage) => {
  console.log({ body: body.profileImg });
  try {
    const token = await Cookies.get('auth-token');
    const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + isProfileImage ? API.updateProfileImgApi : API.updateProfileApi, body.profileImg, {
      'Content-type': isProfileImage ? 'multipart/form-data' : 'application/json',
      Authorization: `Bearer ${token}`,
    });
    console.log({ response });
    // const response = await fetch('http://localhost:3001' + isProfileImage ? API.updateProfileImgApi : API.updateProfileApi, {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': isProfileImage ? 'multipart/form-data' : 'application/json',
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: body.profileImg,
    // });
    // const res = await response.json();
    // if (res.code === 201) {
    //   toast.success(res.message);
    // } else {
    //   toast.error(res.message);
    // }
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

    if (res.code === 201) fetchCommentsOnPost(setComments, resourceId);
  } catch (e) {}
};

export { bookmarksCallHandler, profilePostsCallHandler, updateProfileHandler, fetchCommentsOnPost, addCommentsOnPostHandler };
