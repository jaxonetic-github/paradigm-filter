
const metaphysics = {    key: "Occult", display: "The Occult", url: '/reservoir/metaphysics'};
const section_metaphysics = {title:'Metaphysics', subsections:[metaphysics]}

export const tricksOfTheTrade = {    key: "tricksOfTheTrade", display: "Tricks of the Trade", url: '/reservoir/communication/tricksOfTheTrade'};
export const debateExamples = {    key: "examples", display: "Examples of Excellence", url: '/reservoir/communication/examples'};
export const communication = {    key: "communication", display: "Communication", url: '/reservoir/communication'};
const section_communication = {title:'Communication', subsections:[communication, debateExamples, tricksOfTheTrade]}

export const epistemology = {    key: "All", display: "Epistemology", url: '/reservoir/epistemology'};
export const criticalThinking = {    key: "CriticalThinking", display: "CriticalThinking", url: '/reservoir/epistemology/CriticalThinking'};
export const socialControl = {    key: "SocialControl", display: "Social Control", url: '/reservoir/epistemology/SocialControl'};
export const dissonance = {    key: "Dissonance",  display: "Dissonance", url: '/reservoir/epistemology/Dissonance'};
export const definitions = {    key: "Definitions",  display: "Definitions", url: '/reservoir/epistemology/Definitions'};
const section_epistemology = {title:'Epistemology', subsections:[epistemology,definitions, criticalThinking, socialControl, dissonance]}

export const money = {    key: "economics", display: "Economics", url: '/reservoir/civics/economics'};
export const trials = {    key: "trials", display: "Trials and Cases", url: '/reservoir/civics/trials'};
export const constitution = {    key: "Constitution", display: "Constitution", url: '/reservoir/civics/Constitution'};
export const civics = {    key: "civics", display: "Civics", url: '/reservoir/civics'};
export const coloredPeople = {    key: "blackandwhite", display: "Colored People", url: '/reservoir/civics/blackandwhite'};
const section_civics = {title:'Civics and Law', subsections:[civics, coloredPeople, money, trials,constitution]}

const bios = {    key: "Characters and Bios", display:'Characters and Bios', url: '/reservoir/illuminators'};
const media = {    key: "media", display:'Media', url: '/reservoir/media'};
const section_miscellaneous = {title:'Misc', subsections:[bios, media]}

export const britishcolonizers = {    key: "britishcolonies", display:'British Colonizers', url: '/reservoir/history/britishcolonies'};
const worldHistory = {    key: "World", display:'World', url: '/reservoir/history'};
const biblical = {    key: "Biblical", display:'Biblical', url: '/reservoir/topic/bible'};
export const catholicChurch = { key: "catholicism", display:'Catholic Church', url: '/reservoir/history/catholicism'};
const section_history = {title:'History', subsections:[worldHistory, biblical, britishcolonizers, catholicChurch]}

export const sections = [ section_history, section_civics,section_metaphysics, section_epistemology, section_communication, section_miscellaneous];
