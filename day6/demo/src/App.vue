<template>
  <div class="wrap">
     <el-button type="danger" plain @click="addFn">添加</el-button>
   <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="用户名"
      prop="user">
    </el-table-column>
    <el-table-column
      label="密码"
      prop="pwd">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header">
        操作
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      background=""
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum+1"
      :page-sizes="[1, 2, 3, 7]"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <el-dialog title="用户信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="用户名" label-width="200">
                  <el-input v-model="form.user" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="密码" label-width="200">
                  <el-input v-model="form.pwd" autocomplete="off"></el-input>
            </el-form-item>
          
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="queFn">确 定</el-button>
        </div>
</el-dialog>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        tableData: [],
        total:0,
        limit:7,
        pagenum:0,
        dialogFormVisible:false,
        form:{
          user:"",
          pwd:"",
          id:""
        }
      }
    },
    methods: {
      addFn(){
           this.dialogFormVisible=true
      },
      queFn(){
        let url="";
           if(this.form.id || this.form.id===0){
               url='/list/update';
           }else{
             url='/list/add';
           }
          this.$axios.post(url,{...this.form}).then(({data})=>{
             if(data.code===1){
               alert(data.msg)
               this.dialogFormVisible=false
               this.getData()
               this.form={
                 user:"",
                 pwd:""
               }
             }
          })
      },
      handleEdit( row) {
        this.dialogFormVisible=true
        this.form={...row}
      },
      handleDelete(row) {
         this.$axios.post('/list/delete',{id:row.id}).then(({data})=>{
           if(data.code===1){
             this.getData()
              alert("删除成功")
           }
          })   
      },
      handleCurrentChange(curP){
          this.pagenum=curP-1;
          console.log(curP)
          this.getData() 
      },
      handleSizeChange(curL){
          this.limit=curL;
          this.getData() 
      },
      getData(){
         this.$axios.get('/list/look',{params:{pagenum:this.pagenum,limit:this.limit}}).then(({data})=>{
            this.tableData=data.list;
            this.total=data.total;
          })   
      }
    },
    created(){
      this.getData() 
    },
    

  }
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body{
  width: 100%;
  height: 100%;
}
  .wrap{
    width: 60%;
    margin: 0 auto;
  }
</style>