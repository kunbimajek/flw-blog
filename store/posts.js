export const state = () => ({
    allPosts: [],
    postCount: 7
});

export const getters = {
    getPosts({ allPosts }) {
        return allPosts;
    },
    postCount({postCount}) {
        return postCount
    }
};

export const actions = {
    async fetchPosts({ commit, state }) {
        let fields =
            "jetpack_featured_media_url,excerpt,content,date,title,id,slug";

        const response = await this.$axios.get(`?_fields=${fields}&per_page=${state.postCount}`);
       
        commit("setPosts", response.data);
    },
};

export const mutations = {
    setPosts(state, action) {
        state.allPosts = action;
    },
    loadMorePosts(state) {
        state.postCount += 3;
    }
};
