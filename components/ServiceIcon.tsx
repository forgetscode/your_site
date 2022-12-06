interface pageProps {
    icon: string,
    colorCode: string,
}

import CloudIcon from '@mui/icons-material/Cloud';
import ArticleIcon from '@mui/icons-material/Article';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ImageIcon from '@mui/icons-material/Image';
import PaidIcon from '@mui/icons-material/Paid';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LanguageIcon from '@mui/icons-material/Language';

const ServicesLayout: React.FC<pageProps> = ({icon, colorCode}) => {
    return (
        <div className = "h-24 w-24">
            {
                (icon === "cloud") ?
                <CloudIcon sx={{ fontSize: 96 }} className={`${colorCode}`}/>
                :
                (icon === "article") ?
                <ArticleIcon sx={{ fontSize: 96 }} className={`${colorCode}`}/>
                :
                (icon === "connect") ?
                <ConnectWithoutContactIcon sx={{ fontSize: 96 }} className={`${colorCode}`}/>
                :
                (icon === "fire") ?
                <LocalFireDepartmentIcon sx={{ fontSize: 96 }} className={`${colorCode}`}/>
                :
                (icon === "image") ?
                <ImageIcon sx={{ fontSize: 96 }} className={`${colorCode}`}/>
                :
                (icon === "paid") ?
                <PaidIcon sx={{ fontSize: 96 }} className={`${colorCode}`}/>
                :
                (icon === "design") ?
                <DesignServicesIcon sx={{ fontSize: 96 }} className={`${colorCode}`}/>
                :
                (icon === "deliver") ?
                <LocalShippingIcon sx={{ fontSize: 96 }} className={`${colorCode}`}/>
                :
                (icon === "circle") ?
                <LanguageIcon sx={{ fontSize: 96 }} className={`${colorCode}`}/>
                :
                (icon === "image") ?
                <ImageIcon sx={{ fontSize: 96 }} className={`${colorCode}`}/>
                :<></>
            }
        </div>
    )
}

export default ServicesLayout