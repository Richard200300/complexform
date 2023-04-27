import { useState, React } from "react";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3"
import Form4 from "./form4"



function Form() {
  const [formPage, setFormPage] = useState(0);
  /* state to togggle year */
  const [togglemonth, setToggleMonth] = useState(true)
const [selPlan, setselPlan] = useState(0)

const [formData, setFormData] = useState({
  name: "",
  emailAddress: "",
  phoneNumber: "",
  arcadeMo: 9,
  arcadeyr: 90,
  advancedMo: 12,
  advancedyr: 120,
  proMo: 15,
  proyr: 150,
  total: 9,
  osMo: 1,
  lsMo: 2,
  cpMo: 2,
  osyr: 10,
  lsyr: 20,
  cpyr: 20,
  onlineService: false,
  largerService: false,
  customizableProfile: false,
  onlineServiceyr: false,
  largerServiceyr: false,
  customizableProfileyr: false,
 
})



  const heading = [
    "Personal Info",
    "Select your plan",
    "Pick add-ons",
    "Finshing up",
  ];
  const headingText = [
    "Please provide your name, your email address and phone number",
    "You have the option of monthly or yearly billing.",
    "Add-ons help enhance your gaming experience",
    "Double-check everything looks OK before confirming",
  ];



  function submitForm(event) {
    event.preventDefault(); // prevent form refresh
    // handle form submission logic here\
  
    console.log(formData);

  }
  const displayformPgae = () => {
    if (formPage === 0) {
      return <Form1 
      formData={formData}
      setFormData={setFormData}
      formPage={formPage}
      setFormPage={setFormPage}
      />;
    } else if (formPage === 1) {
      return <Form2 
      setFormPage={setFormPage}
      togglemonth={togglemonth}
      setToggleMonth={setToggleMonth}
      formData={formData}
      setFormData={setFormData}
      selPlan={selPlan}
      setselPlan={setselPlan}

      />;
    } else if (formPage === 2) {
      return <Form3 
      formData={formData}
      setFormData={setFormData}
      setFormPage={setFormPage}     
      togglemonth={togglemonth}
      selPlan={selPlan}

      />
    } 

    else if (formPage === 3) { 
      return <Form4 
      togglemonth={togglemonth}
      selPlan={selPlan}
      setFormPage={setFormPage}
      formData={formData}
      setFormData={setFormData}
      
      />

    }

  };
 
  function prevStep() {
    setFormPage((prevormpage) => prevormpage - 1);
  }
  return (
    <section className="main-container">
      <div className="mobile-step-container">
      <h1 className={formPage === 0 ? "stepBackgroundmv" : "whitemv"}>1</h1>
      <h1 className={formPage === 1 ? "stepBackgroundmv" : "whitemv"}>2</h1>
      <h1 className={formPage === 2 ? "stepBackgroundmv" : "whitemv"}>3</h1>
      <h1 className={formPage === 3 ? "stepBackgroundmv" : "whitemv"}>4</h1>
      </div>
      
      <form className="form-container" onSubmit={submitForm}>
        <div className="flex">
          <div className="img-info-section">
            <div className="step-info-cont">
              <h1 className={formPage === 0 ? "stepBackground" : "white"}>1</h1>
              <div>
                <p className="step">step 1</p>
                <p className="info">your info</p>
              </div>
            </div>
            <div className="step-info-cont">
              <h1 className={formPage === 1 ? "stepBackground" : "white"}>2</h1>
              <div>
                <p className="step">step 2</p>
                <p className="info">select plan</p>
              </div>
            </div>
            <div className="step-info-cont">
              <h1 className={formPage === 2 ? "stepBackground" : "white"}>3</h1>
              <div>
                <p className="step">step 3</p>
                <p className="info">add-ons</p>
              </div>
            </div>
            <div className="step-info-cont">
              <h1 className={formPage === 3 ? "stepBackground" : "white"}>4</h1>
              <div>
                <p className="step">step 4</p>
                <p className="info">summary</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div>
              <h1 className="heading-text">{heading[formPage]}</h1>
              <p className="form1-text">{headingText[formPage]}</p>
            </div>
            {displayformPgae()}
          </div>
        </div>
        <div className="mobile-view-bg">'
        {formPage === 3 ? (
        
        <button className="nts-btn" >
          Confirm
        </button>
        ) : (
          ""
        )}

        {formPage === 0 ? (
          ""
        ) : (
          <div className="pts-btn" onClick={prevStep}>
            Go Back
          </div>
        )}

        </div>
        
      </form>
    </section>
  );
}

export default Form;
