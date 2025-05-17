
export const VIDEOS_PATH = "/videos/";

export const SELECT_All_OPTION = 'All';
export const TYPE_BOOK = 'Book';
export const TYPE_WEBSITE = 'Website';
export const TYPE_VIDEO = 'Video';
export const TYPE_AUDIO = 'Audio';
export const CATEGORY_HISTORY = 'History';
export const CATEGORY_ECONOMICS = 'Economics';
export const CATEGORY_PSYCHOLOGY = 'Psychology';
export const CATEGORY_OCCULT = 'Esoteric';
export const CATEGORY_CIVICS = 'Civics';
export const SUBCATEGORY_CONTRACTS = 'Contracts'

export const REFERENCE_TYPES = [
  {key: TYPE_BOOK, label: "Book"},
  {key: TYPE_WEBSITE, label: "Website"},
  {key: TYPE_VIDEO, label: "Video"},
  {key: TYPE_AUDIO, label: "Audio"},
];

export const categories = [
  {key: SELECT_All_OPTION, label: SELECT_All_OPTION,description:''},
  {key: CATEGORY_HISTORY, label: CATEGORY_HISTORY, description: ''},
  {key: CATEGORY_ECONOMICS, label: CATEGORY_ECONOMICS, description: ''},
  {key: CATEGORY_PSYCHOLOGY, label: CATEGORY_PSYCHOLOGY, description: ''},
  {key: CATEGORY_OCCULT, label: CATEGORY_OCCULT, description: ''},
  {key: CATEGORY_CIVICS, label: CATEGORY_CIVICS, description: ''},
];
 

export const faqs = [
  { key : 1,
    question: 'Where did "white" people come from?',
    answers: [
      {url: 'https://www.youtube.com/watch?v=YLgK0xzK_2U', desc: ''},
      {
        url: 'https://www.youtube.com/watch?v=I_v77StW7tM',
        desc: 'Drs Imhotep and Hiawatha',
        title:
          'Ancient African History and the Six Physical Transmutations of the Human Family',
      },
    ],
  },
  { key : 2,
    question: 'Why do we call some people white and others black?',
    answers: [
      {
        url: 'https://www.youtube.com/watch?v=HhAjycvAN8k',
        desc: 'Dr Jaqueline Battalora and Jane Elliot',
        title:
          'Dr. Jacqueline Battalora and Jane Elliott Debate White Privilege',
      },
      {
        url: 'https://www.youtube.com/watch?v=rPhlteY1knA',
        desc: 'Dr Jaqueline Battalora',
        title: '1681 - The Invention of Race: The Laws that Changed the World!',
      },
    ],
  },
];

 export const _civicsFundamentalsArray=[{displayHeading:"The Money Master",pathName:"TheMoneyMasters.mp4", subject:'', comments:[' This gives context and details on US banking history and the corruptions that has caused to be in the bankrupt state it currently is in (as of 2025).','31 CFR 800.253 US NATIONAL, 8 usc 1101 22a and b, GPO Styles section 5.23, 8 Foreign Affaires manual section 505.2 (Passport Induction9)']},
                   {displayHeading:'dflt_What\'s the big deal about the Constitution?', markers:[{timestamp:"1:52:00- history of rights and British colonizers"}], pathName:"MichaelBadnarik-ConstitutionClass.mp4", subject:'', comments:['Michael Badnarik - Constitution Class (Complete), Michael has run for President a few times.','We are a Republic not a Democracy.Learn  the difference and the benefits of the rights of the republic verse the priveledges of a democracy.']},
                   {displayHeading:"Rights of private Citizens (state) vs Priveledges of US Citizens (Federal)",pathName:"ExLawEnforcementOfficerRichardMcDonaldonStateCitizenshipJune_17_2005.mp4", subject:'', comments:['A resident is an alien in relation to the state??? So many essential keys to understanding how the "System" works...  ','Jones vs Temmer 829 Fed Supp 1226  1993, Cal Gov code Section 242, K. Tashiro vs Jordan 256 Pacific 545 (CA Supreme Court Case), Crossey Vs Board 221 Atlantic 2nd 431 1966 ,Roberts vs Robert 81 Caleb 2nd 871 (marriage contracts), (Inray Johnson  Estate 73 specific 424 [31:15])... ']},
                  ];

 export const _moneyAndBankingArray=[{displayHeading:"US Economic Fraud in a Nutshell",pathName:"AmericanEconomics_MikeAdams.mp4", subject:'', comments:['A very nicely interwoven summary of the United States Foreign and Domestic economic policy...','']},
                   {displayHeading:"The Money Master",pathName:"TheMoneyMasters.mp4", subject:'', comments:[' This gives context and details on US banking history and the corruptions that has caused to be in the bankrupt state it currently is in (as of 2025).','31 CFR 800.253 US NATIONAL, 8 usc 1101 22a and b, GPO Styles section 5.23, 8 Foreign Affaires manual section 505.2 (Passport Induction9)']},
  ];

                     

 export const _badWolf_Videos={
            videos:[{key:"James Lovett", displayHeading:"(Mr == mentally retar....)",pathName:"https://youtu.be/xY7Fu7k_bmM?si=RM21lQm9_WX10xzG", subject:'', markers:[{timestamp:'35:10', comments:'Necropan...Atlantis and the Law of One'},{timestamp:'21:14:00', comment:'How Mr. may carry hidden connotations'},{timestamp:'20:20:00',comment:'Notice the blend of law, history, and the occult ...- the esotoric significance of naming and the notion that he who creates has the "right" to control...'}],  comments:['Deep dive into the significance of Mr. in many venues','']},
                   {displayHeading:"More than one type of citizen?", pathName:"BIgBadWolf_USNAtional_codes.mp4", subject:'',  comments:['Do you know what type of citizen you are?  There are many types of citizens or ways to contract with the government.However when contracting it is important to know what role you play in the contract and the role any others must play in the execution of the contract.','31 CFR 800.253 US NATIONAL, 8 usc 1101 22a and b, GPO Styles section 5.23, 8 Foreign Affaires manual section 505.2 (Passport Induction9)']},
                  ]};
    


 export const AvAautobio = `Luisa Isabel Álvarez de Toledo, Duquesa de Medina Sidonia, investiga allí donde la historia
oficialmente aceptada hace aguas. Su libro África versus América es el resultado de toda una vida
de investigación y trabajo exhaustivo: localización de manuscritos, interpretación de textos y
análisis comparativo de datos que la propia historia oficial no suele tener en cuenta, cuando no los
oculta.`;

