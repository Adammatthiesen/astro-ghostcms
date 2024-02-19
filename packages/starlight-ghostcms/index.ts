import type { StarlightPlugin, StarlightUserConfig } from '@astrojs/starlight/types'
import type { AstroIntegrationLogger } from 'astro'
import { type StarlightGhostConfig, validateConfig } from './src/schemas/config'
import { vitePluginStarlightGhostConfig } from './src/integrations/vite'

export type { StarlightGhostConfig }

export default function starlightBlogPlugin(userConfig?: StarlightGhostConfig): StarlightPlugin {
    const config: StarlightGhostConfig = validateConfig(userConfig)
    
    return {
      name: 'starlight-blog-plugin',
      hooks: {
        setup({ addIntegration, config: starlightConfig, logger, updateConfig: updateStarlightConfig }) {
            updateStarlightConfig({
                components: {
                    ...starlightConfig.components,
                    ...overrideStarlightComponent(starlightConfig.components, logger, 'MarkdownContent'),
                    ...overrideStarlightComponent(starlightConfig.components, logger, 'Sidebar'),
                }
            })

            addIntegration({
                name: 'starlight-ghostcms',
                hooks: {
                    'astro:config:setup': ({ injectRoute, updateConfig }) => {
                        injectRoute({
                            pattern: '',
                            entrypoint: ''
                        })

                        updateConfig({
                            vite: {
                                plugins: [vitePluginStarlightGhostConfig(config)],
                            },
                        })
                    }
                }
            })
        }
      },
    }
}

function overrideStarlightComponent(
    components: StarlightUserConfig['components'],
    logger: AstroIntegrationLogger,
    component: keyof NonNullable<StarlightUserConfig['components']>,
  ) {
    if (components?.[component]) {
      logger.warn(`It looks like you already have a \`${component}\` component override in your Starlight configuration.`)
      logger.warn(`To use \`starlight-blog\`, remove the override for the \`${component}\` component.\n`)
  
      return {}
    }
  
    return {
      [component]: `starlight-blog/overrides/${component}.astro`,
    }
  }