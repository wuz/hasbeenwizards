import Head from "next/head";
import Link from "next/link";
import MainLayout from "../components/MainLayout";
import Title from "../components/Title";
import Heading from "../components/Heading";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>A mysterious error - HasBeenWizards</title>
        <meta
          name="description"
          content="Resources and videos for dungeon masters"
        />
      </Head>

      <Title>A pitfall trap opens beneath you! Make a dex save!</Title>

      <Heading>
        Oh no adventurer! You&apos;ve found something that doesn&apos;t exist!
        Perhaps you should <Link href="/">head back home?</Link>
      </Heading>
    </MainLayout>
  );
}
