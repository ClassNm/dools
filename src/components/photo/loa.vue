<!--<template>-->
    <!--<div>-->
        <!--<label>-->
            <!--点我上传图片!!!-->
            <!--<input type='file' @change="change" ref="input">-->
        <!--</label>-->
        <!--<img :src="src" ref="img">-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--// el: '#wrap',-->
        <!--data(){-->
            <!--return{-->
                <!--// 一张透明的图片-->
                <!--src:'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',-->
                <!--elInput: null-->
            <!--};-->
        <!--},-->
        <!--methods: {-->
            <!--change(e){-->
                <!--// ...-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->










<!--<template>-->
    <!--<div>-->
        <!--<Upload-->
                <!--:before-upload="handleUpload"-->
                <!--action="//jsonplaceholder.typicode.com/posts/">-->
            <!--<Button icon="ios-cloud-upload-outline">Select the file to upload</Button>-->
        <!--</Upload>-->
        <!--<div v-if="file !== null">-->
            <!--Upload file:-->
            <!--{{ file.name }}-->
            <!--<Button type="text" @click="upload" :loading="loadingStatus">-->
                <!--{{ loadingStatus ? 'Uploading' : 'Click to upload' }}-->
            <!--</Button></div>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--file: null,-->
                <!--loadingStatus: false-->
            <!--}-->
        <!--},-->
        <!--methods: {-->
            <!--handleUpload (file) {-->
                <!--this.file = file;-->
                <!--return false;-->
            <!--},-->
            <!--upload () {-->
                <!--this.loadingStatus = true;-->
                <!--setTimeout(() => {-->
                    <!--this.file = null;-->
                    <!--this.loadingStatus = false;-->
                    <!--this.$Message.success('Success')-->
                <!--}, 1500);-->
            <!--}-->
        <!--},-->
        <!--beforeMount(){-->
            <!--console.log(this.file);-->
        <!--}-->

    <!--}-->
<!--</script>-->




