const CardInfo = () => {
  return (
    <div>
      <h5 className="text-gray mb-2">Cover Image/Color</h5>
      <button className="text-gray btn-white h5 mb-2" type="button">Upload</button>
      <h5 className="text-gray mb-2">OR</h5>
      <div className="d-flex mb-2">
        <input className="input-gray" type="text" />
        <input type="color" />
      </div>
      <h5 className="text-gray mb-2">Logo</h5>
      <button className="text-gray btn-white h5 mb-2" type="button">Upload</button>
      <h5 className="text-gray mb-2">Your Photo</h5>
      <button className="text-gray btn-white h5 mb-2" type="button">Upload</button>
      <div className="d-flex flex-column mb-2">
        <h5 className="text-gray mb-2">First Name</h5>
        <input className="input-gray" placeholder="First Name" type="text" />
      </div>
      <div className="d-flex flex-column mb-2">
        <h5 className="text-gray mb-2">Last Name</h5>
        <input className="input-gray" placeholder="Last Name" type="text" />
      </div>
      <div className="d-flex flex-column mb-2">
        <h5 className="text-gray mb-2">Job/Role</h5>
        <input className="input-gray" placeholder="Job/Role" type="text" />
      </div>
      <div className="d-flex flex-column mb-2">
        <h5 className="text-gray mb-2">Company Name</h5>
        <input className="input-gray" placeholder="Company Name" type="text" />
      </div>
      <div className="d-flex flex-column mb-2">
        <h5 className="text-gray mb-2">Address/Location</h5>
        <input className="input-gray" placeholder="Address/Location" type="text" />
      </div>
      <div className="d-flex flex-column mb-2">
        <h5 className="text-gray mb-2">Bio</h5>
        <textarea className="input-gray w-100" style={{ minHeight: '60px' }} placeholder="Bio"></textarea>
      </div>
    </div>
  );
}

export default CardInfo;