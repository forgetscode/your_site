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
  description: string,
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
      <div id = {"Portfolio"} className="w-full flex justify-center">
        <div className='flex flex-col md:w-4/6 space-y-20 pt-16 lg:ml-72'>
          <Fade bottom={true} duration={1000}>
            <p className="flex header-text justify-center"> PORTFOLIO</p>
          </Fade>
          {
            props.map((prop, index) => {
              return(
                <PortfolioCard 
                  link = {prop.link}
                  project = {prop.project}
                  title = {prop.title}
                  text = {prop.text}
                  description = {prop.description}
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