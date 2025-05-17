import SERTIMA_YOUTUBE_PAYLOAD_MOCK from './YoutubeResponses/ivansertima.js';
import DR_BEN_YOUTUBE_PAYLOAD_MOCK from './YoutubeResponses/drben.js';
import CLAUDANDERSON_YOUTUBE_PAYLOAD_MOCK from './YoutubeResponses/claudanderson.js';
import DRLEONARDJEFFRIES_YOUTUBE_PAYLOAD_MOCK from './YoutubeResponses/leonardjeffries.js';
import DRCRESSWESLING_YOUTUBE_PAYLOAD_MOCK from './YoutubeResponses/drcressWesling.js';
import AMOS_YOUTUBE_PAYLOAD_MOCK from './YoutubeResponses/amoswilson.js';
import DR_CLARKE_YOUTUBE_PAYLOAD_MOCK from './YoutubeResponses/johnhenrikclarke.js';
import LLAILAAFRIKA_YOUTUBE_PAYLOAD_MOCK from './YoutubeResponses/llailaAfrika.js';
//* ******       Initial Store State ***********/

const profileState = {
  profiles: {
    1: {
      id: '1',
      name: 'Maat eL',
      website: 'http://peace.unity.earth',
      email: 'abc@email.com',
      phone: '5551234567',
      location: {longitude: -122, latitude: 33},
      description: 'Many positive moves for the Collectives',
      imageURI:
        'file:///var/mobile/Containers/Data/Application/96EAD515-4EBC-4788-A22C-AAF4C83B5AE6/Library/Caches/ExponentExperienceData/%2540anonymous%252FGathering-43db4615-f691-4f2d-908f-daa4fcf37f38/ImagePicker/3CF05F8C-A9E1-44B0-B482-6C3DF285F45A.jpg',
    },

    2: {
      id: '2',
      name: 'Nami',
      website: 'www.website.com',
      email: 'nami@bar.com',
      phone: '5559876543',
      location: {longitude: -122, latitude: 33},
      description: 'Faery dust science',
      imageURI:
        'file:///var/mobile/Containers/Data/Application/96EAD515-4EBC-4788-A22C-AAF4C83B5AE6/Library/Caches/ExponentExperienceData/%2540anonymous%252FGathering-43db4615-f691-4f2d-908f-daa4fcf37f38/ImagePicker/3CF05F8C-A9E1-44B0-B482-6C3DF285F45A.jpg',
    },
  },
};

const eventState = {
  /*tmpEvent: {
    name: 'event A',
    website: 'www.event.com',
    email: 'abc@eventemail.com',
    phone: '5551234567',
    calendar: {year: '2019', month: '06', day: '22'},
    dateInfo: {year: '2019', month: '01', day: '22'},
    locationInfo: {
      state: 'NY',
      country: 'USA',
      location: '1600 Pennsylvania Ave, Washington DC',
      longitude: -122,
      latitude: 33,
    },
    location: '1600 Pennsylvania Ave, Washington DC',
    description: 'Interesting Event Info',
    imageURI:
      'file:///var/mobile/Containers/Data/Application/96EAD515-4EBC-4788-A22C-AAF4C83B5AE6/Library/Caches/ExponentExperienceData/%2540anonymous%252FGathering-43db4615-f691-4f2d-908f-daa4fcf37f38/ImagePicker/3CF05F8C-A9E1-44B0-B482-6C3DF285F45A.jpg',
  },*/
  events: {
    1: {
      id: '1',
      name: 'Jax Event',
      website: 'http://peace.unity.earth',
      email: 'abc@email.com',
      calendar: {year: '2019', month: '06', day: '12'},
      locationInfo: {
        state: 'NY',
        country: 'USA',
        location: '1600 Pennsylvania Ave, Washington DC',
      },
      phone: '5551234567',
      location: '1600 Pennsylvania Ave, Washington DC',
      description: 'Many positive moves for the Collectives',
      imageURI:
        'file:///var/mobile/Containers/Data/Application/96EAD515-4EBC-4788-A22C-AAF4C83B5AE6/Library/Caches/ExponentExperienceData/%2540anonymous%252FGathering-43db4615-f691-4f2d-908f-daa4fcf37f38/ImagePicker/3CF05F8C-A9E1-44B0-B482-6C3DF285F45A.jpg',
    },

    2: {
      id: '2',
      name: 'Nami Production',
      website: 'www.website.com',
      email: 'nami@bar.com',
      calendar: {
        year: '2019',
        month: '06',
        day: '25',
        hour: '14',
        minute: '00',
      },
      locationInfo: {
        state: 'NY',
        country: 'USA',
        location: '1600 Pennsylvania Ave, Washington DC',
      },
      dateInfo: {
        year: '2019',
        month: '06',
        day: '25',
        hour: '14',
        minute: '00',
      },
      location: '1600 Pennsylvania Ave, Washington DC',
      phone: '5559876543',
      description: 'Faery dust science',
      imageURI:
        'file:///var/mobile/Containers/Data/Application/96EAD515-4EBC-4788-A22C-AAF4C83B5AE6/Library/Caches/ExponentExperienceData/%2540anonymous%252FGathering-43db4615-f691-4f2d-908f-daa4fcf37f38/ImagePicker/3CF05F8C-A9E1-44B0-B482-6C3DF285F45A.jpg',
    },
  },
};

