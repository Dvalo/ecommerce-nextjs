import Image from "next/image";
import menuItems from "./menuItems";

const Header = () => {
  return (
    <header className="l-header">
      <div className="l-header__logo">
        <Image height={42} width={130} src="/svg/logo.svg" alt="Lalasia" />
      </div>
      <nav className="l-header__nav">
        <ul>
          {menuItems.map((menuItem) => (
            <li key={menuItem.title}>
              <a href={menuItem.link}>{menuItem.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
