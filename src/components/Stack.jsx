import { FaTrash } from "react-icons/fa";

const Stack = ({ stack, handleRemove, handleRemoveAll }) => {
  return (
    <div className="bg-base-100 border border-base-300 rounded-2xl p-5 shadow-sm">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">Your Stack ({stack.length})</h2>

        {stack.length > 0 && (
          <button
            onClick={handleRemoveAll}
            className="btn btn-ghost btn-sm text-error"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty Stack */}
      {stack.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">Your stack is empty.</p>

          <p className="text-sm text-gray-400 mt-2">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex justify-between items-center bg-base-200 rounded-xl p-3"
            >
              <div>
                <h3 className="font-semibold">{technology.name}</h3>

                <p className="text-sm text-gray-500">{technology.category}</p>
              </div>

              <button
                onClick={() => handleRemove(technology.id)}
                className="btn btn-ghost btn-sm btn-circle text-error"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Stack;
