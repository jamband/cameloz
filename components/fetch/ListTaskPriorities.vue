<template>
  <div class="dropdown d-inline-block">
    <button
      id="taskPriorities"
      class="btn btn-link dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Priorities
      <span class="ms-1"><IconChevronDown /></span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="taskPriorities">
      <li>
        <NLink
          :to="{
            name: 'projects-id',
            params: { id: $route.params.id }
          }"
          class="dropdown-item"
        >
          Reset
        </NLink>
      </li>
      <li><hr class="dropdown-divider"></li>
      <li v-if="$fetchState.pending">
        <span class="dropdown-item">Loading...</span>
      </li>
      <li v-else-if="$fetchState.error">
        <span class="dropdown-item-text">Request failure</span>
      </li>
      <li v-for="priority in priorities" v-else :key="priority.id">
        <NLink
          :to="{ query: { priority_id: priority.id } }"
          class="dropdown-item"
        >
          {{ priority.name }}
        </NLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
