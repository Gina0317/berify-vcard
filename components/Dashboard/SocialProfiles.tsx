const SocialProfiles = () => {
  return (
    <>
      <h5 className="text-gray mb-2">Social Profile</h5>
      <div className="d-flex mb-2">
        <select className="select-white text-gray h5">
          <option selected>Twitter</option>
          <option value="1">One</option>
        </select>
        <input className="input-gray h5" placeholder="https://" type="text" />
      </div>
      <button className="btn-white text-gray h5" type="button">Add Social Profile</button>
    </>
  )
};
export default SocialProfiles;