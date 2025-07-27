import { defineDashboardExtension } from '@vendure/dashboard';
import {
    VendorPostalCodeField
} from '../components/VendorPostalCodeField';

export default defineDashboardExtension({
    detailForms: [
        {
            pageId: 'product-detail',
            inputs: [
                {
                    blockId: 'main-form',
                    field: 'description',
                    component: VendorPostalCodeField,
                },
            ],
        }
    ],
});