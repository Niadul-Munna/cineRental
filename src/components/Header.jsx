import { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import moon from "../assets/icons/moon.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";
import { MovieContext } from "../context";
export default function Header() {
  const [showCart, setShowCart] = useState(false);

  const { state } = useContext(MovieContext);

  console.log(state.cartData);

  const handleCartShow = () => {
    setShowCart(!showCart);
  };
  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="flex items-center justify-between space-x-10 py-6 container mx-auto">
        <a href="index.html">
          <img src={logo} width={139} height={26} alt="logo" />
        </a>
        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width={24} height={24} alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={moon} width={24} height={24} alt="moon" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img src={shoppingCart} width={24} height={24} alt="cart" />
              {state.cartData.length > 0 && (
                <span className="absolute top-0 right-0 text-xs bg-primary text-white dark:text-black p w-4 h-4 flex items-center justify-center rounded-full">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
