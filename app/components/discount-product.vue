<template>
  <section
    aria-labelledby="discount-price-heading"
    class="relative p-4 sm:p-6 bg-gradient-to-br from-pink-500 via-red-500 to-orange-400 rounded-xl text-white shadow-lg"
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
            Limited Time Special Offer — Perfect for scaling teams!
          </p>
        </div>
      </div>

      <!-- Right: Prices -->
      <div class="text-left md:text-right">
        <div class="text-base sm:text-xl line-through text-white opacity-70 mb-1">
          $99
        </div>
        <div class="text-3xl sm:text-5xl font-black text-white rounded-lg inline-block">
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
        <span class="text-pink-100 text-lg">⏰ Offer expires in:</span>
        <time
          class="font-mono font-bold text-white text-lg"
          datetime="P2DT14H23M"
        >
          2d 14h 23m
        </time>
      </div>
    </aside>

    <!-- Feature List -->
    <ul class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs sm:text-sm">
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

    <UButton
      color="neutral"
      variant="solid"
      size="xl"
      block
      class="mt-6 mx-auto text-white font-semibold"
    >
      Buy Now
    </UButton>

    <p class="mt-2 text-xs text-center sm:text-left text-pink-100">
      Upgrade now and save $360/year. Risk-free 30-day guarantee.
    </p>
    <div class="mt-2 text-xs text-center sm:text-left text-pink-100 opacity-90">
      Trusted by 1,000+ startups and enterprises worldwide.
    </div>
  </section>
</template>
