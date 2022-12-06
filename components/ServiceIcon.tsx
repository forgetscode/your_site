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
                <CloudIcon className={`h-24 w-24 ${colorCode}`}/>
                :
                (icon === "article") ?
                <ArticleIcon className={`h-24 w-24 ${colorCode}`}/>
                :
                (icon === "connect") ?
                <ConnectWithoutContactIcon className={`h-24 w-24 ${colorCode}`}/>
                :
                (icon === "fire") ?
                <LocalFireDepartmentIcon className={`h-24 w-24 ${colorCode}`}/>
                :
                (icon === "image") ?
                <ImageIcon className={`h-24 w-24 ${colorCode}`}/>
                :
                (icon === "paid") ?
                <PaidIcon className={`h-24 w-24 ${colorCode}`}/>
                :
                (icon === "design") ?
                <DesignServicesIcon className={`h-24 w-24 ${colorCode}`}/>
                :
                (icon === "deliver") ?
                <LocalShippingIcon className={`h-24 w-24 ${colorCode}`}/>
                :
                (icon === "circle") ?
                <LanguageIcon className={`h-24 w-24 ${colorCode}`}/>
                :
                (icon === "image") ?
                <ImageIcon className={`h-24 w-24 ${colorCode}`}/>
                :<></>
            }
        </div>
    )
}

export default ServicesLayout