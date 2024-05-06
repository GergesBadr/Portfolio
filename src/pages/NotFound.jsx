import { useNavigate } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
import PrimaryButton from "../components/common/PrimaryButton";
import Seo from "../components/common/Seo";

function NotFound() {
  const navigate = useNavigate();

  return (
    <AnimatedPage>
      <Seo
        title="Gerges Badr | Error 404"
        desc="Welcome to my portfolio, where you can find everything you need to know about me, who am I, what can I offer you, what projects I have done and how to contact me."
        image="https://i.ibb.co/dt1NJGW/portfolio-thumbnail.png"
      />

      <div className="space-y-4 px-4 pt-40 text-center md:pt-20">
        <h1 className="heading-1">Sorry, this page does not exist!</h1>
        <PrimaryButton onClick={() => navigate("/home")}>
          Back to home
        </PrimaryButton>
      </div>
    </AnimatedPage>
  );
}

export default NotFound;
