import React from 'react'
import { FaDiscord } from "react-icons/fa"
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai"
import { RiArticleLine } from "react-icons/ri"

function Social() {
    return (
        <article className='w-3/4 mt-10 text-gray-900'>
            <h1 className="text-3xl text-3xl font-bold mb-6 mt-10  ">
                📰 Stay Updated
            </h1>
            <ul className="grid grid-cols-1 gap-4 xl:grid-cols-2 justify-items-stretch content-center">
                <li >
                    <a href="https://discord.gg/zzZHQeupdN"
                        className="p-6  bg-white rounded-md flex items-center cursor-pointer  h-40 border-2 border-gray-200 shadow-md"
                    >
                        <div className=" bg-indigo-500 text-white
                            md:w-20 md:h-20 p-4 rounded-md flex justify-center items-center">
                            <FaDiscord className="h-10 w-10 " />
                        </div>
                        <div className="ml-4 text-gray-900">
                            <h3 className="text-lg font-semibold ">Discord Community</h3>
                            <p className="font-light hidden xl:block">Follow our Discord channel</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/devKamet"
                        className="p-6  bg-white rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-200 shadow-md">
                        <div className=" bg-blue-500 text-white p-4 rounded-md flex justify-center items-center">
                            <AiOutlineTwitter className="h-10 w-10" />
                        </div>
                        <div className="ml-4 text-gray-900">
                            <h3 className="text-lg font-semibold ">Twitter</h3>
                            <p className="font-light  hidden xl:block">Follow us on Twitter</p>
                        </div>
                    </a>
                </li>

            </ul>
        </article>
    )
}

export default Social
