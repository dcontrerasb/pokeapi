import { Sprites } from "./sprites";
import { Stats } from "./stats";
import { Types } from "./types";

export class Pokemon {
    constructor(
        public id: number,
        public sprites: Sprites,
        public name: string,
        public types: Types[],
        public height: number,
        public weight:number,
        public stats: Stats[],
    ){}
}