const authUsersState = {
  app: {isConnectedToInternet: false},
  auth: 1, // constants-> NEED_AT_LEAST_ANONYMOUS_LOGIN,
  users: {
    1: {username: 'mattiamanzati', token: 'resthttprequestsaccesstoken'},
    2: {username: 'another user'},
  },
};
const dbState = {
  profilesCRUD: {
    isFetching: false,
    didInvalidate: false,
    dbProfiles: [],
  },
  eventsCRUD: {
    isFetching: false,
    didInvalidate: false,
    dbEvents: [],
  },
};
const mentalslavery = {
  description:
    'Understanding the European and the parts of us that are Square to Our Neter',
  videos: [
    {
      title: 'Clearing the Negropean Mindset',
      speaker: ['Marimba Ani'],
      url: 'https://www.youtube.com/watch?v=mK6TPhLN0Yg&list=PL_LtcH31mPi884ePr7ZlvG44XXzjDCeZL',
    },
    {
      title: 'Clearing the Negropean Mindset',
      speaker: ['Dr Degruy'],
      url: 'hePr7ZlvG44XXzjDCeZL',
    },
  ],
};
const blogs = [
  {url: 'https://www.noi.org/', title: 'Nation of Islam'},
  {url: 'https://www.blackpast.org', title: 'Black Past .org'},
];

