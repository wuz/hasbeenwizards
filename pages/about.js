import Head from "next/head";
import MainLayout from "../components/MainLayout";
import Title from "../components/Title";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>About - Mythic Mimic</title>
        <meta name="description" content="About me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Welcome to Mythic Mimic</Title>

      <p>
        This is a place to find resources to become a better game master and
        worldbuilder.
      </p>
    </MainLayout>
  );
}
