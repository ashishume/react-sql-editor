import TableStructure from "./components/table-structure";
import Products from "./mock-data/products.json";
import Orders from "./mock-data/orders.json";
import Territory from "./mock-data/territory.json";
function App() {
  return (
    <div className="App">
      <TableStructure tableData={Territory} heading="SQL Table" />
    </div>
  );
}

export default App;