const onlineMediaContent = [
  {
    title: 'Innerversity',
    category: 'occult',
    links: [{type: 'patreon', url: 'https://www.patreon.com/sanetertv'},{type:'website', url:'https://www.secretenergy.com/'}],
    imageURI:
      'https://yt3.ggpht.com/a-/AAuE7mAaea03f9JDjz9WBM6hx1QSPomQj9EXdgVcwA=s176-mo-c-c0xffffffff-rj-k-no',
  description:
      'Peace and wholeness',
 },
  {
    title: 'House of Reawakening Minds',
    links: [
      {type: 'website', url: 'https://www.houseofreawakeningminds.com'},
      {
        type: 'youtube',
        url: 'https://www.youtube.com/@officialhouseofre-awakenin5190',
      },
    ],
    imageURI:
      'https://yt3.googleusercontent.com/ytc/AOPolaQI2TZitxNTYRzNbMmd6yxZI9c8HuP1QntTluth=s176-c-k-c0x00ffffff-no-rj-mo',
    url: 'https://www.youtube.com/channel/UCbf44EY8e1cT34vfpxcHSKg/videos',
    category: 'occult',

    description:
      'House of Re-Awakening Minds is a holistic center for spiritual grounding, free thought, self-discovery and Moorish Science. An awakening experience for all ages.',
  },
  {
    title: 'Saneter TV',
    links: [
      {type: 'patreon', url: 'https://www.patreon.com/sanetertv'},
      {
        type: 'youtube',
        url: 'https://www.youtube.com/channel/UCyYZ6-LdEXaZzxA0RsJ93GQ/videos',
      },
    ],
    imageURI:
      'https://yt3.ggpht.com/a-/AAuE7mAZj8RUYnGN9sYWSBt8o3DzWPKK7SUpaIt32Q=s176-c-k-c0x00ffffff-no-rj-mo',
    url: 'https://www.youtube.com/channel/UCyYZ6-LdEXaZzxA0RsJ93GQ/videos',
    category: 'Debates',

    description:
      'Regular guests from the community giving information that matters to the community.',
  },
  {
    title: 'BlackMagik363',
    links: [
      {type: 'patreon', url: 'https://www.patreon.com/blackmagik363'},
      {type: 'youtube', url: 'https://www.youtube.com/@blackmagik363/videos'},
    ],
    description:
      'Phillip Matthews has been spreading the message and doing the work for over 20 years. He brings together and interviews giants like Brothers Haiwatha Kamene, Oba T Shaka, Dr Nichols with topics ranging from epigentics to history...to solutions.',
    url: 'none',
    category: 'occult',
    youtubePlaylist: 'https://www.youtube.com/@blackmagik363/videos',
    imageURI:
      'https://yt3.googleusercontent.com/ytc/AOPolaRijb7IwXDXMFFUhvIYMvSVfUpMXa7N8um-oImT=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    links: [{type: 'patreon', url: 'https://www.patreon.com/sanetertv'}],

    title: 'Aseer the Duke of Tiers',
    category: 'history',

    description:
      'Phillip Matthews has been spreading the message and doing the work for over 20 years. He brings together and interviews giants like Brothers Haiwatha Kamene, Oba T Shaka, Dr Nichols with topics ranging from epigentics to history...to solutions.',
    url: 'http://www.aseerthedukeoftiers.com',
    youtubePlaylist: 'https://www.youtube.com/@TheDukeOfTiers',
    imageURI:
      'https://yt3.googleusercontent.com/ytc/AOPolaQ_jwEIKGrpsscl3jRGlA3OxPyDutXRxOWhv_JXEw=s176-c-k-c0x00ffffff-no-rj-mo',
  },
  {
    title: 'James Lovett',
    links: [
      {type: 'patreon', url: 'https://www.Patreon.com/jamesclovett'},
      {type: 'website', url: 'https://www.Blacksite32.com'},
      {
        type: 'youtube',
        url: 'https://www.youtube.com/channel/UCrDkHPAbgmVkkRGTLT_o7pw',
      },
    ],
    description:
      'Phillip Matthews has been spreading the message and doing the work for over 20 years. He brings together and interviews giants like Brothers Haiwatha Kamene, Oba T Shaka, Dr Nichols with topics ranging from epigentics to history...to solutions.',
    url: 'www.Blacksite32.com',
    category: 'civics',

    youtubePlaylist: 'https://www.youtube.com/@thebadwolf/',
    imageURI:
      'https://yt3.googleusercontent.com/Z5VkE0uD84zdje9NpIwj1Rcmc4dyzVuYFTE-qTxeizN_EsJTNDiiKUueAEKDjMv1g6TlIXKS548=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    title: "The People's Remedy",
    links: [
      {type: 'patreon', url: 'https://www.patreon.com/sanetertv'},
      {type: 'youtube', url: 'https://www.Thepeoplesremedyinc.org'},
    ],
    category: 'civics',
    description: 'Know your rights and learn how to protect them at all cost!',
    url: 'https://www.Thepeoplesremedyinc.org',
    youtubePlaylist: 'https://www.youtube.com/@TheDukeOfTiers',
    imageURI:
      'https://yt3.googleusercontent.com/ytc/AOPolaR3CqqtRE03x7SrweaCYoj7H1dQIDxx8WuLSAO7EA=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    title: 'Yusef EL',
    links: [
      {type: 'patreon', url: 'https://www.patreon.com/sanetertv'},
      {type: 'website', url: 'https://linktr.ee/yusefel19'},
    ],
    description:
      'High Frequency Radio is an online educational platform dedicated to teaching the general public about Private Rights.',
    url: 'https://linktr.ee/yusefel19',
    category: 'civics',
    youtubePlaylist: 'https://www.youtube.com/@TheDukeOfTiers',
    imageURI:
      'https://yt3.googleusercontent.com/E6ylR5Kjyqog9_eLOHzbpKc4EThHkb6WUzEhlROlDQYgIwBtLXGI5vMGxgGstAMRlptWxZIbXnc=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    title: 'Sabir Bey',
    bio : 'Sabir Bey is a renowned historian, journalist, and jurist dedicated to uncovering the untold stories of Moorish ancestry and African herita... https://realsabirbey.gumroad.com/',
   links: [{type: 'patreon', url: 'https://www.patreon.com/sanetertv'}],
    category: 'history',
    description:
      'High Frequency Radio is an online educational platform dedicated to teaching the general public about Private Rights.',
    url: 'https://linktr.ee/yusefel19',
    youtubePlaylist: 'https://www.youtube.com/@TheDukeOfTiers',
    imageURI:
      'https://yt3.googleusercontent.com/E6ylR5Kjyqog9_eLOHzbpKc4EThHkb6WUzEhlROlDQYgIwBtLXGI5vMGxgGstAMRlptWxZIbXnc=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    title: 'LVX777',
    links: [{type: 'patreon', url: 'https://www.patreon.com/sanetertv'}],

    imageURI:
      'https://scontent.ftij1-2.fna.fbcdn.net/v/t1.6435-1/p480x480/35488036_898244010384204_1270468145248731136_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=iRhIPNnamMIAX8ydPmN&_nc_ht=scontent.ftij1-2.fna&edm=AOf6bZoEAAAA&oh=c4db2ffa94a51846f570fa8a07c7a98c&oe=616AC812',
    url: 'https://www.youtube.com/channel/UCbf44EY8e1cT34vfpxcHSKg/videos',
    description: 'The Magus Society',
    category: 'occult',
  },
  {
    title: 'Zero Percent',
    category: 'civics',
    links: [{type: 'patreon', url: 'https://www.patreon.com/sanetertv'}],

    imageURI:
      'https://scontent.ftij1-2.fna.fbcdn.net/v/t1.6435-1/p480x480/35488036_898244010384204_1270468145248731136_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=iRhIPNnamMIAX8ydPmN&_nc_ht=scontent.ftij1-2.fna&edm=AOf6bZoEAAAA&oh=c4db2ffa94a51846f570fa8a07c7a98c&oe=616AC812',
    url: 'https://www.youtube.com/channel/UCbf44EY8e1cT34vfpxcHSKg/videos',
    description: 'The Magus Society',
  },
];

