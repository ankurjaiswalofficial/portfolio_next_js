import Content from "@/pages/Content";
import Footer from "@/pages/Footer/Footer";
import Header from "@/pages/Header/Header";

export default function Home() {
  return (
    <div className="w-full h-fit">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
