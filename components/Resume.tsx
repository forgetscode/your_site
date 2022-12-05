import TimeBullet from "./TimeBullet";
import TimeBulletPoints from "./TimeBulletPoints";

const Resume = () => {
    return(
    <div id = {"Resume"} className="w-full flex bg-white">
        <div className='flex flex-col w-full space-y-8 lg:ml-72 bg-white'>
        <p className="w-full flex justify-center pt-10 header-text dark:dark-header-text decoration-sky-800 underline underline-offset-[30px] pb-20"> RESUME</p>
        <div className="self-center flex-col space-y-16 md:space-y-0 md:flex-row flex w-4/6 lg:ml-72 bg-white">
            <div className="w-full flex flex-col bg-white">
            <header className="flex header-text pb-10">
                Education
            </header>
            <TimeBullet title = {"Hugh Boyd Secondary"} years = {"2009 - 2015"} location = {"Richmond, BC"} image = {"/school1.png"} wide ={false}/>
            <TimeBullet title = {"Simon Fraser University"} years = {"2015 - 2020"} location = {"Burnaby, BC"} image = {"/school2.png"} wide={true}/>
            </div>
            <div className="w-full flex flex-col bg-white">
            <header className="flex header-text pb-10">
                Work Experience
            </header>
            <TimeBulletPoints title = {"Richmond Night Market"} years = {"2017 - 2017"} position = {"General laborer"} image = {"/default.svg"} large={false}
                points = {
                [
                    "Worked with constantly changing team members developing adaptability.",
                    "Worked in a multitude of diverse positions garnering patience and flexibility.",
                    "Performed daily, weekly, and monthly reports, and updated calendar of appoints"
                ]
                }
            />
            <TimeBulletPoints title = {"Intuitiv Solutions"} years = {"2017 - 2018"} position = {"Promoter"} image = {"/default.svg"} large={false}
                points = {
                [
                    "Offered IT services for local and international clients.",
                    "Sought people based on selective targeting for advertising purposes",
                    "Addressed client’s needs and recommended the right solution to enhance business productivity",
                ]
                }
            />
            <TimeBulletPoints title = {"BC Centre for Disease Control"} years = {"Jan 2019 - April 2019"} position = {"Software Developer"} image = {"/default.svg"} large={true}
                points = {
                [
                    "Utilized multi-core processors to perform parallel sequencing of lab samples to increase server processing speed by 15x",
                    "Created front-end interface for lab technicians, interviewing technicians then isolating key features and relevant calculations for faster sample analysis",
                    "Created system logging procedure to early identify inconsistent, incomplete, or failing samples resulting in faster feedback loops between departments",
                ]
                }
            />
            <TimeBulletPoints title = {"SEO Tofu"} years = {"Jan 2020 - November 2021"} position = {"React Developer"} image = {"/default.svg"} large={false}
                points = {
                [
                    "Addressed client’s needs and recommended the right solution to enhance business productivitys",
                    "Resolved L2 and L3 issue including duplex mismatch, MTU mismatch issues, ACL filtering issues, VLAN, VTP, STP/RPVST and OSPF troubleshooting, which increased network performance by 40%",
                ]
                }
            />
            </div>
        </div>
        <div className="w-full flex justify-center">
                        <p className="text-center w-3/6 text-white text-sm pt-20 pb-20">
                        {`
                        Fascinated by the bleeding edge of Technology, after graduating University with a Bachelors in
                        Computer Science I pursued experience in React, Cloud services, and Blockchain technology. I am currently engrossed with AI image generation
                        and am actively attempting creative ways to combine my skills and showcase my knowledge.
                        `} 
                        </p>
        </div>
        </div>
    </div>
    )
}
export default Resume;