export const NO_PHOTO_ALTERNATIVE_URI = '/images/imagenotavailable.jpeg';

export const tableColumns = [ {    key: "category", label: "CATEGORY"}, {    key: "type", label: "TYPE"},
  {    key: "title", label: "TITLE" },{    key: "subtitle", label: "SUBTITLE" },
  {    key: "authors", label: "AUTHOR(S)" }, {    key: "copyright",label: "copyright" },{    key: "url",label: "url" },
];

 export const citationColumns = [ 
  {    key: "title", label: "TITLE" },{    key: "subtitle", label: "SUBTITLE" },  {    key: "type", label: "TYPE"},
  {    key: "authors", label: "AUTHOR(S)" }, {    key: "url",label: "url" },
];

  const _njingaArray=[{displayHeading:"Nzinga From Historical Context", pathName:"njinga/kofi_historicalcontext1.mp4", subject:'', comments:['The Legacy of Queen Njinga/Nzinga From Historical Context','']},   
                           {displayHeading:"Njinga Warrior Queen", pathName:"njinga/NjingaWarriorQueen.mp4", subject:'', comments:['Lecture on the Diplomacy of Ngolo Njinga Mbande','']},];
 
export const MONEYMATTERS_VIDEOLIST_KEY =  "Money Matters";             
export const specificallyCompiledVideos={'Njinga Mbande':_njingaArray, "Money Matters":_moneyAndBankingArray, 'Civics': _civicsFundamentalsArray, };

      
export const nzingaProfileRecord = 
    { id: 1, name: "Njinga Mbande", lifespan:'(1582 Ndongo - December 17, 1663 Matamba)', thumbnail:'/images/profiles/njinga/njingaDrawing.jpg', sources:[15], videoArray:_njingaArray };


export const huberthProfileRecord = 
    { id: 1, name: "Hubert Harrison", lifespan:'(1883  - 1917)', thumbnail:'/images/profiles/Hubert_Harrison_july2012.pdf', sources:[5,6,7,9], videoArray:_njingaArray };

