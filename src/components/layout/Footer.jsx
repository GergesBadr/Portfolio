import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";

function Footer() {
  const social = [
    {
      id: 1,
      name: "Github",
      href: "https://github.com/GergesBadr",
      icon: <FaGithub className="size-6" />,
    },
    {
      id: 2,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/gerges-badr-9a6224245/",
      icon: <FaLinkedinIn className="size-6" />,
    },
    {
      id: 3,
      name: "Whatsapp",
      href: "https://wa.me/201156728649",
      icon: <FaWhatsapp className="size-6" />,
    },
    {
      id: 4,
      name: "Frontend mentor",
      href: "https://www.frontendmentor.io/profile/GergesBadr",
    },
  ];

  return (
    <footer className="mt-20 bg-white px-4 py-12 dark:bg-secondary-dark">
      <div className="responsive-container flex flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <p>
            Made with love by me,
            <span className="font-dancing-script text-2xl font-bold text-indigo-500">
              {" "}
              Gerges Badr
            </span>
          </p>
          <p className="sec-text">&copy; 2024-present, All Rights Reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {social.map((link) => {
            return (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                className="flex items-center justify-center gap-2"
                // Animation
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileFocus={{ scale: 1.1, rotate: 3 }}
              >
                {link.icon}
                <span>{link.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
