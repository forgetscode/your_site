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
                    <div className="-mb-1 -ml-2.5 relative bg-sky-600 rounded-full h-6 w-6 flex justify-center items-center z-20">
                        <div className="bg-white rounded-full h-4 w-4"/>
                    </div>
                    <div className={`relative h-[450px] w-6 z-10`}>
                        <div className={`w-0.5 h-[500px] bg-sky-600 z-10`}></div>
                    </div>
                </div>
                <div className='flex flex-col space-y-2 md:-mt-1'>
                    <p className="font-medium font-poppins leading-tight md:text-2xl text-sky-600 max-w-32"> {title}</p>
                    <div className='flex flex-row h-8 w-64 bg-gray-200 p-1'>
                            <Image
                                src={image}
                                alt=""
                                height={32}
                                width={32}
                                quality={100}                
                            />
                        <p className="w-full flex justify-center text-black font-poppins font-medium text-sm p-1 rounded-lg"> {years} </p>
                    </div>
                    <p className="md:text-lg font-medium font-poppins text-sky-600 py-1"> {position}</p> 
                        <span className='flex flex-col pt-1 space-y-2'>
                            {
                                points?.map((point:string, i) => (
                                    <ul key={i} className='ml-2 flex flex-row w-68 list-disc list-inside'>
                                        <li></li>
                                        <li className=' flex ml-3 text-black font-poppins font-medium text-sm md:text-base lg:text-lg'> 
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