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
            <div className="flex flex-col -space-y-6">
                <div className="flex flex-row">
                    <div className="bg-sky-600 rounded-full h-6 w-6 flex justify-center items-center z-20">
                        <div className="absolute bg-white rounded-full h-4 w-4"/>
                    </div>
                    <p className="-mt-1.5 ml-3 font-medium font-poppins leading-tight text-2xl text-sky-600 max-w-32"> {title}</p>
                </div>
                <div className="flex flex-row pt-2">
                    <div className="mt-10 flex justify-center items-center h-[250px] w-6">
                        <div className="absolute w-0.5 h-[300px] bg-sky-600"></div>
                    </div>
                    <div className="flex flex-col pt-6 ml-3 space-y-2">
                        <div className="bg-gray-200 text-center w-24">
                            <p className="text-black font-poppins font-medium text-sm p-1 rounded-lg"> {years} </p>
                        </div>
                        <p className="text-sm"> {location}</p>
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