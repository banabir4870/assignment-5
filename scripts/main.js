// active btn
const activeBtn = (clickedBtn) => {
    const clickedBtns = document.querySelectorAll(".filter-btn");
    clickedBtns.forEach(btns => {
        btns.classList.remove("btn-primary");
    })
    clickedBtn.classList.add("btn-primary");
}

// load issues
const issueContainer = document.getElementById("issue-container");


const loadIssues = async () => {
    manageLoading(true);
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const data = await fetch(url)
    const loadedIssues = await data.json();
    const allIssues = loadedIssues.data;
    displayIssues(allIssues);
}

const displayIssues = (allIssues) => {
    issueContainer.innerHTML = "";
    allIssues.forEach(issues => {
        // border color condition
        const borderColor = issues.status === "open" ? "border-t-4 border-t-[#00A96E]" : "border-t-4 border-t-[#A855F7]";
        // status image condition
        const statusImg = issues.status === "open" ? "assets/Open-Status.png" : "assets/Closed-Status .png";
        // priority badge condition
        const priorityBtn = issues.priority === "high" ? "btn-error" : issues.priority === "medium" ? "btn-warning" : "btn-soft";
        // date formeting
        const createDate = new Date(issues.createdAt);
        const createdAt = createDate.toLocaleDateString();
        const issueCard = document.createElement("div");
        issueCard.innerHTML = `
        <div onclick="loadModal(${issues.id})" class="p-4 bg-white border-2 ${borderColor} border-gray-100 rounded-xl space-y-3">
            <div class="flex justify-between items-center">
                <img src="${statusImg}" alt="">
                <button class="btn btn-soft ${priorityBtn} rounded-full">${issues.priority}</button>
            </div>
            <h2 class="font-semibold text-sm text-[#1F2937]">${issues.title}</h2>
            <p class="text-[12px] text-neutral/70 line-clamp-2">${issues.description}</p>
            <div>
                ${issues.labels[0] ? `<button class="btn btn-soft btn-warning rounded-full">${issues.labels[0]}</button>` : ""}
                ${issues.labels[1] ? `<button class="btn btn-soft btn-warning rounded-full">${issues.labels[1]}</button>` : ""}
            </div>
            <hr class="border-1 border-gray-400">
            <div>
                <p class="text-neutral/50 text-sm">#${issues.id} by ${issues.author}</p>
                <p class="text-neutral/50 text-sm">${createdAt}</p>
            </div>
        </div>
        `
        issueContainer.appendChild(issueCard);
    })
    calculateCount()
    manageLoading(false);
}



// All Open and Closed tab buttons
const loadCategory = async (category) => {
    manageLoading(true);
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const data = await fetch(url)
    const loadedIssues = await data.json();
    const allIssues = loadedIssues.data;
    const filterIssues = allIssues.filter(issues => issues.status == category);
    displayIssues(filterIssues);
}

// modal
const loadModal = async (id) => {
    manageLoading(true);
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const res = await fetch(url);
    const data = await res.json();
    const allcards = data.data;
    const singleCard = allcards.find(card => card.id == id);
    displayModal(singleCard);
}
const displayModal = (card) => {
    const modalDetails = document.getElementById("details-container");
    // priority badge condition
    const priorityBtn = card.priority === "high" ? "btn-error" : card.priority === "medium" ? "btn-warning" : "btn-soft";
    // date formeting
    const updateDate = new Date(card.updatedAt);
    const updatedAt = updateDate.toLocaleDateString();

    modalDetails.innerHTML = `
        <h1 class="font-bold text-2xl text-[#1F2937]">${card.title}</h1>
        <p class="flex gap-1 items-center"><button class="btn btn-success text-white text-sm font-normal rounded-full">Opened</button> • opened by ${card.assignee} • ${updatedAt}</p>
        <div>
            ${card.labels[0] ? `<button class="btn btn-soft btn-warning rounded-full">${card.labels[0]}</button>` : ""}
            ${card.labels[1] ? `<button class="btn btn-soft btn-warning rounded-full">${card.labels[1]}</button>` : ""}
        </div>
        <p class="text-[12px] text-neutral/70 line-clamp-2">The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.</p>
        <div class="flex justify-start bg-gray-100 p-4 rounded-lg">
            <div class="flex-1">
                <h2>Assignee:</h2>
                <p>${card.assignee}</p>
            </div>
            <div class="flex-1">
                <h2>Priority:</h2>
                <button class="btn btn-soft ${priorityBtn} rounded-full">${card.priority}</button>
            </div>
        </div>
    `;
    document.getElementById('my_modal_5').showModal();
    manageLoading(false);
}

// counts
let totalCount = document.getElementById('total-count');

function calculateCount() {
    totalCount.innerText = issueContainer.children.length;
};

// search
const searchIssues = async () => {
    manageLoading(true);
    const searchText = document.getElementById("input-search").value;
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    const issues = data.data;
    displayIssues(issues);
}

// loading
const manageLoading = (status) =>{
    if(status == true){
        document.getElementById("loading").classList.remove("hidden");
        document.getElementById("issue-container").classList.add("hidden");
    }
    else{
        document.getElementById("loading").classList.add("hidden");
        document.getElementById("issue-container").classList.remove("hidden");
    }
}

loadIssues();
