import { Helmet } from "react-helmet-async";
import AnimatedPage from "./AnimatedPage";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
  return (
    <AnimatedPage>
      <Helmet>
        <title>Gerges Badr | Contact</title>
      </Helmet>

      <section className="responsive-container grid grid-cols-1 gap-12 md:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </section>
    </AnimatedPage>
  );
}

export default Contact;
