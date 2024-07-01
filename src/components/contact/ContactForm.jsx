import { useRef } from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import emailjs from "@emailjs/browser";
import PrimaryButton from "../common/PrimaryButton";

function ContactForm() {
  const formRef = useRef();

  // Receive emails with emailjs library
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm("contact_service", "contact_template", formRef.current, {
        publicKey: import.meta.env.VITE_EMAILJS_KEY,
      })
      .then(
        () => {
          e.target.reset;
          alert(
            "I have received your email successfully, I will reply to you ASAP, thanks for connecting me!",
          );
        },
        (error) => {
          alert(
            `Failed! sorry, the following error happened while trying to send your message: \n ${error.text}`,
          );
        },
      );
  }

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="w-full space-y-4 md:max-w-2xl [&_label]:font-medium [&_label]:tracking-wide"
    >
      <div>
        <label htmlFor="user_name">Full name:</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          autoComplete="name"
          required
          className="mt-2 w-full rounded-md border-2 border-gray-300 bg-transparent px-3 py-1.5 dark:border-gray-700"
        />
      </div>

      <div>
        <label htmlFor="user_email">Email:</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          autoComplete="email"
          required
          className="mt-2 w-full rounded-md border-2 border-gray-300 bg-transparent px-3 py-1.5 dark:border-gray-700"
        />
      </div>

      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          className="mt-2 w-full rounded-md border-2 border-gray-300 bg-transparent px-3 py-1.5 dark:border-gray-700"
        />
      </div>

      <div>
        <label htmlFor="message">Message: </label>
        <textarea
          name="message"
          id="message"
          required
          className="mt-2 min-h-[100px] w-full resize-none rounded-md border-2 border-gray-300 bg-transparent px-3 py-1.5 dark:border-gray-700"
        ></textarea>
      </div>

      <PrimaryButton
        moreStyles="w-full flex items-center justify-center gap-2"
        allowAnimate={false}
      >
        Send email
        <HiOutlinePaperAirplane className="size-5" />
      </PrimaryButton>
    </form>
  );
}

export default ContactForm;
