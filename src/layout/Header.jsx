import Nav from "./nav/Nav";


export default function Header(props) {
  return (
    <header className="container mx-auto px-60 flex py-3">
      <div className="mr-36">
        <img src="logo-horizontal.png" alt="" width={200}/>
      </div>
      <Nav />
    </header>
  );
}