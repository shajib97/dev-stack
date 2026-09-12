import { FaReact, FaNodeJs, FaStar } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

const TechnologyCard = ({ technology }) => {
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
    <div className="card bg-base-100 border border-base-300 shadow-sm">
      <div className="card-body">

        <div className="flex items-center justify-between">
          <div className="text-4xl text-primary">
            {icons[icon]}
          </div>

          <div className="badge badge-outline">
            {category}
          </div>
        </div>

        <h2 className="card-title mt-3">
          {name}
        </h2>

        <p className="text-gray-500">
          {description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="badge badge-secondary">
            {difficulty}
          </span>

          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span>{rating}</span>
          </div>
        </div>

        <div className="card-actions mt-4">
          <button className="btn btn-primary w-full">
            Add to Stack
          </button>
        </div>

      </div>
    </div>
  );
};

export default TechnologyCard;