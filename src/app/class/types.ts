import { Type } from "./type";


export class Types {
    constructor(
        public base_stat: number,
        public effort: number,
        public stat: Type[],
    ){}
}
