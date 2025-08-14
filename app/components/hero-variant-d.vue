<template>
  <div
    class="bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400 p-6 sm:p-12 rounded-lg text-gray-900 relative overflow-hidden"
  >
    <div class="absolute inset-0 bg-white/10" />
    <div class="relative z-10">
      <div class="text-center mb-8">
        <div
          class="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-4"
        >
          🚀 Trusted by 10,000+ companies
        </div>
        <h1 class="text-2xl sm:text-5xl font-black mb-6 leading-tight">
          Scale Your Business with DataFlow
        </h1>
        <p class="text-sm sm:text-xl text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed">
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
          class="block px-12 bg-gray-900 text-white font-bold hover:bg-gray-800"
        >
          Start Free Trial
        </UButton>
        <UButton
          color="white"
          size="xl"
          variant="solid"
          class="block px-8 text-gray-900 font-semibold bg-white/80 hover:bg-white"
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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
