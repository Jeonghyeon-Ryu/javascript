import tableComponent from './components/table.js'
import navComponent from './components/nav.js'

let app = new Vue({
    el:"#app",
    template: `<div>
                  <nav-component></nav-component>
                  <table-component v-bind:tableTitle="tableTitle" v-bind:tableData="tableData"></table-component>
              </div>`,
    data: {
        tableData:[],
        tableTitle:'테이블 제목'
    },
    created: function(){
        const component = this;
      $.ajax({
        url: "http://localhost:8088/java/emp",
        dataType:'json',
        success: function (result) {
          if(result != null){
            component.tableData = result;
          }
        },
        error: function (error) {
          console.log(error);
        }
      })
    },
    components:{
        "table-component" : tableComponent,
        "nav-component" : navComponent
    },
})