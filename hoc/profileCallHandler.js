/* eslint-disable indent */
import { useState, useEffect } from 'react';
import { PROFILE_LIST_TYPE } from '../utils/constants';
import API from '../config/endpoints.json';
import { profilePostsCallHandler } from '../utils/API';

export const useProfileCallHandler = (type) => {
  const [postData, setPostData] = useState([]);

  const getPostData = async () => {
    await profilePostsCallHandler(
      type === PROFILE_LIST_TYPE.posts
        ? API.myPostsApi
        : type === PROFILE_LIST_TYPE.likes
        ? API.myLikesApi
        : type === PROFILE_LIST_TYPE.comments
        ? API.myCommentsApi
        : PROFILE_LIST_TYPE.bookmarks
        ? API.myBookmarksApi
        : ''
    ).then((data) => {
      if (data?.data?.length) setPostData(data?.data);
    });
  };
  useEffect(() => {
    if (type !== PROFILE_LIST_TYPE.me) getPostData();
  }, [type]);
  return { postData };
};
