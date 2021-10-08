import React from 'react'
import StoryCard from './StoryCard';
import { useSession } from 'next-auth/client';
const stories = [
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zukerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];


export default function Stories() {
  const [session] = useSession();

  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {session && <StoryCard name={session.user.name} src={session.user.image} profile={session.user.image} />}
      {stories.map(story => (
        <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}></StoryCard>
      ))}
    </div>
  )
}
