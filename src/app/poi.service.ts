import { Injectable } from '@angular/core';

const pois = [{
  instruction: "Go to the church",
  instructionMuseum: "Go to the St Waudru’s Collegiate Church and find the wheel. Turn it and see what happens!",
  explain: {
    title: "St Waudru's Collegiate Church",
    description: "The descent of the shrine of the Saint Waudru, the City’s patron, is an important ceremony in the church and marks the beginning of the Doudou festival. The Priest entrusts the relics of the saint to the Mayor so that they can be carried in procession through the streets of the city the next day.",
  },
  video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  key: 1349
}, {
  instruction: "Go to the Grand Place",
  instructionMuseum: "Go to the Grand Place and find the dragon",
  explain: {
    title: "Grand Place",
    description: "At the Grand Place thousands of people have gathered around the sandy arena to see the fight between St George and the dragon. If you can snatch a horsehair form the tip of the dragon’s tail, it means good luck! After several attempts St George is able to combat the dragon.",
  },
  game: "dragonSearch",
  video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  key: 2005
}, {
  instruction: "Find the dragon!",
  instructionMuseum: "Find the dragon!",
  explain: {
    title: "You won!",
    description: "<p>Order has won from disorder. The city of Mons is safe!</p><p>At least for a year…</p>",
  },
  game: "dragonFight",
  video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  key: 1970
}];

/**
 * Serves information about point-of-interests
 */
@Injectable({
  providedIn: 'root'
})
export class PoiService {
  constructor() { }

  async get(index: number) {
    return Object.assign({ total: pois.length }, pois[index]);
  }
}
