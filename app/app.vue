<template>
  <div>
    <Navbar />
    <FlagProvider
      :unleash-client="client"
      :start-client="false"
    >
      <NuxtPage :is-loading="isLoading" />
    </FlagProvider>
  </div>
</template>

<script lang="ts" setup>
import { FlagProvider, UnleashClient } from '@unleash/proxy-client-vue'

const config = useRuntimeConfig()
const isLoading = ref<boolean>(true)

const unleashConfig = {
  url: config.public.unleashUrl || 'http://localhost:4242/api/frontend/',
  clientKey: config.public.clientKey,
  refreshInterval: 5,
  appName: 'default',
}

const client = new UnleashClient(unleashConfig)

onMounted(() => {
  client.start()
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>
