import { useReducer } from "react";
import MovieList from "./components/cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { MovieContext } from "./context";
import { cartReducer, initialState } from "./reducers/cartReducer";
import { ToastContainer } from "react-toastify";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      <Header />
      <main>
        <div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </MovieContext.Provider>
  );
}

export default App;
