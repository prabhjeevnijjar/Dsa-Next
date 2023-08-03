export const addBookmarkHandler = ({ userData }) => {
  if (!userData.isLogin) window.$('#loginModal').modal('show');
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
