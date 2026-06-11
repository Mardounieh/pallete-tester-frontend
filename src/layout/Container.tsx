import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const Container = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Container;
