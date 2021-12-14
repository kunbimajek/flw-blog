export const state = () => ({
    allPosts: null,
    count: 7
});

export const getters = {
    getPosts({ allPosts }) {
        return allPosts;
    },
    postCount({count}) {
        return count
    }
};

export const actions = {
    async fetchPosts({ commit }) {
        let fields =
            "jetpack_featured_media_url,excerpt,content,date,title,id,slug";

        const response = await this.$axios.get(`?_fields=${fields}&per_page=19`);
       
        commit("setPosts", response.data);
    },
};

export const mutations = {
    setPosts(state, action) {
        state.allPosts = action;
    },
    loadMorePosts(state) {
        state.count += 3;
    }
};
