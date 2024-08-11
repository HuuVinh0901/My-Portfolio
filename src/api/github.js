import React, { useEffect, useState } from 'react';
import "../style/style.scss"

const Repositories = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepositories = async () => {
            const response = await fetch('https://api.github.com/users/HuuVinh0901/repos');
            const data = await response.json();

            const reposWithLanguages = await Promise.all(
                data.slice(0, 4).map(async (repo) => {
                    const languages = await fetchLanguages(repo);
                    return { ...repo, languages };
                })
            );
            setRepos(reposWithLanguages);
            setLoading(false);
        };

        fetchRepositories();
    }, []);

    const fetchLanguages = async (repo) => {
        const response = await fetch(repo.languages_url);
        const data = await response.json();
        return Object.keys(data).join(', ');
    };

    const handleClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div id="repos" className="max-w-7xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {loading ? (
                <p>Loading...</p>
            ) : (
                repos.map((repo, index) => (
                    <div
                        key={index}
                        className="text-slate-100 p-8 rounded-lg border-solid border-slate-700 border-2 shadow-lg w-full sm:w-100 h-90 hover:border-slate-50 transition duration-300 cursor-pointer"
                        onClick={() => handleClick(repo.html_url)}
                    >
                        <h2 className="text-xl sm:text-2xl font-bold" style={{ fontSize: '2.5vw' }}>
                            {repo.name}
                        </h2>
                        <p className="mt-2" style={{ fontSize: '2vh' }}>{repo.languages || 'No languages listed'}</p>
                        <p className="mt-4" style={{ fontSize: '2vh' }}>{repo.description || 'No description'}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Repositories;

