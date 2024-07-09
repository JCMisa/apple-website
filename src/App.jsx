import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

import * as Sentry from "@sentry/react";
function App() {
  // return (
  //   <button
  //     className="text-white text-2xl"
  //     onClick={() => methodDoesNotExist()}
  //   >
  //     Break the world
  //   </button>
  // );
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
}

export default App;
