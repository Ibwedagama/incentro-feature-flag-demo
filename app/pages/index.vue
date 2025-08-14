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
                      label="Flag Status: TBD"
                    />
                  </div>
                </template>

                <div class="space-y-6">
                  <p class="text-gray-600">
                    Feature Flag:
                    <code class="bg-gray-100 px-2 py-1 rounded">discount-banner</code>
                  </p>

                  <!-- Regular Price Banner -->
                  <section
                    aria-labelledby="regular-price-heading"
                    class="p-6 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg text-white"
                  >
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
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
                          <h4
                            id="regular-price-heading"
                            class="text-2xl font-bold mb-1"
                          >
                            Premium Pro Package
                          </h4>
                          <p class="text-slate-300">
                            Everything you need to scale your SaaS business
                          </p>
                        </div>
                      </div>
                      <div class="text-left md:text-right">
                        <div class="text-3xl font-bold">
                          $99
                        </div>
                        <div class="text-slate-300">
                          per month
                        </div>
                      </div>
                    </div>

                    <ul class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                      <li class="flex items-center gap-2">
                        <CheckIcon class="text-green-400" /> Unlimited Projects
                      </li>
                      <li class="flex items-center gap-2">
                        <CheckIcon class="text-green-400" /> 24/7 Support
                      </li>
                      <li class="flex items-center gap-2">
                        <CheckIcon class="text-green-400" /> Advanced Analytics
                      </li>
                      <li class="flex items-center gap-2">
                        <CheckIcon class="text-green-400" /> API & Integrations
                      </li>
                      <li class="flex items-center gap-2">
                        <CheckIcon class="text-green-400" /> Enterprise Security
                      </li>
                      <li class="flex items-center gap-2">
                        <CheckIcon class="text-green-400" /> Team Collaboration Tools
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
                      <p class="mt-2 text-xs text-slate-400">
                        No credit card required. Cancel anytime.
                      </p>
                    </div>

                    <!-- Trusted by -->
                    <div class="mt-6 text-xs text-slate-400">
                      Trusted by 1,000+ startups and enterprises worldwide.
                    </div>
                  </section>

                  <!-- Discounted Price Banner -->
                  <section
                    aria-labelledby="discount-price-heading"
                    class="relative p-4 sm:p-6 bg-gradient-to-br from-pink-500 via-red-500 to-orange-400 rounded-lg text-white overflow-hidden shadow-lg"
                  >
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
                      <!-- Left: Info -->
                      <div class="flex items-start sm:items-center gap-3 sm:gap-4">
                        <div class="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                          <svg
                            class="w-6 h-6 sm:w-8 sm:h-8 text-white"
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
                          <h4
                            id="discount-price-heading"
                            class="text-lg sm:text-2xl font-bold mb-1"
                          >
                            Premium Pro Package
                          </h4>
                          <p class="text-pink-100 text-sm sm:text-base">
                            🔥 Limited Time Special Offer — Perfect for scaling teams!
                          </p>
                        </div>
                      </div>

                      <!-- Right: Prices -->
                      <div class="text-left md:text-right">
                        <div class="text-base sm:text-xl line-through text-white opacity-70 mb-1">
                          $99
                        </div>
                        <div class="text-3xl sm:text-5xl font-black text-white rounded-lg inline-block shadow-md">
                          $69
                        </div>
                        <div class="text-pink-100 mt-1 text-sm">
                          per month
                        </div>
                      </div>
                    </div>

                    <!-- Offer Timer -->
                    <aside class="mt-4 p-3 bg-white/15 rounded-lg border border-white/20 text-xs sm:text-sm">
                      <div class="flex items-center justify-between">
                        <span class="text-pink-100">⏰ Offer expires in:</span>
                        <time
                          class="font-mono font-bold text-white"
                          datetime="P2DT14H23M"
                        >2d 14h 23m</time>
                      </div>
                    </aside>

                    <!-- Feature List -->
                    <ul class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
                      <li class="flex items-center gap-2">
                        <CheckIcon class="text-white" /> Unlimited Projects
                      </li>
                      <li class="flex items-center gap-2">
                        <CheckIcon class="text-white" /> 24/7 Priority Support
                      </li>
                      <li class="flex items-center gap-2">
                        <CheckIcon class="text-white" /> Advanced Analytics + AI
                      </li>
                      <li class="flex items-center gap-2">
                        <CheckIcon class="text-white" /> 50+ Integrations
                      </li>
                      <li class="flex items-center gap-2">
                        <CheckIcon class="text-white" /> Dedicated Account Manager
                      </li>
                      <li class="flex items-center gap-2">
                        <CheckIcon class="text-white" /> Early Access to New Features
                      </li>
                    </ul>

                    <!-- Buttons -->
                    <div class="mt-6 flex flex-col sm:flex-row gap-3">
                      <UButton
                        color="white"
                        variant="solid"
                        size="lg"
                        class="w-full sm:flex-1 text-pink-700 font-semibold"
                      >
                        🎁 Claim Discount
                      </UButton>
                      <UButton
                        color="white"
                        variant="outline"
                        size="lg"
                        class="w-full sm:w-auto border-white/30 hover:bg-white/10"
                      >
                        Learn More
                      </UButton>
                    </div>

                    <p class="mt-2 text-xs text-pink-100">
                      Upgrade now and save $360/year. Risk-free 30-day guarantee.
                    </p>

                    <div class="mt-6 text-xs text-pink-100 opacity-90">
                      Trusted by 1,000+ startups and enterprises worldwide.
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
</script>