const onlineGroups = [
  {
    title: 'Innerversity',
    imageURI:
      'https://yt3.ggpht.com/a-/AAuE7mAaea03f9JDjz9WBM6hx1QSPomQj9EXdgVcwA=s176-mo-c-c0xffffffff-rj-k-no',
    url: 'https://www.secretenergy.com/about-us',
    description: 'The Magus Society',
  },
  {
    title: 'LVX777',
    imageURI:
      'https://scontent.ftij1-2.fna.fbcdn.net/v/t1.6435-1/p480x480/35488036_898244010384204_1270468145248731136_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=iRhIPNnamMIAX8ydPmN&_nc_ht=scontent.ftij1-2.fna&edm=AOf6bZoEAAAA&oh=c4db2ffa94a51846f570fa8a07c7a98c&oe=616AC812',
    url: 'https://www.youtube.com/channel/UCbf44EY8e1cT34vfpxcHSKg/videos',
    description: 'The Magus Society',
  },
  {
    title: 'Zero Percent',
    imageURI:
      'https://scontent.ftij1-2.fna.fbcdn.net/v/t1.6435-1/p480x480/35488036_898244010384204_1270468145248731136_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=iRhIPNnamMIAX8ydPmN&_nc_ht=scontent.ftij1-2.fna&edm=AOf6bZoEAAAA&oh=c4db2ffa94a51846f570fa8a07c7a98c&oe=616AC812',
    url: 'https://www.youtube.com/channel/UCbf44EY8e1cT34vfpxcHSKg/videos',
    description: 'The Magus Society',
  },
  {
    title: 'Phil Valentine University',
    donationLink: {type: 'patreon', url: 'https://www.patreon.com/sanetertv'},
    imageURI:
      'https://yt3.ggpht.com/a-/AAuE7mAZj8RUYnGN9sYWSBt8o3DzWPKK7SUpaIt32Q=s176-c-k-c0x00ffffff-no-rj-mo',
    url: 'https://www.youtube.com/channel/UCyYZ6-LdEXaZzxA0RsJ93GQ/videos',
    description: "Info on Phil Valetine's University",
  },
];

