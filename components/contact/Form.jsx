import React from "react";

const Form = () => {
  return (
    // <div className="bg-base-300 text-base-content">
    <div className="container py-20 flex justify-center">
      <div className="card max-w-lg w-full sm:shadow-xl bg-base-100">
        <div className="card-body px-0 sm:px-8">
          <h2 className="card-title">Send us a message</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input type="text" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              placeholder=""
            />
            <label className="label label-text-alt">(555) 555-5555</label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <textarea className="textarea h-24 textarea-bordered"></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              type="button"
              value="Send Message"
              className="btn btn-primary"
            />
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default Form;
