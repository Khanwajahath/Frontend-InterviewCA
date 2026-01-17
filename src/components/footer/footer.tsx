export function Footer(){
    return(
        <div className="bg-black-300">
            <hr className="text-white"></hr>
            <div className="flex justify-center  space-x-1 ">
                <div className="w-1/4 p-3">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-backpack-fill text-white" viewBox="0 0 16 16">
                    <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z"/>
                    <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
                    </svg>
                    <h3 className="text-3xl text-white font-bold">CAMonk</h3>
                </div>
                <p className="text-white">
                    Empowring the next generation of financial leaders with tools community and Knowledge
                </p>

                </div>
                <div className="text-white flex-col space-x-1 w-1/4 p-3">
                    <h5 className="font-bold text-gray-600">RESOURCES</h5>
                    <h5>Blog</h5>
                    <h5>Webinars</h5>
                    <h5>Case Studies</h5>
                </div>
                <div className="text-white flex-col space-x-1 w-1/4 p-3">
                    <h5 className="font-bold text-gray-600">PLATFORM</h5>
                    <h5>Job Board</h5>
                    <h5>Practice Tests</h5>
                    <h5>Mentorship</h5>
                </div>
                <div className="text-white flex-col space-x-1 w-1/4 p-3">
                    <h5 className="font-bold text-gray-600">CONNECT</h5>
                    <h5>Linkedin</h5>
                    <h5>Instagram</h5>
                    <h5>Twitter</h5>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}