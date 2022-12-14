import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import EmptySpaceFiller from "../footer/EmptySpaceFiller";

function ContactPage() {
  return (
    <>
      <Contact />
      <EmptySpaceFiller height={3} minHeight={true} />
      <Footer />
    </>
  );
}

export default ContactPage;
