import React from "react";
import image from "../resources/nepal2.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Zen Garden"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-3xl text-yellow-300 text-bold cursive leading-none lg:leading-snug home-name">
          Namaste,
          <br />
          I'm Vipul
        </h1>
      </section>
    </main>
  );
}