const amos_url =
  'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCNprjQ-mnD5816kx6SEfgfg&key=AIzaSyCSXLM0pMb0GCPvNtVdd1GeSa0UCl6zAEM';
const drClarke_url =
  'https://www.googleapis.com/youtube/v3/search?part=snippet&q=john+henrik+clarke&key=AIzaSyCSXLM0pMb0GCPvNtVdd1GeSa0UCl6zAEM';
const drBen_url =
  'https://www.googleapis.com/youtube/v3/search?part=snippet&q=dr+ben+jochannan&key=AIzaSyCSXLM0pMb0GCPvNtVdd1GeSa0UCl6zAEM';
const drsertima_url =
  'https://www.googleapis.com/youtube/v3/search?part=snippet&q=dr+ivan+sertima&key=AIzaSyCSXLM0pMb0GCPvNtVdd1GeSa0UCl6zAEM';

const youTubeResources = [
  {
    key: 1,
    title: 'Dr Ivan Sertima',
    url: 'http://www.journalofafricancivilizations.com/VanSertima',
    images: [
      'https://i.pinimg.com/474x/da/63/f0/da63f05d83205619ca686d744b160dff.jpg',
    ],
    generalCategory: ['History'],
    description: 'Bio',
    payload: SERTIMA_YOUTUBE_PAYLOAD_MOCK,
  },
  {
    key: 2,
    title: 'Dr Ben Jochannan',
    url: drBen_url,
    generalCategory: ['History'],
    description: 'Bio',

    payload: DR_BEN_YOUTUBE_PAYLOAD_MOCK,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dr_Ben.jpg/220px-Dr_Ben.jpg',
    ],
  },
  {
    key: 3,
    title: 'Dr John Henrik Clarke',
    url: [
      'https://www.blackpast.org/african-american-history/clarke-john-henrik-1915-1998/',
      'https://www.brainyquote.com/authors/john_henrik_clarke',
    ],
    generalCategory: ['History'],
    payload: DR_CLARKE_YOUTUBE_PAYLOAD_MOCK,
    description: 'Bio',

    images: [
      'data:image/jpeg;base64,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',
    ],
  },
  {
    key: 4,
    title: 'Dr Amos Wilson',
    description: 'Bio',

    url: [
      'https://africanbloodsiblings.wordpress.com/2012/06/11/dr-amos-wilsons-last-interview-1995/',
    ],
    generalCategory: ['Psychology'],
    payload: AMOS_YOUTUBE_PAYLOAD_MOCK,
    images: [
      'https://thenaturalfestival.com/wp-content/uploads/2019/03/1552092339_hqdefault.jpg',
    ],
  },
  {
    key: 5,
    title: 'Dr Claud Anderson',
    url: ['https://powernomics.com/'],
    generalCategory: ['Economics'],
    description: 'Bio',
    payload: [],
    images: [
      'data:image/jpeg;base64,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',
    ],
  },
  {
    key: 6,
    title: 'Dr Llaila Afrika',
    url: ['https://www.llailaafrika.com/'],
    generalCategory: ['Economics'],
    description: 'Bio',
    payload: LLAILAAFRIKA_YOUTUBE_PAYLOAD_MOCK,
    images: [
      'https://thenaturalfestival.com/wp-content/uploads/2019/03/1552092339_hqdefault.jpg',
    ],
  },
  {
    key: 7,
    title: 'Dr Frances Wesling',
    url: 'https://www.noi.org/dr-frances-cress-welsing/',
    generalCategory: ['Psychiatry'],
    description: 'Bio',
    payload: DRCRESSWESLING_YOUTUBE_PAYLOAD_MOCK,
    images: [
      'https://appealinc.wildapricot.org/resources/Pictures/welsing%20crop.jpg',
    ],
  },
      {
    key:8,
    title: 'Dr Wade Nobles',
    url: 'https://www.drwadenobles.com/',
    payload: [],
    generalCategory: ['History'],
    images: [
      'https://static.wixstatic.com/media/b5ad7a_19a46f2a60ad445c97f026054bfb33ec.png/v1/fill/w_423,h_317,al_c,usm_0.66_1.00_0.01/b5ad7a_19a46f2a60ad445c97f026054bfb33ec.png',
    ],
  },
{
    key:9,
    title: 'Dr Leonard Jeffries',
    url: 'http://kentakepage.com/dr-leonard-jeffries-pan-african-educator/',
    payload: [],
    generalCategory: ['History'],
    images: [
      'data:image/jpeg;base64,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',
    ],
  },
];

