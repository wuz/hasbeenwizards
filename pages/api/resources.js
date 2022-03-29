import { getResourcesFromAirtable } from "../../airtable";

export default async function handler(req, res) {
  const resources = await getResourcesFromAirtable();
  res.status(200).json(resources);
}
