
async function fetchRepositories() {
    const response = await fetch('https://api.github.com/users/HuuVinh0901/repos');
    const data = await response.json();
    return data.slice(0, 4);
}

async function fetchLanguages(repo) {
    const response = await fetch(repo.languages_url);
    const data = await response.json();
    return Object.keys(data).join(', ');
}

function createRepoElement(repo, languages) {
    return `
    
        <div class="text-slate-100 p-8 rounded-lg border-solid border-slate-700 border-2 shadow-lg w-full sm:w-100 h-90 hover:border-slate-50 transition duration-300">
            <h2 class="text-xl sm:text-2xl font-bold" style="font-size:2.5dvw">
                <a href="${repo.html_url}" target="_blank" class="hover:text-slate-300">${repo.name}</a>
            </h2>
            <p class="mt-2"  style="font-size:2dvh">${languages || 'No languages listed'}</p>
            <p class="mt-4"  style="font-size:2dvh">${repo.description || 'No description'}</p>
        </div>
    
    `;
}

async function displayRepositories() {
    const repos = await fetchRepositories();
    const repoContainer = document.getElementById('repos');

    for (const repo of repos) {
        const languages = await fetchLanguages(repo);
        repoContainer.innerHTML += createRepoElement(repo, languages);
    }
}

displayRepositories();

