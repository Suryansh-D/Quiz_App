document.addEventListener('DOMContentLoaded', () => {
    const finalScore = document.querySelector('#finalScore');
    const mostRecentScore = localStorage.getItem('mostRecentScore');

    finalScore.innerText = mostRecentScore;
});
