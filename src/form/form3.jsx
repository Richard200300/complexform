import React from "react";

function Form3({ setFormPage, formData, setFormData, togglemonth, selPlan }) {
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div>
      {togglemonth ? (
        <section>
          <label
            className={`${
              formData.onlineService
                ? "checkbox-container-active"
                : "checkbox-container"
            }`}
            name="checkbox"
          >
            <div className="checkbox-mini-cont">
              <input
                type="checkbox"
                className={"input-checkbox"}
                checked={formData.onlineService}
                onChange={handleChange}
                name="onlineService"
              />
              <div>
                <p className="pick-ad-title">Online Service</p>
                <p className="pick-ad-text">Access to multiplayer games</p>
              </div>
            </div>
            <p className="pick-ad-price">+${formData.osMo}/mo</p>
          </label>
          <label
            className={`${
              formData.largerService
                ? "checkbox-container-active"
                : "checkbox-container"
            }`}
            name="checkbox"
          >
            <div className="checkbox-mini-cont">
              <input
                type="checkbox"
                className="input-checkbox"
                checked={formData.largerService}
                onChange={handleChange}
                name="largerService"
              />
              <div>
                <p className="pick-ad-title">Larger storage</p>
                <p className="pick-ad-text">Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="pick-ad-price">+${formData.lsMo}/mo</p>
          </label>
          <label
            className={`${
              formData.customizableProfile
                ? "checkbox-container-active"
                : "checkbox-container"
            }`}
            name="checkbox"
          >
            <div className="checkbox-mini-cont">
              <input
                type="checkbox"
                className="input-checkbox"
                checked={formData.customizableProfile}
                onChange={handleChange}
                name="customizableProfile"
              />
              <div>
                <p className="pick-ad-title">Customizable profile</p>
                <p className="pick-ad-text">Custom theme on your profile</p>
              </div>
            </div>
            <p className="pick-ad-price">+${formData.cpMo}/mo</p>
          </label>
        </section>
      ) : (
        <section>
          <label
            className={`${
              formData.onlineServiceyr
                ? "checkbox-container-active"
                : "checkbox-container"
            }`}
            name="checkbox"
          >
            <div className="checkbox-mini-cont">
              <input
                type="checkbox"
                className={"input-checkbox"}
                checked={formData.onlineServiceyr}
                onChange={handleChange}
                name="onlineServiceyr"
              />
              <div>euiudahod</div>
              <div>
                <p className="pick-ad-title">Online Service</p>
                <p className="pick-ad-text">Access to multiplayer games</p>
              </div>
            </div>
            <p className="pick-ad-price">+${formData.osyr}/yr</p>
          </label>
          <label
            className={`${
              formData.largerServiceyr
                ? "checkbox-container-active"
                : "checkbox-container"
            }`}
            name="checkbox"
          >
            <div className="checkbox-mini-cont">
              <input
                type="checkbox"
                className="input-checkbox"
                checked={formData.largerServiceyr}
                onChange={handleChange}
                name="largerServiceyr"
              />
              <div>
                <p className="pick-ad-title">Larger storage</p>
                <p className="pick-ad-text">Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="pick-ad-price">+${formData.lsyr}/yr</p>
          </label>
          <label
            className={`${
              formData.customizableProfileyr
                ? "checkbox-container-active"
                : "checkbox-container"
            }`}
            name="checkbox"
          >
            <div className="checkbox-mini-cont">
              <input
                type="checkbox"
                className="input-checkbox"
                checked={formData.customizableProfileyr}
                onChange={handleChange}
                name="customizableProfileyr"
              />
              <div>
                <p className="pick-ad-title">Customizable profile</p>
                <p className="pick-ad-text">Custom theme on your profile</p>
              </div>
            </div>
            <p className="pick-ad-price">+${formData.cpyr}/yr</p>
          </label>
        </section>
      )}{" "}
      <div
        className="nts-btn"
        onClick={() => {
          setFormPage(3);
        }}
      >
        Next Step
      </div>
    </div>
  );
}

export default Form3;
