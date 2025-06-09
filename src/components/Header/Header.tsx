import logo from "../../assets/logo.svg";
import Button from "../Button";
import NavButton from "./NavButton";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <div className="flex items-center sticky top-0 justify-between w-full h-20 px-12 bg-darkGreen border-b border-b-green z-50">
      <a
        href="#"
        className="flex items-center"
      >
        <img
          src={logo}
          alt="logo"
          className="size-12"
        />
        <p className="text-2xl text-green">Repetilum</p>
      </a>

      <IoMenu className="text-4xl text-green lg:hidden" />

      <div className="items-center gap-4 xl:gap-x-16 hidden lg:flex">
        <nav className={`flex justify-center text-lg text-white`}>
          <ul className="flex lg:gap-x-4 xl:gap-x-10">
            <NavButton id={"aboutUs"}>Про нас</NavButton>
            <NavButton id={"price"}>Ціни</NavButton>
            <NavButton id={"solutions"}>Рішення</NavButton>
            <NavButton id={"features"}>Можливості</NavButton>
            <NavButton id={"faq"}>FAQ</NavButton>
          </ul>
        </nav>
        <div className="hidden lg:flex gap-3">
          <Button
            size="large"
            type={"colorful"}
            link={"#"}
          >
            Демо версія
          </Button>
          <Button
            size="large"
            type={"transparent"}
            link={"#"}
          >
            Зворотній зв'язок
          </Button>
        </div>
      </div>
    </div>
  );
}
