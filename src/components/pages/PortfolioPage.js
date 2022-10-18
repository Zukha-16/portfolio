import Portfolio from "../portfolio/Portfolio";
import Footer from "../footer/Footer";
import EmptySpaceFiller from "../footer/EmptySpaceFiller";

function PortfolioPage() {
  return (
    <>
      <Portfolio />
      <EmptySpaceFiller height={10} />
      <Footer />
    </>
  );
}

export default PortfolioPage;
