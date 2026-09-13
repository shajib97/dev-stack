import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechnologyList from "../components/TechnologyList";
import Stack from "../components/Stack";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../components/Footer";

const Home = () => {
  const [stack, setStack] = useState([]);

  const handleAddToStack = (technology) => {
    const alreadyAdded = stack.find((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.error(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack`);
  };

  const handleRemove = (id) => {
    const technology = stack.find((item) => item.id === id);

    const remainingStack = stack.filter((item) => item.id !== id);

    setStack(remainingStack);

    toast.info(`${technology.name} removed from your stack`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed");
  };

  return (
    <>
      <Navbar />

      <Hero />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:flex-1">
            <TechnologyList handleAddToStack={handleAddToStack}
            stack={stack} 
            />
          </div>

          <div id="my-stack" className="w-full lg:w-72 lg:sticky lg:top-6">
            <Stack
              stack={stack}
              handleRemove={handleRemove}
              handleRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </main>
      <Footer />
      <ToastContainer position="top-right" />
    </>
  );
};

export default Home;
