import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaVuejs,
  FaStar,
} from "react-icons/fa";

import {
  SiJavascript,
  SiSvelte,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const TechnologyCard = ({ technology, handleAddToStack, stack }) => {
  const { name, category, difficulty, rating, description, icon, badge } =
    technology;

  const icons = {
    FaReact: <FaReact />,
    FaNodeJs: <FaNodeJs />,
    FaJava: <FaJava />,
    FaDocker: <FaDocker />,
    FaVuejs: <FaVuejs />,
    SiJavascript: <SiJavascript />,
    SiSvelte: <SiSvelte />,
    SiNextdotjs: <SiNextdotjs />,
    SiPostgresql: <SiPostgresql />,
    SiRedis: <SiRedis />,
    SiTypescript: <SiTypescript />,
    SiTailwindcss: <SiTailwindcss />,
  };

  const isAdded = stack.some((item) => item.id === technology.id);

  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition duration-300 rounded-2xl">
      <div className="card-body p-6">
        <div className="flex items-center justify-between">
          <div className="text-4xl text-primary">{icons[icon]}</div>

          {badge && <span className="badge badge-outline">{badge}</span>}
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold">{name}</h2>

          <p className="text-sm text-gray-500 mt-2 leading-6">{description}</p>
        </div>

        <div className="flex justify-between items-center mt-5">
          <div className="flex gap-2">
            <span className="badge badge-outline">{category}</span>

            <span className="badge badge-secondary badge-outline">
              {difficulty}
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <FaStar className="text-yellow-500" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>

        <button
          onClick={() => handleAddToStack(technology)}
          disabled={isAdded}
          className="btn btn-primary w-full mt-5 rounded-xl"
        >
          {isAdded ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
