import { Menu, MenuSm, ToggleButton } from "../helper";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container px-5">
      <div className="">
        <Menu />
      </div>
      <div className="">
        <MenuSm />
      </div>
      <section>
        <ToggleButton />
      </section>
    </nav>
  );
};

export default Navbar;
