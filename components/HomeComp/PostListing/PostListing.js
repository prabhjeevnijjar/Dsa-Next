import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostCard from './PostCard';
import PostCardLoader from '../Loaders/PostCardLoader';

const PostListing = (props) => {
  return (
    <div>
      {props.images?.length ? (
        <>
          {[...props.images]?.map((data, index) => {
            return <PostCard key={index} data={data} />;
          })}
        </>
      ) : (
        [0, 1, 2].map((item, index) => {
          return <PostCardLoader key={index} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({ allResourceStore: state.resourceInfo.allResourceStore });

export default connect(mapStateToProps, null)(PostListing);
