import Link from 'next/link';

const AddFab = () => {
  return (
    <Link href="/new">
      <div className="back_fab">
        <img src={'/static/icons/add-fab.png'} alt="go-back" />
      </div>
    </Link>
  );
};

export default AddFab;
