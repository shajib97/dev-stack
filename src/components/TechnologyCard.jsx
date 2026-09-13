import { FaReact, FaNodeJs, FaStar } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

const TechnologyCard = ({ technology, handleAddToStack }) => {
  const {
    name,
    category,
    difficulty,
    rating,
    description,
    icon
  } = technology;

  const icons = {
    FaReact: <FaReact />,
    FaNodeJs: <FaNodeJs />,
    SiJavascript: <SiJavascript />,
    SiMongodb: <SiMongodb />
  };

  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition duration-300 rounded-2xl">
      <div className="card-body p-6">

        <div className="flex justify-between items-start">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-3xl text-primary">
            {icons[icon]}
          </div>

          <span className="badge badge-outline">
            {category}
          </span>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold">
            {name}
          </h2>

          <p className="text-sm text-gray-500 mt-2 leading-6">
            {description}
          </p>
        </div>

        <div className="flex justify-between items-center mt-5">
          <span className="badge badge-secondary badge-outline">
            {difficulty}
          </span>

          <div className="flex items-center gap-1 text-sm">
            <FaStar className="text-yellow-500" />
            <span className="font-medium">
              {rating}
            </span>
          </div>
        </div>

        <button
          onClick={() => handleAddToStack(technology)}
          className="btn btn-primary w-full mt-5 rounded-xl"
        >
          Add to Stack
        </button>

      </div>
    </div>
  );
};

export default TechnologyCard;