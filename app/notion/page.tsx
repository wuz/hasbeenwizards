import Head from "next/head";
import MainLayout from "../../components/MainLayout";
import Title from "../../components/Title";
import Heading from "../../components/Heading";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Notion for DMs - HasBeenWizards</title>
        <meta
          name="description"
          content="Resources and videos for dungeon masters"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>You find, here, an tome of ancient secrets...</Title>

      <Heading>
        Do you feel like your session notes aren&apos;t working?
      </Heading>
      <p>
        I&apos;ve been working on a new resource for all you Dungeon Masters and
        worldbuilders out there.
      </p>
    </MainLayout>
  );
}
