/* class presenting the image of a wookie. */

import { Wookie } from "./wookie";

export class Selfie {
    image: string;
    wookie: Wookie;
    title: string;

    constructor() {
        this.image = "image"; //temporaire, pour éviter que image soit null
        this.wookie = new Wookie();
        this.title = "Selfie title";
    }
}
//test