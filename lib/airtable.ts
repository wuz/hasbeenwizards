import Airtable from "airtable";
Airtable.configure({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_KEY });
const base = Airtable.base("appArMRgQEJTboYY0");

type Resource = {
  Tags: string[];
  Link: string;
  Name: string;
  Notes: string;
}

export const getResourcesFromAirtable = async () => {
    const resources: Resource[] = [];
    const pages = await base("D&D Resources").select({
      view: "Grid view",
    });
    pages.eachPage(
      (records, fetchNextPage) => {
        records.forEach((record) => {
          resources.push(record.fields as Resource);
        });

        fetchNextPage();
      });
   return resources;
}