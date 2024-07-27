import { githubApi } from "@/api/github.api";
import { sleep } from "@/helpers";
import { GithubLabel } from "@issues/interfaces";

export const getLabels = async (): Promise<GithubLabel[]> => {
  await sleep(1500);
  const { data } = await githubApi.get<GithubLabel[]>("/labels");
  return data;
};
