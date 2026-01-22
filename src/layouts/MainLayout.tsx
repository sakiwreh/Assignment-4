import { Outlet, NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";

function MainLayout(){
  return (
    <div>
      <Navigation/>
      <main className="p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;