import Image from 'next/image'
import CircleIcon from '@mui/icons-material/Circle';
const Fade = require("react-reveal/Fade")

interface pageProps {
    title: string,
    years: string,
    position: string,
    points: string[], 
    lineHeight: number,
    image: string | null,
    
}

const TimeBullet: React.FC<pageProps> = ({title, years, position, points, lineHeight, image}) => {
    let lineAdjusted = "450px"
    let lineOrig = "500px"

    if (!image){
        image = ""
    }

    if(lineHeight){
        lineAdjusted = String(lineHeight -50) + "px"
        lineOrig = String(lineHeight) + "px"
    }

    return (
        <>
        <Fade bottom={true} cascade={true} duration={700}> 
            <div className="flex flex-col -space-y-6 pb-6">
                <div className="flex flex-row">
                    <div className="bg-sky-600 rounded-full h-6 w-6 flex justify-center items-center z-20">
                        <div className="absolute bg-white rounded-full h-4 w-4"/>
                    </div>
                    <p className="-mt-1.5 ml-3 font-medium font-poppins leading-tight text-2xl text-sky-600 max-w-32"> {title}</p>
                </div>
                <div className="flex flex-row pt-2">
                    <div className={`mt-10 flex justify-center items-center h-[${lineAdjusted}] w-6`}>
                        <div className={`absolute w-0.5 h-[${lineOrig}] bg-sky-600`}></div>
                    </div>
                    <div className="flex flex-col pt-6 ml-3 space-y-2">
                        <div className='flex flex-row'>
                            <div className='absolute h-32 w-32'>
                                <Image
                                    src={image}
                                    alt=""
                                    height={32}
                                    width={32}
                                    quality={100}                
                                />
                            </div>
                            <div className="bg-gray-200 text-center w-full">
                                <p className="text-black font-poppins font-medium text-sm p-1 rounded-lg"> {years} </p>
                            </div>
                        </div>
                        <p className="text-lg font-medium font-poppins text-sky-600 py-1 "> {position}</p> 
                        <span className='flex flex-col pt-1 space-y-2'>
                                {
                                    points?.map((point:string, i) => (
                                        <li key={i} className='ml-2 flex flex-row w-72 '>
                                            <CircleIcon className='text-black h-2 w-2 mt-2.5'/>
                                            <p className='flex ml-3 text-black font-poppins font-medium text-lg'> 
                                                {point} 
                                            </p> 
                                        </li>
                                    ))
                                }
                        </span>                 
                    </div>
                </div>
            </div>
        </Fade>
        </>
    )
}
export default TimeBullet