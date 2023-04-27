import React from "react";
import Total from "./total";
function Form4({ selPlan, togglemonth, setFormPage, formData, setFormData }) {
  return (
    <div>
      <section>
        <section className="finishing-up-cont">
          <div className="finishing-up-mini-cont">
            <div>
              <p className="finishing-plan-name">
                {selPlan === 0
                  ? "Arcade"
                  : selPlan === 1
                  ? "Advanced"
                  : selPlan === 2
                  ? "Pro"
                  : ""}{" "}
                ({togglemonth ? "Monthly" : "Yearly"})
              </p>
              <p
                onClick={() => {
                  setFormPage(1);
                }}
                className="change-plan-btn"
              >
                change
              </p>
            </div>
            <div className="finishing-plan-name">
              {togglemonth ? (
                <p>
                  {selPlan === 0
                    ? "$9/mo"
                    : selPlan === 1
                    ? "$12/mo"
                    : selPlan === 2
                    ? "$15/mo"
                    : ""}{" "}
                </p>
              ) : (
                <p>
                  {selPlan === 0
                    ? "$90/yr"
                    : selPlan === 1
                    ? "$120/yr"
                    : selPlan === 2
                    ? "$150/yr"
                    : ""}{" "}
                </p>
              )}
            </div>
          </div>
          {togglemonth ? (
            <div>
              {formData.onlineService && (
                <div className="finishUp-mini-flex">
                  <p className="finishUp-service-title">Online service</p>
                  <p className="finishUp-service-price">+$1/mo</p>
                </div>
              )}
              {formData.largerService && (
                <div className="finishUp-mini-flex">
                  <p className="finishUp-service-title">Larger storage</p>
                  <p className="finishUp-service-price">+$2/mo</p>
                </div>
              )}
              {formData.customizableProfile && (
                <div className="finishUp-mini-flex">
                  <p className="finishUp-service-title">Customized Profile</p>
                  <p className="finishUp-service-price">+$2/mo</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              {formData.onlineServiceyr && (
                <div className="finishUp-mini-flex">
                  <p className="finishUp-service-title">Online service</p>
                  <p className="finishUp-service-price">+$10/yr</p>
                </div>
              )}
              {formData.largerServiceyr && (
                <div className="finishUp-mini-flex">
                  <p className="finishUp-service-title">Larger storage</p>
                  <p className="finishUp-service-price">+$20/yr</p>
                </div>
              )}
              {formData.customizableProfileyr && (
                <div className="finishUp-mini-flex">
                  <p className="finishUp-service-title">Customized Profile</p>
                  <p className="finishUp-service-price">+$20/yr</p>
                </div>
              )}
            </div>
          )}
        </section>
        <div className="total-container">
          <p className="total-price-text">
            Total ({togglemonth ? "per month" : "per year"})
          </p>
          <p className="total-price-price">
            +$
            <Total
              selPlan={selPlan}
              togglemonth={togglemonth}
              formData={formData}
            />
            /{togglemonth ? "mo" : "yr"}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Form4;
