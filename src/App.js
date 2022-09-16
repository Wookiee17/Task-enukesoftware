import React from "react";


const LazyTable = React.lazy(() => import("./Components/table/Table"));
function App() {
  return (
    <div className="App">
      <React.Suspense fallback={"Loading table..."}>
        <LazyTable />
      </React.Suspense>
    </div>
  );
}

export default App;
