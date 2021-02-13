<template>
  <footer class="fixed-bottom py-3 text-center bg-dark">
    <nav class="container" aria-label="Footer navigation">
      <ul class="list-inline mb-0">
        <li class="list-inline-item">
          <a
            href="https://github.com/jamband/cameloz"
            rel="noopener"
            target="_blank"
          >GitHub</a>
        </li>
        <li class="list-inline-item">
          <NLink :to="{ name: 'about' }">
            About
          </NLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>
