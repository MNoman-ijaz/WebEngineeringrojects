
let candidateVotes = {
    candidate1: 0,
    candidate2: 0,
    candidate3: 0
};

function castVote() {
    const age = parseInt(document.getElementById("age").value);
    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    if (age > 18) {
        const selectedCandidate = document.getElementById("candidateOptions").value;
        candidateVotes[selectedCandidate]++;
        
        updateVoteDisplay();

        alert("Vote cast successfully!");

        displayWinner(); // Check and display the winner after each vote
    } else {
        alert("You must be at least 18 years old to cast your vote.");
    }
}

function updateVoteDisplay() {
    document.getElementById("candidate1-votes").innerText = `Candidate 1: ${candidateVotes.candidate1} votes`;
    document.getElementById("candidate2-votes").innerText = `Candidate 2: ${candidateVotes.candidate2} votes`;
    document.getElementById("candidate3-votes").innerText = `Candidate 3: ${candidateVotes.candidate3} votes`;
}

function findWinner() {
    let winner = "";
    let maxVotes = 0;

    for (const candidate in candidateVotes) {
        if (candidateVotes[candidate] > maxVotes) {
            maxVotes = candidateVotes[candidate];
            winner = candidate;
        }
    }

    return winner;
}

function displayWinner() {
    const winner = findWinner();
    const winnerInfo = document.getElementById("winner-info");

    if (winner !== "") {
        winnerInfo.innerHTML = `The winner is <span class="winner">${winner}</span> with ${candidateVotes[winner]} votes!`;
        // Highlight the winner by adding the 'winner' class
        document.getElementById(`candidate${winner.charAt(winner.length-1)}-votes`).classList.add("winner");
    } else {
        winnerInfo.innerHTML = "No winner yet. Keep voting!";
    }
}
