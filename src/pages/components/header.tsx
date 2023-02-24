
import Link from "next/link";
import { AiFillCaretDown } from "react-icons/ai";
 const Header = () => {
  return (
    <header>
      <div>        
        <img src="https://www.gympad.ru/usr/a/19f4dc07132be262b2135641677e90fa_sm.jpg"></img>
        <span>Мария</span>
        <AiFillCaretDown />
        <nav>
          <Link href="/workouts">Журнал тренировок</Link>
          <Link href="/templates">Программы тренировок</Link>
          <a>Каталог упражнений</a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
