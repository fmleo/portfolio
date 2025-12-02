import { Button } from "./ui/button";

import logoDark from "../assets/lfm-logo-dark.svg";
import logoLight from "../assets/lfm-logo-light.svg";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-row justify-between m-4 items-center">
      {/*Left*/}
      <ul>
        <li>
          <a href="/" className="mx-4">
            <img
              src={logoDark.src}
              alt="LFM Logo"
              className="h-8 dark:hidden"
            />
            <img
              src={logoLight.src}
              alt="LFM Logo"
              className="h-8 hidden dark:block"
            />
          </a>
        </li>
      </ul>
      {/*Right*/}
      <ul className="flex flex-col md:flex-row gap-4 items-end md:items-center">
        <li>
          <Button asChild>
            <a href="/projetos">Projetos</a>
          </Button>
        </li>
        <li>
          <Button asChild>
            <a href="/contato">Contato</a>
          </Button>
        </li>
      </ul>
    </nav>
  );
};
