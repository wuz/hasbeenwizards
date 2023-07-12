import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import useSWR, { SWRConfig } from "swr";
import { getResourcesFromAirtable } from "../airtable";
import MainLayout from "../components/MainLayout";
import Title from "../components/Title";
import Heading from "../components/Heading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export async function getStaticProps() {
  // "$(getStaticProps)" is executed on the server side.
  const resources = await getResourcesFromAirtable();
  return {
    props: {
      fallback: {
        "/api/resources": resources,
      },
    },
  };
}

const TextInput = styled.input`
  background: none;
  border: none;
  color: inherit;
  border-bottom: 1px solid #fff;
  height: 40px;
  width: 100%;
  margin-bottom: 24px;
`;

const Tag = styled.span`
  padding: 2px 4px;
  border: 1px solid #fff;
  margin-right: 4px;
`;

const ResourceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 4px 12px;
    margin-bottom: 12px;
    border-bottom: 1px solid #777;
  }
`;

function Resources() {
  const [search, setSearch] = useState("");
  const { data, error } = useSWR("/api/resources", fetcher);
  const searchResources = (resource) => {
    return Object.values(resource).some((value) => {
      if (Array.isArray(value)) {
        return value.some((v) => {
          return v.toLowerCase().includes(search.toLowerCase());
        });
      } else {
        return value.toLowerCase().includes(search.toLowerCase());
      }
    });
  };
  return (
    <MainLayout>
      <Head>
        <title>HasBeenWizards</title>
        <meta
          name="description"
          content="HasBeenWizards is the home of Conlin Durbin &mdash; a professional dungeon master, Twitch streamer, and TTRPG content creator."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>
        A magical shop, full of powerful items &amp; mysterious trinkets.
      </Title>
      <Heading>
        Here is my collection of my favorite resources for game masters and
        worldbuilders.
      </Heading>
      <div>
        <h2>Resources</h2>
        {!data && <>Loading...</>}
        <TextInput
          placeholder="Filter resources by name, tag, or description..."
          value={search}
          onChange={(e) => setSearch(e.target?.value ?? "")}
        />
        <ResourceList>
          {data.filter(searchResources).map((resource, i) => {
            if (!resource.Name) return null;
            return (
              <li key={i}>
                <h3>
                  {resource.Link ? (
                    <Link href={resource.Link}>{resource.Name}</Link>
                  ) : (
                    resource.Name
                  )}
                </h3>
                <p>{resource.Notes}</p>
                <p>
                  {resource.Tags.map((tag) => (
                    <Tag key="tag">{tag}</Tag>
                  ))}
                </p>
              </li>
            );
          })}
        </ResourceList>
      </div>
    </MainLayout>
  );
}

export default function Page({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Resources />
    </SWRConfig>
  );
}
