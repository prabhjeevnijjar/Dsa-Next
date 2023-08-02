import Link from 'next/link';

const RightPostCard = () => {
  return (
    <div className="trending-card my-2 p-3">
      <Link href={'/discussion/postId'} as={'/discussion/123'} style={{ color: 'inherit', textDecoration: 'none' }}>
        <div className="m-3">
          <b>This is the best React resource</b>
        </div>
      </Link>
      <div className="m-3 fw-500">Web Dev Simplified</div>
      <div className="m-3 text-muted">Youtube</div>
    </div>
  );
};

export default RightPostCard;
