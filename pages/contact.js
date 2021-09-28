import { Form, Layout, Methods, SEOTags } from "../components";

export default function ContactPage() {
  return (
    <Layout>
      <SEOTags title="Contact" />
      <Methods />
      <div className="container">
        <div className="divider opacity-70">OR</div>
      </div>
      <Form />
    </Layout>
  );
}
