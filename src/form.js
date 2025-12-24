import { useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaTimes } from "react-icons/fa"; // import correct icons here

const Form = ({ clientKey = "buildingbibleintellect", formId = "Mailing", apiUrl }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await axios.post(apiUrl, {
        client: clientKey,
        formid: formId,
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setSuccess("Your details have been submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Something went wrong, please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="sect">
          <label>Your name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="sect">
          <label>Your email address:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Optional message field for some forms */}
        {(formId === "Contact" || formId === "Artist") && (
          <div className="sect">
            <label>Message:</label>
            <textarea
              name="message"
              placeholder="Enter your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      {success && (
        <div className="success-message">
          <FaCheckCircle />
          {success}
        </div>
      )}
      {error && (
        <div className="error-message">
          <FaTimes />
          {error}
        </div>
      )}
    </div>
  );
};

export default Form;
