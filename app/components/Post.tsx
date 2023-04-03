import Image from "next/image";
import Link from "next/link";
import {
  HiVideoCamera,
  HiOutlineNewspaper,
  HiPlay,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";
import { SiGooglepodcasts } from "react-icons/si";
import { urlFor } from "@/app/lib/sanity.client";

type PostTypes = {
  post: {
    _id: string | null | undefined;
    title: string;
    thumbnail: any;
    slug: { current: string };
    category: string;
    _type: string;
    desc: string;
  };
};

const Post = ({ post }: PostTypes) => {
  const { title, thumbnail, slug, category, _type, desc } = post;

  let basePath;

  switch (_type) {
    case "video":
      basePath = "/video/";
      break;
    case "podcast":
      basePath = "/podcast/";
      break;
    default:
      basePath = "/story/";
      break;
  }

  return (
    <div className="max-w-[300px] flex flex-col p-2 py-4 duration-300 cursor-pointer group">
      <Link
        href={`https://www.theiroom.com/post${basePath + slug?.current}`}
        className="w-full flex-[.5] relative before:absolute before:w-full before:h-1 before:bg-iyellow before:z-10 isolate before:bottom-0"
      >
        <Image
          src={thumbnail && urlFor(thumbnail)?.width(400)?.height(200)?.url()}
          width={400}
          height={300}
          alt={title}
          className={"w-full h-[200px] object-cover group-hover:brightness-75"}
        />

        <span
          className={
            "absolute top-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white h-full flex flex-col justify-between items-start p-4"
          }
        >
          <span>
            {_type === "video" && <HiVideoCamera />}
            {_type === "story" && <HiOutlineNewspaper />}
            {_type === "podcast" && <SiGooglepodcasts />}
          </span>

          <span className="before:absolute before:h-5 before:bg-iyellow before:w-[5px] before:left-0 font-semibold text-sm max-w-[150px] text-truncate line-clamp-">
            {category}
          </span>

          <span className="bg-iyellow text-black rounded-full p-2 grid place-items-center absolute right-4 bottom-4 lg:scale-0 group-hover:scale-110 duration-300">
            {_type !== "story" ? (
              <HiPlay className="text-3xl" />
            ) : (
              <HiOutlineArrowUpRight className="text-3xl" />
            )}
          </span>
        </span>
      </Link>

      <Link
        href={`https://www.theiroom.com/post${basePath + slug?.current}`}
        className={"mt-4"}
      >
        <h2 className="text-xl font-semibold line-clamp-3 group-hover:text-iyellow duration-300">
          {title}
        </h2>
        <p className="line-clamp-4 mt-1 text-sm font-light text-gray-900">
          {desc}
        </p>
      </Link>
    </div>
  );
};

export default Post;
