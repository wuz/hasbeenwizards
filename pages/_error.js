import Head from "next/head";
import MainLayout from "../components/MainLayout";
import Title from "../components/Title";
import Heading from "../components/Heading";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Mythic Mimic</title>
        <meta
          name="description"
          content="Resources and videos for dungeon masters"
        />
      </Head>

      <Title>A pitfall trap opens beneath you! Make a dex save!</Title>

      <Heading>
        Oh no adventurer! You&apos;ve found something that doesn&apos;t exist!
        Perhaps you should <a href="/">head back home?</a>
      </Heading>
    </MainLayout>
  );
}
