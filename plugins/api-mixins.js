import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

Vue.mixin({
  computed: {
    ...mapGetters({
        allPosts: "posts/getPosts",
    })
  },

  methods: {
    ...mapActions({
        fetchPosts: "posts/fetchPosts",
    })
  }
})
