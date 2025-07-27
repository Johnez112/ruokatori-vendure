import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { CMS_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { ProductUi } from './entities/product-ui.entity';

@VendurePlugin({
    dashboard: './dashboard/index.tsx',

    entities: [ProductUi],

    imports: [PluginCommonModule],
    providers: [{ provide: CMS_PLUGIN_OPTIONS, useFactory: () => CmsPlugin.options }],
    configuration: config => {
        // Plugin-specific configuration
        // such as custom fields, custom permissions,
        // strategies etc. can be configured here by
        // modifying the `config` object.
        return config;
    },
    compatibility: '^3.0.0',
 
})
export class CmsPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<CmsPlugin> {
        this.options = options;
        return CmsPlugin;
    }
}
