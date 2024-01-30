<script lang="ts" setup>
import { add } from '@cjs-to-esm/shared'

const result = add(1, 2)
</script>

<template>
  <h1>Accueil</h1>

  <p>
    {{ result }}
  </p>

  <p>
    <span class="fr-icon-ancient-gate-fill" /> <!-- Exemple icône DSFR -->
  </p>

  <p>
    <VIcon name="ri-flag-line" />  <!-- Exemple icône oh-vue-icon -->
  </p>
</template>
