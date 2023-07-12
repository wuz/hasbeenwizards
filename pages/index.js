import Head from "next/head";
import MainLayout from "../components/MainLayout";
import Title from "../components/Title";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Welcome - HasBeenWizards</title>
        <meta name="description" content="Something has gone wrong..." />
      </Head>

      <Title>Enter adventurer... if you dare!</Title>

      <p>
        HasBeenWizards is the home of Conlin Durbin &mdash; a professional
        dungeon master, Twitch streamer, and TTRPG content creator.
      </p>
    </MainLayout>
  );
}
