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
        <div id = {"Resume"} className="w-full flex bg-white ">
            <div className='flex flex-col w-full space-y-8 bg-white lg:ml-72'>
                <Fade bottom={true} duration={1000}>
                    <p className="w-full flex justify-center header-text py-16"> RESUME</p>
                </Fade>
                <div className="w-4/6 flex justify-center flex-col space-y-16 md:space-y-0 md:flex-row bg-white mx-auto">
                        <div className="w-full flex bg-white md:justify-center">
                            <div className="flex flex-col bg-white pb-20">
                                <Fade bottom={true} duration={1000}>
                                    <header className="flex header-text pb-20">
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
                        <div className="w-full flex bg-white md:justify-center">
                            <div className="flex flex-col bg-white pb-20">
                                <Fade bottom={true} duration={1000}>
                                    <header className="flex header-text pb-20 ">
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