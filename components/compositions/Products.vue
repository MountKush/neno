<template lang='pug'>
div(class='container-products')
  div(class='products')

    ProductsHeader(
      :title='settings.collection.title'
      @openDrawer='openDrawer({ id: "sort-filter" })'
      class='products__header'
    )

    ProductSortFilter(
      :sortOptions='settings.collection.sortOptions'
      :defaultSortBy='settings.collection.defaultSortBy'
      :sortBy='settings.collection.sortBy'
      @setSortBy='setSortBy'
      @closeDrawer='closeDrawer'
      class='products__sort-filter'
    )

    ProductsGrid(
      :products='products'
      class='products__grid'
    )

    InfiniteLoading(
      @infinite='infiniteHandler'
      :identifier='infiniteId'
      class='products__infinite-loader'
    )
</template>


<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import axios from 'axios'
import { parseScriptJson } from '~/utils/parseScriptJson'
import ProductsHeader from '~comp/modules/ProductsHeader.vue'
import ProductSortFilter from '~comp/productSortFilter/Index.vue'
import ProductsGrid from '~comp/modules/ProductsGrid.vue'


export default {
  components: {
    ProductsHeader,
    ProductSortFilter,
    ProductsGrid
  },
  props: {
    settings: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      products: [],
      paginateNext: '',
      paginatePageSize: 0,
      infiniteId: 1
    }
  },
  computed: {},
  watch: {
    settings (settings) {
      this.reset()
      this.init()
    }
  },
  methods: {
    addProducts (products) {
      this.products = [...this.products, ...products]
    },


    async fetchMoreProducts () {
      const url = `${this.paginateNext}&section_id=static-collection`
      const { data } = await axios.get(url)
      const json = parseScriptJson({ data, scriptName: '.section-data' })
      const section = json.find(section => section.type === 'static-collection')
      const { products, paginate } = section.settings.collection
      this.paginateNext = paginate.next
      this.addProducts(products)
    },


    async infiniteHandler ($state) {
      if (this.paginateNext === null) {
        $state.complete()
        return
      }
      if (this.paginateNext) {
        await this.fetchMoreProducts()
        $state.loaded()
      }
    },


    async setSortBy (value) {
      this.reset()
      this.$router.push({ query: { sort_by: value }})
      await this.fetchData()
    },


    init () {
      const { products, paginate } = this.settings.collection
      this.addProducts(products)
      this.paginateNext = paginate.next
      this.paginatePageSize = paginate.pageSize
    },


    reset () {
      this.products = []
      this.paginateNext = ''
      this.infiniteId += 1
    },


    ...mapMutations({
      closeDrawer: 'app/CLOSE_DRAWER',
      openDrawer: 'app/OPEN_DRAWER'
    }),


    ...mapActions({
      fetchData: 'app/fetchData'
    })
  },
  mounted () {
    this.init()
  }
}
</script>


<style lang='sass' scoped>
.container-products

.products
  display: grid

  &__header
    margin: $unit auto
    +mq-m
      margin: $unit*3 auto


  &__grid
    @extend %content
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-auto-rows: 1fr
    grid-gap: $unit*2
    +mq-s
      grid-template-columns: repeat(3, 1fr)
    +mq-m
      grid-template-columns: repeat(4, 1fr)

  &__infinite-loader
    margin: $unit*5 0

  &__sort-filter
    // display: none
    // +mq-m
    //   display: unset
    //   grid-row: 2 / -1
    //   grid-column: 1 / 2
</style>
