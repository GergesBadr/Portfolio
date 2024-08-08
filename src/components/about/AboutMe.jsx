import { useNavigate } from "react-router-dom";
import AnimatedText from "../common/AnimatedText";
import PrimaryButton from "../common/PrimaryButton";
import aboutIllustration from "../../assets/about-illustration.webp";

function AboutMe() {
  const navigate = useNavigate();

  return (
    <section className="responsive-container grid grid-cols-1 items-center gap-6 lg:grid-cols-2 ">
      <img
        src={aboutIllustration}
        loading="lazy"
        alt="Happy young man sitting, illustration."
        className="mx-auto rounded-full dark:bg-indigo-100 lg:col-start-2"
      />

      <div className="lg:col-start-1 lg:row-start-1 lg:max-w-2xl [&_p]:mb-2 [&_p]:text-lg [&_p]:leading-relaxed">
        <AnimatedText>
          <h1 className="heading-1 mb-4 text-center md:text-left">
            Hello, again!
          </h1>
          <p>
            I am happy to see you here. My name is Gerges Badr, a self-taught
            frontend developer based in Egypt.
          </p>
          <p>
            Over the past couple of years, I effectively managed to learn how to
            deliver a great web user experiences with combination of creativity,
            technical capability, highly attention to details, and deeply
            understanding of user psychology.
          </p>
          <p className="font-medium">
            I am available to work. Have a project in mind or just passionate
            about web development? Whatever, I am looking forward to hearing
            from you!
          </p>
          <PrimaryButton onClick={() => navigate("/contact")}>
            Hire me
          </PrimaryButton>
        </AnimatedText>
      </div>
    </section>
  );
}

export default AboutMe;
