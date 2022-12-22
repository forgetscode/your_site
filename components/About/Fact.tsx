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
        <Fade bottom={true}>
            <div className='flex flex-col body-text dark:dark-body-text space-y-3 w-36'>
                <div className="second-text-theme h-16 w-16">
                    {icon}
                </div>
                <p className='font-semibold text-3xl'>{titleMark}</p>
                <p className='font-bold body-text dark:body-text'>{title}</p>
                <p className='body-text dark:body-text'> {info}</p>
            </div>
        </Fade>
        </>
    )
}
export default Bullet