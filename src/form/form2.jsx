import { useState, React } from "react";

function Form2({
  togglemonth,
  setToggleMonth,
  formData,
  setFormData,
  selPlan,
  setselPlan,
  setFormPage,
}) {
  function handletoggle() {
    setToggleMonth((prevtoggle) => !prevtoggle);

    // setselPlan(4)
  }

  const toggleStyle = {
    right: togglemonth ? "20px" : "3px",
  };
  const togmonth = {
    color: togglemonth ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)",
  };
  const togmonth1 = {
    color: togglemonth ? "hsl(231, 11%, 63%)" : "hsl(213, 96%, 18%)",
  };
  function arcadePlan() {
    setselPlan(0);
    if (togglemonth) {
      formData.total = formData.arcadeMo;
    } else if (!togglemonth) {
      formData.total = formData.arcadeyr;
    }
    console.log(formData.total);
  }
  function advancedPlan() {
    if (togglemonth) {
      formData.total = 12;
    } else if (!togglemonth) {
      formData.total = 120;
    }
    console.log(formData.total);

    setselPlan(1);
  }
  function proPlan() {
    if (togglemonth) {
      formData.total = 15;
    } else if (!togglemonth) {
      formData.total = 150;
    }
    console.log(formData.total);

    setselPlan(2);
  }

  return (
    <div>
      <div className="form1-info-cont">
        <div className="select-plan-container">
          <div
            className={`${
              selPlan === 0 ? "select-plan-box-active" : "select-plan-box"
            }`}
            onClick={arcadePlan}
          >
            <img src="icon-arcade.png" />
            <div>
              {togglemonth ? (
                <div className="spb-2">
                  <p className="select-name">Acrade</p>
                  <p>${formData.arcadeMo}/mo</p>
                </div>
              ) : (
                <div className="spb-2">
                  <p className="select-name">Acrade</p>
                  <p>${formData.arcadeyr}/yr</p>
                  <p className="col">2 months free</p>
                </div>
              )}
            </div>
          </div>
          <div
            className={`${
              selPlan === 1 ? "select-plan-box-active" : "select-plan-box"
            }`}
            onClick={advancedPlan}
          >
            <img src="icon-advanced.png" />
            <div>
              {" "}
              {togglemonth ? (
                <div className="spb-2">
                  <p className="select-name">Advanced</p>
                  <p>${formData.advancedMo}/mo</p>
                </div>
              ) : (
                <div className="spb-2">
                  <p className="select-name">Advanced</p>
                  <p>${formData.advancedyr}/yr</p>
                  <p className="col">2 months free</p>
                </div>
              )}
            </div>
          </div>
          <div
            className={`${
              selPlan === 2 ? "select-plan-box-active" : "select-plan-box"
            }`}
            onClick={proPlan}
          >
            <img src="icon-pro.png" />
            <div className="price-month-container">
              {togglemonth ? (
                <div className="spb-2">
                  <p className="select-name">Pro</p>
                  <p>${formData.proMo}/mo</p>
                </div>
              ) : (
                <div className="spb-2">
                  <p className="select-name">Pro</p>
                  <p>${formData.proyr}/yr</p>
                  <p className="col">2 months free</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="select-plan-toggle-container">
          <p style={togmonth}>Monthly</p>
          <div className="toggle-container">
            <div
              style={toggleStyle}
              className="toggle-ball"
              onClick={handletoggle}
            ></div>
          </div>
          <p style={togmonth1}>Yearly</p>
        </div>
      </div>
      <div
        className="nts-btn"
        onClick={() => {
          setFormPage(2);
        }}
      >
        Next Step
      </div>
    </div>
  );
}

export default Form2;
