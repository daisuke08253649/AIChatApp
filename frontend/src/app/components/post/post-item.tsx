"use client"


import { useEffect } from "react";
import { format } from "date-fns";
import type { PostType } from "../../../utils/post.types";


// 投稿アイテム
const PostItem = (post: PostType) => {
    // スクロール
    const scrollToBottom = () => {
        const element = document.documentElement
        const bottom = element.scrollHeight - element.clientHeight
        window.scroll({
            top: bottom - 100,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        // 投稿が更新されたら、スクロールする
        if (post.content) {
            scrollToBottom()
        }
    }, [post.content])


    return (
        <div className="break-words whitespace-pre-wrap mb-40">
            <div className="flex items-end justify-end space-x-2 md-5">
                <div className="text-wm text-white">{format(new Date(post.created_at), "HH:mm")}</div>
                <div className="bg-[#8DE055] p-3 rounded-xl drop-shadow-md max-w-lg">{post.prompt}</div>
            </div>

            {post.content && (
                <div className="md-5">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full object-cover bg-yellow-500 flex justify-center items-center text-white text-xs font-bold">
                            A
                        </div>
                        <div className="text-white">AI</div>
                    </div>
                    <div className="flex items-end space-x-2">
                        <div className="bg-white p-3 rounded-xl drop-shadow-md max-w-lg">
                            <div className="text-wm text-black">{post.content.trim()}</div>
                        </div>
                        <div className="text-sm text-shite">{format(new Date(post.updated_at), "HH:mm")}</div>
                    </div>
                </div>
            )}
        </div>
    )
}


export default PostItem