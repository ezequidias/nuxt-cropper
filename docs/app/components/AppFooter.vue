<script setup lang="ts">
const { footer } = useAppConfig()

const links = [
  {
    label: 'Documentation',
    to: '/getting-started',
  },
  {
    label: 'Playground',
    to: 'https://stackblitz.com/github/ezequidias/nuxt-cropper?file=playground%2Fapp.vue',
    target: '_blank',
  },
  {
    label: 'Releases',
    to: 'https://github.com/ezequidias/nuxt-cropper/releases',
    target: '_blank',
  },
]
</script>

<template>
  <UFooter :links="links">
    <template #left>
      <span v-if="footer.credits"> {{ footer.credits }} </span>
      <span v-else class="text-sm">
        Published under
        <NuxtLink
          to="https://github.com/ezequidias/nuxt-cropper/blob/main/LICENSE"
          target="_blank"
          class="underline"
          >MIT License</NuxtLink
        >
      </span>
    </template>

    <template #right>
      <UColorModeButton v-if="footer?.colorMode" />

      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
