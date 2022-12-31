const Fade = require("react-reveal/Fade")

interface pageProps {
    title: string,
    percent: string | undefined,
}

const ProgressBar: React.FC<pageProps> = ({title, percent}) => {
    if (!percent){
        percent = "50%"
    }

    return (
        <Fade bottom={true} cascade={true}> 
        <div className="flex flex-col space-y-2 w-[364px]">
            <div className="flex justify-between">
                <p className="pl-1 font-medium body-text">
                    {title}
                </p>
                <p className="pr-1 font-medium body-text">
                    {percent}
                </p>
            </div>
            <div className="relative">
                <div className="overflow-hidden h-2 mb-4 flex bg-gray-200 dark:bg-slate-800 ">
                    <div style={{ width: percent }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center second-bg-theme"></div>
                </div>
            </div>
        </div>
        </Fade>
    )
    
}
export default ProgressBar
