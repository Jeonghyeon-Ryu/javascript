export default{
  template:`<div class="plan-search-location">
              <button class="selected-option">{{ selectHeader }}<img src="img/arrow-down.svg" width="10px"></button>
              <ul>
                  <li v-for="(option in selectOptions)><button class="option-button">{{ option }}</button></li>
              </ul>
            </div>`,
  props: ['URL'],
  data : function() {
    return {
      selectHeader:'',
      selectOptions:[]
    }
  },
  beforeUpdate : function() {
    let component = this;
    $.ajax(component.URL)
  }     
}