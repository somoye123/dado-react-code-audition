import { handleResponse, handleError } from './apiUtils';

export default async (repoName) => fetch(`https://api.github.com/repos/${repoName}/commits?per_page=10`).then(handleResponse).catch(handleError);
