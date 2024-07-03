import { Helmet } from "react-helmet-async";
import AnimatedPage from "./AnimatedPage";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Gerges Badr | Contact Me</title>
        <meta property="og:title" content="Gerges Badr | Contact Me" />
        <meta
          name="description"
          content="Welcome to my portfolio, where you can find everything you need to know about me, who am I, what can I offer you, what projects I have done and how to contact me."
        />
        <meta
          property="og:description"
          content="Welcome to my portfolio, where you can find everything you need to know about me, who am I, what can I offer you, what projects I have done and how to contact me."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/dt1NJGW/portfolio-thumbnail.png"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <AnimatedPage>
        <section className="responsive-container mt-24 flex flex-col items-center gap-12 sm:mt-0">
          <ContactInfo />
          <ContactForm />
        </section>
      </AnimatedPage>
    </>
  );
}

export default Contact;
