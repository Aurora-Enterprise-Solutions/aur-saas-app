const getSafeElement = (parent, selector, def, getBy = 'getElementsByClassName') =>!!parent[getBy](selector).length ? parent[getBy](selector) : def

export default {
    computed: {
        __doctypeLabel() {

            return this.doctype && this.doctype.label ? this.__getDoctypeLabel(this.doctype.label) : ''

        },
        __doctypeForms() {

            return this.doctype && this.doctype.forms ? this.doctype.forms : []

        },
    },
    watch: {
        tab() {

            this.__setTablesHeight()

        },
    },
    mounted() {

        this.__setupMutationObserve()
        this.__setupChangeEventForTabs()

    },
    beforeDestroy() {

        this.__teardownMutationObserve()

    },
    methods: {
        __getDoctypeLabel(object) {

            return object ? object[this.$i18n.locale] || object[this.$i18n.fallbackLocale] : ''

        },

        $__getMaintainerHeaderToolbarNode() {

            return getSafeElement(this.$root.$el, 'aur-component-maintainer-header-toolbar', [{}] )[0]

        },

        $__getMaintainerTablesTabsNode() {

            return getSafeElement(this.$root.$el, 'aur-component-maintainer-tables-tabs', [{}] )[0]

        },

        $__getMaintainerTablesTabsActiveTabNode() {

            const maintainerTablesTabsNode = this.$__getMaintainerTablesTabsNode()
            const maintainerTablesTabsActiveTabNode = getSafeElement(maintainerTablesTabsNode, '.aur-component-maintainer-tab-item.v-window-item--active', [ null ], 'querySelectorAll')[0]

            return maintainerTablesTabsActiveTabNode

        },

        __setTablesHeight(evt) {

            if (evt && typeof evt.stopPropagation === 'function')
                evt.stopPropagation()

            setTimeout( () => {

                const pageNode = getSafeElement(this.$root.$el, 'aur-page', [{}] )[0]
                const maintainerHeaderToolbarNode = this.$__getMaintainerHeaderToolbarNode()
                const maintainerTablesTabsNode = this.$__getMaintainerTablesTabsNode()
                const maintainerTablesTabsHeaderBarNode = getSafeElement(maintainerTablesTabsNode, 'v-tabs-bar', [{}] )[0]
                const maintainerTablesTabsActiveTabNode = this.$__getMaintainerTablesTabsActiveTabNode()

                if (maintainerTablesTabsActiveTabNode) {

                    const footerNode = maintainerTablesTabsActiveTabNode.getElementsByClassName('v-data-footer')[0]
                    const tableNode = maintainerTablesTabsActiveTabNode.getElementsByClassName('v-data-table__wrapper')[0]

                    tableNode.style.maxHeight = '0px'
                    tableNode.style.maxHeight = `${pageNode.offsetHeight - maintainerHeaderToolbarNode.offsetHeight - maintainerTablesTabsHeaderBarNode.offsetHeight - footerNode.offsetHeight}px`

                }

            }, 100)

        },

        // When a tab is activated, set the height of the maintainer table
        __setupChangeEventForTabs() {

            setTimeout( () => {

                const maintainerPageTabsWrapperNode = getSafeElement(this.$root.$el, 'aur-component-maintainer-tables-tabs', [{}] )[0]
                const maintainerPageTabsNode = maintainerPageTabsWrapperNode.getElementsByClassName('aur-component-maintainer-tab')

                for (const tabNode of Array.from(maintainerPageTabsNode) )
                    tabNode.addEventListener('click', this.__setTablesHeight)

            }, 100)

        },

        // Setup mutation observer for subtree changes
        __setupMutationObserve() {

            // Setup object that will contain all the mutation observers
            if (!this.$data.__maintainerTablesMutationsObservers)
                this.$data.__maintainerTablesMutationsObservers = {}

            // Select the node that will be observed for mutations
            const maintainerPageTabsItemsNode = this.$root.$el.querySelectorAll('.aur-component-maintainer-tables-tabs .aur-component-maintainer-tab-item')

            const config = { attributes: false, childList: true, subtree: true }

            for (const targetNode of maintainerPageTabsItemsNode) {

                const aurId = targetNode.getAttribute('aur-id')
                const observer = this.$data.__maintainerTablesMutationsObservers[aurId]

                if (!observer) {

                    // Create an observer instance linked to the callback function
                    this.$data.__maintainerTablesMutationsObservers[aurId] = new MutationObserver(this.__setTablesHeight)
                    // Start observing the target node for configured mutations
                    this.$data.__maintainerTablesMutationsObservers[aurId].observe(targetNode, config)

                }

            }

        },

        // Stop mutation observer before destroy component
        __teardownMutationObserve() {

            Object.values(this.$data.__maintainerTablesMutationsObservers).forEach(observer => observer.disconnect() )

        },
    },
}
