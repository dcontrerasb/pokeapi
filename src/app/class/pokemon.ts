export class Pokemon {
    constructor(
        public id: number,
        public imagen: string,
        public nombre: string,
        public habilidades: string[],
        public altura: number,
        public anchura:number,
        public stats: string[],
    ){}
}