export const ILLUMINATOR_DATA = {
    "children": [
        {
            "name": "History",
            "children": [
                {
                    "name": "Dr Ivan Sertima",
                    "group": "History",
                    "value": 15,
                    "img": 'https://i.pinimg.com/474x/da/63/f0/da63f05d83205619ca686d744b160dff.jpg',
                    "colname": "level3"
                },
                {
                    "name": "Dr Ben",
                    "group": "A",
                    "img" : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dr_Ben.jpg/220px-Dr_Ben.jpg',
                    "value": 19,
                    "colname": "level3"
                },
                {
                    "name": "Dr Clarke",
                    "group": "C",
                    "img" : 'data:image/jpeg;base64,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',
                    "value": 18,
                    "colname": "level3"
                },
            ],
            "colname": "level2"
        },
        {
            "name": "Psychiatry",
            "children": [
                {
                    "name": "Dr Frances Wesling",
                    "group": "C",
                    "img" : 'https://appealinc.wildapricot.org/resources/Pictures/welsing%20crop.jpg',
                    "value": 14,
                    "colname": "level3"
                },
                {
                    "name": "Dr Amos Wilson",
                    "group": "A",
                    "img" : 'https://thenaturalfestival.com/wp-content/uploads/2019/03/1552092339_hqdefault.jpg',
                    "value": 11,
                    "colname": "level3"
                },
                {
                    "name": "g",
                    "group": "B",
                    "img" : 'http://lorempixel.com/200/200/',
                    "value": 15,
                    "colname": "level3"
                },
                {
                    "name": "h",
                    "group": "B",
                       "img" : 'http://lorempixel.com/200/200/',
                    "value": 16,
                    "colname": "level3"
                }
            ],
            "colname": "level2"
        },
        {
            "name": "Economics",
            "children": [
                {
                    "name": "Dr Llaila Afrika",
                    "group": "A",
                    "img" : 'https://thenaturalfestival.com/wp-content/uploads/2019/03/1552092339_hqdefault.jpg',
                    "value": 18,
                    "colname": "level3"
                },

            ],
            "colname": "level2"
        }
    ],
    "name": "CEO"
};  



