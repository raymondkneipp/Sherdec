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

          <div class="card w-full shadow-xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Full Name</span>
                </label>
                <input type="text" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="text" class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  class="input input-bordered"
                  placeholder=""
                />
                <label class="label label-text-alt">(555) 555-5555</label>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your Message</span>
                </label>
                <textarea class="textarea h-24 textarea-bordered"></textarea>
              </div>
              <div class="form-control mt-6">
                <input
                  type="button"
                  value="Send Message"
                  class="btn btn-primary"
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
