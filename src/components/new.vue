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
    </div>
</template>

<script>
    import topbar from './topbar'
    import maincontent from './maincontent'
    import images from './images'
    import category from './category'
    import forminput from './forminput'

    export default {

        data() {
            return {

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
        },



    }

</script>