
import "../globals.css";
import AppNavBar from './appnavbar.js';
 import ReferencesTable from './references/page.js';
import Welcome from './home/welcome.tsx';

import { references} from './../src/constants/references.js';

export default function ReferenceAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className="">

        <AppNavBar  className="sticky top-10 py-2 z-10 bg-white" />

          <ReferencesTable references={references}> {children}</ReferencesTable>
         </section>
}