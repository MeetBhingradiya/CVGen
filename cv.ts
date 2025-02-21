interface IName {
    firstName: string
    lastName: string
}

// interface IAddress_Simple {
//     Line1: string
//     Line2?: string
// }

// interface IAddress_Detailed {
//     HouseNo: string
//     BuildingCode?: string
//     Floor?: string
//     Street?: string
//     Society?: string
//     City?: string
//     Town?: string
//     State: string
//     Country: string
//     ZipCode: number
// }

interface ILinktree {
    Phone: {
        Show: boolean
        Number: string
    }
    Email?: {
        Show: boolean
        Address: string
    }
    LinkedIn?: {
        Show: boolean
        Id: string
    }
    Github?: {
        Show: boolean
        Username: string
    }
    Portfolio: {
        Show: boolean
        URL: string
    }
    Twitter?: {
        Show: boolean
        Username: string
    }
    Instagram?: {
        Show: boolean
        Username: string
    }
}

enum Months {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December"
}

type Year = `${number}${number}${number}${number}`

enum JobTitles {
    SoftwareEngineer = "Software Engineer",
    FrontendDeveloper = "Frontend Developer",
    BackendDeveloper = "Backend Developer",
    FullStackDeveloper = "Full Stack Developer",
    MobileAppDeveloper = "Mobile App Developer",
    WebDeveloper = "Web Developer",
    DataScientist = "Data Scientist",
    DataAnalyst = "Data Analyst",
    MachineLearningEngineer = "Machine Learning Engineer",
    DeepLearningEngineer = "Deep Learning Engineer",
    AIEngineer = "AI Engineer",
    CloudEngineer = "Cloud Engineer",
    DevOpsEngineer = "DevOps Engineer",
    CyberSecurityEngineer = "Cyber Security Engineer",
    NetworkEngineer = "Network Engineer",
    SystemAdministrator = "System Administrator",
    DatabaseAdministrator = "Database Administrator",
    ITSupport = "IT Support",
    ITConsultant = "IT Consultant",
    ITManager = "IT Manager",
    ProductManager = "Product Manager",
    ProjectManager = "Project Manager",
    ScrumMaster = "Scrum Master",
    AgileCoach = "Agile Coach",
    BusinessAnalyst = "Business Analyst",
    UIUXDesigner = "UI/UX Designer",
    GraphicDesigner = "Graphic Designer",
    VideoEditor = "Video Editor",
    ContentCreator = "Content Creator",
    SocialMediaManager = "Social Media Manager",
    DigitalMarketer = "Digital Marketer",
    SEOExpert = "SEO Expert",
    SEMExpert = "SEM Expert",
    GrowthHacker = "Growth Hacker",
    SalesManager = "Sales Manager",
    AccountManager = "Account Manager",
    CustomerSuccessManager = "Customer Success Manager",
    HRManager = "HR Manager",
    RecruitmentManager = "Recruitment Manager",
    TalentAcquisitionManager = "Talent Acquisition Manager",
    LearningAndDevelopmentManager = "Learning and Development Manager",
    TrainingManager = "Training Manager",
    FinanceManager = "Finance Manager",
    Accountant = "Accountant",
    Auditor = "Auditor",
    TaxConsultant = "Tax Consultant",
    FinancialAnalyst = "Financial Analyst",
    InvestmentBanker = "Investment Banker",
    WealthManager = "Wealth Manager",
    InsuranceAgent = "Insurance Agent",
    RealEstateAgent = "Real Estate Agent",
    Architect = "Architect",
    InteriorDesigner = "Interior Designer",
    CivilEngineer = "Civil Engineer",
    MechanicalEngineer = "Mechanical Engineer",
    ElectricalEngineer = "Electrical Engineer",
    ChemicalEngineer = "Chemical Engineer",
    AerospaceEngineer = "Aerospace Engineer",
    BiomedicalEngineer = "Biomedical Engineer",
    EnvironmentalEngineer = "Environmental Engineer",
    IndustrialEngineer = "Industrial Engineer",
    MarineEngineer = "Marine Engineer",
    MiningEngineer = "Mining Engineer",
    NuclearEngineer = "Nuclear Engineer",
    PetroleumEngineer = "Petroleum Engineer",
    RoboticsEngineer = "Robotics Engineer",
    AgriculturalEngineer = "Agricultural Engineer",
    Biotechnologist = "Biotechnologist",
    Geneticist = "Geneticist",
    Microbiologist = "Microbiologist",
    Zoologist = "Zoologist",
    Botanist = "Botanist",
    Ecologist = "Ecologist",
    Geologist = "Geologist",
    Meteorologist = "Meteorologist",
    Astronomer = "Astronomer",
    Physicist = "Physicist",
    Chemist = "Chemist",
    Biologist = "Biologist",
    Mathematician = "Mathematician",
    Statistician = "Statistician",
    Economist = "Economist",
    PoliticalScientist = "Political Scientist",
    Sociologist = "Sociologist",
    Psychologist = "Psychologist",
    Anthropologist = "Anthropologist",
    Historian = "Historian",
    Archaeologist = "Archaeologist",
    Philosopher = "Philosopher",
    Theologian = "Theologian",
    Linguist = "Linguist",
    Journalist = "Journalist",
    Writer = "Writer",
    Novelist = "Novelist",
    Poet = "Poet",
    Playwright = "Playwright",
    Screenwriter = "Screenwriter",
    Copywriter = "Copywriter",
    Editor = "Editor",
    Proofreader = "Proofreader",
    Translator = "Translator",
    Teacher = "Teacher",
    Professor = "Professor",
    Lecturer = "Lecturer",
    Instructor = "Instructor",
    Trainer = "Trainer",
    Coach = "Coach",
    Mentor = "Mentor",
    Tutor = "Tutor",
    Librarian = "Librarian",
    Researcher = "Researcher",
    Scientist = "Scientist",
    Engineer = "Engineer",
    Developer = "Developer",
    Designer = "Designer",
    Manager = "Manager",
    Analyst = "Analyst",
    Consultant = "Consultant",
    Specialist = "Specialist",
    Expert = "Expert",
    Executive = "Executive",
    Director = "Director",
}

