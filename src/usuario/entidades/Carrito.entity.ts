import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { usuario } from "./usuario.entity";
import { Pedido } from "./Pedido.entity";
import { Producto } from "./producto.entity";



@Entity()
export class Carrito{
    @PrimaryGeneratedColumn()
    id: string;
    @Column({type:'varchar',length:30})
    usuarioId: string;
    @Column({type:'varchar', length:20})
    productoId: string;
    @Column({type:'integer'})
    cantidad: number;


    //Relacion con usuario
    @OneToOne(() => usuario, usuario => usuario.carrito)
    usuario: usuario;

    //Relacion con pedido
    @OneToOne(() => Producto, (Producto) => Producto.carrito)
    Producto: Producto;
}