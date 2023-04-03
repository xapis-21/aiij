import { createClient} from "next-sanity";
import { cache } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; //
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; // "2022-11-16"
const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});

// Wrap the cache function in a way that reuses the TypeScript definitions


// Now use it just like before, fully deduped, cached and optimized by react
const builder = imageUrlBuilder(client);

// export const urlFor = (source: SanityImageSource) => builder.image(source);
export const urlFor = (source: SanityImageSource)=> {
  return builder.image(source);
}

export const clientFetch = cache(client.fetch.bind(client));


 export const deleteAllDocs = (docs: { _id: any; }[]) =>{
    docs.map(({ _id }) => {
      client
        .delete(_id)
        .then(() => {
          console.log("document deleted");
        })
        .catch((err) => {
          console.error("Delete failed: ", err.message);
        });
    });
  }
    // deletePost()
