import Section from "@/components/Section";
import MainLayout from "@/components/MainLayout";
import Title from "@/components/Title";
import Body from "@/components/Body";
import Flex from "@/components/Flex";
import ItchEmbed from "@/components/ItchEmbed";

export default function Home() {
  return (
    <MainLayout>
      <Section>
        <Title type="page">Welcome wuzzards, wanderers, and weirds</Title>
        <Body>
          TTRPGs, tools, resources, and writings for players, game masters,
          designers, and more.
        </Body>
      </Section>
      <Title>Projects</Title>
      <Section>
        <Flex align="center">
          <div>
            <ItchEmbed
              src="https://itch.io/embed/2292955"
              link="https://wuz.itch.io/morktober-2023"
              title="Morktober 2023 by Wuz"
            />
          </div>
          <div>
            <Title>#Morktober 2023</Title>
            <Body>
              HBW is participating in Morktober this October! Check out the itch
              page for the finished pages and check back at the end for a
              collection of everything we&apos;ve built!
            </Body>
          </div>
        </Flex>
      </Section>
      <Section>
        <Title>dmpad</Title>
        <Body>
          dmpad is a note taking tool for game masters of all kinds. Prepare
          your sessions, design your dungeons, and keep track of your game.
        </Body>
        <a href="https://dmpad.app">Check it out</a>
      </Section>
      <Section>
        <Flex align="center">
          <div>
            <Title>Spellbook</Title>
            <Body>
              You are a{" "}
              <em>
                <strong>spellright</strong>
              </em>
              , recording spells disguised in everyday books.
            </Body>
            <hr />
            <Body>
              Spellbook is a solo journaling RPG about finding and deciphering
              magical spells from the books that are all around us. It uses the
              page numbers, words, and information about whatever book you are
              currently reading as a &ldquo;roll table&rdquo;.
            </Body>
            <Body>Be wary of Misspells!</Body>
          </div>
          <div>
            <ItchEmbed
              src="https://itch.io/embed/2253200?linkback=true&amp;bg_color=ffffff&amp;fg_color=222222&amp;link_color=000000&amp;border_color=cccccc"
              link="https://wuz.itch.io/spellbook"
              title="Spellbook by Wuz"
            />
          </div>
        </Flex>
      </Section>
    </MainLayout>
  );
}
