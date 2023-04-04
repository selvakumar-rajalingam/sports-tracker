import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CategoryDocument = HydratedDocument<Category>

@Schema()
export class Category {
    @Prop()
    name: string

    @Prop()
    createdon: string

    @Prop()
    createdby: string

    @Prop()
    categoryorder: number
}

export const CategorySchema = SchemaFactory.createForClass(Category);