import Head from "next/head";
import SideBar from "../components/SideBar/SideBar";
import { useColorMode } from "../context/ColorModeContext";
import Image from 'next/image'
import { NextPage } from "next";
import AboutInfo from "../components/About/AboutInfo";
import FadeInHomeText from "../components/FadeInHomeText";
import Resume from "../components/Resume/Resume";
import background from '../public/bg.jpg';
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import CalculateIcon from '@mui/icons-material/Calculate';
import Contact from "../components/Contact";


const Home: NextPage = () => {
  const { mode } = useColorMode();

  return (
    <div className={`${mode === "dark" ? 'dark' : ''}`}>
      
      <Head>
        <title>Michael Gergely - Web Dev</title>
        <link rel='icon' href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Vsmart_logo.svg/402px-Vsmart_logo.svg.png?20200810165214"/>
      </Head>

      <SideBar title = "Michael Gergely" footer="Michael Gergely" props = 
        {
          [
            {id:"Home", icon:<HomeOutlinedIcon/>, title: "Home"},
            {id:"About", icon:<PersonOutlineOutlinedIcon/>, title: "About"},
            {id:"Resume", icon:<DescriptionOutlinedIcon/>, title: "Resume"},
            {id:"Portfolio", icon:<BusinessCenterOutlinedIcon/>, title: "Portfolio"},
            {id:"Services", icon:<EngineeringOutlinedIcon/>, title: "Services"},
            {id:"Contact", icon:<MailOutlinedIcon/>, title: "Contact"},
          ]
        }
      />

      <div id = {"Home"} className="absolute top-0 "/>
      <div  className="fixed -z-30 min-h-screen w-full lg:-mt-[400px] lg:brightness-75 bg-white dark:bg-zinc-900 ">
        <Image
            className="absolute"
            src={background}
            layout="responsive"
            placeholder="blur"
            alt=""
            priority            
        />
      </div>

      <div className="lg:ml-[350px]">
        <FadeInHomeText title={"Michael Gergely"} texts={['Front-end Developer.', 'Back-End Developer.', 'Web Developer.']}/>
      </div>

      <div className="flex flex-col w-full bg-color z-20">
        <AboutInfo 
          bio= {`Fascinated by the bleeding edge of technology, I am constantly seeking new ways to expand my knowledge and skills.
            After earning my Bachelor's degree in Computer Science and Microbiology and Biochemistry from Simon Fraser University, 
            I have gained experience working with React, cloud services, and blockchain technology. 
            Recently, I have been particularly interested in AI capabilities and am constantly seeking opportunities showcase my diverse 
            skill set.
            `}
          title={"Web Developer & Full Stack Engineer"}
          info={"Gym Enthusiast, Basketball player, Cat Lover."}
          points={
            [
              {title:"Phone", info:"778-789-3561"},
              {title:"Location", info:"Vancouver, Canada"},
              {title:"University", info:"Simon Fraser University"},
              {title:"Email",  info:"Michael.v.y.gergely@gmail.com"},
            ]
          }
          quote={`You miss 100% of the shots you don't take.`}
          quoteAuthor={"- Wayne Gretzky"}
          facts={
            [
              {
                icon:<GitHubIcon style={{ fontSize: 64 }}/>,
                titleMark:"308",
                title:"Github contributions",
                info:"in 2022.",
              },
              {
                icon:<CalculateIcon style={{ fontSize: 64 }}/>,
                titleMark:"A+",
                title:"In Calculus",
                info:"at SFU.",
              }

            ]
          }
          skills={
            [
              {
                title:"HTML",
                percentage:"80%",
                titleSecond:"CSS",
                percentageSecond:"80%",
              },
              {
                title:"Javascript",
                percentage:"80%",
                titleSecond:"Typescript",
                percentageSecond:"80%",
              },
              {
                title:"React",
                percentage:"80%",
                titleSecond:"Tailwind",
                percentageSecond:"80%",
              },
              {
                title:"NextJS",
                percentage:"80%",
                titleSecond:"Python",
                percentageSecond:"80%",
              },
              {
                title:"NodeJS",
                percentage:"80%",
                titleSecond:"Solana Blockchain",
                percentageSecond:"70%",
              },
              {
                title:"SQL(PSQL, MySQL)",
                percentage:"70%",
                titleSecond:"GraphQL",
                percentageSecond:"60%",
              },
              {
                title:"MaterialUI",
                percentage:"60%",
                titleSecond:"WordPress",
                percentageSecond:"50%",
              },
              {
                title:"Stripe",
                percentage:"50%",
                titleSecond:"TypeORM",
                percentageSecond:"50%",
              },
              {
                title:"FireBase",
                percentage:"50%",
                titleSecond:"Rust",
                percentageSecond:"50%",
              },
              {
                title:"PHP",
                percentage:"40%",
                titleSecond:"Docker",
                percentageSecond:"40%",
              },
              {
                title:"C++",
                percentage:"30%",
                titleSecond:"AWS",
                percentageSecond:"30%",
              },
              {
                title:"C",
                percentage:"20%",
              },
            ]
          }
        />

        <Resume 
          education={
            [
              {
                title:"Simon Fraser University",
                years:"2015 - 2020",
                location:"Burnaby, BC", 
                image:"/school2.png", 
                wide:true,
              },
              {
                title:"Hugh Boyd Secondary",
                years:"2009 - 2015",
                location:"Richmond, BC", 
                image:"/school1.png", 
                wide:false,
              },
            ]
          }
          work={
            [
              {
                title:"Client Powered",
                years:" Oct 2022 - Present",
                position:"Second Developer", 
                image:"/default.svg", 
                wide:true,
                points:
                  [
                    "Developed a CRM for Accountants that solved significant client relationship problems by automating client notifications, allowing firms to text their clients, and integrating with QuikBooks.",
                    "Worked closely with the design team to develop a responsive and intuitive user interface using NextJS and Tailwind CSS, which enhanced user experience and increased engagement. Sole owner of all frontend implementation decisions.",
                    "Co authored the design, layout, and UI/UX of the application with the team’s designer, working entirely asynchronously.",
                    "Utilized AWS services to send automated notifications to clients, improving response times and reducing the need for manual intervention."
                  ]
              },
              {
                title:"SEO Tofu(Lead Flush)",
                years:"Jan 2021 - June 2022",
                position:"React Developer", 
                image:"/default.svg", 
                wide:true,
                points:
                  [
                    "Built an application to feed top of the funnel leads to SEO companies. An SEO marketing agency can input a location and business type, at which point, our tool will scrape and display local companies who may be in the need of SEO services.",
                    "Lead customer discovery phone calls and scoped out the front end look of the app. Participated in the lean startup framework to create a product that solves a considerable need for SEO and Marketing Agencies.",
                    "Utilized the Google search API to scrape and relate websites and businesses, aggregating SEO data with business metadata providing valuable insights for our clients to improve their online presence.",
                    "Implemented reusable React components, resulting in an increased conversion rate collaborating with the design team to ensure a seamless user experience."
                  ]
              },
              {
                title:"BC Centre for Disease Control",
                years:"Jan 2019 - April 2019",
                position:"Software Developer", 
                image:"/default.svg", 
                wide:true,
                points:
                  [
                    "Utilized multi-core processors to perform parallel sequencing of lab samples to increase server processing speed by 15x.",
                    "Led the development of a front-end interface for lab technicians, conducting interviews with technicians to identify key features and relevant calculations that would streamline sample analysis.",
                    "Implemented a system logging procedure that facilitated early identification of inconsistent, incomplete, or failing samples, resulting in faster feedback loops between departments.",
                  ]
              },
              {
                title:"Intuitiv Solutions",
                years:"Sept 2017 - Aug 2018",
                position:"Promoter", 
                image:"/default.svg", 
                wide:false,
                points:
                  [
                    "Provided IT services to a diverse client base, including local and international clients, successfully meeting their needs and exceeding their expectations.",
                    "Utilized selective targeting to identify potential clients and effectively advertise our services, resulting in an increase in business and customer satisfaction.",
                    "Assessed clients' needs and recommended tailored solutions to enhance their business productivity, consistently delivering high-quality service and driving positive outcomes.",
                  ]
              },
              {
                title:"Richmond Night Market",
                years:"April 2017 - Aug 2017",
                position:"General laborer", 
                image:"/default.svg", 
                wide:false,
                points:
                [
                  "Demonstrated strong adaptability skills while working on a team with constantly changing members, successfully navigating shifting priorities and responsibilities.",
                  "Developed patience and flexibility through diverse work experiences, including roles in customer service, event planning, and data analysis.",
                  "Conducted daily, weekly, and monthly reports and managed a calendar of appointments to ensure efficient time management and accurate record-keeping."
              ]
              },
            ]
          }
        />

        <Portfolio
          props=
          {
            [
              {
                link:"https://movie-tau-five.vercel.app/",
                project:"Movie Night",
                title:"Stack",
                text:"PostrgeSQL, Supabase for backend, NextJS, Typescript, React, Tailwind for front end.",
                description:`The Sosmo job posting site utilizes the Solana blockchain and a powerful graphql server hosted on a cloud service to facilitate the posting and funding of jobs. 
                Through the use of smart contracts, the site offers a secure and efficient way for users to deposit funds that will be automatically transferred upon completion of the job, with the contract serving as a trusted authority. 
                This innovative approach to job posting and payment offers unparalleled convenience and reliability.`,
                color:"text-blue-500",
                hoverColor:"hover:text-blue-600",
                buttons:[
                  {text:"GitHub", link:"https://github.com/forgetscode/movie"},
                ]
              },
              {
                link:"https://zelda-ten.vercel.app/",
                project:"Zelda",
                title:"Stack",
                text:"React, Tailwind, Typescript, Javascript, NextJS for frontend, and Solana blockchain used as backend.",
                description:`The Zelda messaging application utilizes the cutting-edge technology of the Solana blockchain to offer a truly 
                decentralized and serverless messaging experience. By leveraging smart contracts, the application allows users to securely 
                and efficiently communicate with each other without relying on any centralized server or third party. This means that users can 
                enjoy the freedom and privacy of a truly peer-to-peer platform, with the added benefits of fast transaction speeds and low fees provided by the solana blockchain.
                Whether you're looking to stay in touch with friends and family, or you need a secure and reliable communication tool for your business, 
                this messaging application is the perfect choice.`,
                color:"text-teal-600",
                hoverColor:"hover:text-teal-400",
                buttons:[
                  {text:"GitHub", link:"https://github.com/forgetscode/zelda"},
                  {text:"Smart Contract", link:"https://github.com/forgetscode/sms2/blob/main/programs/sms2/src/lib.rs"},
                  {text:"Video Demo", link:"https://www.youtube.com/watch?v=XKThYf5cnqk"},
                ]
              },
              {
                link:"https://forgetspractice.com/",
                project:"Sosmo",
                title:"Stack",
                text:"NodeJS, ExpressJS, PostrgeSQL, TypeORM, GraphQL, Apollo, Redis backend hosted on the cloud service Digital Ocean in Conjunction with Solana blockchain for programatic value transfer of job contracts. Typescript, React, Tailwind front end.",
                description:`The Sosmo job posting site utilizes the Solana blockchain and a powerful graphql server hosted on a cloud service to facilitate the posting and funding of jobs. 
                Through the use of smart contracts, the site offers a secure and efficient way for users to deposit funds that will be automatically transferred upon completion of the job, with the contract serving as a trusted authority. 
                This innovative approach to job posting and payment offers unparalleled convenience and reliability.`,
                color:"text-slate-400",
                hoverColor:"hover:text-slate-500",
                buttons:[
                  {text:"GitHub", link:"https://github.com/forgetscode/sosmo"},
                  {text:"Smart Contract", link:"https://github.com/forgetscode/agreement/blob/main/programs/agreement/src/lib.rs"},
                  {text:"Video Demo", link:"https://www.youtube.com/watch?v=hCYLj3UGY08"},
                ]
              },
              {
                link:"https://nextflix-bice-eight.vercel.app/",
                project:"Nextflix",
                title:"Stack",
                text:"NodeJS, ExpressJS, PostrgeSQL, TypeORM, GraphQL, Apollo, Redis backend hosted on cloud service in Conjunction with Solana blockchain for programatic value transfer of job contracts. Typescript, React, Tailwind front end.",
                description:`Nextflix is a clone of Netflix that utilizes server-side rendering to display movie data and uses Firebase as a backend service. 
                Features included are the ability to play trailers for movies, search for movies, add movies to a watchlist, and upvote or downvote movies.
                The site also integrates with Stripe payments through Firebase, allowing users to purchase subscription plans with the stripe development portal through a test credit card to unlock certain features. 
                This project was created as a technical demo.`,
                color:"text-red-500",
                hoverColor:"hover:text-red-400",
                buttons:[
                  {text:"GitHub", link:"https://github.com/forgetscode/nextflix"},
                ]
              },
            ]
          }
        />

        <Services/>
        <Contact/>

      </div>
    </div>
  );
}

export default Home
