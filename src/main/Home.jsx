import { Fragment } from "react";
import Card from "../component/card/Card";
import Hero from "../component/hero/Hero";

export default function Home() {
  return (
    <Fragment>
      <div className="container mx-auto px-60">
        <Hero />
      </div>
      <div className="container mx-auto px-60 grid grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Fragment>
  );
}
