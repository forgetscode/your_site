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
        <Fade bottom={true} cascade={true} duration={700}> 
        <div className="flex flex-col space-y-2 w-[364px]">
            <div className="flex justify-between">
                <p className="pl-1 font-medium text-slate-600 text-sm">
                    {title}
                </p>
                <p className="pr-1 font-medium text-slate-600 text-sm">
                    {percent}
                </p>
            </div>
            <div className="relative">
                <div className="overflow-hidden h-2 mb-4 text-xs flex bg-gray-200 ">
                    <div style={{ width: percent }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center second-bg-theme"></div>
                </div>
            </div>
        </div>
        </Fade>
    )
    
}
export default ProgressBar