interface IExperience {
    Show: boolean

    CompanyName: string
    Position: string | JobTitles
    Description: string

    StartDate: {
        Month: Months
        Year: Year
    }
    EndDate?: {
        Month: Months
        Year: Year
    }

    isPresent?: boolean

    // ? Calculated on the basis of StartDate and EndDate if isPresent is false
    // ? to Prevent Unnecessary Load on the Frontend
    Duration?: string
}

interface IEducation {
    Show: boolean

    SchoolName: string
    DegreeTitle: string
    Grade?: number

    StartDate: {
        Month: Months
        Year: Year
    }
    EndDate?: {
        Month: Months
        Year: Year
    }

    isPresent?: boolean

    // ? Calculated on the basis of StartDate and EndDate if isPresent is false
    // ? to Prevent Unnecessary Load on the Frontend
    Duration?: string
}

enum Technologies {
    HTML = "HTML",
    CSS = "CSS",
    JavaScript = "JavaScript",
    TypeScript = "TypeScript",
    React = "React",
    Angular = "Angular",
    Vue = "Vue",
    Svelte = "Svelte",
    Node = "Node",
    Express = "Express",
    Nest = "Nest",
    Django = "Django",
    Flask = "Flask",
    Laravel = "Laravel",
    PHP = "PHP",
    Ruby = "Ruby",
    Rails = "Rails",
    Python = "Python",
    Java = "Java",
    Kotlin = "Kotlin",
    Swift = "Swift",
    ObjectiveC = "Objective-C",
    C = "C",
    CPP = "C++",
    CSharp = "C#",
    DotNet = ".NET",
    Go = "Go",
    Rust = "Rust",
    Scala = "Scala",
    Clojure = "Clojure",
    Haskell = "Haskell",
    Elixir = "Elixir",
    Erlang = "Erlang",
    Crystal = "Crystal",
    Lua = "Lua",
    Perl = "Perl",
    R = "R",
    Matlab = "Matlab",
    Octave = "Octave",
    Julia = "Julia",
    Shell = "Shell",
    PowerShell = "PowerShell",
    Batch = "Batch",
    SQL = "SQL",
    NoSQL = "NoSQL",
    MongoDB = "MongoDB",
    MySQL = "MySQL",
    PostgreSQL = "PostgreSQL",
    SQLite = "SQLite",
    Oracle = "Oracle",
    SQLServer = "SQL Server",
    MariaDB = "MariaDB",
    Firebase = "Firebase",
    DynamoDB = "DynamoDB",
    Cassandra = "Cassandra",
    Redis = "Redis",
    Neo4j = "Neo4j",
    GraphQL = "GraphQL",
    Apollo = "Apollo",
    REST = "REST",
    SOAP = "SOAP",
    WebSockets = "WebSockets",
    WebRTC = "WebRTC",
    Webhooks = "Webhooks",
    Serverless = "Serverless",
    Microservices = "Microservices",
    Monolith = "Monolith",
    Containers = "Containers",
    Docker = "Docker",
    Kubernetes = "Kubernetes",
    CI = "CI",
    CD = "CD",
    Jenkins = "Jenkins",
    TravisCI = "Travis CI",
    CircleCI = "Circle CI",
    GitLabCI = "GitLab CI",
    GitHubActions = "GitHub Actions",
    BitbucketPipelines = "Bitbucket Pipelines",
    Selenium = "Selenium",
    Cypress = "Cypress",
    Puppeteer = "Puppeteer",
    Jest = "Jest",
    Mocha = "Mocha",
    Chai = "Chai",
    Jasmine = "Jasmine",
    Enzyme = "Enzyme",
    ReactTestingLibrary = "React Testing Library",
    VueTestingLibrary = "Vue Testing Library",
}

