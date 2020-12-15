<template>
    <div class="pagination">
        <button @click="changebtn">首页</button>
        <button @click="changebtn">上一页</button>
        <button v-if="isShow">......</button>
        <button v-for="btn in btns"
                v-bind:key="btn"
                :class="[{currentPage:btn == currentPage},'pagebtn']"
                @click="changebtn(btn)"

        >
            {{btn}}
        </button>
        <button @click="changebtn">下一页</button>
    </div>

</template>

<script>
    import $ from 'jquery'
    export default {
        name: "Pagination",
        data(){
            return{
                btns:[1,2,3,4,5,'......'],
                currentPage:1,
                isShow:false
            }

        },
        methods:{
            changebtn(page){
                if(typeof page != "number"){
                    switch (page.target.innerText) {
                        case '首页':
                            this.btns=[1,2,3,4,5,'......']
                                this.changebtn(1)
                            break
                        case '上一页':
                            $('button.currentPage').prev().click()
                            break
                        case '下一页':
                            $('button.currentPage').next().click()
                            break
                        default:
                            break
                    }
                    return
                }
                this.currentPage = page
                if(page == this.btns[4]){
                    this.btns.shift()
                    this.btns.splice(4,0,this.btns[3]+1)
                }else if(page == this.btns[0] && this.btns[0]>1){
                    this.btns.unshift(this.btns[0]-1)
                    this.btns.splice(5,1)
                }

                if (this.btns[0]>1){
                    this.isShow = true
                }else {
                    this.isShow = false
                }
                this.$emit('renderList',this.currentPage)
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .pagination {
        margin-top: 10px;
        margin-bottom: 20px;
        background-color: white;
        padding: 6px 20px;
        border-radius: 5px;
        /*box-shadow: 0px 2px 9px #888888;*/
        /*border: 1px solid #888888;*/
    }

    button {
        background-color: #fff;
        border: 1px solid #ddd;
        color: #778087;
        border-radius: 3px;
        outline: none;
        height: 21px;
        cursor: pointer;
        padding: 0 2px;
        width: 55px;
        height: 29px;
    }

    .pagebtn {
        position: relative;
        bottom: 1px;
        width: 40px;
        margin: 0 4px;
    }

    .currentPage {
        color: white;
        background-color: #1f1b1b;

    }
</style>