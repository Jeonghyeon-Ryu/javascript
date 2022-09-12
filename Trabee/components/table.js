// Ver.1 : Created by Jung Hyun Ryu
// 768px 에 반응형 ( table.css 확인. )
// Props : tableData ( JSON 형식 )
// Data : tableHeader ( beforeUpdate 자동 할당 )
export default{
    template:`<div class="table-container">
                <h2 v-text="tableTitle"></h2>
                <ul class="responsive-table">
                  <li class="table-header">
                    <template v-for="(header, index) in tableHeader">
                      <div class="col" v-bind:class="'col-' + index">{{ header }}</div>
                    </template>
                  </li>
                  <li v-for="data in tableData" class="table-row">
                    <template v-for="(header, index) in tableHeader">
                      <div class="col" v-bind:class="'col-' + index">{{ data[header] }}</div>
                    </template>
                  </li>
                </ul>
            </div>`,
    props: ['tableData', 'tableTitle'],
    data : function() {
      return {
        tableHeader:[],
      }
    },
    beforeUpdate : function(){
      console.log(this.tableTitle)
      for(let header in this.tableData[0]){
        this.tableHeader.push(header);
      }
    }     
}