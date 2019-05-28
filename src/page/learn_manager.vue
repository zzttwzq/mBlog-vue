<template>
    <div class="learnlist">

        <div v-for="item in datalist">
            <learn_manager_cell @click="clickWithItem('aaa')" :datalist='item'/>  
        </div>
    </div>
</template>

<script>

    import Vue from 'vue'
    import learn_manager_cells from '../listcell/learn_manager_cell.vue'
    Vue.component('learn_manager_cell',learn_manager_cells);

    export default {
        mounted: function () {

            var _this = this;

            this.http.post(this.api.getLearnList,{
                userId:window.localStorage.getItem('userId'),
                page:0,
                size:_this.pagesize,
            },function (data) {

                _this.total = data['total'];

                console.log(data);

                _this.datalist = _this.datalist.concat(data['data']);
                console.log(_this.datalist);
            });               
        },
        data: function (){
            return {
                total: 0,
                currentPage:1,
                pagesize:20,
                list: [20,40,60,80,100],
                datalist:[],
                page:0,
            }
        },
        methods: {

            handleSizeChange: function (page){

                console.log(page);

                var _this = this;

                this.http.post(this.api.getLearnList,{
                    userId:window.localStorage.getItem('userId'),
                    page:_this.currentPage-1,
                    size:_this.pagesize,
                },function (data) {

                    _this.datalist = _this.datalist.concat(data['data']);
                    console.log(_this.datalist);
                });
            },
            handleCurrentChange: function (pages){

                console.log(pages);

                var _this = this;
                _this.currentPage = pages;

                this.http.post(this.api.getLearnList,{
                    userId:window.localStorage.getItem('userId'),
                    page:pages-1,
                    size:_this.pagesize,
                },function (data) {

                    _this.datalist = [];

                    _this.datalist = _this.datalist.concat(data['data']);
                    console.log(_this.datalist);
                });
            },
        }
    };
</script>

<style scoped>
    
    .learnlist{
        box-shadow: 0px 0px 10px #e0e0e0;
        -webkit-box-shadow: 0px 0px 10px #e0e0e0;
        -moz-box-shadow: 0px 0px 10px #e0e0e0;
        -o-box-shadow: 0px 0px 10px #e0e0e0;
        -ms-box-shadow: 0px 0px 10px #e0e0e0;
        margin-bottom: 65px;
    }
</style>

