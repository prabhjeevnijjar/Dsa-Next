import { useState } from 'react';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import API from '../../config/endpoints.json';

const EditProfileImage = () => {
  const [imageData, setImageData] = useState('');

  const submitHandler = async () => {
    const formData = new FormData();
    formData.append('profileImg', imageData);
    if (!imageData) toast.error('Please select an Image');
    else {
      try {
        const token = await Cookies.get('auth-token');

        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + API.updateProfileImgApi, {
          method: 'POST',
          headers: {
            // 'Content-type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
        const res = await response.json();
        if (res.code === 201) {
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      } catch (e) {}
    }
  };
  console.log({ imageData });
  return (
    <div className="modal fade" id="EditProfileImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Upload new profile image</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input type="file" onChange={(e) => setImageData(e.target.files[0])} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={() => submitHandler()}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfileImage;
