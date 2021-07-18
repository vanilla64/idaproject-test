<template>
  <nav class="category-list">
    <CategoryLink
      v-for="category in categories" :key="category.id"
      v-bind:category="category"
      v-bind:to="category.id"
    />
  </nav>
</template>

<script>
  export default {
    data: () => ({
      categories: []
    }),
    async fetch() {
      this.categories = await fetch(
        'https://frontend-test.idaproject.com/api/product-category'
      ).then(res => res.json())
    }
  }
</script>

<style lang="sass" scoped>
  .category-list
    list-style-type: none
    padding: 0
</style>
