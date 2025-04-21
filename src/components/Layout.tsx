
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LiveChat from "./LiveChat";

const Layout = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <LiveChat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
};

export default Layout;
