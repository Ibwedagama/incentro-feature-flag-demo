<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <UContainer>
        <div class="flex items-center justify-between h-16">
          <!-- Logo/Brand -->
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">FF</span>
            </div>
            <span class="font-semibold text-gray-900">Feature Flag Demo</span>
          </div>

          <!-- Navigation Links -->
          <div class="flex items-center gap-6">
            <NuxtLink
              to="/"
              class="text-gray-600 hover:text-gray-900 transition-colors"
              active-class="text-blue-600 font-medium"
            >
              Basic Examples
            </NuxtLink>
            <NuxtLink
              to="/ab-testing"
              class="text-gray-600 hover:text-gray-900 transition-colors"
              active-class="text-blue-600 font-medium"
            >
              A/B Testing
            </NuxtLink>
            <NuxtLink
              to="/custom-context"
              class="text-gray-600 hover:text-gray-900 transition-colors"
              active-class="text-blue-600 font-medium"
            >
              Custom Context
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </nav>
    <NuxtPage />
  </div>
</template>
