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
        "authorImage": image.asset->url
      }`
      )
      // .then((data) => console.log(data))
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
        <section className="bg-gray-700 rounded-lg lg:flex p-10 opacity-70">
          
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-4xl text-center text-blue-50 mt-4 mb-4">
              Hey there! I'm Seth
            </h1>
            <p className="text-blue-200 text-lg lg:pl-3">
              My name is Seth and I am a Full-stack software engineer living in Staunton, VA.  
              I grew up in this relative area and now reside with my wife and two amazing sons, 
              who are as full of energy as I am. I love to be outdoors and am an avid hiker, biker, 
              and general nature lover! 
            </p>
            <p className="text-blue-200 text-lg lg:pl-3 mt-5">
              Before making a career change to software development, 
              I was a social worker, assisting low-income families overcome barriers and locate employment. 
              While the work was rewarding, I knew that some of the services offered to these clients were not adequate or cost effective. 
              I quit and founded Benchmark Employment Services & Training (BEST), 
              which focuses on providing support for these same families in a more efficient and direct manner. 
              I have focused on business growth/sustainability, maintaining business relationships, 
              networking, billing practices for large governmental agencies, data security, 
              and accurate record keeping for compliance. 
            </p>
            <p className="text-blue-200 text-lg lg:pl-3 mt-5">
              Needing a creative outlet to offset social work, I co-founded Skylark Hammocks with a friend. 
              During my time with Skylark, I have learned how to develop supply chains, 
              work with overseas partners for materials, implement efficient production measures, 
              as well as produce and market hammocks. I also update and maintain the company website.
            </p>
            <p className="text-blue-200 text-lg lg:pl-3 mt-5">
              I am passionate about finding creative solutions for customers and partners. 
              I am a life-long learner and have thoroughly enjoyed applying my programming skills 
              to build fun and interesting web applications. Please let me know if you have any 
              additional questions as I would love to chat about this opportunity. 
              I can be reached at (540) 849-8929 or nsethblanchard@gmail.com. 
              I look forward to hearing from you!
            </p>
            <img
            // src={urlFor(author.authorImage).url()}
            // className="rounded mx-auto w-36 h-32 lg:w-64 lg:h-60"
            // alt="Seth"
            />

            
          </div>
        </section>
      </div>
    </main>
  );
}