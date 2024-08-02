import { CartButton, DarkMode, LinksDropdown, Logo, NavSearch } from "./index";
import { Container } from "../global/index";

export default function Navbar() {
  return (
    <Container className="flex flex-col flex-wrap gap-4 py-8 sm:flex-row sm:justify-between sm:items-center border border-lime-800 rounded">
      <Logo />
      <NavSearch />
      <div className="flex gap-4 items-center border border-lime-800 rounded">
        <CartButton />
        <DarkMode />
        <LinksDropdown />
      </div>
    </Container>
  );
}
