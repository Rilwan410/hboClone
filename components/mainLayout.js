import Header from "../UI/Header";

import SideNav from "@/UI/SideNav";
export default function MainLayout({children}) {
  return (
    <>
      <section className="content-container">
        <Header/>
        <SideNav/>
        {children}
      </section>
    </>
  );
}
