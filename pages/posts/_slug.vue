<template>
    <div>
        <section class="section section__post">
            <PostDetails :post="this.post[0]" />
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
</template>

<script>
import PostDetails from "~/components/blog/PostDetails.vue";

export default {
    components: {
        PostDetails,
    },
    async asyncData({ store, params }) {
        await store.dispatch("posts/fetchPosts");

        const allPosts = store.state.posts.allPosts;

        const post = allPosts.filter((post) => post.slug === params.slug);

        const morePosts = allPosts.filter((post) => post.slug !== params.slug);

        return { post, morePosts };
    },
};
</script>
