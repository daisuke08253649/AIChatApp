import { Suspense } from "react";
import Image from "next/image";

import PostList from "./components/post/post-list";
import Loading from "./loading";
import PostNew from "./components/post/post-new";


// メインページ
export default function Home() {
  return (
    <div className="h-full">
      <Suspense fallback={<Loading />}>
        {/* @ts-ignore */}
        <PostList />
      </Suspense>
      
      <PostNew />
    </div>
  )
}
