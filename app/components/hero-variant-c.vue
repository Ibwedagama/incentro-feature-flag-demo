<template>
  <!-- Variant C: Minimal Dark (to be shown/hidden) -->
  <div class="bg-gradient-to-r from-gray-900 to-black p-6 sm:p-12 rounded-lg text-white">
    <div class="max-w-4xl">
      <h1 class="text-3xl sm:text-6xl font-light mb-6 leading-tight">
        Scale Your Business<br>
        <span class="font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          with DataFlow
        </span>
      </h1>
      <p class="text-sm sm:text-lg text-gray-300 mb-12 max-w-2xl leading-relaxed">
        The all-in-one analytics platform trusted by 10,000+
        companies worldwide. Get real-time insights, automated
        reports, and AI-powered predictions.
      </p>
      <div class="flex flex-col sm:flex-row gap-6 items-center">
        <UButton
          size="xl"
          variant="solid"
          class="px-12 text-black font-medium"
        >
          Start Free Trial
        </UButton>
        <UButton
          size="xl"
          variant="ghost"
          class="px-8 text-gray-300"
        >
          Schedule Demo →
        </UButton>
      </div>
      <div class="mt-12 flex flex-col sm:flex-row items-center gap-2 sm:gap-8 text-sm text-gray-400">
        <span>✨ No credit card required</span>
        <span class="hidden sm:inline-block">•</span>
        <span>14-day free trial</span>
        <span class="hidden sm:inline-block">•</span>
        <span>Cancel anytime</span>
      </div>
    </div>
  </div>
</template>
