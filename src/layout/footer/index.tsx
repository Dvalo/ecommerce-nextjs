import Image from "next/image";
import footerItems from "./footerItems";
import { prefix } from "../../utils/prefix";

const Footer = () => {
  return (
    <footer className="l-footer">
      <div className="l-footer__inner">
        <div className="l-footer__description">
          <Image
            height={42}
            width={130}
            src={`${prefix}/svg/logo.svg`}
            alt="Lalasia"
          />
          <p className="paragraph-3">
            Lalasia is digital agency that help you make better experience
            iaculis cras in.
          </p>
        </div>
        <nav className="l-footer__nav">
          {footerItems.map((footerItem) => (
            <div className="l-footer__nav-section" key={footerItem.heading}>
              <h4 className="l-footer__nav-title">{footerItem.heading}</h4>
              <ul>
                {footerItem.items.map((item) => (
                  <li key={item.title}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
