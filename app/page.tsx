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
        <Title>Enter adventurer... if you dare!</Title>
        <Body>
          HasBeenWizards is an independent publishing company by Conlin Durbin,
          focused on helping GMs and players tell incredible stories and build
          immersive worlds.
        </Body>
      </Section>
      <Section inverted>
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
