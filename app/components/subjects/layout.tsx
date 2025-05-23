
import AppNavBar from './../appnavbar.js';
 import ReferencesTable from './references/page.js';
import ContentMap from './subjects.tsx';



/**
 * /components/subjects
 */
export default function SubjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
            <ContentMap/>
            {children}
         </section>
}

