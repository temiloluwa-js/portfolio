import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Toolbox } from "../components/ToolBox";
import { useLottie } from "lottie-react";
import devAnimation from "../../public/dev.json";
import workAnimation from "../../public/work.json";
import { HomeProjectBox } from "../components/HomeProjectBox";

const Home: NextPage = () => {
  const options = {
    animationData: devAnimation,
    loop: true,
  };

  const options2 = {
    animationData: workAnimation,
    loop: true,
  };

  const { View: dev } = useLottie(options);
  const { View: work } = useLottie(options2);

  return (
    <>
      <Head>
        <title>Temiloluwa Adeleye: Fullstack Engineer Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <style></style>
      </Head>
      <main className="mx-auto flex  h-screen w-11/12 max-w-[90rem] flex-wrap items-center justify-between font-author">
        <section className="max-w-xl lg:max-w-lg">
          <h1 className="mb-4 text-5xl font-medium md:text-6xl">
            <span className="block">Hello.</span> I&apos;m Adeleye Temiloluwa.
          </h1>
          <h2 className="text-lg font-medium opacity-60 md:text-xl">
            I&apos;m a fullstack software engineer based in Abeokuta and
            I&apos;ve been writing code and pushing HTML div tags for the past
            15 months.
          </h2>
          <div className="mt-4 flex">
            <Link href="https://github.com/temiloluwa-js">
              <Image
                src="/github.svg"
                alt="Github Link"
                width={30}
                height={30}
                className="mr-4"
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
          </div>
        </section>
        <aside className="w-full lg:w-6/12">{dev}</aside>
      </main>
      <section className="mx-auto mb-8 w-11/12 max-w-[90rem]">
        <h1 className="mb-1 text-3xl  font-medium opacity-80 lg:text-4xl">
          Technologies & Tools
        </h1>
        <p className="text-md ml-1 font-medium  opacity-70 lg:text-lg">
          Tools and technologies I use when making projects.
        </p>
      </section>
      <section className="mx-auto grid h-full w-11/12 max-w-[90rem] gap-4 lg:grid-cols-2 ">
        <Toolbox
          name="Core"
          description="The core technologies I utilise everyday + Typescript for type safety."
          imgLinks={["/html.svg", "/css.svg", "/js.svg", "/ts.svg"]}
        />
        <Toolbox
          name="Frontend"
          description="The technologies I use when making frontend apps."
          imgLinks={["/react.svg", "/tailwind.svg", "/next.svg"]}
        />
        <Toolbox
          name="Backend"
          description="The technologies I use when dealing with projects that require server side logic."
          imgLinks={[
            "/nodejs.svg",
            "/trpc.svg",
            "/postgres.svg",
            "/firebase.svg",
          ]}
        />
        <Toolbox
          name="Tools"
          description="Everyday tools that ease my development workflow."
          imgLinks={["/vscode.svg", "/git.svg", "/postman.svg"]}
        />
      </section>
      <section className="my-12  mx-auto w-11/12 max-w-[90rem] py-8 font-author">
        <h1 className="text-3xl font-medium  opacity-80 lg:text-5xl">Work</h1>
        <p className="text-md ml-1 font-medium  opacity-70 lg:text-xl">
          Projects that I worked on over the past year.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <HomeProjectBox
            name="Shifuku Hotel"
            invert={false}
            textColor="black"
            headingColor="black"
            gitUrl="https://github.com/temiloluwa-js/shifuku-client"
            liveUrl="https://shifukuhotel.vercel.app"
            description="Shifuku Hotel is a full stack hotel application built with MongoDB, ExpressJS, ReactJS and NodeJS. Users can make bookings ..."
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
            description="66ch is a blog built with React, Tailwind CSS and Firebase. Users can read blogs,  create blogs, search posts, comment, reply ..."
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
            description="
            An ecommerce website where Dicebear Avatars are bought. Users can add and remove avatars from cart, switch between light and dark modes and pay for avatars using the Paypal Web SDK ..."
            imgUrl="/miscavatars.png"
            color="#1CA182"
          />
          <HomeProjectBox
            name="Leemao"
            textColor="white"
            invert={true}
            gitUrl=""
            liveUrl="https://leemao-one.vercel.app"
            headingColor="#269CBE"
            description="Leemao is a website with a curation of African memes that can be downloaded or shared across all social media apps ..."
            imgUrl="/leemaologo.png"
            color="#16121A"
          />
        </div>
      </section>
      <section className="lg:my-12 my-2  mx-auto h-[80vh]  w-11/12 max-w-[90rem] font-author">
        <h1 className="lg:mt-48 mt-24 mb-4  text-3xl font-medium opacity-80 lg:text-5xl">
          Let&apos;s work together.
        </h1>
        <aside className="w-full lg:w-3/12 lg:mt-16 mt-8">{work}</aside>
        <div className="lg:mt-56 mt-28 flex justify-between items-center">
          <Link href="mailto:adeleyetemiloluwa674@gmail.com" className="flex h-32 w-32 items-center justify-center rounded-[100%] duration-300 transition-transform hover:scale-105 border bg-[#111] font-author text-xl font-medium  uppercase text-white">
            <span>Email me</span>
          </Link>
          <div className="flex">
            <Link href="https://github.com/temiloluwa-js">
              <Image
                src="/github.svg"
                alt="Github Link"
                width={30}
                height={30}
                className="mr-6"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