const subjects = [{etymology: '', description: 'language has been weaponized'}];

const digitalResources = [
  {
    key: '1',
    title: 'Hidden Colors',
    description: 'Comprehensive outline of our struggle',
  },
  {key: '2', title: '1804', description: 'The Haitian Revolution'},
  {key: '3', title: 'Out of Darkness', description: ''},
];

const misConceptions = [
  "India didn't exist before 1940's Hindustan, so why did he label the Africans that he found as Indians",
  '',
];

export const videoMediaPromotions = [
  {
    key: '0',
    title: 'Heavy Is the Crown',
    imageURI:
      'https://resizing.flixster.com/7RBLGm6vJpPVihhFtGOBvznzJdM=/206x305/v2/https://flxt.tmsimg.com/assets/p22071668_p_v13_aa.jpg',
    subTitle: 'Vol I',
  },
  /*{
    key: '1',
    title: 'Hidden Colors',
    imageURI:
      'https://s3.amazonaws.com/classconnection/480/flashcards/2867480/png/screen_shot_2015-10-25_at_82913_pm-150A232408E23829107-thumb400.png',
    subTitle: 'Actions Of Unity',
  },*/
  {
    key: '2',
    title: 'The 1804',
    imageURI:
      'https://pics.filmaffinity.com/1804_the_hidden_history_of_haiti-611104234-mmed.jpg',
    subTitle: 'Haitian Revolution',
  },
  {
    key: '3',
    title: 'Out of Darkness',
    imageURI: 'https://flxt.tmsimg.com/assets/p17799181_p_v8_aa.jpg',
    subTitle: 'Our Pschology',
  },
];

const webResources = [
  {
    key: '1',
    title: 'Africa_Town',
    url: 'https://www.africatownlandtrust.org/',
    imageURI:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgacuZq8DhptH0-Ugw1hfZ9-sbdmUlkybNxW8BnP524aXeWFXM',
  },
  {
    key: '2',
    title: 'Black Wall Street',
    url: 'https://obws.com/',
    imageURI:
      'https://obws.com/static/media/orangeLogo.65a2c7cdc0e74079bdfab5812d8df90b.svg',
  },
  {
    key: '3',
    title: 'National Black Guide',
    url: 'http://www.nationalblackguide.com/black-directory/',
    imageURI:
      'https://www.nationalblackguide.com/media/cache/logo/custom/domain_1/content_files/img_logo.png?1707421212',
  },
  {
    key: '4',
    title: 'Support Black Owned',
    featureDescription: 'The name pretty much speaks for itself.',
    url: 'https://www.supportblackowned.com/',
    imageURI: 'https://www.supportblackowned.com/images/sitelogo2.png',
  },
];

const resourcesData = {
  youTubeResources: youTubeResources,
  webResources: webResources,
  onlineMediaContent: onlineMediaContent, //Phil Shock Matthews Alim Bey's, Aseer
  onlineGroups: onlineGroups, //ex. Magus Society, InnerVersity
  digitalResources: digitalResources,
};

const sideBarData = [
  {
    routeName: 'Home',
    label: 'Home',
    path: 'Home',
    requiresVerification: false,
    icon: 'home',
  },
  {
    routeName: 'ProfileView',
    label: 'Profile',
    path: 'ProfileView',
    requiresVerification: true,
    icon: 'person',
  },
  {
    routeName: 'Activities',
    label: 'Activities',
    path: 'Activities',
    requiresVerification: false,
    icon: 'search',
  },
  {
    routeName: 'Trubrary',
    label: 'Library',
    path: 'Trubrary',
    requiresVerification: false,
    icon: 'business',
    videoData: null,
    onlineMediaContent: null,
    webResources: null,
  },
];

export const initialStoreState = {
  profiles: profileState,
  events: eventState,
  auth: authUsersState,
  sideBar: sideBarData,
  resourcesData: resourcesData,
  videoMediaPromotions: videoMediaPromotions,
};
