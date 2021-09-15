import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
              url
            }
          },
          secondaryImage{
            asset->{
              _id,
                url
              }
            },
          imagesUrl,
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;
 
  console.log(singlePost)
  return (
    <main className="bg-gray-200 min-h-screen p-4 md:p-12">
      <article className="container shadow-lg mx-auto rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-60 rounded p-12">
              <h1 className="cursive text-3xl lg:text-6xl mb-4">
                {singlePost.title}
              </h1>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                />
                <p className="cursive flex items-center pl-2 text-2xl">
                  {singlePost.name}
                </p>
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="leading-tight md:leading-normal tracking-tighter md:tracking-normal px-2 md:px-16 lg:px-48 text-center py-2 md:py-6 prose lg:prose-xl max-w-full">
          {/* the Block Content import allows for better styling of blocks of code, in this case the body of the post */}
          {/* it also puts together all of the singular pieces with the block and makes them into one monolith */}
          <BlockContent
            blocks={singlePost.body}
            projectId="ph4hgpxb"
            dataset="production"
          />
        </div>
        <h2 className="leading-none md:leading-normal text-sm md:text-2xl text-blue-600 text-center">Click Below for More Pictures</h2>
        <a href={singlePost.imagesUrl} target="_blank" rel="noreferrer"><img src={singlePost.secondaryImage.asset.url} className="linkedphoto p-2 md:p-6 md:pb-10" alt="flickr image gallery"/></a>


      </article>
    </main>
  );
}