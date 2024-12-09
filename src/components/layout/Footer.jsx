import { social } from "../../data/constants";

function Footer() {
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

        <div className="flex flex-wrap justify-center gap-6">
          {social.map((link) => {
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                aria-label={link.name}
                title={link.name}
                className="flex size-12 items-center justify-center gap-2 rounded-full border-2 border-gray-400 duration-200 hover:-translate-y-2 dark:border-gray-700"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
