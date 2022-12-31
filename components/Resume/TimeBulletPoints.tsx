import Image from 'next/image'
const Fade = require("react-reveal/Fade")

interface pageProps {
    title: string,
    years: string,
    position: string,
    points: string[], 
    image: string | null,
    large: Boolean,
}

const TimeBullet: React.FC<pageProps> = ({title, years, position, points, image, large}) => {
    if (!image){
        image = ""
    }

    let invisColumnOutline = "500px"
    let columnOutline = "450px"

    if (large){
        invisColumnOutline = "600px"
        columnOutline = "550px"
    }

    return (
        <>
        <Fade bottom={true} cascade={true} duration={700}> 
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <div className="-mb-1 -ml-2.5 relative second-bg-theme rounded-full h-6 w-6 flex justify-center items-center z-20">
                        <div className="bg-color rounded-full h-4 w-4"/>
                    </div>
                    <div className={`relative h-full flex w-6 z-10`}>
                        <div className={`w-0.5 h-full flex second-bg-theme z-10`}></div>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 md:-mt-2'>
                    <p className="font-medium leading-tight text-xl md:text-2xl sub-header-text max-w-32"> {title}</p>
                    <div className='flex flex-row h-8 w-64 bg-gray-200 dark:bg-slate-800 p-1'>
                            <Image
                                src={image}
                                alt=""
                                height={32}
                                width={32}
                                quality={100}                
                            />
                        <p className="w-full flex justify-center body-text font-medium rounded-lg"> {years} </p>
                    </div>
                    <p className="md:text-lg font-medium second-text-theme"> {position}</p> 
                        <span className='flex flex-col pt-1 pb-12 space-y-3'>
                            {
                                points?.map((point:string, i) => (
                                    <ul key={i} className='ml-2 flex flex-row w-68 list-disc list-inside body-text'>
                                        <li></li>
                                        <li className=' max-w-[250px] lg:max-w-[330px] flex ml-3 body-text'> 
                                            {point} 
                                        </li> 
                                    </ul>
                                ))
                            }
                        </span>  
                </div>
            </div>
        </Fade>
        </>
    )
}
export default TimeBullet