import {ProductEntity} from "./ProductEntity"

export type ProductEntitiesByCategory = {
	[key: string]: ProductEntity[];
}