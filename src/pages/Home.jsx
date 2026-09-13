import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechnologyList from "../components/TechnologyList";
import Stack from "../components/Stack";

const Home = () => {
  const [stack, setStack] = useState([]);

  const handleAddToStack = (technology) => {
    const alreadyAdded = stack.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      return;
    }

    setStack([...stack, technology]);
  };

  const handleRemove = (id) => {
    const remainingStack = stack.filter(
      (technology) => technology.id !== id
    );

    setStack(remainingStack);
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar />

      <Hero />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Technology Section */}
          <div className="flex-1">
            <TechnologyList
              handleAddToStack={handleAddToStack}
            />
          </div>

          {/* Stack Section */}
          <div className="w-full lg:w-72">
            <Stack
              stack={stack}
              handleRemove={handleRemove}
              handleRemoveAll={handleRemoveAll}
            />
          </div>

        </div>
      </main>
    </>
  );
};

export default Home;