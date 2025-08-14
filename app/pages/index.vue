<template>
  <div class="min-h-screen bg-gray-50">
    <UContainer class="py-8">
      <main class="mx-auto">
        <!-- Page Header -->
        <header class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Unleash Feature Flag Demo
          </h1>
          <p class="text-lg text-gray-600">
            Demonstrating Show/Hide content and A/B Testing with Feature Flags
          </p>
        </header>

        <!-- Feature Demonstrations -->
        <section aria-labelledby="features-heading">
          <h2
            id="features-heading"
            class="sr-only"
          >
            Feature Flag Demonstrations
          </h2>
          <div class="grid gap-8">
            <!-- Feature Flag 1: Show/Hide Discount Banner -->
            <article aria-labelledby="feature-1-heading">
              <UCard>
                <template #header>
                  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3
                      id="feature-1-heading"
                      class="text-xl font-semibold"
                    >
                      1. Show/Hide Content Feature
                    </h3>
                    <UBadge
                      color="gray"
                      :label=" `Status: ${enabledDiscount ? 'Enabled' : 'Disabled'}`"
                    />
                  </div>
                </template>

                <div class="space-y-6 max-w-2xl">
                  <p class="text-gray-600">
                    Feature Flag:
                    <code class="bg-gray-100 px-2 py-1 rounded">discount-banner</code>
                  </p>

                  <RegularProduct v-if="!props.isLoading && !enabledDiscount" />
                  <DiscountProduct v-else-if="!props.isLoading && enabledDiscount" />

                  <!-- Loading State -->
                  <div
                    v-else
                    class="min-h-[312px] w-full bg-gray-200 animate-pulse rounded-xl"
                  />
                </div>
              </UCard>
            </article>
          </div>
        </section>
      </main>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useFlag } from '@unleash/proxy-client-vue'

const enabledDiscount = useFlag('discount-banner')

const props = defineProps<{
  isLoading?: boolean
}>()
</script>
