import Image from 'next/image'
const Fade = require("react-reveal/Fade")

interface pageProps {
    title: string,
    years: string,
    location: string, 
    image: string | null,
    wide: Boolean | null
}

const TimeBullet: React.FC<pageProps> = ({title, years, location, image, wide}) => {
    if (!image){
        image = ""
    }
    return (
        <>
        <Fade bottom={true} cascade={true} duration={700}> 
                <div className="flex flex-row">
                    <div className='flex flex-col'>
                        <div className="-mb-1 -ml-2.5 relative second-bg-theme rounded-full h-6 w-6 flex justify-center items-center z-20">
                            <div className="bg-color rounded-full h-4 w-4"/>
                        </div>
                        <div className={`relative h-[450px] w-6 z-10`}>
                            <div className={`w-0.5 h-[500px] second-bg-theme z-10`}></div>
                        </div>
                    </div>
                    <div className='flex flex-col md:-mt-2 space-y-3'>
                        <p className=" font-medium leading-tight text-xl md:text-2xl sub-header-text max-w-32"> {title}</p>
                        <div className="flex flex-col pt-2 space-y-4">
                            <div className="bg-gray-200 dark:bg-slate-800 text-center w-28">
                                <p className="body-text font-medium p-1 rounded-lg"> {years} </p>
                            </div>
                            <p className="body-text"> {location}</p>
                            {
                                wide ?  
                                <div className='h-45 w-225 absolute pt-16'>
                                    <Image
                                        src={image}
                                        alt=""
                                        height={45}
                                        width={225}
                                        quality={100}    
                                        priority            
                                    />
                                </div>  
                                :                     
                                <div className='h-64 w-64 absolute pt-16'>
                                    <Image
                                        src={image}
                                        alt=""
                                        height={64}
                                        width={64}
                                        quality={100}   
                                        priority             
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div>
        </Fade>
        </>
    )
}
export default TimeBullet