import Link from "next/link";

type FooterLinksProps = {
    links: {
        name: string;
        path: string;
    }[];

    title: string;
};

const FooterLinks = ({ links,title }:FooterLinksProps) => {
  return (
    <div className="pb-4">
      <h2 className="text-sm font-semibold text-white/80 text-center w-fit">{title}</h2>
      <nav className="my-2">
        <ul className="flex flex-col items-start text-white/70">
          {links.map(({ name, path }) => (
            <li
              key={path}
              className="text-xs my-2 hover:underline max-w-[120px] text-left hover:text-igreen-light"
            >
              {path === "africaniij.org" ? (
                <a href={path} className="h-full ">
                  {name}
                </a>
              ) : (
                <Link href={path} className="h-full">
                  {name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterLinks;
