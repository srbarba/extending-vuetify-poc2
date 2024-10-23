<script lang="ts" setup></script>

<template>
  <v-app>
    <v-main>
      <SButton
        text="Click me"
        variant="outlined"
        size="12px"
        @click="() => console.log('clicked')"
      >
        icon
      </SButton>
    </v-main>
  </v-app>
</template>
