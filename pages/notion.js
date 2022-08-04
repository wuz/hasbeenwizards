import Head from "next/head";
import MainLayout from "../components/MainLayout";
import Title from "../components/Title";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Notion for DMs - Mythic Mimic</title>
        <meta
          name="description"
          content="Resources and videos for dungeon masters"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Do you feel like your session notes aren&apos;t working?</Title>

      <p>
        This is a place to find resources to become a better game master and
        worldbuilder.
      </p>
    </MainLayout>
  );
}
