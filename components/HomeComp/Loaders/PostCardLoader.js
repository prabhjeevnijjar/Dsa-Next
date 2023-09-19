import React from 'react';

import { Skeleton } from '@mui/material';

const PostCardLoader = () => {
  return (
    <div className="post-card card col-12 my-2 ">
      <div className="row px-2 py-2">
        <div className="col-2 mr-5 py-2">
          <Skeleton variant="circular" width={50} height={50}></Skeleton>
        </div>
        <div className="col-8">
          <Skeleton variant="rectangular" width="100%" height={20}></Skeleton>
          <Skeleton className="my-1" variant="rectangular" width={100} height={20}></Skeleton>
        </div>
        <div className="col-10">
          <div className="row px-2 py-2">
            <div className="col-12 mr-5">
              <Skeleton className="my-2" variant="rectangular" width="100%" height={20}></Skeleton>
              <Skeleton className="my-2" variant="rectangular" width="80%" height={20}></Skeleton>
              <Skeleton className="my-2" variant="rectangular" width="40%" height={20}></Skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCardLoader;
