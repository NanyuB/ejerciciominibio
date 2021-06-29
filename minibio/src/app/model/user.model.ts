export class User {
    image?:string;
    name?: string;
    descripcion?: string;
    redes?: Array<Red>;
}
export class Red {
name?: string;
icon?: string;
link?: string;    
}