import { useQuery } from "@tanstack/react-query";
import { sleep } from "../../helpers";

const getLabels = async (): Promise<unknown[]> => {
  await sleep(1500);
  const resp = await fetch(
    "https://api.github.com/repos/facebook/react/labels"
  ).then((res) => res.json());

  console.log(resp);
  return resp;
};

export const LabelPicker = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
  });

  if (labelsQuery.isLoading) {
    return (
      <div className="flex justify-center items-center h-52">Espere...</div>
    );
  }

  return (
    <>
      <span
        className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
        style={{ border: `1px solid #ffccd3`, color: "#ffccd3" }}
      >
        Primary
      </span>
    </>
  );
};
