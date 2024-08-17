"use client"


import Link from "next/link"


// ナビゲーション
const Navigation = () => {
    return (
        <header className="fixed top-0 left-0 right-0 border-b border-gray-200 z-10 bg-[#add8e6]">
            <div className="container max-w-screen-xl mx-auto relative flex justify-center items-center h-16">
                <Link href="/" className="font-bold text-xl cursor-pointer text-white">
                    AI Chat
                </Link>
            </div>
        </header>
    )
}


export default Navigation;