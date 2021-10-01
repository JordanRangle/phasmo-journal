import { Evidence } from "./evidence-interface"

export const EVIDENCELIST: Evidence[] = [
    { id: 1, name: 'EMF 5', shortName:'emf5', cancels: 'orb', imgurl: ''},
    { id: 2, name: 'Ghost Orbs', shortName: 'orb', cancels: 'emf5', imgurl: ''},
    { id: 3, name: 'Spirit Box', shortName: 'box', cancels: 'freezing', imgurl: ''},
    { id: 4, name: 'Freezing Tempatures', shortName: 'freezing', cancels: 'box', imgurl: ''},
    { id: 5, name: 'Ghost Writing', shortName: 'writing', cancels: 'dots', imgurl: ''},
    { id: 6, name: 'D.O.T.S. Projector', shortName: 'dots', cancels: 'writing', imgurl: ''},
    { id: 7, name: 'Fingerprints', shortName:'prints', imgurl: ''}
]