import Link from 'next/link';

const LoginModal = () => {
  return (
    <div className="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header align-center">
            <h5 className="modal-title text-center" id="staticBackdropLabel">
              You need to login first!
            </h5>
            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
          </div>
          {/* <div className="modal-body">...</div> */}
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={() => {
                window.$('#loginModal').modal('hide');
              }}
            >
              Go back
            </button>
            <Link
              href={'/enter'}
              type="button"
              className="btn btn-primary"
              onClick={() => {
                window.$('#loginModal').modal('hide');
              }}
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
