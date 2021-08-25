import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import boxingPhoto from "../boxingPhoto.jpg";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        "bio": bio[0].children[0].text,
        "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img
        src={boxingPhoto}
        alt="kids boxing"
        className="absolute w-full"
      />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-gray-700 rounded-lg shadow-2xl lg:flex p-20 opacity-70">
          
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded mx-auto w-36 h-32 lg:w-64 lg:h-60"
            alt="Seth"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-5xl text-green-300 mt-4 mb-4">
              Hey there. I'm{" "}
              <span className="text-green-50">{author.name}</span>
            </h1>
            <p className="text-green-300 text-lg">{author.bio}</p>
          </div>
        </section>
      </div>
    </main>
  );
}