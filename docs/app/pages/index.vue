<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryContent('/').findOne(),
)

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})
</script>

<template>
  <div>
    <ULandingHero
      v-if="page.hero"
      v-bind="page.hero"
    >
      <template #headline>
        <UBadge
          v-if="page.hero.headline"
          variant="subtle"
          size="lg"
          class="relative rounded-full font-semibold"
        >
          <NuxtLink
            :to="page.hero.headline.to"
            target="_blank"
            class="focus:outline-none"
            tabindex="-1"
          >
            <span
              class="absolute inset-0"
              aria-hidden="true"
            />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon
            v-if="page.hero.headline.icon"
            :name="page.hero.headline.icon"
            class="pointer-events-none ml-1 h-4 w-4"
          />
        </UBadge>
      </template>

      <template #title>
        <MDC :value="page.hero.title" />
      </template>

      <div class="mx-auto w-fit">
        <LogoLiquidFill class="mx-auto mb-12" />
        <MDC
          :value="page.hero.code"
          tag="pre"
          class="prose prose-primary dark:prose-invert mx-auto"
        />
      </div>
    </ULandingHero>

    <ULandingSection
      :title="page.features.title"
      :links="page.features.links"
    >
      <UPageGrid>
        <ULandingCard
          v-for="(item, index) of page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>
  </div>
</template>
