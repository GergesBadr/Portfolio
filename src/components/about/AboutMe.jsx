import { useNavigate } from "react-router-dom";
import aboutIllustration from "../../assets/about-illustration.svg";
import AnimatedText from "../common/AnimatedText";
import PrimaryButton from "../common/PrimaryButton";

function AboutMe() {
  const navigate = useNavigate();

  const birthday = new Date("2004-6-26");
  const today = new Date();
  const myAge = today.getFullYear() - birthday.getFullYear();

  return (
    <section className="responsive-container grid grid-cols-1 gap-6 lg:grid-cols-2">
      <img
        src={aboutIllustration}
        loading="lazy"
        alt="floating man surrounded by statistics, illustration."
        className="mx-auto size-[500px] lg:col-start-2 lg:size-[600px]"
      />

      <div className="lg:col-start-1 lg:row-start-1 [&_p]:mb-2 [&_p]:text-lg [&_p]:leading-relaxed">
        <AnimatedText>
          <h1 className="heading-1 mb-4 text-center md:text-left">Who am I?</h1>
          <p>
            Hello again! I am happy to see you here. My name is Gerges Badr, I
            &apos;m a {myAge} years old and a self-taught junior frontend
            developer based in Egypt.
          </p>
          <p>I graduated from Health Technical Institute (HTI). </p>
          <p>
            Over the past couple of years, I effectively managed to learn how to
            deliver a great web user experiences with combination of creativity,
            technical capability, highly attention to details, and deeply
            understanding of user psychology.
          </p>
          <p className="font-medium">
            I am available for freelancing work. Have a project in mind or just
            passionate about web development? Feel free to reach out!
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
