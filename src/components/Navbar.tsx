import { Button } from "./ui/button";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-between m-4 ">
        {/*Left*/}
        <div>
          <li>
            <Button asChild>
              <a href="/">Início</a>
            </Button>
          </li>
        </div>
        {/*Right*/}
        <div className="flex flex-col md:flex-row gap-4">
          {/*<li>
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
          </li>*/}
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
        </div>
      </ul>
    </nav>
  );
};
