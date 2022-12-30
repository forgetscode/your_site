import { Description } from "@mui/icons-material"
import ServicesLayout from "./ServicesLayout"
const Fade = require("react-reveal/Fade")

type Service = {
    title: string,
    text: string,
    description: string,
    icon: string,
    iconColor: string,
}

interface pageProps {
    props: Service[]
}

const Services = () => {
    return (
        <div id = {"Services"} className="w-full flex justify-center bg-white pb-20">
            <div className='flex flex-col w-full items-center bg-white lg:ml-72'>
                <Fade bottom={true} duration={1000}>
                    <p className="flex py-16 pt-32 header-text"> SERVICES</p>
                </Fade>
                <div className=''>
                    {/* maximum 3 services per layout*/}
                    <ServicesLayout props = 
                    {[
                        {title:"UI/UX design", icon:"design", iconColor:"text-purple-500",text:"Design and deploy personalized designs.",
                        description:`UI (User Interface) design is the process of creating the visual and interactive elements of a product or service, such as the layout, buttons, and text. Its main goal is to make the product easy to use and navigate for the user.

                        UX (User Experience) design involves designing the overall user journey with a product or service. This includes the look, feel, and functionality of the product. The goal of UX design is to create a product that is not only simple to use, but also enjoyable and satisfying for the user.
                        
                        Together, UI/UX design is focused on creating products and services that are intuitive, user-friendly, and provide a positive experience for the user. It involves research, testing, and design to create the best possible interface and overall user experience`,},
                        {title:"Node Servers GraphQL/REST", icon:"connect", iconColor:"text-amber-300", text:"Set up secure servers with GraphQL or Rest API's.",
                        description:`Node servers are servers that are built using Node.js, a popular JavaScript runtime that allows developers to build server-side applications using JavaScript. Node servers are designed to be fast and scalable, and they are often used to build APIs (Application Programming Interfaces) or backend services.

                        GraphQL is a query language for APIs that allows clients (such as web or mobile applications) to request specific data from a server. It gives clients more control over the data they receive, as they can specify exactly which data they need and in what format.
                        
                        REST (Representational State Transfer) is an architectural style for building APIs that defines a set of rules for creating web services. REST APIs are designed to be flexible and scalable, and they are often used to expose data from a server to clients.
                        
                        In summary, Node servers are servers built using Node.js, GraphQL is a query language for APIs that allows clients to request specific data, and REST is an architectural style for building APIs that defines a set of rules for creating web services.`},
                        {title:"AI Image generation", icon:"image", iconColor:"text-blue-200", text:"Generate high quality images through MidJourney with Stable Diffusion.",
                        description:`Image generation is the process of using a neural network trained on a large dataset of images to generate new images based on input prompts. It can produce realistic and diverse images and has many applications.

                        MidJourney is a type of image generation algorithm that is designed to create images through text prompts.`},
                        
                    ]}
                    />
                    <ServicesLayout props = 
                    {[
                        {title:"Cloud Deployment", icon:"cloud", iconColor:"text-sky-200", text:"Deploy your server or client code onto a cloud service.",
                        description:`Cloud computing is the on-demand delivery of computing power, database storage, applications, and other IT resources through a cloud services platform via the Internet with pay-as-you-go pricing. 
                        
                        Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Digital Ocean Amazon Web Services (AWS), or Firebase.`},
                        {title:"FireBase", icon:"fire", iconColor:"text-orange-400", text:"Deploy your backend onto Google firebase.",
                        description:`Firebase is a cloud-based platform that provides tools and services for building mobile and web applications. It is owned by Google and is designed to help developers create apps quickly and easily.
                        
                        Firebase is popular among developers because it provides a range of useful tools and services that can be accessed through a single platform. It also offers strong integration with other Google services, such as Google Cloud Platform and Google Analytics.`},
                        {title:"Smart Contracts", icon:"article", iconColor:"text-emerald-400",text:"Write custom smart contracts for your clients needs.",
                        description:`Smart contracts are computer programs that automatically execute when specific conditions are met. They are used to reduce the risk of fraud and errors in transactions by ensuring all parties fulfill their obligations. 
                        
                        They can be used to automate many different types of transactions with high assurance, such as financial escrows, supply chain tracking, real estate transfers, employments contracts, voting and more.

                        Smart contracts are secured through a combination of technologies and protocols. One of the key technologies used to secure smart contracts is the blockchain, which is a decentralized and distributed ledger that records transactions in a secure and immutable way.`},
                        
                    ]}
                    />
                    {/* maximum 3 services per layout*/}
                    <ServicesLayout props = 
                    {[
                        {title:"Server Side Rendering", icon:"deliver", iconColor:"text-slate-700", text:"Server side render your data for increased performance using NextJs.",
                        description:`Server-side rendering refers to the process of generating the HTML for a web page on the server rather than the client (i.e., the user's web browser). This is in contrast to client-side rendering, which involves generating the HTML for a web page on the client using JavaScript.

                        Server-side rendering can be useful in a variety of situations, including when a web page needs to be rendered quickly or when the content of a web page is dynamic and changes frequently. It can also be helpful for search engine optimization (SEO), as search engines are typically better able to index and rank pages that are rendered on the server.
                        
                        Overall, server-side rendering is a technique that can be used to improve the performance and SEO of a web page by generating the HTML for the page on the server rather than the client.`},
                        {title:"Stripe/Crypto payments", icon:"paid", iconColor:"text-green-600", text:"Integrate with Stripe or Blockchain for payments.",
                        description:`Stripe is a payment processing company that enables businesses to accept payments online and in mobile apps. It provides a range of payment services, including support for credit card payments, bank transfers, and cryptocurrency payments.`},
                        {title:"Wordpress", icon:"circle", iconColor:"text-indigo-300", text:"Create websites using wordpress.",
                        description:`WordPress is a content management system (CMS) that allows users to easily create and manage websites. It is used by millions of websites around the world and is known for its ease of use and flexibility.

                        One of the main benefits of WordPress is that it allows users to create and manage a website without needing to know how to code. It provides a user-friendly interface and a wide range of customizable templates, themes, and plugins that make it easy to create a professional-looking website.`},
                    ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Services