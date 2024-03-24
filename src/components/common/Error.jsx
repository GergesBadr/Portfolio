import PrimaryButton from "./PrimaryButton";

function Error({ error, resetErrorBoundary }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="heading-1">Sorry, something went wrong...</h1>
      <p className="sec-text mb-4 text-xl">{error.message}</p>
      <PrimaryButton onClick={resetErrorBoundary}> Try again </PrimaryButton>
    </div>
  );
}

export default Error;
