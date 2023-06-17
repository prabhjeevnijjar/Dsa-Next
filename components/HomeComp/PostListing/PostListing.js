import { connect } from 'react-redux';
import PostCard from './PostCard';

const PostListing = (props) => {
  const { allResourceStore } = props;

  return (
    <div className="contentcards">
      {allResourceStore?.map((data, index) => {
        return <PostCard key={index} data={data} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({ allResourceStore: state.resourceInfo.allResourceStore });

export default connect(mapStateToProps, null)(PostListing);
