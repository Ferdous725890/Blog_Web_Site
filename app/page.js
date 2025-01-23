

import Link from "next/link";
import getAlldat from '../lib/getAlldata'
export default async function Home() {
  const allposts = await getAlldat();

  return (
    <div>
      <main className="mt-5">
        <h2 className="text-2xl">Blogs</h2>
        <div>
          {allposts.map((post) => (
            <div>
              <div className="">
              <Link href={`/${post.id}`}>
              <p className="underline text-[18px] hover:text-blue-500 hover:cursor-pointer">
                {post.title}
                </p>
              </Link>
              </div>
              <div className=" w-full max-w-[700px] ml-2 mt-4 mb-5">
                <p className="">
                |{post.body.slice(0, 200)}............
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
