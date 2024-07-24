import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // Una hora de Stale Time para refrescar

    // placeholderData: [
    //   {
    //     id: 69105383,
    //     node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
    //     url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
    //     name: "Browser: IE",
    //     color: "c7def8",
    //     default: false,
    //   },

    //   {
    //     id: 945148471,
    //     node_id: "MDU6TGFiZWw5NDUxNDg0NzE=",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20ReactIs",
    //     name: "Component: ReactIs",
    //     color: "1d76db",
    //     default: false,
    //   },
    // ] as GithubLabel[],

    // initialData: [
    //   {
    //     id: 69105383,
    //     node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
    //     url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
    //     name: "Browser: IE",
    //     color: "c7def8",
    //     default: false,
    //   },

    //   {
    //     id: 945148471,
    //     node_id: "MDU6TGFiZWw5NDUxNDg0NzE=",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20ReactIs",
    //     name: "Component: ReactIs",
    //     color: "1d76db",
    //     default: false,
    //   },
    // ] as GithubLabel[],
  });

  return {
    labelsQuery,
  };
};
