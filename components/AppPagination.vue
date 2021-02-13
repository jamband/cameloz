<template>
  <nav v-if="hasPage()" class="text-center" aria-label="Page navigation">
    <ul class="pagination mt-sm-3 mb-0 d-flex">
      <li :class="disabledSelector('prev')" class="page-item flex-fill">
        <NLink
          :to="pageLink(currentPage - 1)"
          :aria-current-value="null"
          :aria-disabled="disabled('prev')"
          :tabindex="disabled('prev') ? -1 : 0"
          class="page-link"
          aria-label="Previous"
        >
          <IconChevronLeft />
          <span class="ms-2">Prev</span>
        </NLink>
      </li>
      <li :class="disabledSelector('next')" class="page-item flex-fill">
        <NLink
          :to="pageLink(currentPage + 1)"
          :aria-current-value="null"
          :aria-disabled="disabled('next')"
          :tabindex="disabled('next') ? -1 : 0"
          class="page-link"
          aria-label="Next"
        >
          <span class="me-2">Next</span>
          <IconChevronRight />
        </NLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    lastPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    currentPage () {
      return Number(this.$route.query.page) || 1
    }
  },
  methods: {
    disabled (part) {
      return part === 'prev'
        ? this.currentPage < 2
        : this.currentPage >= this.lastPage
    },
    disabledSelector (part) {
      return this.disabled(part) ? 'disabled' : ''
    },
    pageLink (page) {
      return {
        query: { ...this.$route.query, page }
      }
    },
    hasPage () {
      return this.lastPage > 1
    }
  }
}
</script>
