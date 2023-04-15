import React from "react";
import "../components/Career.css";
const CareerContactForm = ({ setState, setClick }) => {
  const closeSubmenu = () => {
    setState(false);
  };
  return (
    <section onMouseOver={closeSubmenu} className="contact-section">
      <main className="container">
        <form className="form-container">
          <div className="career-form">
            <div className="career-form-container">
              <label htmlFor="name" className="career-form-label">
                Name
              </label>
              <div className="career-from-inputs">
                <input
                  type="text"
                  // name="name"
                  name="name"
                  id="name"
                  placeholder="First Name"
                  className="no-border-from-input"
                  required
                />
                <input
                  type="text"
                  // name="name"
                  name="name"
                  id="name"
                  placeholder="Middle Name"
                  className="no-border-from-input"
                  required
                />
                <input
                  type="text"
                  // name="name"
                  name="name"
                  id="name"
                  placeholder="Last Name"
                  className="no-border-from-input"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="career-form-container  ">
                <label htmlFor="age" className="career-form-label">
                  Age
                </label>
                <input
                  type="number"
                  // name="name"
                  name="age"
                  id="age"
                  placeholder="Age"
                  className="career-from-input"
                  required
                />
              </div>

              <div className="career-form-container">
                <h4 className="career-form-label">Gender</h4>
                <div className="row">
                  <div class="radio">
                    <input id="radio-1" name="radio" type="radio" required />
                    <label for="radio-1" class="radio-label">
                      Male
                    </label>
                  </div>

                  <div class="radio">
                    <input id="radio-2" name="radio" type="radio" required />
                    <label for="radio-2" class="radio-label">
                      Female
                    </label>
                  </div>

                  <div class="radio">
                    <input id="radio-3" name="radio" type="radio" required />
                    <label for="radio-3" class="radio-label">
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="career-form-container">
              <label htmlFor="location" className="career-form-label">
                Location
              </label>
              <input
                type="Text"
                // name="name"
                name="location"
                id="location"
                placeholder="Location"
                className="career-from-input"
                required
              />
            </div>

            <div className="career-form-container">
              <label htmlFor="phone" className="career-form-label">
                Contact No.
              </label>
              <input
                type="number"
                // name="name"
                name="phone"
                id="phone"
                placeholder="eg: 9876543210"
                className="career-from-input"
                required
              />
            </div>

            <div className="career-form-container">
              <label htmlFor="email" className="career-form-label">
                Email ID
              </label>
              <input
                type="email"
                // name="name"
                name="email"
                id="email"
                placeholder="eg: abc@gmail.com"
                className="career-from-input"
                required
              />
            </div>

            <div className="career-form-container">
              <label htmlFor="education" className="career-form-label">
                Education
              </label>
              <input
                type="text"
                // name="name"
                name="education"
                id="education"
                placeholder="eg: Graduate, Post-Graduate, MBA, etc"
                className="career-from-input"
                required
              />
            </div>

            <div className="career-form-container">
              <label htmlFor="applyas" className="career-form-label">
                Want to Apply as
              </label>
              <input
                type="text"
                // name="name"
                name="applyas"
                id="applyas"
                placeholder="eg: Graphic Designer, Digital Marketer, Sales Executive"
                className="career-from-input"
                required
              />
            </div>

            <div className="career-form-container">
              <label htmlFor="brief" className="career-form-label">
                Brief About Yourself
              </label>
              <textarea
                name="brief"
                id="brief"
                className="career-from-textArea"
                rows="5"
                required
              ></textarea>
            </div>

            <div
              className="career-form-container"
              data-text="Select your file!"
            >
              <label
                htmlFor="file-upload-field-resume"
                className="career-form-label"
              >
                Attach Resume{" "}
              </label>
              <input
                name="file-upload-field-resume"
                type="file"
                className="career-from-input"
                value=""
              />
            </div>
            <div
              className="career-form-container"
              data-text="Select your file!"
            >
              <label
                htmlFor="file-upload-field-cv"
                className="career-form-label"
              >
                Attach CV / Portfolio
              </label>
              <input
                name="file-upload-field-cv"
                type="file"
                className="career-from-input"
                value=""
              />
            </div>
          </div>
          <div className="career-btn-container">
            <button type="submit" className="career-btn">
              Submit
            </button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default CareerContactForm;
