const Fade = require("react-reveal/Fade")


interface pageProps {
    icon: React.ReactElement<any, any>,
    titleMark: string,
    title: string,
    info: string,
}

const Bullet: React.FC<pageProps> = ({icon, titleMark, title, info}) => {

    return (
        <>
        <div className='flex flex-col body-text  space-y-3 w-36'>
            <div className="second-text-theme">
                {icon}
            </div>
            <p className='font-semibold text-3xl'>{titleMark}</p>
            <p className='font-bold body-text'>{title}</p>
            <p className='body-text'> {info}</p>
        </div>
        </>
    )
}
export default Bullet
