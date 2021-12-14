<template>
    <div>
        <Header />
        <Nuxt />
    </div>
</template>

<script>
export default {
    async mounted() {
        await this.fetchPosts()
    }
};
</script>
