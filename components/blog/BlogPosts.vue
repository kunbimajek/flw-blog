<template>
    <section class="section section__blogs">
        <div v-if="allPosts" class="section__row">
            <div class="cols">
                <Card :post="firstPost" :full="true" />
            </div>
            <div class="cols-4" v-for="post in posts" :key="post.id">
                <Card :post="post" />
            </div>
        </div>
        <div v-else class="section__row">
            <div class="cols">
                <SkeletonLoader :full="true" />
            </div>
            <div class="cols-4" v-for="index in 6" :key="index">
                <SkeletonLoader />
            </div>
        </div>
        <div class="text-center my-50">
            <button
                class="btn btn--bordered"
                :class="{ 'btn--disabled': btnDisabled }"
                @click="loadMore()"
            >
                {{ btnDisabled ? "No More Posts" : "Load More" }}
            </button>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    data() {
        return {
            firstPost: null,
            posts: null,
            btnDisabled: false,
        };
    },
    computed: {
        ...mapGetters({
            postCount: "posts/postCount",
        }),
    },
    watch: {
        allPosts() {
            this.initializeData();
        },
    },
    methods: {
        ...mapMutations({
            loadMorePosts: "posts/loadMorePosts",
        }),
        async loadMore() {
            await this.loadMorePosts();
            this.posts = this.allPosts.slice(1, this.postCount);

            if (this.postCount === 19) this.btnDisabled = true;
        },
        initializeData() {
            if (this.allPosts) {
                this.firstPost = this.allPosts[0];
                this.posts = this.allPosts.slice(1, 7);
            }
        },
    },
    async mounted() {
        this.initializeData();
    },
};
</script>
