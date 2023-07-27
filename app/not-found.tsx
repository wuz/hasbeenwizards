import { Metadata } from 'next';
import Link from "next/link";
import MainLayout from "../components/MainLayout";
import Title from "../components/Title";
import Heading from "../components/Heading";


export const metadata: Metadata = {
  title: 'A mysterious error - HasBeenWizards',
  description: 'Resources and videos for dungeon masters'
}
 
export default function NotFound() {
  return (
    <MainLayout>
      <Title>A pitfall trap opens beneath you! Make a dex save!</Title>

      <Heading>
        Oh no adventurer! You&apos;ve found something that doesn&apos;t exist!
        Perhaps you should <Link href="/">head back home?</Link>
      </Heading>
    </MainLayout>
  )
}