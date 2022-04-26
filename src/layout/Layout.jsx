import Footer from "./Footer";
import Header from "./Header";

export default function Layout(props) {
  return (
    <div className="w-full">
      <Header />
      <div className="wrapper-content py-10">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}