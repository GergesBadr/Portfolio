import AnimatedPage from "./AnimatedPage";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Seo from "../components/common/Seo";

function Contact() {
  return (
    <AnimatedPage>
      <Seo
        title="Gerges Badr | Contact Me"
        desc="Welcome to my portfolio, where you can find everything you need to know about me, who am I, what can I offer you, what projects I have done and how to contact me."
        image="https://i.ibb.co/dt1NJGW/portfolio-thumbnail.png"
      />

      <section className="responsive-container grid grid-cols-1 gap-12 md:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </section>
    </AnimatedPage>
  );
}

export default Contact;
