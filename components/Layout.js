import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>
        <code className="ttext">Develocodeed by &copy; Tosin J.</code >
      </footer>
    </div>
  );
};

export default Layout;
