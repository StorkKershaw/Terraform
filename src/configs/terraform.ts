import { TerraformConfig } from '@/types/terraform-config'

export const terraformConfigs: TerraformConfig[] = [
  {
    pattern: /^https:\/\/www\.example\.com$/,
    initial () {},
    modifiers: {
      'display: none !important': () => [] // HTML elements to apply css style
    }
  }
]
