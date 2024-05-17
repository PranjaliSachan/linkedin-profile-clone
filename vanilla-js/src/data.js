/**
 * Globals (In memory) AND &&, OR ||, NOT !
 *   
 * LocalStorage | SessionStorage (In Browser - kind of permanent, no guarantee)
 * 
 * Item : { key: value }
 */

// declarations - value is not assigned to variable
var aboutText;
var experiences;
var education;
var certifications;
var skills;

if (!(localStorage.getItem('aboutText'))) { // if aboutText is not there in localStorage
    aboutText = "Currently pursuing a Master's in Information Technology from Franklin University, specializing in Frontend Development, Cybersecurity, and Project Management. Skilled in front end UI development using vanilla JavaScript, Angular, React, Bootstrap, Tailwind CSS, and more for crafting seamless user experiences. I thrive on creating dynamic and secure web applications while adhering to industry best practices. I am committed to safeguarding digital assets and user data through robust cybersecurity measures. Experienced in penetration testing, network troubleshooting, and implementing security protocols. Equipped with project management expertise, adept at coordinating recruitment projects, optimizing workflows, and driving continuous improvement initiatives. Let's connect and explore opportunities to collaborate!";
    localStorage.setItem('aboutText', aboutText);
} else {
    aboutText = localStorage.getItem('aboutText');
}

if (!(localStorage.getItem('experiences'))) {
    experiences = [
        {
            role: "Talent Acquisition Specialist",
            company: "kipi.bi",
            fullTime: true,
            startDate: "Oct 2021",
            endDate: "Jul 2022",
            totalMonths: "10 mos",
            location: "India",
            remote: true,
            description: "Our founders launched kipi.bi to help businesses overcome data gaps and deliver rapid insights at scale. With Snowflake at our core, we believe that good data has the power to enable innovation without limits, helping you say goodbye to complex data solutions and hello to the modern world of cloud elasticity."
        },
        {
            role: "Talent Acquisition Associate",
            company: "Apisero Inc",
            fullTime: true,
            startDate: "Jun 2021",
            endDate: "Oct 2021",
            totalMonths: "5 mos",
            location: "India",
            remote: true,
            description: "Apisero was acquired by NTT DATA in November 2022 and became NTT DATA Salesforce & MuleSoft Services in April 2024. As of April 1st, 2024, the Apisero brand will be officially retired, and we are now NTT DATA. This change symbolizes more than just a new name—it represents our commitment to delivering even greater value, expertise, and innovative solutions to you." +
                "To our partners Salesforce & MuleSoft, your trust and collaboration have been instrumental in our journey to becoming the #2 MuleSoft partner globally. As we integrate with NTT DATA, Salesforce Partner since 2001, we bring together a wealth of resources—over 10,650+ Salesforce & MuleSoft certifications and nearly 4,000 consultants—to offer unparalleled service and create even more impactful solutions. Together, let’s continue to drive transformative success and build upon our shared legacy of excellence." +
                "To our customers, your support and partnership mean everything to us. As NTT DATA, we remain dedicated to providing the innovative solutions and exceptional service you expect. With the enhanced resources and expertise of NTT DATA, we are even better positioned to support your success and deliver outstanding results."
        },
        {
            role: "Human Resources & Operations Intern",
            company: "Jubilant Life Sciences Limited",
            fullTime: true,
            startDate: "May 2019",
            endDate: "Oct 2019",
            totalMonths: "6 mos",
            location: "India",
            remote: false,
            description: ""
        }
    ];

    localStorage.setItem('experiences', JSON.stringify(experiences));
} else {
    experiences = JSON.parse(localStorage.getItem('experiences'));
}

if (!(localStorage.getItem('education'))) {
    education = [
        {
            name: "Franklin University",
            degree: "Master of Science",
            major: "Information Technology",
            startDate: "Jan 2023",
            endDate: "Aug 2024",
        },
        {
            name: "IILM University",
            degree: "Master of Business Administration",
            major: "Business Administration and Management",
            startDate: "2018",
            endDate: "2020",
        },
        {
            name: "Chhatrapati Shahu Ji Maharaj University (CSJMU)",
            degree: "Bachelor of Science",
            major: "Science",
            startDate: "2014",
            endDate: "2017",
        },
        {
            name: "DDEC",
            degree: "High School Diploma",
            major: "Science",
            startDate: "2011",
            endDate: "2014",
        }
    ]

    localStorage.setItem('education', JSON.stringify(education));
} else {
    education = JSON.parse(localStorage.getItem('education'));
}

if (!(localStorage.getItem('certifications'))) {
    certifications = [
        {
            title: "Ethical Hacking Essential",
            grantor: "EC-Council",
            issuedOn: "Feb 2024",
            credentialId: "297528",
            link: "https://media.licdn.com/dms/image/D4E2DAQEO2wipjBgDug/profile-treasury-image-shrink_800_800/0/1708368407643?e=1716519600&v=beta&t=L9FbeFvhMZBpONGWyFisTIsG_FiWNfpCTBC4nHjPvcY"
        },
    ];

    localStorage.setItem('certifications', JSON.stringify(certifications));
} else {
    certifications = JSON.parse(localStorage.getItem('certifications'));
}

if (!(localStorage.getItem('skills'))) {
    skills = [
        "node.js", "Bootstrap", "CSS", "HTML", "JavaScript", "Tailwind CSS",
        "React.js", "Angular", "Git", "GitHub", "Python", "Cyber Security", "Security Information and Event Management (SIEM)",
        "SLDC", "Software Project Mangement", "UI/UX", "Cyber Risk Management", "Malware Analysis", "Cyber Threat Intelligence (CTI)",
        "Information Security", "Ethical Hacking", "Network Troubleshooting", "Internatinal Business", "Finance",
        "Human Resource Development", "Market Analysis", "Technical Recruiting", "Public Relations",
        "Microsoft Office", "Performance Management", "Data Analysis", "Team Management", "Business Communication"
    ];

    localStorage.setItem('skills', JSON.stringify(skills));
} else {
    skills = JSON.parse(localStorage.getItem('skills'));
}

// camel casing i.e. if we have "start date" as variable we will name it startDate