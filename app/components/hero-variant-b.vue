<template>
  <!-- Variant B: Split Layout (to be shown/hidden) -->
  <div class="bg-gradient-to-br from-purple-600 to-purple-800 p-8 sm:p-12 rounded-lg text-white">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h1 class="text-2xl sm:text-5xl font-bold mb-6 leading-tight">
          Scale Your Business with DataFlow
        </h1>
        <p class="text-purple-100 text-sm sm:text-xl mb-8 leading-relaxed">
          The all-in-one analytics platform trusted by 10,000+
          companies worldwide. Get real-time insights, automated
          reports, and AI-powered predictions.
        </p>
        <div class="flex flex-col gap-4">
          <UButton
            size="xl"
            variant="solid"
            color="neutral"
            class="block bg-purple-800 hover:bg-purple-600 text-white font-semibold"
          >
            Start Free Trial
          </UButton>
          <UButton
            size="xl"
            variant="ghost"
            class="block border-purple-300 text-white"
          >
            Schedule Demo
          </UButton>
        </div>
        <p class="text-sm text-center sm:text-left text-purple-200 mt-6">
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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
