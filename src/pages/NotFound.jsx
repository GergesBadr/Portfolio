import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedPage from "./AnimatedPage";
import PrimaryButton from "../components/common/PrimaryButton";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Gerges Badr | Error 404</title>
        <meta property="og:title" content="Gerges Badr | Error 404" />
        <meta
          property="og:image"
          content="https://i.ibb.co/dt1NJGW/portfolio-thumbnail.png"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <AnimatedPage>
        <div className="space-y-4 px-4 pt-40 text-center md:pt-20">
          <h1 className="heading-1">Sorry, this page does not exist!</h1>
          <PrimaryButton onClick={() => navigate("/home")}>
            Back to home
          </PrimaryButton>
        </div>
      </AnimatedPage>
    </>
  );
}

export default NotFound;
