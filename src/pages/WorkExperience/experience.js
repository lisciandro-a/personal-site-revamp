const JobType = {
    FullTime: 'Full-time',
    Intern: 'Internship',
    TA: 'Teaching Assistant',
}

export const workExperience = [
    {
        jobId: 0,
        jobTitle: 'Software Engineer I',
        company: 'WoodMackenzie',
        location: 'Boston, MA',
        jobType: JobType.FullTime,
        startDate: new Date(2023, 6),
        endDate: new Date(2024, 4),
        descriptionSections: [
            {
                title: 'Technical Skills',
                bullets: [
                    'Contributed to overall product by refactoring common configuration to expand re-usability and clarity, implementing new functionality via Typescript, quickly pushing out bug-fixes that affect multiple teams, and reviewing cross-team PRs.',
                    'Organized with data and multiple Product Owners to strategize a long-term solution for maintaining cross-product data consistency.',
                    'Led an effort to refactor Redux code in order to ready an updated product for client use and allow us to begin deprecating the legacy version. This allowed for better support of caching and reduced the number of page re-renders from 2-3 times to 1, creating a more seamless experience for the user.',
                    'Co-led work on enhancements to an internal React app by organizing meetings with the backend team to refine tickets and remove blockers, and by delegating work to multiple new hires.',
                    'Helped onboard a new team, ensuring we all follow agile and best practices regarding release cadences, opening and merging PRs, and transparency in communication.',
                ]
            },
            {
                title: 'Co-op Program Involvement',
                bullets: [
                    'Acted as a Spring 2024 co-op supervisor to provide technical and professional support by holding regular check-ins for setting goals and helping to create action items for overcoming blockers.',
                    'Co-led and planned onboarding for Spring 2024 co-ops, which included planning technical workshops, organizing lectures, creating a schedule, and coordinating with HR to schedule related meetings.',
                    'Participated in behavioral interviews and hiring discussions regarding co-ops for both Spring and Fall 2024 cycles.',
                ]
            },
            {
                title: 'Cultural Impacts & Other Contributions',
                bullets: [
                    'Maintained consistent communication and negotiation with Product Owners to make sure that story requirements are clear and Acceptance Criteria is met, while still considering tradeoffs with functionality and our business timelines.',
                    'Eagerly volunteered for tasks such as demoing completed work at sprint demos, conducting interviews, and onboarding new joiners.',
                    'Presented a high-level technical overview of our product to an architect to help familiarize him with specifics of the platform, such as the overall code structure and how each part of the UI interacts.',
                ]
            },

        ],
    },
    {
        jobId: 1,
        jobTitle: 'Software Engineering Co-op',
        company: 'WoodMackenzie',
        location: 'Boston, MA',
        jobType: JobType.Intern,
        startDate: new Date(2022, 6),
        endDate: new Date(2022, 11),
        descriptionSections: [
            {
                title: 'Job Summary',
                bullets: [
                    'Enhanced Javascript code to deliver new functionality to market intelligence product, improving benchmarking visualization and customization.',
                    'Worked on a small team to restructure Java backend code and consistently communicated with our data team in order to support new datasets.',
                    'Led an epic to enhance tooltips and HighCharts chart decoration whilst maintaining an open line of communication with the Product Owner to adapt to changing requirements.'
                ]
            },
        ],
    },
    {
        jobId: 2,
        jobTitle: 'Software Engineering Co-op',
        company: 'Royal Philips',
        location: 'Cambridge, MA',
        jobType: JobType.Intern,
        startDate: new Date(2021, 6),
        endDate: new Date(2022, 0),
        descriptionSections: [
            {
                title: 'Job Summary',
                bullets: [
                    'Integrated Github with services such as Azure DevOps and MS Teams through Github Actions.',
                    'Maintained codebase through automation tools using the Github API and .yaml workflows to gate on PRs and track technical debt.',
                    'Contributed to a feature in C# by creating a script to autogenerate the API, making a wrapper class, writing a qualifier, and providing unit tests with full code coverage.'
                ]
            },
        ],
    },
    {
        jobId: 3,
        jobTitle: 'Teaching Assistant',
        company: 'Northeastern University - Khoury College of Computer Sciences',
        location: 'Boston, MA',
        jobType: JobType.TA,
        startDate: new Date(2022, 0),
        endDate: new Date(2022, 3),
        descriptionSections: [
            {
                title: 'Job Summary',
                bullets: [
                    'Promoted class organization and student success by upkeeping grading in a timely manner for a class of over 700 students.',
                    'Provided support through weekly office hours to help students excel and assisted in weekly in-person labs.',
                ]
            },
        ],
    },  
];