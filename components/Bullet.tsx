import EastIcon from '@mui/icons-material/East';

interface pageProps {
    title: string,
    text: string,
}

const Bullet: React.FC<pageProps> = ({title, text}) => {

    return (
        <div className="text-blue flex flex-row space-x-2"> 
            <EastIcon className='text-sky-800'/>
            <p className="font-bold">{title}:</p>
            <p className=""> {text} </p>
        </div>
    )
}
export default Bullet