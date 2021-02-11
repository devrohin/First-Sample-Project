import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Page({ user, loginControl, children }) {
  return (
    <div className="header">
      <Header loginControl={loginControl} user={user} />
      {children}
      <Footer />
    </div>
  );
}
