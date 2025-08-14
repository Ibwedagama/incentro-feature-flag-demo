<template>
  <section
    aria-labelledby="regular-price-heading"
    class="p-6 bg-gradient-to-r from-slate-700 to-slate-900 rounded-xl text-white"
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
        <div>
          <div class="text-3xl font-bold">
            $99
          </div>
        </div>
        <div class="text-slate-300">
          per month
        </div>
      </div>
    </div>

    <ul class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
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
        variant="solid"
        size="lg"
        class="w-full md:w-auto"
      >
        Buy Now
      </UButton>
      <p class="mt-2 text-xs text-slate-400">
        No credit card required. Cancel anytime.
      </p>
    </div>

    <!-- Trusted by -->
    <div class="mt-2 text-xs text-slate-400">
      Trusted by 1,000+ startups and enterprises worldwide.
    </div>
  </section>
</template>
