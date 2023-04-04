import Post from "./Post";
import Image from "next/image";

type PostGridTypes = {
  title: string;
  posts: {
    _id: string | null | undefined;
    title: string;
    thumbnail: any;
    slug: { current: string };
    _type: string;
    desc: string;
    category: string;
  }[];
};

const PostGrid = ({ title,posts }: PostGridTypes) => {
  return (
    <div className="w-full lg:px-2 max-w-[1280px] mx-auto px-4 md:px-2">
      <div className="w-full mx-auto">
        <h1 className="font-bold text-4xl md:text-6xl w-fit mx-auto z-20 mb-12">
          {title}
        </h1>

        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-2 w-full">
          {posts.map((post) => (
            <Post key={post?._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostGrid;
