interface pageProps {
    title: string,
    text: string,
}

const Bullet: React.FC<pageProps> = ({title, text}) => {

    return (
        <>

        <div className="flex flex-row space-x-2"> 
            <div className=' h-3 w-3 mt-2'>
                <span className="absolute animate-ping duration-200 rounded-full h-2 w-2 second-bg-theme z-10 opacity-75"></span>
                <span className='absolute rounded-full h-2 w-2 second-bg-theme z-10'/>
            </div>
            <p className="font-bold">{title}:</p>
            <p className=""> {text} </p>
        </div>
        </>
    )
}
export default Bullet