export const historywebsitenorthcarolinaLeaf = {url:'https://omnika.org/texts/70'}
//  {id, category, subcategory ,type, title, subtitle,iconurl,relevance, authors:'', url:''}
//  https://eada.lib.umd.edu/ https://press-pubs.uchicago.edu/founders/

 export const references = [
    { id: 1, category:'history', type:'book',  title: `Africa versus America`, subtitle:'La Fuerza de la Paradigma', iconurl:'books/africa_versus_america.pdf' , relevance:AvAautobio,   authors:['Luisa Isabel Álvarez de Toledo, Duquesa de Medina Sidonia'] ,  description:'', url:'books/africa_versusamerica.pdf' , mentionedBy:{mentioner:'Sabir Bey'} },
    { id: 2, subcategory:'religious', category:'history', type:'book', title: "Book of Yahweh", subtitle:'Fragments from the Primitive Document in Seven Early Books of the Old Testament',  relevance:`This collection of the fragments of the primitive document is reverently dedicated to the memory of the great unknown poet prophet, to whom both Judaism and Christianity are indebted for their first Bible.`, 
              authors:['An Unknown Genius of the Ninth Century, B.C'] ,  description:'', url:'books/bookofyahweh.pdf', copyright:'1922' },
    { id: 3, category:'history', type:'book', title: "THE LAST OF THE TASMANIANS.", subtitle:'The Black War of Dan Diemans Land',  relevance:'Europe meets Australia and... well...',   authors:['James Bonwick'] ,  description:'', url:'books/lasttasmanianso_jamesbonwick.pdf'}, 
    { id: 4, type:'website', title: "The Constitution for the US", category:'civics',   relevance:'primary source',   authors:['James Madison'] ,  description:'', url:'https://constitution.congress.gov/constitution/'},
    { id: 5,   authors:'Fazıla Derya Agis', type:'document', category:'history', title:'Learning about a Woman Queen in Africa', subtitle:'Njinga (1583-1663) as an Ecological Human Rights Defender and a Sister Against Turbulent Times of Racism and War: An Ecolinguistic Study',  url:'books/history/Africa_Njinga_1583.pdf'},
    { id: 6,   authors:'Vulgur Society Podcast', type:'audio', category:'history', title:'Njinga of Ndongo and Matamba: Part Two', subtitle:'Podcast ',  url:'books/history/Africa_Njinga_1583.pdf'},
    { id: 7,   authors:'Linda M. Heywood', type:'book', category:'history', title:'Njinga of Angola', subtitle:`Africa's Warrior Queen`,  iconurl:'images/warriorqueen_cover.jpeg', url:'https://africanhistories.pubpub.org/reviews'},
    { id: 8,   authors:'Linda M. Heywood', type:'video', category:'history', title:'Njinga of Angola', subtitle:`Africa's Warrior Queen`,  iconurl:'images/imagenotavailable.jpeg', relevance:'Njunga\'s masterful diplomacy', url:'videos/NjingaWarriorQueen.mp4'},
    { id: 9,  type: 'website', category:'history', title:'QUEEN NJINGA’S MILONGAS', subtitle:`The ‘dialogue’ between Portuguese and Africans in the Congo and the Angola wars`,  iconurl:'images/imagenotavailable.jpeg',relevance:'', authors:'Martín Lienhard', url:'https://www.buala.org/en/to-read/queen-njinga-s-milongas-the-dialogue-between-portuguese-and-africans-in-the-congo-and-the-an#_ftnref'},
    { id: 10, subcategory:'contracts', category:'civics', type:'book', title: "Contracts", subtitle:'Examples & Explanations',  relevance:'',   authors:['Brian A. Blum'] ,  description:'', url:'books/civics/contracts/contractsExamplesAndExplanations.pdf'}, 
    { id: 11, subcategory:'contracts', category:'civics', type:'book', title: "Contracts", subtitle:'',  relevance:'',   authors:['Emanuel, Steven'] ,  description:'', url:'https://archive.org/embed/contracts0000eman'}, 
    { id: 12, subcategory:'', category:'civics', type:'book', title: "Paper Arrows", subtitle:'Excerpts from Howard Griswold',  relevance:'',   authors:['Griswold, Howard'] ,  description:'', url:'https://archive.org/embed/contracts0000eman'}, 
    { id: 13, subcategory:'', category:'civics', type:'book', title: "Federalist Papers", subtitle:'',  relevance:'primary source',   authors:['Alexander Hamilton, John Jay, James Madison'] ,  description:'', url:'https://guides.loc.gov/federalist-papers/full-text'}, 
    { id: 14, subcategory:'', category:'civics', type:'book', title: "Cooperative Federalism", subtitle:'',  relevance:'',   authors:['Gerald Brown, Ed.D'] ,  description:'', url:'books/civics/contracts/Cooperative_Federalism.pdf'}, 
    { id: 15, subcategory:'race', category:'civics', type:'book', title: "THE LEGAL POLITICS OF HUBERT H. HARRISON", subtitle:':EXCAVATING A LOST LEGACY',  relevance:'melanated but forced to be white',   authors:['Ravi Malhotra'] ,  description:'', url:'books/civics/yellow_by_law.pdf'}, 
    { id: 16, subcategory:'race', category:'civics', type:'book', title: "Yellow By Law", subtitle:'',  relevance:'',   authors:['Ravi Malhotra'] ,  description:'', url:'books/civics/yellow_by_law.pdf'}, 
    { id: 17, subcategory:'wisdom', category:'esotoric', type:'book', title: "Truth", subtitle:'',  relevance:'',   authors:['Swami Paramhangsa Sohom'] ,  description:'', url:'books/esoteric/vedic/truth-sohom-fulltext.pdf'}, 
    { id: 18, subcategory:'dictionary', category:'reference', type:'book', title: "Noah Webster 1828 Online English Dictionary", subtitle:'',  relevance:'',   authors:['Noah Webster'] ,  description:'', url:'https://webstersdictionary1828.com/Dictionary'}, 
    { id: 19, subcategory:'dictionary', category:'reference', type:'book', title: "Webster American English Dictionary", subtitle:'',  relevance:'',   authors:['Noah Webster'] ,  description:'', url:'https://www.merriam-webster.com/'}, 
    { id: 20, subcategory:'repository', category:'reference', type:TYPE_WEBSITE, title: "Carolana", subtitle:'One Unique Vision! Two Very Different Results!',  relevance:'primary sources',   authors:['J.D. Lewis'] ,  description:'Information about the Carolina colonies dating from 1600\'s', url:'https://www.carolana.com/'}, 
    { id: 21, subcategory:'repository', category:CATEGORY_HISTORY,  type:TYPE_WEBSITE, title:'Omnika', subtitle:'Documents in Law, History, and Diplomacy',iconurl:'',relevance:'translations',description:'Excellent for finding translations of old ancient documents', authors:'Omnika', url:'https://omnika.org/'},
    { id: 22, subcategory:'dictionary', category:'reference', type:'book', title: "Oxford English Dictionary", subtitle:'',  relevance:'',   authors:['Noah Webster'] ,  description:'', url:'https://www.oed.com/'}, 
    { id: 23, subcategory:'repository', category:CATEGORY_HISTORY ,type:TYPE_WEBSITE, title:'Library of Congress', subtitle:'',iconurl:'',description:'',relevance:'A wealth of artifacts', authors:'', url:'https://www.loc.gov/collections/'},
    { id: 24, subcategory:'commentary', category:CATEGORY_HISTORY ,type:TYPE_WEBSITE, title:'American Heritage', subtitle:'Black Pawn On A Field Of Peril',iconurl:'',description:'December 1963 Volume 15 Issue 1',relevance:'Summary', authors:'Bruce Catton', url:'https://www.americanheritage.com/black-pawn-field-peril'},
    { id: 25, subcategory:'repository', category:CATEGORY_HISTORY ,type:TYPE_WEBSITE, title:'Early Americas Digital Archive', subtitle:'',iconurl:'',description:'a collection of electronic texts originally written in or about the Americas from 1492 to approximately 1820',relevance:'Primary Sources', authors:'Various', url:'https://eada.lib.umd.edu/'},
    { id: 26, subcategory:'repository', category :CATEGORY_HISTORY ,type:TYPE_WEBSITE, title:'The Founder\'s Convention', subtitle:'',iconurl:'',relevance:'primary sources', authors:'Philip B. Kurland and Ralph Lerner ', url:'https://press-pubs.uchicago.edu/founders/'},
    { id: 27, subcategory:'', category :CATEGORY_HISTORY ,type:TYPE_BOOK, title:'Africans and Native Americans', subtitle:'The Language of Race and Red - Black peoples',iconurl:'', relevance:'', authors:'Jack D Forbes', url:'https://archive.org/details/africansnativeam0000forb'},
  ];
