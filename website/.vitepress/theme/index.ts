import { NolebaseInlineLinkPreviewPlugin } from '@nolebase/vitepress-plugin-inline-link-preview/client'
import { ClientOnly } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import { h } from 'vue'

import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'

import AideModelPrice from '../../components/AideModels/AideModelPrice/index.vue'
import AidePay from '../../components/AideModels/AidePay.vue'
import ChatBotButton from '../../components/ChatBotButton.vue'
import Image from '../../components/Image.vue'
import Video from '../../components/Video.vue'

import 'virtual:uno.css'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(ChatBotButton)
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.component('Image', Image)
    app.component('Video', Video)
    app.component('AidePay', AidePay)
    app.component('AideModelPrice', AideModelPrice)
    app.use(NolebaseInlineLinkPreviewPlugin)
  }
}
