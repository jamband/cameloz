<template>
  <header class="fixed-top py-3 text-center bg-dark">
    <nav class="container" aria-label="Header navigation">
      <NLink :to="{ name: 'index' }" class="text-primary text-decoration-none">
        {{ appName }}
      </NLink>
    </nav>
  </header>
</template>

<script>
import { APP_NAME } from '~/utils/constants'

export default {
  data () {
    return {
      appName: APP_NAME
    }
  }
}
</script>
