/* class presenting the wookie of a selfie. */

import { Selfie } from "./selfie";

export class Wookie {
    name: string;
    selfies: Selfie[] = [];

    constructor() {
        this.name = "Chewbacca"; //temporaire, pour éviter que name soit null
    }
}
