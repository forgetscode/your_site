import ServicesLayout from "./ServicesLayout"

const Services = () => {
    return (
        <div id = {"Services"} className="w-full flex justify-center bg-white pb-20">
            <div className='flex flex-col w-full items-center bg-white space-y-16 lg:ml-72'>
                <p className="flex pt-10 header-text dark:dark-header-text decoration-sky-800 underline underline-offset-[30px] pb-12"> SERVICES</p>
                <div className='w-4/6'>
                    {/* maximum 3 services per layout*/}
                    <ServicesLayout props = 
                    {[
                        {title:"UI/UX design", icon:"design", iconColor:"text-purple-500",text:"Design and deploy personalized designs."},
                        {title:"Node Servers GraphQL/REST", icon:"connect", iconColor:"text-amber-300", text:"Set up secure servers with GraphQL or Rest API's."},
                        {title:"AI Image generation", icon:"image", iconColor:"text-blue-200", text:"Generate high quality images through MidJourney with Stable Diffusion."},
                        
                    ]}
                    />
                    <ServicesLayout props = 
                    {[
                        {title:"Cloud Deployment", icon:"cloud", iconColor:"text-sky-200", text:"Deploy your server or client code onto a cloud service."},
                        {title:"FireBase", icon:"fire", iconColor:"text-orange-400", text:"Deploy your backend onto Google firebase."},
                        {title:"Smart Contracts", icon:"article", iconColor:"text-emerald-400",text:"Write custom smart contracts for your clients needs."},
                        
                    ]}
                    />
                    {/* maximum 3 services per layout*/}
                    <ServicesLayout props = 
                    {[
                        {title:"Server Side Rendering", icon:"deliver", iconColor:"text-slate-700", text:"Server side render you data for increased performance using NextJs."},
                        {title:"Stripe/Crypto payments", icon:"paid", iconColor:"text-green-600", text:"Integrate with Stripe or Blockchain for payments."},
                        {title:"Wordpress", icon:"circle", iconColor:"text-indigo-300", text:"Create websites using wordpress."},
                    ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Services