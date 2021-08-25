import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
  const [eCAData, seteCA] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "ecActivities"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => seteCA(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray-300 min-h-screen p-8">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          Personal Interests
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12 pt-2.5">
          Fun things I do when I'm not coding
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eCAData &&
            eCAData.map((eCA, index) => (
              <article>
                <Link to={"/activities/" + eCA.slug.current} key={eCA.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <img
                      src={eCA.mainImage.asset.url}
                      alt={eCA.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-green-800 text-red-100 bg-opacity-75 rounded">
                        {eCA.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}