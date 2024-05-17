function getExperienceTemplate(data) {
    return `
        <div class="list-item-container">
            <div class="list-item-icon">
                <i class="bi bi-buildings-fill"></i>
            </div>
            <div class="list-item-details">
                <h3>${data.role}</h3>
                <div>
                    <span>${data.company}</span>
                    <span><i class="bi bi-dot"></i></span>
                    <span>${data.fullTime === true ? 'Full-Time' : 'Part-Time'}</span>
                </div>
                <div class="text-light">
                    <span>${data.startDate} - ${data.endDate}</span>
                    <span><i class="bi bi-dot"></i></span>
                    <span>${data.totalMonths}</span>
                </div>
                <div class="text-light">
                    <span>${data.location}</span>
                    <span><i class="bi bi-dot"></i></span>
                    <span>${data.remote ? 'Remote' : 'On-Site'}</span>
                </div>
                <div class="long-text">
                    <p>${data.description}</p>
                </div>
            </div>
        </div>
    `;
}

function getEducationTemplate(data) {
    return `
        <div class="list-item-container">
            <div class="list-item-icon">
                <i class="bi bi-building-fill"></i>
            </div>
            <div class="list-item-details">
                <h3>${data.name}</h3>
                <div>
                    <span>${data.degree}</span>
                    <span>, </span>
                    <span>${data.major}</span>
                </div>
                <div class="text-light">
                    <span>${data.startDate} - ${data.endDate}</span>
                </div>
            </div>
        </div>
    `;
}

function getCertificationTemplate(data) {
    return `
        <div class="list-item-container">
            <div class="list-item-icon">
                <i class="bi bi-patch-check-fill"></i>
            </div>
            <div class="list-item-details">
                <h3>${data.title}</h3>
                <div>
                    <span>${data.grantor}</span>
                </div>
                <div class="text-light">
                    <span>${data.issuedOn}</span>
                </div>
                <div class="text-light">
                    <span>${data.credentialId}</span>
                </div>
                ${data.link !== '' ? `<a href="${data.link}" target="_blank" class="external-link">Link</a>` : ''}
            </div>
        </div>
    `;
}


function getSkillTemplate(data) {
    return `
        <div class="list-item-container">
            <div class="list-item-details">
                <h3>${data}</h3>
            </div>
        </div>
    `
}