import { NextResponse } from 'next/server'
import { getResourcesFromAirtable } from "../../../lib/airtable";

export async function GET() {
  const resources = await getResourcesFromAirtable();
  console.log({resources});
  return NextResponse.json(resources);
}
