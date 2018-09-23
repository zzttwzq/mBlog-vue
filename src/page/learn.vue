<template>
    <div>

        <div v-for="item in datalist">

            <learncell :datalist='item'/>
        </div>
        

        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="list"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>

    </div>
</template>

<script>

    import Vue from 'vue'
    import learnCell from '../listcell/learncell'
    Vue.component('learncell',learnCell);

    export default {
        mounted: function () {

            var _this = this;

            this.post('/getLearnList',{
                userId:'1',
                page:0,
                size:_this.pagesize,
            },function (data) {

                _this.total = data['total'];

                console.log(data);

                // _this.datalist = _this.datalist.concat(data['data']);
                // console.log(_this.datalist);
            });               
        },
        data: function (){
            return {
                total: 0,
                currentPage:1,
                pagesize:20,
                list: [20,40,60,80,100],
                datalist:[],
            }
        },
        methods: {

            handleSizeChange: function (page){

                console.log(page);

                var _this = this;

                this.post('/getLearnList',{
                    userId:'1',
                    page:_this.currentPage-1,
                    size:_this.pagesize,
                },function (data) {

                    console.log(data);

                    // _this.datalist = [];

                    // _this.datalist = _this.datalist.concat(data['data']);
                    // console.log(_this.datalist);
                });
            },
            handleCurrentChange: function (pages){

                console.log(pages);

                var _this = this;
                _this.currentPage = pages;

                this.post('/getLearnList',{
                    userId:'1',
                    page:pages-1,
                    size:_this.pagesize,
                },function (data) {

                    console.log(data);

                    // _this.datalist = [];

                    // _this.datalist = _this.datalist.concat(data['data']);
                    // console.log(_this.datalist);
                });
            },
        }
    };
</script>

<style>

</style>

