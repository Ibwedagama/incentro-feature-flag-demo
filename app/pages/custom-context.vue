<template>
  <main class="h-screen bg-gray-50 overflow-y-hidden">
    <UContainer
      class="py-8"
    >
      <UModal
        :title="message"
        :open="true"
      >
        <template #body>
          <div
            v-if="variant?.name === 'variant_1'"
            class="w-full h-full flex items-center justify-center"
          >
            <img
              src="/images/gei.jpg"
              alt=""
              width="400"
              height="400"
              class="w-full h-full"
            >
          </div>

          <div
            v-if="variant?.name === 'variant_2'"
            class="w-full h-full flex items-center justify-center"
          >
            <img
              src="/images/boat-kid.gif"
              alt=""
              width="400"
              height="400"
              class="w-full h-full"
            >
          </div>
        </template>
      </UModal>
    </UContainer>
  </main>
</template>

<script lang="ts" setup>
import { useVariant } from '@unleash/proxy-client-vue'
import { computed } from 'vue'

const message = computed(() => {
  return 'Thank you for attention!'
})

const variant = useVariant('random-variant')
</script>
