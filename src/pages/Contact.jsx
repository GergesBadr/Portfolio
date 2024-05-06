import AnimatedPage from "./AnimatedPage";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import useUpdateSeo from "../hooks/useUpdateSeo";

function Contact() {
  useUpdateSeo("Gerges Badr | Contact Me");

  return (
    <AnimatedPage>
      <section className="responsive-container grid grid-cols-1 gap-12 md:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </section>
    </AnimatedPage>
  );
}

export default Contact;
