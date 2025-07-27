import {
    DeepPartial,
    HasCustomFields,
    LocaleString,
    Translatable,
    Translation,
    VendureEntity,
} from '@vendure/core';
import { Column, Entity, OneToMany } from 'typeorm';


export class ProductUiCustomFields {}

@Entity()
export class ProductUi extends VendureEntity implements HasCustomFields {
    constructor(input?: DeepPartial<ProductUi>) {
        super(input);
    }

    @Column()
    code: string;

    @Column(type => ProductUiCustomFields)
    customFields: ProductUiCustomFields;
}
