// load issues
const issueContainer = document.getElementById("issue-container");

const loadIssues = async () =>{
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const data = await fetch(url)
    const loadedIssues = await data.json ();
    const allIssues = loadedIssues.data;
    displayIssues(allIssues);
}

const displayIssues = (allIssues) =>{
    issueContainer.innerHTML = "";
    allIssues.forEach(issues =>{
        const borderColor = issues.status === "open" ? "border-t-4 border-t-[#00A96E]" : "border-t-4 border-t-[#A855F7]";
        const issueCard = document.createElement("div");
        issueCard.innerHTML = `
        <div class="p-4 bg-white border-2 ${borderColor} border-gray-100 rounded-xl space-y-3">
            <div class="flex justify-between items-center">
                <img src="assets/Open-Status.png" alt="">
                <button class="btn btn-soft btn-error rounded-full">High</button>
            </div>
            <h2 class="font-semibold text-sm text-[#1F2937]">Fix navigation menu on mobile devices</h2>
            <p class="text-[12px] text-neutral/70">The navigation menu doesn't collapse properly on mobile devices...</p>
            <div>
                <button class="btn btn-soft btn-error rounded-full"><img src="assets/bug.png" alt="">Bug</button>
                <button class="btn btn-soft btn-warning rounded-full"><img src="assets/help.png" alt="">Help Wanted</button>
            </div>
            <hr class="border-1 border-gray-400">
            <p>#1 by john_doe</p>
            <p>1/15/2024</p>
        </div>
        `
        issueContainer.appendChild(issueCard);
    })
}

loadIssues();