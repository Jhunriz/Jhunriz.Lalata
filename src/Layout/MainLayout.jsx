import Footer from "./Footer";
import StyledNavbar from "./Navbar";
import Section from "./Section";


export default function MainLayout() {
  return (
    <div className="font-figtree">
      <div className="">
        <StyledNavbar />
        <main className="lg:px-24 md:px-40 py-24">
          <Section />
        </main>
        <Footer />
      </div>
    </div>
  );
}
