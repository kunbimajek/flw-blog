<template>
    <div>
        <div v-if="post">
            <section class="section section__post">
                <BlogPostDetails :post="this.post[0]" />
            </section>
            <section class="section section__blogs">
                <h3 class="section__heading">More Articles</h3>
                <div class="section__row">
                    <div
                        class="cols-4"
                        v-for="post in this.morePosts.slice(0, 3)"
                        :key="post.id"
                    >
                        <Card :post="post" />
                    </div>
                </div>
            </section>
        </div>
        <div v-else class="section__row">
            <div class="cols-4" v-for="index in 6" :key="index">
                <SkeletonLoader />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: null,
            morePosts: null,
        };
    },
    watch: {
        allPosts() {
            this.initializePost();
        },
    },
    mounted() {
        this.initializePost();
    },
    methods: {
        initializePost() {
            if (this.allPosts) {
                this.post = this.allPosts.filter(
                    (post) => post.slug === this.$route.params.slug
                );
                this.morePosts = this.allPosts.filter(
                    (post) => post.slug !== this.$route.params.slug
                );
            }
        },
    },
};
</script>
