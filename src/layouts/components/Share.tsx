import config from "@/config/config.json";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa6";
import {
  IoLogoLinkedin,
} from "react-icons/io5/index.js";

const Share = ({
  className,
}: {
  className?: string;
}) => {
  const { base_url } = config.site;

  return (
    <ul className={className}>
      <li className="inline-block">
        <a
          aria-label="e-mail share button"
          href={`mailto:d.dew.design@gmail.com`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaEnvelope />
        </a>
      </li>
      <li className="inline-block">
        <a
          aria-label="github share button"
          href={`https://www.github.com/DaisyDewD`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub />
        </a>
      </li>
      <li className="inline-block">
        <a
          aria-label="linkedin share button"
          href={`https://www.linkedin.com/in/daisydew/`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <IoLogoLinkedin />
        </a>
      </li>
      <li className="inline-block">
        <a
          aria-label="instagram share button"
          href={`https://www.instagram.com/daisy.dew.art/`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default Share;
