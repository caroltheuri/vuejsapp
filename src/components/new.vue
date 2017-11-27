<template>
    <div>
        <topbar>
           <div slot="header">

           </div>
        </topbar>

        <maincontent>
            <div slot="about">

            </div>
        </maincontent>
        <images>
            <div slot="gallery">

            </div>
        </images>
        <hr>
        <category>
            <div slot="categories"></div>

        </category>
        <hr>
        <forminput>
     <div slot="formdetails"></div>
        </forminput>
        <keep-alive>
            <component :is="currentView">

            </component>
        </keep-alive>

    </div>
</template>

<script>
    import topbar from './topbar'
    import maincontent from './maincontent'
    import images from './images'
    import category from './category'
    import forminput from './forminput'
    import selection from './selection'

    export default {

        data() {
            return {
currentView:'selection',
            }
        },

        methods: {

        },

        components: {
            topbar,
            maincontent,
            images,
            category,
            forminput,
            selection,
        },



    }

</script>