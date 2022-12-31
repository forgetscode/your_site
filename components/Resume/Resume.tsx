import TimeBullet from "./TimeBullet";
import TimeBulletPoints from "./TimeBulletPoints";
const Fade = require("react-reveal/Fade")

type educationBullet = {
    title:string,
    years:string,
    location:string,
    image:string, 
    wide:Boolean,
} 

type WorkBullet = {
    title:string,
    years:string,
    position:string,
    image:string, 
    wide:Boolean,
    points:string[],
} 

interface pageProps {
    education: educationBullet[],
    work: WorkBullet[],
}

const Resume: React.FC<pageProps> = ({
    education,
    work,
    }) => {
        return(
        <div id = {"Resume"} className="w-full flex">
            <div className='flex flex-col w-full pt-16 space-y-16 lg:ml-72'>
                <Fade bottom={true} duration={1000}>
                    <p className="w-full flex justify-center pb-16 header-text"> RESUME</p>
                </Fade>

                <div className="w-4/6 md:w-5/6 xl:w-4/6 flex justify-center flex-col md:space-y-0 md:flex-row mx-auto">
                        <div className="w-full flex md:justify-center pb-8">
                            <div className="flex flex-col pb-16">
                                <Fade bottom={true} duration={1000}>
                                    <header className="flex header-text pb-14 header-text text-3xl">
                                        Education
                                    </header>
                                </Fade>
                                {
                                    education.map((bullet, i) => {
                                        return(
                                            <TimeBullet key={i} title = {bullet.title} years = {bullet.years} location = {bullet.location} image = {bullet.image} wide={bullet.wide} />
                                        )
                                    })
                                } 
                            </div>                       
                        </div>
                        <div className="w-full flex md:justify-center">
                            <div className="flex flex-col">
                                <Fade bottom={true} duration={1000}>
                                    <header className="flex header-text text-3xl pb-14">
                                        Work Experience
                                    </header>
                                </Fade>
                                    {
                                        work.map((bullet, i) => {
                                            return(
                                                <TimeBulletPoints key={i} title = {bullet.title} years = {bullet.years} position = {bullet.position} image = {bullet.image} large={bullet.wide}
                                                    points = {
                                                        bullet.points
                                                    }
                                                />
                                            )
                                        })

                                    }
                            </div>
                        </div>
                </div>
            </div>
        </div>
        )
}
export default Resume;