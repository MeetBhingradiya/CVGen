import mongoose from 'mongoose'

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

enum ProficiencyLevels {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
    Expert = "Expert"
}

enum SkillTypes {
    Programming = "Programming",
    Design = "Design",
    Management = "Management",
    Marketing = "Marketing",
    Sales = "Sales",
    Productivity = "Productivity",
    Language = "Language"
}

const CVSchema = new mongoose.Schema(
    {
        // ? User info
        UserID : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        // ? Personal info
        name: {
            fname: {
                type: String
            },
            lname: {
                type: String
            }
        },

        // ? LinkTre
        LinkTree: {
            Phone: {
                Show: { type: Boolean },
                Number: { type: String }
            },
            Email: {
                Show: { type: Boolean },
                Address: { type: String }
            },
            LinkedIn: {
                Show: { type: Boolean },
                ID: { type: String }
            },
            GitHub: {
                Show: { type: Boolean },
                Username: { type: String }
            },
            Portfolio: {
                Show: { type: Boolean },
                URL: { type: String }
            },
            Twitter: {
                Show: { type: Boolean },
                Username: { type: String }
            },
            Instagram: {
                Show: { type: Boolean },
                Username: { type: String }
            },
            Discord: {
                Show: { type: Boolean },
                Invite: { type: String }
            }
        },

        // ? Work Experience
        Experience: {
            type: Array<{
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
                Duration?: string
            }>,
            default: []
        },

        // ? Education
        Education: {
            type: Array<{
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
                Duration?: string
            }>,
            default: []
        },

        // ? Projects
        Projects: {
            type: Array<{
                Show: boolean

                ProjectTitle: string
                Description: string
                URL?: string
            
                StartDate: {
                    Month: Months
                    Year: Year
                }
                EndDate?: {
                    Month: Months
                    Year: Year
                }
            
                isPresent?: boolean
                Duration?: string
            }>,
            default: []
        },

        // ? Techical Skills
        Communication: {
            type: Array<{
                Show: boolean
                Language: string
                Proficiency?: ProficiencyLevels
            }>,
            default: []
        },

        Skills: {
            type: Array<{
                Show: boolean
                Skill: string
                Proficiency?: ProficiencyLevels
                Type?: SkillTypes
            }>,
            default: []
        },

        // ? Activity info
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true
    }
);

const CVs = mongoose.models.CVs || mongoose.model("CVs", CVSchema);
export default CVs;