import { HiOutlineEnvelope, HiOutlineDevicePhoneMobile } from "react-icons/hi2";

function ContactInfo() {
  return (
    <div className="bg-center bg-no-repeat text-center dark:bg-[url(./assets/grid-bg.svg)]">
      <h1 className="heading-1 mb-2 leading-tight">
        Ready to take your digital <br /> experience to the{" "}
        <span className="unique-text">NEXT</span> level?
      </h1>
      <p className="mb-6 text-lg opacity-85">
        Don&apos;t be shy and message me now.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
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
