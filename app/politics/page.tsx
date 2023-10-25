import { Metadata } from "next";

import Section from "@/components/Section";
import MainLayout from "@/components/MainLayout";
import Title from "@/components/Title";
import Body from "@/components/Body";

export const metadata: Metadata = {
  title: "Politics - HasBeenWizards",
  description:
    "HasBeenWizards is the home of Conlin Durbin &mdash; a professional dungeon master, Twitch streamer, and TTRPG content creator.",
};

export default function Politics() {
  return (
    <MainLayout>
      <Section>
        <Title type="page">
          Freedom and safety for everyone, everywhere, for all time.
        </Title>
        <Body>
          HasBeenWizards produces TTRPGs and tools that sometimes tread into the
          domain of horror, futuristic worlds, or history and culture. Those
          domains, and many others, are often reflections of our world and,
          because of this, are often reflections of the deep wounds caused by
          racist, sexist, classist, and homophobic violence and
          disenfranchisement.
        </Body>
        <Body>
          HasBeenWizards is committed to fighting normative violence, fascism,
          colonialism, and white supremecy in all of its forms. We&apos;re
          committed to rejecting the capitalist structure and its abusive
          outlook on human work in relation to work, productivity, and
          ownership.
        </Body>
        <Body>
          We aggressively and vocally oppose racism, sexism, homophobia,
          transphobia, nationalism, ethnocentrism, religious fundamentalism, and
          oppresive and coercive power structures of all kinds.
        </Body>
        <hr />
        <Body>
          Wording and ideas borrowed from{" "}
          <a href="https://kokorobot.ca/site/politics.html">Rek Bell</a> and{" "}
          <a href="https://blood-and-dust.com/politics/">Blood and Dust</a>
        </Body>
      </Section>
    </MainLayout>
  );
}