interface IProject {
    Show: boolean

    ProjectTitle: string
    Description: string
    TechnologiesUsed?: string[] | Technologies[]
    URL?: string

    // ?  Only in Website Preview not for PDF or others Document Generation
    Screenshots?: string[]

    StartDate: {
        Month: Months
        Year: Year
    }
    EndDate?: {
        Month: Months
        Year: Year
    }

    isPresent?: boolean
}

// ? Speaking Languages
enum SpeakingLanguages {
    English = "English",
    Hindi = "Hindi",
    Marathi = "Marathi",
    Gujarati = "Gujarati",
    Bengali = "Bengali",
    Telugu = "Telugu",
    Tamil = "Tamil",
    Kannada = "Kannada",
    Malayalam = "Malayalam",
    Punjabi = "Punjabi",
    Urdu = "Urdu",

    Spanish = "Spanish",
    French = "French",
    German = "German",
    Italian = "Italian",
    Dutch = "Dutch",
    Portuguese = "Portuguese",
    Russian = "Russian",
    Chinese = "Chinese",
    Japanese = "Japanese",
    Korean = "Korean",
    Arabic = "Arabic",
    Turkish = "Turkish",
    Persian = "Persian",
    Hebrew = "Hebrew",
    Greek = "Greek",
    Swedish = "Swedish",
    Norwegian = "Norwegian",
    Danish = "Danish",
    Finnish = "Finnish",
    Icelandic = "Icelandic",
    Polish = "Polish",
    Czech = "Czech",
    Slovak = "Slovak",
    Hungarian = "Hungarian",
    Romanian = "Romanian",
    Bulgarian = "Bulgarian",
    Serbian = "Serbian",
}

enum Tools {
    VSCode = "Visual Studio Code",
    VS = "Visual Studio",
    SublimeText = "Sublime Text",
    Atom = "Atom",
    Vim = "Vim",
    IntelliJIDEA = "IntelliJ IDEA",
    PyCharm = "PyCharm",
    WebStorm = "WebStorm",
    AndroidStudio = "Android Studio",
    XCode = "XCode",
    Eclipse = "Eclipse",
    NetBeans = "NetBeans",
    Jupyter = "Jupyter",
    RStudio = "RStudio",
    ROBLOXStudio = "ROBLOX Studio",
    Unity = "Unity",
    UnrealEngine = "Unreal Engine",
    Blender = "Blender",
    Maya = "Maya",
    Excel = "Excel",
    PowerPoint = "PowerPoint",
    Word = "Word",
    Notion = "Notion",
    Trello = "Trello",
    Jira = "Jira",
    Confluence = "Confluence",
    GitHub = "GitHub",
}

interface ICertificate {
    Show : boolean
    
    Title: string
    Issuer: string
    IssueDate: {
        Month: Months
        Year: Year
    }
    ExpiryDate?: {
        Month: Months
        Year: Year
    }
    ImageURL?: string
    CredentialID?: string
    URL?: string
}

interface ICV {
    Name: IName
    Title: string
    // Address: IAddress_Simple | IAddress_Detailed
    Linktree: ILinktree
    ProfilePicture: string
    About: string
    Experience?: IExperience[]
    Education?: IEducation[]
    Projects?: IProject[]
    

    // ? Communication & Technical Skills
    SpeakingLanguages: SpeakingLanguages[]
    Tools: Tools[]
    Technologies: Technologies[]
    Languages: SpeakingLanguages[]
}