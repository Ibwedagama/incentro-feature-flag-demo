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

          <template v-if="!props.isLoading">
            <HeroVariantA v-if="variant?.name === 'versionA'" />
            <HeroVariantB v-if="variant?.name === 'versionB'" />
            <HeroVariantC v-if="variant?.name === 'versionC'" />
            <HeroVariantD v-if="variant?.name === 'versionD'" />
          </template>
          <div
            v-else
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
