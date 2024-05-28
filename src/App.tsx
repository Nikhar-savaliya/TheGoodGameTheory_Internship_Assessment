import { useEffect, useState } from "react";
import "./App.css";
import { GetAllItems } from "./api/api";
import ItemList from "./components/ItemList";
import Search from "./components/Search";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [items, setItems] = useState<ItemProps[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await GetAllItems();
        setItems(res.data);
        console.log(res.data[0].rating.average);
        setIsLoading(false);
      } catch (error: unknown) {}
    })();
  }, []);

  return (
    <Router>
      <div className="container mx-auto flex flex-col gap-8 mt-10">
        <nav>
          <ul className="text-xl flex flex-col gap-4 underline border-b p-4">
            <li>
              <Link to="/all">All Items</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/all"
            element={
              <section className="container mx-auto flex flex-col gap-8 mt-10 ">
                <p className="text-xl flex items-center gap-2 py-4">
                  All Products
                </p>
                <ItemList items={items} isLoading={isLoading} />
              </section>
            }
          />
          <Route
            path="/search"
            element={
              <section className="container mx-auto flex flex-col gap-8 mt-10 ">
                <Search items={items} />
              </section>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
