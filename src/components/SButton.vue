<script lang="ts">
import type { SizeProp } from '../types'
import { defineComponent, type PropType } from 'vue'
import { useLocale } from 'vuetify'
import { VBtn } from 'vuetify/components'

export default defineComponent({
  extends: VBtn,
  inheritAttrs: false,
  props: {
    color: { default: 'primary' },
    size: {
      type: [String, Number] as PropType<SizeProp>,
      default: 'small' as const,
      required: true,
    },
    variant: { default: 'flat' },
    rounded: {
      default: 'sm',
    },
  },
  setup(props) {
    const { t } = useLocale()
    return {
      ariaLabel: t(props.text || 'Hello'),
    }
  },
})
</script>

<template>
  <VBtn v-bind="$attrs" :aria-label="ariaLabel">
    <template v-for="(_, slot) of $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope || {}" />
    </template>
  </VBtn>
</template>
