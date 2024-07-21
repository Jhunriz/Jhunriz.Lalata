import Footer from "./Footer";
import StyledNavbar from "./Navbar";
import Section from "./Section";


export default function MainLayout() {
  return (
    <div className="font-figtree">
      <div className="">
        <StyledNavbar />
        <main className="">
          <Section />
        </main>
        <Footer />
      </div>
    </div>
  );
}
