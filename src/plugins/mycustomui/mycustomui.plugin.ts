import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';
import path from 'path';

import { MYCUSTOMUI_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
import { Article } from './entities/article.entity';
import { ArticleService } from './services/article.service';
import { ArticleAdminResolver } from './api/article-admin.resolver';
import { adminApiExtensions } from './api/api-extensions';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [{ provide: MYCUSTOMUI_PLUGIN_OPTIONS, useFactory: () => MycustomuiPlugin.options }, ArticleService],
    configuration: config => {
        // Plugin-specific configuration
        // such as custom fields, custom permissions,
        // strategies etc. can be configured here by
        // modifying the `config` object.
        return config;
    },
    compatibility: '^3.0.0',
    entities: [Article],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [ArticleAdminResolver]
    },


    
    dashboard: './dashboard/index.tsx'
    
})
export class MycustomuiPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<MycustomuiPlugin> {
        this.options = options;
        return MycustomuiPlugin;
    }
}
