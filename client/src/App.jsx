import "./App.css";
import { RouterProvider } from 'react-router-dom'
import { router } from "./utils/route";


function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
