import { Metadata } from "next";
import Resources from "./styles";
import { getResourcesFromAirtable } from "@/lib/airtable";
import MainLayout from "@/components/MainLayout";
import Title from "@/components/Title";
import Heading from "@/components/Heading";

async function getResources() {
  return await getResourcesFromAirtable();
}

export default async function Page() {
  const resources = await getResources();
  return (
    <MainLayout>
      <Title>
        A magical shop, full of powerful items &amp; mysterious trinkets.
      </Title>
      <Heading>
        A collection of my favorite resources for game masters and
        worldbuilders.
      </Heading>
      <Resources resources={resources} />
    </MainLayout>
  );
}
