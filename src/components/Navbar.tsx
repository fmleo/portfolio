import { Button } from "./ui/button";

type NavbarProps = {
  currentLanguage: "pt-br" | "en";
};

const dict = {
  "pt-br": {
    home: "Início",
    blog: "Blog",
    projects: "Projetos",
    contact: "Contato",
  },
  en: {
    home: "Home",
    blog: "Blog",
    projects: "Projects",
    contact: "Contact",
  },
};

export const Navbar: React.FC<NavbarProps> = ({ currentLanguage }) => {
  return (
    <nav>
      <ul className="flex flex-row justify-between m-4 ">
        {/*Left*/}
        <div>
          <li>
            <Button asChild>
              <a href="/">{dict[currentLanguage].home}</a>
            </Button>
          </li>
        </div>
        {/*Right*/}
        <div className="flex flex-col md:flex-row gap-4">
          <li>
            <Button asChild className="">
              {currentLanguage === "en" ? (
                <a href="/">Ver em português</a>
              ) : (
                <a href="/en">See in english</a>
              )}
            </Button>
          </li>
          <li>
            <Button asChild variant="noShadow">
              <span className="select-none">{dict[currentLanguage].blog}</span>
            </Button>
          </li>
          <li>
            <Button asChild variant="noShadow">
              <span className="select-none">
                {dict[currentLanguage].projects}
              </span>
            </Button>
          </li>
          <li>
            <Button asChild>
              <a href="/contato">{dict[currentLanguage].contact}</a>
            </Button>
          </li>
        </div>
      </ul>
    </nav>
  );
};
