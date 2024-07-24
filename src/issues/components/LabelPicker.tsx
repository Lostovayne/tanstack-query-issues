import { LoadingSpinner } from "../../shared";
import { useLabels } from "../hooks";

export const LabelPicker = () => {
  const { labelsQuery } = useLabels();
  const { isLoading, data, isError } = labelsQuery;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-52">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-red-200/80 text-red-500 p-2 rounded-md">
        Ocurrio un error al cargar las etiquetas de GitHub
      </div>
    );
  }

  return (
    <div className="gap-2 flex flex-wrap">
      {data?.map((label) => (
        <span
          key={label.id}
          className=" animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
          style={{ border: `1px solid #${label.color}`, color: "#fff" }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
