import React from "react";

const Contacts = () => {
  return (
    <main className="h-100">
      <div className=" bg-body-secondary d-flex flex-column w-50 m-auto pt-5">
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
        <div className="form-group ms-3 ">
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
    </main>
  );
};

export default Contacts;
