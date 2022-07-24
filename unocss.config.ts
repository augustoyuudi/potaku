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
  ],
  shortcuts: {
    'home-link': 'text-pink-500 uppercase text-2xl font-bold relative after:content-none after:absolute after:left-0 after:bg-pink-100 after:w-full after:h-full after:-z-10 after:transition-transform after:duration-300 after:translate-x-1.5 after:translate-y-4 hover:after:translate-x-0 hover:after:translate-y-0'
  }
})