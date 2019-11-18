import { GITHUB_API, MY_REPO_API } from './config';
require('dotenv/config')
export async function getGitRepositories(programmingLanguage) {
    console.log(process.env.GITHUB_API_URL);
    console.log('Buscando repositórios da linguagem... ' + programmingLanguage);
    return GITHUB_API.get(`/repositories?q=language:${programmingLanguage}&sort=stars&order=desc`)
}

export async function storeRepository(repo) {
    let repository = { ...repo, github_id: repo.id, owner: { ...repo.owner, github_id: repo.owner.id} }
    delete repository.id;
    delete repository.owner.id;

    return MY_REPO_API.post(`/repositories`, {
        repository: {
            ...repository
        }
    })
}

export async function storeRepositories(repositories) {
    return MY_REPO_API.post(`/repositories`, {
        repositories
    })
}

export async function getRepositoriesHistory() {
    return MY_REPO_API.get(`/repositories`)
}

export async function clearRepositoriesHistory() {
    console.log('Limpando os registros do histórico repositórios... ');
    return MY_REPO_API.delete(`/repositories`)
}

