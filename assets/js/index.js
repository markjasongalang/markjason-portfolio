
/**
 * An object to hold references to DOM elements used in the script.
 * @type {Object}
 * @property {HTMLElement} skillList - The container for the list of skills.
 * @property {HTMLElement} projectList - The container for the list of projects.
 * @property {HTMLElement} awardList - The container for the list of awards.
 */
const domElements = {
    skillList: document.querySelector('#skill-list'),
    projectList: document.querySelector('#project-list'),
    awardList: document.querySelector('#award-list')
};

/**
 * Fetches the skills data from JSON file and displays them on the page.
 * @async
 * @function displaySkills
 * @returns {Promise<void>} Resolves when the skills are fetched and rendered.
 * @throws {Error} Throws an error if the fetch opeartion fails or if the response is not OK.
 */
const displaySkills = async () => {
    domElements.skillList.innerHTML = '';

    try {
        const response = await fetch('data/skills.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const fragment = document.createDocumentFragment();
        
        data.technologies.forEach((tech, index) => {
            const skillItem = document.createElement('div');
            skillItem.classList.add('col-sm-4');
            if (index % 2 === 0) {
                skillItem.classList.add('mb-5');
            }

            skillItem.innerHTML = `
                <h6 class="mb-4"><i class="ti-angle-double-right"></i>&nbsp;${tech}</h6>
            `;

            fragment.appendChild(skillItem);
        });

        domElements.skillList.appendChild(fragment);
    } catch (error) {
        console.error('Error fetching skills:', error);
    }
};

displaySkills();

/**
 * Fetches the project data from JSON file and displays them on the page.
 * @async
 * @function displayProjects
 * @returns {Promise<void>} Resolves when the projects are fetched and rendered.
 * @throws {Error} Throws an error if the fetch operation fails or if the response status is not OK.
 */
const displayProjects = async () => {
    domElements.projectList.innerHTML = '';

    try {
        const response = await fetch('data/projects.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const projects = await response.json();
        const fragment = document.createDocumentFragment();

        projects.forEach((project) => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('col-md-4');
    
            projectItem.innerHTML = `
                <div class="card border mb-4">
                    <img src="${project.imgSrc}" alt="Project image class="card-img-top w-100">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <div class="post-details">
                            <a href="javascript:void(0)">${project.technologies}</a>
                        </div>
                        <p>${project.description}</p>
                    </div>
                </div>
            `;
    
            fragment.appendChild(projectItem);
        });

        domElements.projectList.appendChild(fragment);
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
};

displayProjects();

/**
 * Fetches the awards data from JSON file and displays them on the page.
 * @async
 * @function displayAwards
 * @returns {Promise<void>} Resolves when the awards are fetched and rendered.
 * @throws {Error} Throws an error if the fetch operation fails or if the response status is not OK.
 */
const displayAwards = async () => {
    domElements.awardList.innerHTML = '';

    try {
        const response = await fetch('data/awards.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const awards = await response.json();
        const fragment = document.createDocumentFragment();

        awards.forEach((award) => {
            const awardItem = document.createElement('div');
            awardItem.classList.add('col-md-4');

            awardItem.innerHTML = `
                <div class="card border mb-4">
                    <img src="${award.imgSrc}" alt="Award image" class="card-img-top w-100">
                    <div class="card-body">
                        <h5 class="card-title">${award.name}</h5>
                        <div class="post-details">
                            <a href="javascript:void(0)">${award.venue}</a>
                        </div>
                        <p>${award.contestName}</p>
                    </div>
                </div>
            `;

            fragment.appendChild(awardItem);
        });

        domElements.awardList.appendChild(fragment);
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
};

displayAwards();