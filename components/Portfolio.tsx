import { Tooltip } from '@mui/material';
import Link from 'next/link';
import PortfolioCard from './PortfolioCard';

const Fade = require("react-reveal/Fade")

type button = {
  text:string,
  link:string,
}

interface portfolio {
  link: string
  project: string,
  title: string,
  text: string,
  color:string,
  hoverColor:string,
  buttons: button[],
}

interface pageProps {
  props: portfolio[],
}



const Portfolio: React.FC<pageProps> = ({
    props
  }) => {
    return (
        <div id = {"Portfolio"} className="w-full flex justify-center bg-white py-16">
        <div className='flex flex-col w-full bg-white space-y-16 lg:ml-72'>
          <p className="flex pt-10 header-text pb-12 justify-center"> PORTFOLIO</p>
          {
            props.map((prop, index) => {
              return(
                <PortfolioCard 
                  link = {prop.link}
                  project = {prop.project}
                  title = {prop.title}
                  text = {prop.text}
                  color = {prop.color}
                  hoverColor = {prop.hoverColor}
                  buttons = {prop.buttons}
                  key={index}
                />
              )
            })
          }
        </div>
      </div>
    )
}

export default Portfolio