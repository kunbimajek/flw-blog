<template>
    <section class="section section__blogs">
        <div class="section__row">
            <div class="cols">
                <Card
                    :post="firstPost"
                    :full="true"
                    :isLoaded="!$fetchState.pending"
                />
            </div>
            <div class="cols-4" v-for="post in posts" :key="post.id">
                <Card :post="post" :isLoaded="!$fetchState.pending" />
            </div>
        </div>
        <div class="text-center my-50">
            <button class="btn btn--bordered" @click="loadMore()">
                Load More
            </button>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
    data() {
        return {
            firstPost: null,
            posts: [],
        };
    },
    computed: {
        ...mapGetters({
            allPosts: "posts/getPosts",
        }),
    },
    methods: {
        ...mapActions({
            fetchPosts: "posts/fetchPosts",
        }),
        ...mapMutations({
            loadMorePosts: "posts/loadMorePosts",
        }),
        loadMore() {
            this.loadMorePosts();
            this.$fetch();
        },
    },
    async fetch() {
        await this.fetchPosts();

        this.firstPost = this.allPosts[0];
        this.posts = this.allPosts.slice(1);
    },
};
</script>
