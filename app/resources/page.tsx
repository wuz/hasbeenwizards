import { Metadata } from 'next'
import Resources from './styles';
import { getResourcesFromAirtable } from "../../lib/airtable";

async function getResources() {
  return await getResourcesFromAirtable();
}

export default async function Page() {
  const resources = await getResources();
  return <Resources resources={resources} />
}