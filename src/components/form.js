import { formdata } from "../data/formdata";
import formfields from "../data/formfields";
import React, { useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";

const Form = ({ formid }) => {
  const form = formdata.find((f) => f.formid === formid);

  const clientKey = "buildingbibleintellect"; // must match Lambda CLIENTS
  const apiUrl = "https://7t0xfgk6y1.execute-api.eu-west-2.amazonaws.com/form";

  const [formValues, setFormValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(null);
  const [error, setError] = useState(null);

  if (!form) return null;

  // Handle input changes
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
      // Basic email validation (unchanged)
      if (formValues.Email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formValues.Email)) {
          setError("Please enter a valid email address.");
          setLoading(false);
          return;
        }
      }

      // Build payload for Lambda
      const payload = {
        client: clientKey,
        formid: formid,
        name: formValues.Name?.trim() || "Anonymous",
        email: formValues.Email?.trim() || "noemail@placeholder.com",
        message: formValues.Message?.trim() || "New form submission",
        fields: {},
      };

      // Add all extra dynamic fields
      Object.keys(formValues).forEach((key) => {
        if (!["Name", "Email", "Message"].includes(key)) {
          payload.fields[key] = formValues[key];
        }
      });

      const response = await axios.post(apiUrl, payload);

      if (response.status === 200) {
        setSent(true);
        setFormValues({});
        setTimeout(() => setSent(null), 5000);
      } else {
        setError("Something went wrong, please try again.");
        setTimeout(() => setError(null), 5000);
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setError("Something went wrong, please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-component-container">
      <form onSubmit={handleSubmit}>
        <div className="form-intro">
          {form.formtitle && <h2>{form.formtitle}</h2>}
          {form.formintro && <p>{form.formintro}</p>}
        </div>

        {/* Success */}
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

        {/* Error */}
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

        {/* Fields */}
        {!sent && !error && (
          <div className="form-sect-holder">
            {[1, 2, 3, 4, 5].map((num) => {
              const fieldsKey = form[`sect${num}fields`];
              if (!fieldsKey) return null;

              return (
                <div key={num} className="form-sect">
                  {form[`sect${num}header`] && (
                    <h5>{form[`sect${num}header`]}</h5>
                  )}
                  {form[`sect${num}cap`] && (
                    <span className="sectcap">{form[`sect${num}cap`]}</span>
                  )}

                  {fieldsKey.map((key, index) => {
                    const field = formfields[key];
                    if (!field) return null;

                    const value = formValues[key] || "";

                    return (
                      <div key={index} className="field">
                        <label htmlFor={`field-${key}`}>{field.label}</label>

                        {field.lines && field.lines > 1 ? (
                          <textarea
                            id={`field-${key}`}
                            name={key}
                            placeholder={field.placeholder}
                            rows={field.lines}
                            value={value}
                            onChange={handleChange}
                            required
                          />
                        ) : (
                          <input
                            type={field.type || "text"}
                            id={`field-${key}`}
                            name={key}
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
              );
            })}

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
        )}
      </form>
    </div>
  );
};

export default Form;
