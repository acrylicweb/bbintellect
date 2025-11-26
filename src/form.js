import { useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

const Form = () => {
  //const [setFormVisible] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("form_name", "bbi temp");
    formData.append("access_key", "b2305347-394a-4378-9a93-11539db1737c"); // Replace with your Web3Forms API key

    try {
      const response = await axios.post(
        "https://api.web3forms.com/submit",
        formData
      );

      if (response.data.success) {
        setSuccess("Your details have been submitted successfully!");
        setName("");
        setEmail("");
      } else {
        setError("Something went wrong, please try again.");
      }
    } catch (err) {
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
