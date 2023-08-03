import RightPostCard from './RightPostCard';

const RightPostListing = (props) => {
  const { heading } = props;
  return (
    <div className="col-md-4">
      <h5>{heading}</h5>
      {[0, 0, 0, 0].map((item, index) => {
        return <RightPostCard item={item} key={index} />;
      })}
    </div>
  );
};

export default RightPostListing;
