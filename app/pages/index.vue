<template>
  <div class="min-h-screen bg-gray-50">
    <UContainer class="py-8">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Unleash Feature Flag Demo
          </h1>
          <p class="text-lg text-gray-600">
            Demonstrating Show/Hide content and A/B Testing with Feature Flags
          </p>
        </div>

        <!-- User Selector -->
        <UCard class="mb-8">
          <template #header>
            <h2 class="text-xl font-semibold">
              User Context
            </h2>
          </template>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <UButton
              v-for="user in users"
              :key="user.userId"
              :variant="selectedUser?.userId === user.userId ? 'solid' : 'outline'
              "
              class="justify-start"
              @click="selectUser(user)"
            >
              {{ user.email }}
              <UBadge
                :color="getBadgeColor(user.userGroup)"
                class="ml-2"
              >
                {{ user.userGroup }}
              </UBadge>
            </UButton>
          </div>

          <div class="mt-4 p-4 bg-gray-100 rounded-lg">
            <p class="text-sm text-gray-600">
              <strong>Selected User:</strong> {{ selectedUser.email }} |
              <strong>Group:</strong> {{ selectedUser.userGroup }} |
              <strong>Country:</strong> {{ selectedUser.country }}
            </p>
          </div>
        </UCard>

        <div class="grid gap-8">
          <!-- Feature Flag 1: Show/Hide Discount Banner -->
          <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <h2 class="text-xl font-semibold">
                  1. Show/Hide Content Feature
                </h2>
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
              <div class="p-6 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg text-white">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-4">
                    <div class="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                      <svg
                        class="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
                      <h3 class="text-2xl font-bold mb-1">
                        Premium Pro Package
                      </h3>
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
                <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="flex items-center gap-2 text-sm">
                    <svg
                      class="w-4 h-4 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Unlimited Projects
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <svg
                      class="w-4 h-4 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    24/7 Support
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <svg
                      class="w-4 h-4 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Advanced Analytics
                  </div>
                </div>
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
              </div>

              <!-- Discounted Price Banner (to be shown/hidden) -->
              <div
                class="p-6 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg text-white relative overflow-hidden"
              >
                <!-- Discount Badge -->
                <div class="absolute top-4 right-4">
                  <div class="bg-white text-emerald-700 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                    30% OFF
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-4">
                    <div class="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg
                        class="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
                      <h3 class="text-2xl font-bold mb-1">
                        Premium Pro Package
                      </h3>
                      <p class="text-emerald-100">
                        💚 Limited Time Special Offer!
                      </p>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-xl line-through text-emerald-200 opacity-70 mb-1">
                      $99
                    </div>
                    <div class="text-4xl font-black text-white bg-white/20 px-3 py-1 rounded-lg inline-block">
                      $69
                    </div>
                    <div class="text-emerald-100 mt-1">
                      per month
                    </div>
                  </div>
                </div>

                <div class="mt-4 p-3 bg-white/15 rounded-lg border border-white/20">
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-emerald-100">⏰ Offer expires in:</span>
                    <span class="font-mono font-bold text-white">2d 14h 23m</span>
                  </div>
                </div>

                <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="flex items-center gap-2 text-sm">
                    <svg
                      class="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Unlimited Projects
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <svg
                      class="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    24/7 Priority Support
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <svg
                      class="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Advanced Analytics + AI
                  </div>
                </div>

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
              </div>
            </div>
          </UCard>

          <!-- Feature Flag 2: A/B Testing Hero Sections -->
          <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <h2 class="text-xl font-semibold">
                  2. A/B Testing Feature
                </h2>
                <UBadge
                  color="gray"
                  label="Variant: TBD"
                />
              </div>
            </template>

            <div class="space-y-4">
              <p class="text-gray-600">
                Feature Flag:
                <code class="bg-gray-100 px-2 py-1 rounded">hero-section</code>
              </p>

              <!-- Variant A: Centered Layout (to be shown/hidden) -->
              <div class="bg-white p-12 rounded-lg border border-gray-200 text-center">
                <h1 class="text-5xl font-bold text-gray-900 mb-6">
                  Scale Your Business with DataFlow
                </h1>
                <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  The all-in-one analytics platform trusted by 10,000+ companies
                  worldwide. Get real-time insights, automated reports, and
                  AI-powered predictions.
                </p>
                <div class="flex justify-center gap-4 mb-8">
                  <UButton
                    color="blue"
                    size="xl"
                    variant="solid"
                    class="px-8"
                  >
                    Start Free Trial
                  </UButton>
                  <UButton
                    color="gray"
                    size="xl"
                    variant="outline"
                    class="px-8"
                  >
                    Schedule Demo
                  </UButton>
                </div>
                <p class="text-sm text-gray-500">
                  ✨ No credit card required • 14-day free trial
                </p>
              </div>

              <!-- Variant B: Split Layout (to be shown/hidden) -->
              <div class="bg-gradient-to-br from-purple-600 to-purple-800 p-12 rounded-lg text-white">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h1 class="text-5xl font-bold mb-6 leading-tight">
                      Scale Your Business with DataFlow
                    </h1>
                    <p class="text-purple-100 text-xl mb-8 leading-relaxed">
                      The all-in-one analytics platform trusted by 10,000+
                      companies worldwide. Get real-time insights, automated
                      reports, and AI-powered predictions.
                    </p>
                    <div class="space-y-4">
                      <UButton
                        color="white"
                        size="xl"
                        variant="solid"
                        class="w-full text-purple-800 font-semibold"
                      >
                        Start Free Trial
                      </UButton>
                      <UButton
                        color="purple"
                        size="xl"
                        variant="outline"
                        class="w-full border-purple-300 text-white"
                      >
                        Schedule Demo
                      </UButton>
                    </div>
                    <p class="text-sm text-purple-200 mt-6">
                      ✨ No credit card required • 14-day free trial
                    </p>
                  </div>
                  <div class="hidden lg:block">
                    <div class="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                      <div class="text-center mb-6">
                        <div class="text-4xl font-bold mb-2">
                          10,000+
                        </div>
                        <div class="text-purple-200">
                          Happy Customers
                        </div>
                      </div>
                      <div class="space-y-4">
                        <div class="flex items-center justify-between text-sm">
                          <span>Data Processing</span>
                          <span class="font-bold">99.9%</span>
                        </div>
                        <div class="w-full bg-purple-700 rounded-full h-2">
                          <div
                            class="bg-white h-2 rounded-full"
                            style="width: 99%"
                          />
                        </div>
                        <div class="flex items-center justify-between text-sm">
                          <span>Customer Satisfaction</span>
                          <span class="font-bold">4.9/5</span>
                        </div>
                        <div class="w-full bg-purple-700 rounded-full h-2">
                          <div
                            class="bg-white h-2 rounded-full"
                            style="width: 98%"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Variant C: Minimal Dark (to be shown/hidden) -->
              <div class="bg-gradient-to-r from-gray-900 to-black p-12 rounded-lg text-white">
                <div class="max-w-4xl">
                  <h1 class="text-6xl font-light mb-6 leading-tight">
                    Scale Your Business<br>
                    <span class="font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                      with DataFlow
                    </span>
                  </h1>
                  <p class="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
                    The all-in-one analytics platform trusted by 10,000+
                    companies worldwide. Get real-time insights, automated
                    reports, and AI-powered predictions.
                  </p>
                  <div class="flex gap-6 items-center">
                    <UButton
                      color="white"
                      size="xl"
                      variant="solid"
                      class="px-12 text-black font-medium"
                    >
                      Start Free Trial
                    </UButton>
                    <UButton
                      color="gray"
                      size="xl"
                      variant="ghost"
                      class="px-8 text-gray-300"
                    >
                      Schedule Demo →
                    </UButton>
                  </div>
                  <div class="mt-12 flex items-center gap-8 text-sm text-gray-400">
                    <span>✨ No credit card required</span>
                    <span>•</span>
                    <span>14-day free trial</span>
                    <span>•</span>
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>

              <!-- Variant D: Bright & Modern (to be shown/hidden) -->
              <div
                class="bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400 p-12 rounded-lg text-gray-900 relative overflow-hidden"
              >
                <div class="absolute inset-0 bg-white/10" />
                <div class="relative z-10">
                  <div class="text-center mb-8">
                    <div
                      class="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-4"
                    >
                      🚀 Trusted by 10,000+ companies
                    </div>
                    <h1 class="text-5xl font-black mb-6 leading-tight">
                      Scale Your Business with DataFlow
                    </h1>
                    <p class="text-xl text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed">
                      The all-in-one analytics platform trusted by 10,000+
                      companies worldwide. Get real-time insights, automated
                      reports, and AI-powered predictions.
                    </p>
                  </div>

                  <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                    <UButton
                      color="gray"
                      size="xl"
                      variant="solid"
                      class="px-12 bg-gray-900 text-white font-bold hover:bg-gray-800"
                    >
                      Start Free Trial
                    </UButton>
                    <UButton
                      color="white"
                      size="xl"
                      variant="solid"
                      class="px-8 text-gray-900 font-semibold bg-white/80 hover:bg-white"
                    >
                      Schedule Demo
                    </UButton>
                  </div>

                  <div class="text-center">
                    <div
                      class="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      No credit card required • 14-day free trial
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
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
