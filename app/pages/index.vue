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
                  <div class="flex items-center justify-between">
                    <h3
                      id="feature-1-heading"
                      class="text-xl font-semibold"
                    >
                      1. Show/Hide Content Feature
                    </h3>
                    <UBadge
                      color="gray"
                      label="Flag Status: TBD"
                    />
                  </div>
                </template>

                <div class="space-y-4">
                  <p class="text-gray-600">
                    Feature Flag:
                    <code class="bg-gray-100 px-2 py-1 rounded">discount-banner</code>
                  </p>

                  <!-- Regular Price Banner (to be shown/hidden) -->
                  <section
                    aria-labelledby="regular-price-heading"
                    class="p-6 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg text-white"
                  >
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-4">
                        <div
                          class="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <svg
                            class="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4
                            id="regular-price-heading"
                            class="text-2xl font-bold mb-1"
                          >
                            Premium Pro Package
                          </h4>
                          <p class="text-slate-300">
                            Everything you need to scale your business
                          </p>
                        </div>
                      </div>
                      <div class="text-right">
                        <div class="text-3xl font-bold">
                          $99
                        </div>
                        <div class="text-slate-300">
                          per month
                        </div>
                      </div>
                    </div>
                    <ul class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li class="flex items-center gap-2 text-sm">
                        <svg
                          class="w-4 h-4 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Unlimited Projects
                      </li>
                      <li class="flex items-center gap-2 text-sm">
                        <svg
                          class="w-4 h-4 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        24/7 Support
                      </li>
                      <li class="flex items-center gap-2 text-sm">
                        <svg
                          class="w-4 h-4 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Advanced Analytics
                      </li>
                    </ul>
                    <div class="mt-6">
                      <UButton
                        color="white"
                        variant="solid"
                        size="lg"
                        class="w-full md:w-auto"
                      >
                        Get Started
                      </UButton>
                    </div>
                  </section>

                  <!-- Discounted Price Banner (to be shown/hidden) -->
                  <section
                    aria-labelledby="discount-price-heading"
                    class="p-6 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg text-white relative overflow-hidden"
                  >
                    <!-- Discount Badge -->
                    <div
                      class="absolute top-4 right-4"
                      aria-label="Discount offer"
                    >
                      <div class="bg-white text-emerald-700 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                        30% OFF
                      </div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-4">
                        <div
                          class="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <svg
                            class="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4
                            id="discount-price-heading"
                            class="text-2xl font-bold mb-1"
                          >
                            Premium Pro Package
                          </h4>
                          <p class="text-emerald-100">
                            💚 Limited Time Special Offer!
                          </p>
                        </div>
                      </div>
                      <div class="text-right">
                        <div
                          class="text-xl line-through text-emerald-200 opacity-70 mb-1"
                          aria-label="Original price"
                        >
                          $99
                        </div>
                        <div
                          class="text-4xl font-black text-white bg-white/20 px-3 py-1 rounded-lg inline-block"
                          aria-label="Discounted price"
                        >
                          $69
                        </div>
                        <div class="text-emerald-100 mt-1">
                          per month
                        </div>
                      </div>
                    </div>

                    <aside
                      class="mt-4 p-3 bg-white/15 rounded-lg border border-white/20"
                      aria-label="Offer timer"
                    >
                      <div class="flex items-center justify-between text-sm">
                        <span class="text-emerald-100">⏰ Offer expires in:</span>
                        <time
                          class="font-mono font-bold text-white"
                          datetime="P2DT14H23M"
                        >2d 14h 23m</time>
                      </div>
                    </aside>

                    <ul class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li class="flex items-center gap-2 text-sm">
                        <svg
                          class="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Unlimited Projects
                      </li>
                      <li class="flex items-center gap-2 text-sm">
                        <svg
                          class="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        24/7 Priority Support
                      </li>
                      <li class="flex items-center gap-2 text-sm">
                        <svg
                          class="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Advanced Analytics + AI
                      </li>
                    </ul>

                    <div class="mt-6 flex gap-3">
                      <UButton
                        color="white"
                        variant="solid"
                        size="lg"
                        class="flex-1 md:flex-none text-emerald-700 font-semibold"
                      >
                        💚 Claim Discount
                      </UButton>
                      <UButton
                        color="white"
                        variant="outline"
                        size="lg"
                        class="border-white/30 hover:bg-white/10"
                      >
                        Learn More
                      </UButton>
                    </div>
                  </section>
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
import type { User } from '~/types/user'

// Sample users for testing different contexts
const users: User[] = [
  {
    userId: '1',
    email: 'john@example.com',
    userGroup: 'regular',
    country: 'US',
  },
  { userId: '2', email: 'sarah@example.com', userGroup: 'beta', country: 'UK' },
  {
    userId: '3',
    email: 'mike@example.com',
    userGroup: 'premium',
    country: 'CA',
  },
  {
    userId: '4',
    email: 'alice@example.com',
    userGroup: 'regular',
    country: 'AU',
  },
]

const selectedUser = ref<User>(users[0])

// User selection
const selectUser = (user: User) => {
  selectedUser.value = user
  // You can add your flag evaluation logic here
}

// Helper functions
const getBadgeColor = (userGroup: string) => {
  switch (userGroup) {
    case 'premium':
      return 'purple'
    case 'beta':
      return 'blue'
    default:
      return 'gray'
  }
}
</script>
