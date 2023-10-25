import Section from "@/components/Section";
import MainLayout from "@/components/MainLayout";
import Title from "@/components/Title";
import Body from "@/components/Body";
import Flex from "@/components/Flex";

export default function About() {
  return (
    <MainLayout>
      <Section>
        <Title type="page">About HBW</Title>
        <Body>
          HasBeenWizards is an independent publishing company by Conlin Durbin,
          focused on helping GMs and players tell incredible stories and build
          immersive worlds.
        </Body>
      </Section>
    </MainLayout>
  );
}
