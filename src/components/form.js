import { formdata } from "../data/formdata";
import formfields from "../data/formfields";
import React, { useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react/dist/iconify.js";

const Form = ({ formid }) => {
  const form = formdata.find((f) => f.formid === formid);

  const [formValues, setFormValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(null);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  if (!form) return null;
  // handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSent(null);

    try {
      // Minimal validation for email
      if (formValues.Email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formValues.Email)) {
          setError("Please enter a valid email address.");
          setLoading(false);
          return;
        }
      }

      // Build FormData for Web3Forms
      const formData = new FormData();
      formData.append("access_key", "b2305347-394a-4378-9a93-11539db1737c"); // <-- Replace with your actual key
      formData.append("form_name", form.formname); // <-- Must match your Web3Forms form name
      formData.append("name", formValues.Name?.trim() || "Anonymous");
      formData.append(
        "email",
        formValues.Email?.trim() || "noemail@placeholder.com"
      );
      formData.append(
        "message",
        formValues.Message?.trim() || "New form submission"
      );

      // Append all other form fields dynamically
      Object.keys(formValues).forEach((key) => {
        if (!["Name", "Email", "Message"].includes(key)) {
          formData.append(key, formValues[key]);
        }
      });

      // Optional: log FormData for debugging
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      // Send request to Web3Forms
      const response = await axios.post(
        "https://api.web3forms.com/submit",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Web3Forms response:", response.data);

      if (response.data.success) {
        setSent(true);
        setFormValues({});
        setTimeout(() => setSent(null), 5000);
      } else {
        setError(
          response.data.message || "Something went wrong, please try again."
        );
        setTimeout(() => setError(null), 5000);
      }
    } catch (err) {
      console.error("Form submit error:", err.response || err.message || err);
      setError("Something went wrong, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-component-container">
      <form onSubmit={handleSubmit}>
        <div className="form-intro">
          {form.formtitle && <h1>{form.formtitle}</h1>}
          {form.formintro && <p>{form.formintro}</p>}
        </div>
        {/*  <input type="hidden" name="form_name" value={form.formname} />*/}

        {/* Success message */}
        {sent && (
          <>
            {form.success && (
              <div className="form-sent-emptyspace">
                <h5>
                  Sent Successfully{" "}
                  <Icon className="icon" icon="line-md:check-all" />
                </h5>
                <p>{form.success}</p>
              </div>
            )}

            {form.confirmationtxt && (
              <span className="footerconfirm">
                {form.confirmationtxt}
                <Icon className="icon" icon="line-md:check-all" />
              </span>
            )}

            <button className="sent">
              Sent <Icon className="icon" icon="line-md:check-all" />
            </button>
          </>
        )}

        {/* Error message */}
        {error && (
          <div className="form-sent-emptyspace-error">
            <img
              src="https://d1cj3qoxnek6r9.cloudfront.net/design-system/f2hexagons.webp"
              alt="n3-hex"
              className="h3-hex"
            />
            <h5>
              Failed to send <Icon className="icon" icon="pajamas:error" />
            </h5>
            <p>{error}</p>
          </div>
        )}

        {/* Render fields if not sent/error */}
        {!sent && !error && (
          <>
            <div className="form-sect-holder">
              {form.sect1fields && (
                <div className="form-sect">
                  {form.sect1header && <h5>{form.sect1header}</h5>}
                  {form.sect1cap && (
                    <span className="sectcap">{form.sect1cap}</span>
                  )}
                  {form.sect1fields?.map((fieldsKey, index) => {
                    const field = formfields[fieldsKey];
                    if (!field) return null;

                    const value = formValues[fieldsKey] || "";

                    return (
                      <div key={index} className="field">
                        <label htmlFor={`field-${fieldsKey}`}>
                          {field.label}
                        </label>

                        {field.lines && field.lines > 1 ? (
                          <textarea
                            id={`field-${fieldsKey}`}
                            name={fieldsKey}
                            placeholder={field.placeholder}
                            rows={field.lines}
                            value={value}
                            onChange={handleChange}
                            required
                          />
                        ) : (
                          <input
                            type={field.type || "text"}
                            id={`field-${fieldsKey}`}
                            name={fieldsKey}
                            placeholder={field.placeholder}
                            value={value}
                            onChange={handleChange}
                            required
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              {form.sect2fields && (
                <div className="form-sect">
                  {form.sect2header && <h5>{form.sect2header}</h5>}
                  {form.sect2fields?.map((fieldsKey, index) => {
                    const field = formfields[fieldsKey];
                    if (!field) return null;

                    const value = formValues[fieldsKey] || "";

                    return (
                      <div key={index} className="field">
                        <label htmlFor={`field-${fieldsKey}`}>
                          {field.label}
                        </label>

                        {field.lines && field.lines > 1 ? (
                          <textarea
                            id={`field-${fieldsKey}`}
                            name={fieldsKey}
                            placeholder={field.placeholder}
                            rows={field.lines}
                            value={value}
                            onChange={handleChange}
                            required
                          />
                        ) : (
                          <input
                            type={field.type || "text"}
                            id={`field-${fieldsKey}`}
                            name={fieldsKey}
                            placeholder={field.placeholder}
                            value={value}
                            onChange={handleChange}
                            required
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              {form.sect3fields && (
                <div className="form-sect">
                  {form.sect3header && <h5>{form.sect3header}</h5>}
                  {form.sect3fields?.map((fieldsKey, index) => {
                    const field = formfields[fieldsKey];
                    if (!field) return null;

                    const value = formValues[fieldsKey] || "";

                    return (
                      <div key={index} className="field">
                        <label htmlFor={`field-${fieldsKey}`}>
                          {field.label}
                        </label>

                        {field.lines && field.lines > 1 ? (
                          <textarea
                            id={`field-${fieldsKey}`}
                            name={fieldsKey}
                            placeholder={field.placeholder}
                            rows={field.lines}
                            value={value}
                            onChange={handleChange}
                            required
                          />
                        ) : (
                          <input
                            type={field.type || "text"}
                            id={`field-${fieldsKey}`}
                            name={fieldsKey}
                            placeholder={field.placeholder}
                            value={value}
                            onChange={handleChange}
                            required
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              {form.sect4fields && (
                <div className="form-sect">
                  {form.sect4header && <h5>{form.sect4header}</h5>}
                  {form.sect4fields?.map((fieldsKey, index) => {
                    const field = formfields[fieldsKey];
                    if (!field) return null;

                    const value = formValues[fieldsKey] || "";

                    return (
                      <div key={index} className="field">
                        <label htmlFor={`field-${fieldsKey}`}>
                          {field.label}
                        </label>

                        {field.lines && field.lines > 1 ? (
                          <textarea
                            id={`field-${fieldsKey}`}
                            name={fieldsKey}
                            placeholder={field.placeholder}
                            rows={field.lines}
                            value={value}
                            onChange={handleChange}
                            required
                          />
                        ) : (
                          <input
                            type={field.type || "text"}
                            id={`field-${fieldsKey}`}
                            name={fieldsKey}
                            placeholder={field.placeholder}
                            value={value}
                            onChange={handleChange}
                            required
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}{" "}
              {form.sect5fields && (
                <div className="form-sect">
                  {form.sect5header && <h5>{form.sect5header}</h5>}
                  {form.sect5fields?.map((fieldsKey, index) => {
                    const field = formfields[fieldsKey];
                    if (!field) return null;

                    const value = formValues[fieldsKey] || "";

                    return (
                      <div key={index} className="field">
                        <label htmlFor={`field-${fieldsKey}`}>
                          {field.label}
                        </label>

                        {field.lines && field.lines > 1 ? (
                          <textarea
                            id={`field-${fieldsKey}`}
                            name={fieldsKey}
                            placeholder={field.placeholder}
                            rows={field.lines}
                            value={value}
                            onChange={handleChange}
                            required
                          />
                        ) : (
                          <input
                            type={field.type || "text"}
                            id={`field-${fieldsKey}`}
                            name={fieldsKey}
                            placeholder={field.placeholder}
                            value={value}
                            onChange={handleChange}
                            required
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              {/*   {form.calendar && (
                <Calendar
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                />
              )}{" "}*/}
              {/* Buttons */}
              <button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    Sending{" "}
                    <Icon className="icon" icon="line-md:loading-loop" />
                  </>
                ) : sent ? (
                  <>
                    Sent <Icon className="icon" icon="line-md:check-all" />
                  </>
                ) : error ? (
                  <>
                    Try again <Icon className="icon" icon="pajamas:retry" />
                  </>
                ) : (
                  <>
                    {form.btntext}{" "}
                    {form.btnicon && (
                      <Icon className="icon" icon={form.btnicon} />
                    )}
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
