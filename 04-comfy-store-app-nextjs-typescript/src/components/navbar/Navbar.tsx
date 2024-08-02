import { CartButton, DarkMode, LinksDropdown, Logo, NavSearch } from "./index";
import { Container } from "@/components/global";

export default function Navbar() {
  return (
    <Container className="flex flex-col flex-wrap gap-4 py-8 sm:flex-row sm:justify-between sm:items-center">
      <Logo />
      <NavSearch />
      <div className="flex gap-4 items-center">
        <CartButton />
        <DarkMode />
        <LinksDropdown />
      </div>
    </Container>
  );
}
