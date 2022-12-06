interface pageProps {
    title: string,
    text: string,
    icon: string, 
    iconColor: string,
}

import ServiceIcon from './ServiceIcon';

const ServicesLayout: React.FC<pageProps> = ({title, text, icon, iconColor}) => {
    return (
            <div className='flex md:h-[340px] md:w-[340px] bg-white items-center justify-center text-center rounded-lg shadow-md hover:shadow-2xl p-2 transition-all ease-in-out'>
                <div className='flex flex-col space-y-2 w-full '>
                    <div className="flex w-full justify-center">
                        <ServiceIcon icon={icon} colorCode={iconColor}/>
                    </div>
                    <p className = "font-bold text-2xl sub-header-text">
                        {title}
                    </p>
                    <p className="font-medium font-poppins">
                        {text}
                    </p>
                </div>
            </div>
    )
}

export default ServicesLayout