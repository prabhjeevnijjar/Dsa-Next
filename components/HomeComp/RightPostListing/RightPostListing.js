import RightPostCard from './RightPostCard';

const RightPostListing = () => {
  return (
    <div className="col-4">
      <h5>What&apos; New</h5>
      {[0, 0, 0, 0].map((item, index) => {
        return <RightPostCard item={item} key={index} />;
      })}
    </div>
  );
};

export default RightPostListing;
