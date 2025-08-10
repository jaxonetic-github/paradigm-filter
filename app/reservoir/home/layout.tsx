import ContentMap from '@/components/subjects/subjects.tsx';



export default function HomeLayout({ children}: { children: React.ReactNode})
{
  return <section><ContentMap/>{children}</section>
}