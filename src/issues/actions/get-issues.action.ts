import { githubApi } from "@/api/github.api";
import { sleep } from "@/helpers";
import { GithubIssue } from "@issues/interfaces";

export const getIssues = async (): Promise<GithubIssue[]> => {
  await sleep(1500);
  const { data } = await githubApi.get<GithubIssue[]>("/issues");
  return data;
};
