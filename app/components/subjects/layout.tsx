
import AppNavBar from './../appnavbar.js';
 import ReferencesTable from './references/page.js';
import Subjects from './subjects.tsx';



/**
 * /components/subjects
 */
export default function SubjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
            <Subjects/>
            <AppNavBar/>
            {children}
         </section>
}

