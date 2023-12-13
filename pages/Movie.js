import Footer from "../components/Footer";
import Cardmovie from "../components/Movie/Cardmovie";
import Descriptionmovie from "../components/Movie/Descriptionmovie";
import Navbar from "../components/Navbar";

export default function Movie() {
  return (
    <>
      <Navbar />

      <Descriptionmovie />
      <Cardmovie />
      <Footer />
    </>
  );
}
