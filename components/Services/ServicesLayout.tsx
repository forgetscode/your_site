import Image from 'next/image'
import ServiceCard from './ServiceCard'

type Service = {
    title: string,
    text: string,
    description: string,
    icon: string,
    iconColor: string,
}

interface pageProps {
    props: Service[]
}

const Fade = require("react-reveal/Fade")

const ServicesLayout: React.FC<pageProps> = ({props}) => {
    return (
        <div className='flex flex-col w-full p-4'>
            <Fade bottom={true} cascade={true} duration={700}> 
                <div className='w-full space-y-10 2xl:space-y-0 flex-col flex 2xl:flex-row 2xl:space-x-8'>
                    {
                        props?.map((service:Service, i) => (
                            
                            <div key={i}>
                                
                                    <ServiceCard title = {service.title} text={service.text} icon={service.icon} iconColor = {service.iconColor} description = {service.description}></ServiceCard>
                                
                            </div>
                            
                        ))
                    }
                </div>
            </Fade>
        </div>
    )
}

export default ServicesLayout