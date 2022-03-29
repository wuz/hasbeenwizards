import Airtable from "airtable";
Airtable.configure({ apiKey: process.env.AIRTABLE_KEY });
const base = Airtable.base("appArMRgQEJTboYY0");

export const getResourcesFromAirtable = () =>
  new Promise(async (resolve, reject) => {
    const resources = [];
    const pages = await base("D&D Resources").select({
      view: "Grid view",
    });
    pages.eachPage(
      (records, fetchNextPage) => {
        records.forEach((record) => {
          resources.push(record.fields);
        });

        fetchNextPage();
      },
      (err) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        resolve(resources);
      }
    );
  });
