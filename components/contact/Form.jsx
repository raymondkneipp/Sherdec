import React from "react";

const Form = () => {
  return (
    <div className="bg-base-300 text-base-content">
      <div className="container py-20">
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold mb-5">Send us a message</h2>
            <p className="text-base-content xl:max-w-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              autem veniam ipsum, voluptate ratione odit pariatur
            </p>
          </div>

          <div className="card w-full shadow-xl bg-base-100">
            <div className="card-body">
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
      </div>
    </div>
  );
};

export default Form;
