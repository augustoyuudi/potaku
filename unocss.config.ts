import {
  defineConfig,
  presetIcons,
  presetUno
} from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      warn: true,
      scale: 1.2,
      extraProperties: {
        display: 'inline-block'
      }
    }),
    presetUno()
  ]
})