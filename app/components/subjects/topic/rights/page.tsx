"use client"
import React from "react";
import  {Link,Image} from "@heroui/react";

import ReferencesTable from './../../references/page.js';
 
export default function TopicHome() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];


  return (<div className='mx-5'>

    <div>
        <h1 className="font-bold text-lg">Property, Rights, and Law</h1>
        <div className='mx-5'>
          <h3 className="font-bold">What is the difference between rights and privelidges</h3>
          <p className='my-2  indent-12'>In the heirarchy of &quot;rights&quot;, divine rights sit at the top without equal. 
           They are the same rights given by the &quot;Creator&quot; when the Creator &quot;created&quot; the divine laws of existence.
             These  like &quot;cause and effect&quot; are  axiomatic for theist, athiests, and everyone in between.
          Essentally, the answer is indicated by the source of the right.  If a human or something created by humans has given yoo </p>
      </div>

      <div  className='mx-5'>
          <h3 className="font-bold">What are your rights and how do you enforce your rights?</h3>
          <p className='my-2  indent-12'> Your rights are enforced through contract</p>
        </div>

      <div className='mx-5'><h3 className="font-bold">What is the relationship between rights and law and contracts?</h3>
        <p className='my-2  indent-12'></p>
      </div>
     </div>
          

    <div className='mx-5'><h3>What are contracts?</h3>
    <dl>
  <dt>contract</dt>
  <dd>
      <div className='bg-[#eee] w-[80%]'>
        <p className='my-2  indent-12'>
            A contract may be defined as an exchange relationship created by oral or witten agreement between two or more persons,
            containing at least one promise, and recognized in law as enforceable.  This definition reflects several essential elements:
        </p>
        <ol>
        <li>An Oral or written agreement between two or more persons</li>
        <li>An exchange relationship</li>
        <li>At least one promise</li>
        <li>Enforcability</li>
        </ol>
      </div>
    </dd>
    <dd>
       <div className='bg-[#eee] w-[80%]'>
        <p className='my-2  indent-12'>
            A &quot;contract&quot; is an agreement that the law will enforce.
        </p>
        <p>Although the word contract often refers to a written document, a writing is not always necessary to create a contract.
        An agreement may be binding on both parties even though it is oral. Some contracts, however, must be in writing under the [Statute of Frauds]</p>
      </div>   
       <ol>
        <li>Contract Law is essentially common law, i.e. judge-made, not statutory</li>
        <li>If the UCC is silent on a particular question, the common law of the state will control.</li>
        </ol> 
 
 
        <p>page 45</p>
        {/**<ReferencesTable columns={citationColumns} rows={[references[10]]}/>*/}
    </dd>
  </dl>
    </div>
    
    <div className='mx-5'><h3 className="font-bold">The 1787 Constitution as a contract</h3>
  <p>The US Constitution of 1787 is a contract much like a trust in which the Trustee, the Federal or State government will protect and secure the human rights of it&apos;s Beneficiaries, The People or citizens of one of  the states of the Union,
  in exchange for their allegiance and participation.</p>
<p>The historically, laws are enacted to protect and allow the free use of one&apos;s property and to ensure that everyone is unhindered (as much as possible) by the the exercise of rights (usage of property). </p>
    <ul><h3>N.B.</h3>
      <li>
          <p className='my-2  indent-12'>
          One of the biggest rights the Constitution protects is the right to contract unlimited.
           This right is superior to even the Bill of Rights because all the rights secured by the
           Bill of Rights can be contracted away.  You are free to give up your rights or simply 
           not defend or assert them.
           </p>
          
          <p className='my-2  indent-12'>
&quot;The federal and state governments are in fact but different agents and trustees of the people, constituted with different powers, and designed for different purposes.&quot; -James Madison, Federalist No. 46.
           </p></li>
      </ul>
    </div>

</div>);
}
