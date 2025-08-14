<template>
  <main class="min-h-screen bg-gray-50">
    <UContainer class="py-8">
      <!-- Feature Flag 2: A/B Testing Hero Sections -->
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold">
              A/B Testing Feature
            </h2>
            <UBadge
              color="primary"
              :label="`Variant: ${variant?.name}`"
            />
          </div>
        </template>

        <div class="space-y-4">
          <p class="text-gray-600">
            Feature Flag:
            <code class="bg-gray-100 px-2 py-1 rounded">hero-section</code>
          </p>

          <HeroVariantA v-if="variant?.name === 'versionA' && !isLoading" />
          <HeroVariantB v-if="variant?.name === 'versionB' && !isLoading" />
          <HeroVariantC v-if="variant?.name === 'versionC' && !isLoading" />
          <HeroVariantD v-if="variant?.name === 'versionD' && !isLoading" />
          <div
            v-if="isLoading"
            class="w-full min-h-[420px] bg-gray-200 rounded-xl"
          />
        </div>
      </UCard>
    </UContainer>
  </main>
</template>

<script setup lang="ts">
import { useVariant } from '@unleash/proxy-client-vue'

const variant = useVariant('hero-banner')

const props = defineProps<{
  isLoading?: boolean
}>()
</script>
