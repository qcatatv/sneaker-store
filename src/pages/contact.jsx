import React from "react";
import "./contact.css"

export const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return(
    <div className="contactHd">
      <h1>Contact us</h1>
      <p>If you would like to add a comment about your order, please add it in the space below.</p>
      <div className="contactForm">
        <form onSubmit={onSubmit}>
        <input placeholder="Name" type="text" name="name" required/>
        <input placeholder="Email" type="email" name="email" required/>
        <textarea placeholder="Subject" name="message" required></textarea>

        <button type="submit">Submit Form</button>

        </form>
        <span>{result}</span>
      </div>
    </div>
  )
};
