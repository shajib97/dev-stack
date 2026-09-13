import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";

const TechnologyList = ({ handleAddToStack }) => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div id="technologies" className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Explore Technologies</h2>

        <p className="text-gray-500 mt-2">
          Discover popular technologies and build your development stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            handleAddToStack={handleAddToStack}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnologyList;
