import Products from "./components/Products";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center py-6">
        Products List
      </h1>

      <Products />
    </div>
  );
}

export default App;