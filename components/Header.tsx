import BasicSelect from "./BasicSelect"
import Toggle from "./Toggle"
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { useColorMode } from "../context/ColorModeContext";

const Header = () => {
    const { mode } = useColorMode()
    return (
    <header className={`${mode === "dark" ? 'dark' : ''}`}>
        <div className="w-full">
            <div className="w-full flex h-20 items-center justify-between px-8 light-bg  dark:dark-bg font-bold sm:text-md md:text-lg lg:text-4xl border-b shadow-lg ">
                <AccessibilityNewIcon fontSize="large"/>
                hey dawg hey whatsup
                <Toggle/>
            </div>
            <div className="flex w-24 mt-8 ml-auto mr-16">
                <BasicSelect/>
            </div>
        </div>
    </header>
    )
}
export default Header