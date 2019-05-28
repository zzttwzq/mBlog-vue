<template>
     <div class="pagenavigation">

            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="list"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
                style="background:white;margin:auto;"
                >
            </el-pagination>

        </div>
</template>

<script>
    export default {
        data: function (){
            return {
                currentPage:0,
                list:['20','40','60','80','100'],
                pagesize:20,
                total:400,
            }
        },
        methods: {

            handleSizeChange: function (page){

                console.log(page);
            },
            handleCurrentChange: function (page){

                console.log(page);
            },
        },
    }
</script>

<style scoped>

    .pagenavigation{
        position:fixed; 
        left:250px; 
        bottom:0px; 
        z-index:9999;
        width: 620px;
        padding: 10px 10px;
        background: white;
        border-radius: 5px;
        box-shadow: 0px 0px 10px #e0e0e0;
        -webkit-box-shadow: 0px 0px 10px #e0e0e0;
        -moz-box-shadow: 0px 0px 10px #e0e0e0;
        -o-box-shadow: 0px 0px 10px #e0e0e0;
        -ms-box-shadow: 0px 0px 10px #e0e0e0;
    }
</style>
