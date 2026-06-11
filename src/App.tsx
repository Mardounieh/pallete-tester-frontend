import { RouterProvider } from "react-router";
import { router } from "./routes";
import { DesignSystemProvider } from "./context/DesignSystemProvider";
import "./App.css";

function App() {
  return (
    <DesignSystemProvider>
      <RouterProvider router={router} />
    </DesignSystemProvider>
  );
}

export default App;
