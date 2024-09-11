import React from "react";
import WhatsappButton from "../api/WhatsappButton.tsx"; // Adjust the import path if necessary

interface ContactProps {
  message: string;
  number: string;
}

const Contacts = ({ message, number }: ContactProps) => {
  const phoneNumber = "+254799182231"; // Example phone number
  const messages = "Hello Kimeu Daniel, I got your number from your website. please help me do some projects"

  return (
    <main className="h-100">
      <div className="bg-primary d-flex flex-column w-50 m-auto p-3">
        <h2>Email us</h2>
        <div className="form-group ms-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group ms-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control form-control-lg"
            id="email"
            placeholder="abc@gmail.com"
          />
        </div>
        <div className="form-group ms-3">
          <label htmlFor="text" className="form-label">
            Enter Text
          </label>
          <textarea
            name="msg"
            id="text"
            placeholder="Enter text here"
            className="form-control form-control-lg"
          />
        </div>
        <button className="btn btn-primary mt-3 w-50 btn-lg m-auto mb-3">
          Send
        </button>
      </div>
      <WhatsappButton message={messages} phoneNumber={phoneNumber} />
    </main>
  );
};

export default Contacts;
