import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemCard from "./components/ItemCard";
import items from "./data";
import { useState } from "react";

function App() {
  const [itemsData, setItemsData] = useState(items);

  //Get all category unique
  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];
  console.log(allCategory);

  //Filter by category

  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };
  const filterBySearch = (text) => {
    if (text !== "") {
      const newArr = items.filter((item) => item.title === text);
      setItemsData(newArr);
    }
  };
  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category
          filterByCategory={filterByCategory}
          allCategory={allCategory}
        />
        <ItemCard itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
