import React from "react";

function Form1({ formData, setFormData, setFormPage, formPage }) {
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const [cartError, setCartError] = React.useState(false);

  return (
    <div>
      <div className="form1-info-cont">
        <label>
          <div className="label-flex-cont">
            <p>Name</p>
            {cartError && (
              <p className="error-mssg">
                {!formData.name ? "This field is required" : ""}
              </p>
            )}
          </div>
          <input
            type="text"
            placeholder="e.g Stephen King"
            className={`${!formData.name && cartError ? "err-border" : ""}`}
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <div className="label-flex-cont">
            <p> Email Address</p>
            {cartError && (
              <p className="error-mssg">
                {!formData.emailAddress ? "This field is required" : ""}
              </p>
            )}
          </div>

          <input
            type="email"
            placeholder="e.g StephenKing@lorem.com"
            name="emailAddress"
          className={`${!formData.emailAddress && cartError ? "err-border" : ""}`}
            value={formData.emailAddress}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <div className="label-flex-cont">
            <p> Phone Number</p>
            {cartError && (
              <p className="error-mssg">
                {!formData.phoneNumber ? "This field is required" : ""}
              </p>
            )}
          </div>
          <input
            type="text"
            placeholder="e.g +1 234 567 890"
            name="phoneNumber"
            className={`${!formData.phoneNumber && cartError ? "err-border" : ""}`}
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        {/* <button onClick={checking}> check</button> */}
        {/* {formPage === 3 ? (
          ""
        ) : (
          <button className="nts-btn" onClick={nextStep}>
            Next Step
          </button>
        )}
        {formPage === 3 ? <button className="nts-btn">Next Step</button> : ""} */}
        {formPage === 0 ? (
          <div
            className="nts-btn"
            onClick={() => {
              !formData.name
                ? setFormPage(0)
                : !formData.emailAddress
                ? setFormPage(0)
                : !formData.phoneNumber
                ? setFormPage(0)
                : setFormPage(1);
              setCartError(true);
            }}
          >
            Next Step
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Form1;
