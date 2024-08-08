/* eslint-disable react/no-unescaped-entities */
function Invitation({ isCentered }) {
  return (
    <div
      className={`space-y-4 ${isCentered ? "mx-auto max-w-2xl px-4 text-center" : ""}`}
    >
      <h2 className="heading-2"> Let's Build Something Together! </h2>
      <p className="sec-text text-lg leading-relaxed">
        Feel free to react out if you're looking for a developer, have a
        question, or just want to start a conversation.
      </p>
      <a
        href="mailto:gergesbadr77@gmail.com"
        target="_blank"
        className={`block w-fit underline underline-offset-2 hover:no-underline ${isCentered ? "mx-auto" : ""} `}
      >
        gergesbadr77@gmail.com
      </a>
    </div>
  );
}

export default Invitation;
