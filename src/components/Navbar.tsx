import { Button } from "./ui/button";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-row justify-between m-4">
      {/*Left*/}
      <ul>
        <li>
          <Button asChild>
            <a href="/">Início</a>
          </Button>
        </li>
      </ul>
      {/*Right*/}
      <ul className="flex flex-col md:flex-row gap-4">
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
