const ContactInfo = () => {
  return (
    <>
      <div className="d-flex flex-column mb-2">
        <h5 className="text-gray mb-2">Website</h5>
        <input className="input-gray" placeholder="https://" type="text" />
      </div>
      <div className="d-flex flex-column mb-2">
        <h5 className="text-gray mb-2">Email Address</h5>
        <input className="input-gray" placeholder="Email" type="text" />
      </div>
      <div className="mb-2">
        <h5 className="text-gray mb-2">Email Address</h5>
        <select className="input-gray mb-2">
          <option selected>Mobile</option>
          <option value="1">One</option>
        </select>
        <div className="d-flex">
          <input className="input-gray" placeholder="Country code" type="text" />
          <input className="input-gray" placeholder="Phone number" type="text" />
        </div>
      </div>
      <button className="btn-white" type="button">Add Phone</button>
    </>
  )
};

export default ContactInfo;