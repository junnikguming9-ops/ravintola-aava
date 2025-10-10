import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import OurStory from "@/components/OurStory";

export default function Home() {
  return (
    <main className="bg-pale">
      <OurStory />
      <Menu />
      <Gallery />
      <Contact />
    </main>
  );
}
