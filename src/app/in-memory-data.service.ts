import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Evidence } from './evidence-interface';
import { Ghost } from './ghost-interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const evidence = [
      { id: 1, name: 'EMF 5', shortName: 'emf5', cancels: 'orb', imgurl: './assets/images/emf5.png' },
      { id: 2, name: 'Ghost Orbs', shortName: 'orb', cancels: 'emf5', imgurl: './assets/images/ghostorb.jpeg' },
      { id: 3, name: 'Spirit Box', shortName: 'box', cancels: 'freezing', imgurl: './assets/images/spiritbox.jpeg' },
      { id: 4, name: 'Freezing Tempatures', shortName: 'freezing', cancels: 'box', imgurl: './assets/images/freezingtemps.jpeg' },
      { id: 6, name: 'D.O.T.S. Projector', shortName: 'dots', cancels: 'writing', imgurl: './assets/images/ghostwriting.jpeg' },
      { id: 5, name: 'Ghost Writing', shortName: 'writing', cancels: 'dots', imgurl: './assets/images/dots.jpeg' },
      { id: 7, name: 'Fingerprints', shortName: 'prints', imgurl: './assets/images/fingerprints.jpeg' }
    ];

    const ghosts = [
      { id: 1, name: 'Banshee', evidence: ['orb', 'prints', 'dots'], description: "<p>Unique Strengths: <br />A Banshee will only target one person at a time.</p><p>Weaknesses: <br />Banshees fear the Crucifix and will be less aggressive when near one.</p><p>Evidence: <br />Ghost Orbs, Fingerprints, DOTS Projector</p>", visible: true },
      { id: 2, name: 'Demon', evidence: ['freezing', 'prints', 'writing'], description: "<p>Unique Strengths: <br />Demons will initiate hunts more often than other ghosts.</p><p>Weaknesses: <br />Getting Ouija Board responses from a Demon won't lower your sanity.</p><p>Evidence: <br />Freezing Temperatures, Ghost Writing, Fingerprints</p>", visible: true },
      { id: 3, name: 'Goryo', evidence: ['emf5', 'prints', 'dots'], description: "<p>Unique Strengths: <br />A Goryo will usually only show itself on camera if there are no people nearby.</p><p>Weaknesses: <br />They are rarely seen far from their place of death.</p><p>Evidence: <br />EMF Level 5, Fingerprints, D.O.T.S. Projector</p>", visible: true },
      { id: 4, name: 'Hantu', evidence: ['orb', 'freezing', 'prints'], description: "<p>Unique Strengths: <br />Lower temperatures allow the Hantu to move at faster speeds.</p><p>Weaknesses: <br />Hantus move slower in warmer areas.</p><p>Evidence: <br />Fingerprints, Ghost Orb, Freezing Temperatures</p>", visible: true },
      { id: 5, name: 'Jinn', evidence: ['emf5', 'freezing', 'prints'], description: "<p>Unique Strengths: <br />A Jinn will travel at a faster speed if its victim is far away.</p><p>Weaknesses: <br />Turning off the locations power source will prevent the Jinn from using its ability.</p><p>Evidence: <br />EMF Level 5, Freezing Temperatures, Fingerprint</p>", visible: true },
      { id: 6, name: 'Mare', evidence: ['orb', 'box', 'writing'], description: "<p>Unique Strengths: <br />A Mare will have an increased chance to attack in the dark.</p><p>Weaknesses: <br />Turning the lights on around the Mare will lower its chance to attack.</p><p>Evidence: <br />Ghost Orbs, Ghost Writing, Spirit Box</p>", visible: true },
      { id: 7, name: 'Myling', evidence: ['emf5', 'prints', 'writing'], description: "<p>Unique Strengths: <br />A Myling is known to be quieter when hunting.</p><p>Weaknesses: <br />Mylings more frequently make paranormal sounds.</p><p>Evidence: <br />EMF Level 5, Fingerprints, Ghost Writing</p>", visible: true },
      { id: 8, name: 'Oni', evidence: ['emf5', 'freezing', 'dots'], description: "<p>Unique Strengths: <br />Oni's are more active when people are nearby and have been seen moving objects at great speed.</p><p>Weaknesses: <br />Oni's are very active, making them easier to find.</p><p>Evidence: <br />EMF Level 5, Freezing Temperature, DOTS Projector</p>", visible: true },
      { id: 9, name: 'Phantom', evidence: ['box', 'prints', 'dots'], description: "<p>Unique Strengths: <br />Looking at a Phantom will drop your sanity considerably faster.</p><p>Weaknesses: <br />Taking a photo of the Phantom will make it temporarily disappear.</p><p>Evidence: <br />Spirit Box, Fingerprints, DOTS Projector</p>", visible: true },
      { id: 10, name: 'Poltergeist', evidence: ['box', 'prints', 'writing'], description: "<p>Unique Strengths: <br />Poltergeists can throw multiple objects at once.</p><p>Weaknesses: <br />With nothing to throw, Poltergeists become powerless.</p><p>Evidence: <br />Ghost Writing, Spirit Box, Fingerprints</p>", visible: true },
      { id: 11, name: 'Revenant', evidence: ['orb', 'freezing', 'writing'], description: "<p>Unique Strengths: <br />A Revenant will travel significantly faster speed when hunting their prey.</p><p>Weaknesses: <br />Hiding from the Revenant will cause it to move very slowly.</p><p>Evidence: <br />Ghost Orbs, Ghost Writing, Freezing Temperatures</p>", visible: true },
      { id: 12, name: 'Shade', evidence: ['emf5', 'freezing', 'writing'], description: "<p>Unique Strengths: <br />Shades are much harder to find.</p><p>Weaknesses: <br />The Ghost will not enter a hunt if there are multiple people nearby.</p><p>Evidence: <br />EMF 5, Ghost Writing, Freezing Temperatures</p>", visible: true },
      { id: 13, name: 'Spirit', evidence: ['emf5', 'box', 'writing'], description: "<p>Unique Strengths: <br />Nothing</p><p>Weaknesses: <br />A Spirit can temporarily be stopped by burning Smudge Sticks near them.</p><p>Evidence: <br />EMF Level 5, Ghost Writing, Spirit Box</p>", visible: true },
      { id: 14, name: 'Wraith', evidence: ['emf5', 'box', 'dots'], description: "<p>Unique Strengths: <br />Wraiths almost never touch the ground meaning it can't be tracked by footsteps.</p><p>Weaknesses: <br />Wraiths have a toxic reaction to Salt.</p><p>Evidence: <br />EMF Level 5, Spirit Box, DOTS Projector</p>", visible: true },
      { id: 15, name: 'Yokai', evidence: ['orb', 'box', 'dots'], description: "<p>Unique Strengths: <br />Talking near a Yokai will anger it, increasing the chance of an attack.</p><p>Weaknesses: <br />When hunting a Yokai can only hear voices close to it.</p><p>Evidence: <br />Ghost Orbs, Spirit Box, DOTS Projector</p>", visible: true },
      { id: 16, name: 'Yurei', evidence: ['orb', 'freezing', 'dots'], description: "<p>Unique Strengths: <br />Yurei's have been known to have a stronger effect on people sanity.</p><p>Weaknesses: <br />Smudging the Yurei's place of death will trap it temporarily, reducing how much it wanders.</p><p>Evidence: <br />Ghost Orbs, Freezing Temperatures, DOTS Projector</p>", visible: true }
    ]
    return { evidence, ghosts };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: Evidence[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }

  constructor() { }
}
