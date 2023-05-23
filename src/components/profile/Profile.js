import React, { useState, useEffect } from "react";
import "./Profile.css";
import SidebarCards from "../Sidebars/SidebarCards";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import LogoutModal from "../LogoutModal";


const Profile = () => {
  // Initialize state variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [postcode, setPostcode] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  // Handle form submission
  const handleSubmit = () => {
    // Create an object to store the form data
    const formData = {
      firstName,
      phoneNumber,
      addressLine,
      postcode,
      state,
      email,
      country,
    };

    // Save the form data to local storage
    localStorage.setItem("profileData", JSON.stringify(formData));

    // Display a success message or perform any other desired actions
    console.log("Profile data saved successfully!");
  };

  // Update the form inputs when the component is rendered
  useEffect(() => {
    const storedProfileData = JSON.parse(localStorage.getItem("profileData"));
    if (storedProfileData) {
      setFirstName(storedProfileData.firstName);
      setPhoneNumber(storedProfileData.phoneNumber);
      setAddressLine(storedProfileData.addressLine);
      setPostcode(storedProfileData.postcode);
      setState(storedProfileData.state);
      setEmail(storedProfileData.email);
      setCountry(storedProfileData.country);
    }
  }, []);
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const handleSidebar = () => {
    setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle);
  };

  return (
    <div>
      <div id="wrapper">
        <SidebarCards
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
          handleSidebar={handleSidebar}
        />
        <div id="content-wrapper" class="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <Navbar
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
              handleSidebar={handleSidebar}
            />
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="profile-card">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="form-group">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    value={addressLine}
                    onChange={(e) => setAddressLine(e.target.value)}
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">Postcode</label>
                  <input
                    type="text"
                    className="form-control"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">State</label>
                  <input
                    type="text"
                    className="form-control"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                  onClick={handleSubmit}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
          <Footer />
        </div>
        <ScrollToTop />
        <LogoutModal />
      </div>
    </div>
  );
};

export default Profile;
