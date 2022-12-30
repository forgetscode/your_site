import { useState } from 'react';
import ServiceIcon from './ServiceIcon';
import { Modal, Tooltip } from '@mui/material';

interface pageProps {
    title: string,
    text: string,
    description: string,
    icon: string, 
    iconColor: string,
}

const ServicesLayout: React.FC<pageProps> = ({title, text, icon, iconColor, description}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <button type="button" onClick={handleOpen}>
                <Tooltip title="?">             
                    <div className='flex h-[340px] w-[340px] bg-white items-center justify-center text-center rounded-lg shadow-md hover:shadow-2xl p-2 transition-all ease-in-out cursor-pointer'>
                        <div className='flex flex-col space-y-2 w-full '>
                            <div className="flex w-full justify-center">
                                <ServiceIcon icon={icon} colorCode={iconColor}/>
                            </div>
                            <p className = "font-bold text-2xl sub-header-text !text-slate-600 dark:!text-sky-700">
                                {title}
                            </p>
                            <p className="font-medium font-poppins">
                                {text}
                            </p>
                        </div>
                    </div>
                </Tooltip>
            </button>
            <Modal open={open} onClose={handleClose}>
            <div className="z-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out rounded-lg
                     md:w-[480px] w-[340px] min-w-[340px] min-h-[340px] max-h-[700px] bg-white lg:ml-36">
                        <div className="flex flex-col space-y-4 p-4">
                            <div className="flex w-full justify-center">
                                <ServiceIcon icon={icon} colorCode={iconColor}/>
                            </div>
                            <p className = "text-center font-bold text-2xl sub-header-text text-sky-700">
                                {title}
                            </p>
                            <p className="font-medium leading-relaxed p-4 pb-8 whitespace-pre-line  " style={{overflowY: 'auto', maxHeight: '400px'}}>
                                {description}
                            </p>
                        </div>
                    </div>

            </Modal>
        </div>
    )
}

export default ServicesLayout