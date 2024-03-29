"use client";

import Link from "next/link";
import { useState } from "react";

import { textInput, resourcesList, styledTag } from "./resources.css";

export type Resource = {
  Tags: string[];
  Link: string;
  Name: string;
  Notes: string;
};

type ResourcesProps = {
  resources: Resource[];
};

const Resources = ({ resources }: ResourcesProps) => {
  const [search, setSearch] = useState("");
  const searchResources = (resource: Resource) => {
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
    <>
      {!resources && <>Loading...</>}
      <input
        className={textInput}
        placeholder="Filter resources by name, tag, or description..."
        value={search}
        onChange={(e) => setSearch(e.target?.value ?? "")}
      />
      <ul className={resourcesList}>
        {resources.filter(searchResources).map((resource, i) => {
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
                  <span className={styledTag} key="tag">
                    {tag}
                  </span>
                ))}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Resources;
