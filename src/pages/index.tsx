import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Toolbox } from "../components/ToolBox";
import { useLottie } from "lottie-react";
import devAnimation from "../../public/dev.json";
import { HomeProjectBox } from "../components/HomeProjectBox";
import { Footer } from "../components/Footer";
const Home: NextPage = () => {
  const options = {
    animationData: devAnimation,
    loop: true,
  };

  const { View: dev } = useLottie(options);

  return (
    <>
      <Head>
        <title>Temiloluwa Adeleye: Fullstack Engineer Portfolio</title>
        <meta
          name="description"
          content="Adeleye Temiloluwa is a full stack engineer based in Abeokuta."
        />
        <link rel="icon" href="/favicon.ico" />
        <style></style>
      </Head>
      <div
        className="mx-auto w-11/12  max-w-[90rem] items-center
       justify-between pb-40 font-author  lg:flex lg:h-screen lg:pb-0"
      >
        <section className="mt-40 max-w-xl lg:mt-0 lg:max-w-lg">
          <h1 className="mb-4 text-5xl font-medium md:text-6xl">
            <span className="block">Hello.</span> I&apos;m Adeleye Temiloluwa.
          </h1>
          <h2 className="text-lg font-medium opacity-60 dark:opacity-80 md:text-xl">
            I am a fullstack software engineer based in Abeokuta. I work with
            the T3 stack and MERN stack most of the time.
          </h2>
          <div className="mt-4 flex items-center">
            <Link href="https://github.com/temiloluwa-js">
              <Image
                src="/github.svg"
                alt="Github Link"
                width={30}
                height={30}
                className="mr-4 dark:invert"
              />
            </Link>
            <Link href="https://twitter.com/_abdurrazaq_">
              <Image
                src="/twitter.svg"
                alt="Twitter Link"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="/resume.pdf"
              download
              className="ml-4 text-lg font-medium underline opacity-60 dark:opacity-80 md:text-xl"
            >
              Resume
            </Link>
          </div>
        </section>
        <aside className="w-full lg:w-6/12">{dev}</aside>
      </div>

      <section className="mx-auto mb-4 w-11/12 max-w-[90rem] text-center">
        <h1
          className="mb-1 text-center  font-author text-3xl font-medium
         opacity-80 dark:opacity-100 lg:text-5xl"
        >
          Technologies
        </h1>

        <div className="mx-auto mt-10 grid  max-w-[90rem] grid-cols-1 gap-4 lg:grid-cols-2">
          <Toolbox
            name="Core"
            description="The core technologies I utilise everyday + Typescript for type safety."
            imgLinks={[
              "/HTML5.png",
              "/CSS3.png",
              "/javascript.svg",
              "/typescript.svg",
            ]}
          />
          <Toolbox
            name="Frontend"
            description="The technologies I use when making frontend apps."
            imgLinks={["/reactjs.svg", "/tailwind.svg", "/nextjs.svg"]}
          />
          <Toolbox
            name="Backend"
            description="The technologies I use when dealing with projects that require server side logic."
            imgLinks={["/nodejs.svg", "/trpc.svg", "/firebase.svg"]}
          />
          <Toolbox
            name="Tools & Databases"
            description="Everyday tools that ease my development workflow + the databases that I work with."
            imgLinks={[
              "/vscode.svg",
              "/git.svg",
              "/mongoDB.svg",
              "/postgresql.svg",
            ]}
          />
        </div>
      </section>
      <section className="mx-auto mt-12 flex  w-11/12 max-w-[90rem] flex-col py-8 font-author">
        <h1 className="mb-1 text-center  font-author text-3xl font-medium opacity-80 dark:opacity-100 lg:text-5xl">
          Work
        </h1>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <HomeProjectBox
            name="Homework AI"
            invert={true}
            textColor="white"
            headingColor="white"
            liveUrl="https://homework-ai.vercel.app"
            description="Homework AI is a fullstack app built on top of OpenAI's GPT-3 API with prompts engineered to serve specific purposes tailored for students."
            imgUrl="/hw.png"
            color="#071820"
          />
          <HomeProjectBox
            name="Bliss Hotel"
            invert={false}
            textColor="black"
            headingColor="black"
            gitUrl="https://github.com/temiloluwa-js/shifuku-client"
            liveUrl="https://shifukuhotel.vercel.app"
            description="Bliss Hotel is a full stack hotel application built with MongoDB, ExpressJS, ReactJS and NodeJS. Users can make bookings and admins can manage  bookings and rooms."
            imgUrl="/shifuku.png"
            color="white"
          />
          <HomeProjectBox
            name="66CH"
            textColor="white"
            invert={true}
            headingColor="white"
            gitUrl="https://github.com/temiloluwa-js/66ch-2"
            liveUrl="https://66ch.vercel.app"
            description="66ch is a blog built with React, Tailwind CSS and Firebase. Users can read blogs,  create blogs, search posts, comment, reply and a lot more things."
            imgUrl="/66ch.png"
            color="#0337F2"
          />
          <HomeProjectBox
            name="Misc Avatars"
            textColor="white"
            invert={true}
            headingColor="white"
            gitUrl="https://github.com/temiloluwa-js/misc"
            liveUrl="https://miscavatars.vercel.app"
            description="An ecommerce website where Dicebear Avatars are bought. Users can add and remove avatars from cart, switch between light and dark modes and pay for avatars using the Paypal Web SDK. Made with React and Tailwind."
            imgUrl="/miscavatars.png"
            color="#1CA182"
          />
        </div>
        <Link
          href="/work"
          className=" mx-auto mt-6 rounded-md  bg-[#111] p-3 text-xl font-medium text-white transition-transform hover:scale-110 dark:bg-white dark:text-black"
        >
          All Projects
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default Home;
