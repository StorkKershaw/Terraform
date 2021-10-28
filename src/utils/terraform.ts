import { TerraformConfig } from '@/types/terraform-config'

export function terraform (configs: TerraformConfig[]) {
  const longTimers: ReturnType<typeof setInterval>[] = []
  chrome.runtime.onMessage.addListener((tab) => {
    longTimers.forEach((timer) => clearInterval(timer))
    longTimers.length = 0
    configs.forEach(({ pattern, initial, modifiers }) => {
      if (pattern.test(tab.url)) {
        initial?.()

        const modifyAll = () => {
          for (const [style, finder] of Object.entries(modifiers ?? {})) {
            finder().forEach((element) => { element.setAttribute('style', style) })
          }
        }

        const shortTimer = setInterval(modifyAll, 50)
        setTimeout(() => { clearInterval(shortTimer) }, 10000)

        longTimers.push(setInterval(modifyAll, 1000))
      }
    })
  })
}
