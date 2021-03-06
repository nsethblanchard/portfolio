import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import photo from '../pics/nature.jpg'

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
        },
      }`
      )
      .then((data) => seteCA(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray-600 mb-0 pb-0">
      <img src={photo} alt="background picture" className="absolute w-full bg-gray-700"/>
      
      <section className="container mx-auto pl-5 pr-11 relative">
        <h1 className="pt-8 text-5xl text-gray-700 flex justify-center cursive">
          Personal Interests
        </h1>
        <h2 className="text-lg text-gray-800 flex justify-center mb-12 pt-2.5">
          Fun things I do when I'm not coding
        </h2>
        <div className="mx-7 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {eCAData &&
            eCAData.map((eCA, index) => (
              <article key={index}>
                <Link to={"/activities/" + eCA.slug.current} key={eCA.slug.current}>
                  <span
                    className="block h-64 relative rounded-2xl shadow leading-snug bg-white"
                    key={index}
                  >
                    <img
                      src={eCA.mainImage.asset.url}
                      alt={eCA.mainImage.alt}
                      className="w-full h-full rounded-2xl object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-lg font-bold px-3 py-4 bg-gray-800 text-blue-200 bg-opacity-75 rounded">
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