<template>
  <div>
    <div class="form-label">
      Priority
    </div>
    <AppLoading v-if="$fetchState.pending" />
    <div v-else-if="$fetchState.error">
      Request failure
    </div>
    <div
      v-for="priority in priorities"
      v-else
      :key="priority.id"
      class="form-check form-check-inline"
    >
      <input
        :id="`priority${priority.name}`"
        class="form-check-input"
        type="radio"
        name="priority"
        :value="priority.id"
        :checked="value === priority.id"
        @change="$emit('input', $event.target.value)"
      >
      <label
        class="form-check-label"
        :for="`priority${priority.name}`"
      >{{ priority.name }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      required: true
    }
  },
  async fetch () {
    if (!this.$store.state.task.priorities.length) {
      this.$store.dispatch(
        'task/fetchPriorities',
        await this.$axios.$get('task_priorities')
      )
    }
  },
  computed: {
    priorities () {
      return this.$store.state.task.priorities
    }
  }
}
</script>
