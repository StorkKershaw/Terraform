import { TerraformConfig } from '@/types/terraform-config'

export function terraform (configs: TerraformConfig[]) {
  configs.forEach(({ pattern, initial, modifiers }) => {
    if (pattern.test(location.href)) {
      initial?.()

      const observer = new MutationObserver(() => {
        for (const [style, finder] of Object.entries(modifiers ?? {})) {
          finder().forEach((element) => { element.setAttribute('style', style) })
        }
      })

      observer.observe(document.body, {
        attributes: true,
        childList: true
      })
    }
  })
}
