import { Stats } from "./stats";
import { Types } from "./types";

export class Pokemon {
    constructor(
        public id: number,
        public imagen: string,
        public nombre: string,
        public habilidades: Types[],
        public altura: number,
        public anchura:number,
        public stats: Stats[],
    ){}
}
