<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <span class="me-1"><IconInfoFill /></span>
    {{ error.message }}.
    <p class="text-center mt-5">
      <NLink :to="{ name: 'index' }">
        Back to Home
      </NLink>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  computed: {
    title () {
      return this.error.statusCode === 404
        ? 'Not Found'
        : 'An Error Occurred'
    }
  }
}
</script>
