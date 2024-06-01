import { HiOutlineEnvelope, HiOutlineDevicePhoneMobile } from "react-icons/hi2";

function ContactInfo() {
  return (
    <div className="row-start-1 max-w-[500px] md:col-start-2">
      <h1 className="heading-1 mb-2">Get in touch</h1>
      <p className="mb-6 text-lg opacity-85">
        I am available to work. Got a question or proposal, or just
        want to say hello? Don&apos;t be shy and message me now.
      </p>

      <div className="flex flex-col gap-4">
        <div className="unique-text flex items-center gap-2 font-medium tracking-wide">
          <HiOutlineEnvelope className="size-6 " />
          <span>gergesbadr77@gmail.com</span>
        </div>
        <div className="unique-text flex items-center gap-2 font-medium tracking-wide">
          <HiOutlineDevicePhoneMobile className="size-6 " />
          <span>+201156728649</span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
