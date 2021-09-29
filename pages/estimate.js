import { Layout, SEOTags } from "../components";

export default function QuotePage() {
  return (
    <Layout>
      <SEOTags title="Free Estimate" />
      <div className="container py-32 flex flex-col items-center max-w-screen-md">
        <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl font-bold text-center">
          Free Estimate
        </h1>

        <p className="text-base-content opacity-70 mb-10 text-lg md:text-2xl text-center">
          After submitting the form below, one of our friendly representatives
          will be in touch shortly.
        </p>

        <div className="card w-full sm:shadow-xl bg-base-100">
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
                <span className="label-text">How can we help you?</span>
              </label>
              <textarea className="textarea h-24 textarea-bordered"></textarea>
            </div>
            <div className="form-control mt-6">
              <input type="button" value="Submit" className="btn btn-primary" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
