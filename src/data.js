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

localStorage.clear();

if (!(localStorage.getItem('aboutText'))) { // if aboutText is not there in localStorage
    aboutText = "Specializing in front-end development and UI/UX design, I am proficient in Angular, React, Bootstrap, Tailwind CSS, and other modern tools to build dynamic, responsive web applications. Skilled in crafting intuitive user interfaces with a focus on seamless user experiences and security." +
        "Seeking opportunities to innovate at the crossroads of code and connectivity through mentorship and collaboration.";
    localStorage.setItem('aboutText', aboutText);
} else {
    aboutText = localStorage.getItem('aboutText');
}

if (!(localStorage.getItem('experiences'))) {
    experiences = [
        {
            role: "Software Developer",
            company: "Rumzer",
            fullTime: true,
            startDate: "Nov 2024",
            endDate: "Present",
            totalMonths: "4 mos",
            location: "Wisconsin, United States",
            remote: true,
            description: "Contributed to website development and maintenance, focusing on front-end improvements and bug fixes. Led the migration of a website from 11ty and Bootstrap to Angular and Tailwind CSS, enhancing performance and scalability." +
                " Optimized front-end performance with caching and lazy loading to reduce load times and boost SEO. Integrated RESTful APIs for dynamic data fetching, reducing manual updates."
        },
        {
            role: "IT Consultant",
            company: "Apisero Inc.",
            fullTime: true,
            startDate: "Jun 2021",
            endDate: "Jul 2022",
            totalMonths: "1 yr 2 mos",
            location: "India",
            remote: true,
            description: ""
        },
        {
            role: "UI Designer",
            company: "Digital Experts",
            fullTime: true,
            startDate: "Nov 2019",
            endDate: "May 2021",
            totalMonths: "1 yr 7 mos",
            location: "India",
            remote: false,
            description: ""
        },
        {
            role: "Intern",
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
            degree: "Master of Science - MS",
            major: "Information Technology",
            startDate: "Aug 2022",
            endDate: "Aug 2024",
        },
        {
            name: "IILM University, Greater Noida",
            degree: "Master of Business Administration - MBA",
            major: "Business Administration and Management",
            startDate: "2018",
            endDate: "2020",
        },
        {
            name: "Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur",
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
            title: "Introduction to Front-End Development",
            grantor: "Meta",
            issuedOn: "Jan 2025",
            credentialId: "TVIR6SG0P4P2",
            link: "https://www.coursera.org/account/accomplishments/verify/TVIR6SG0P4P2"
        },
        {
            title: "IT for Security",
            grantor: "Franklin University",
            issuedOn: "Aug 2024",
            credentialId: "",
            link: "https://www.credly.com/badges/886a6b59-203b-441d-8c3a-7a287a7761d3"
        },
        {
            title: "Ethical Hacking Essential",
            grantor: "EC-Council",
            issuedOn: "Feb 2024",
            credentialId: "297528",
            link: "assets/EC_Council_Certificate.jpeg"
        },
    ];

    localStorage.setItem('certifications', JSON.stringify(certifications));
} else {
    certifications = JSON.parse(localStorage.getItem('certifications'));
}

if (!(localStorage.getItem('skills'))) {
    skills = [
        "React.js", "Angular", "Next.js", "node.js", "JavaScript", "TypeScript", "Bootstrap", "CSS", "HTML", "Tailwind CSS", "Chakra UI", "Material UI",
        "Python", "MySQL", "MongoDB", "PostgreSQL", "Git", "GitHub", "Wordpress", "Netlify", "Vercel", "Supabase",
        "Cyber Security", "Security Information and Event Management (SIEM)", "Software Development Life Cycle (SDLC)",
        "Software Project Mangement", "UI/UX", "Cyber Risk Management", "Malware Analysis", "Cyber Threat Intelligence (CTI)",
        "Information Security", "Ethical Hacking", "Network Troubleshooting", "Internatinal Business", "Finance",
        "Human Resource Development", "Market Analysis", "Technical Recruiting", "Public Relations",
        "Microsoft Office", "Performance Management", "Data Analysis", "Team Management", "Business Communication"
    ];

    localStorage.setItem('skills', JSON.stringify(skills));
} else {
    skills = JSON.parse(localStorage.getItem('skills'));
}

// camel casing i.e. if we have "start date" as variable we will name it startDate