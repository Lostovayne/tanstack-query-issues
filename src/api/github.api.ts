import axios from "axios";



export const githubApi = axios.create({
  baseURL:"https://api.github.com/repos/facebook/react",
  headers:{
    // TODO: Api Key de Github
  }
})