// Ver.1 : Created by Jung Hyun Ryu
// Grid 300 1fr 반응형 ( table.css 확인. )
// Props : tableData ( JSON 형식 )
// Data : tableHeader ( beforeUpdate 자동 할당 )
export default{
  template:`<ul class="cards">
              <li v-for="card in cardData">
                <a href="" class="card">
                  <div class="card-img-container">
                      <img src="img/img1.jpg" class="card-image" alt="" />
                  </div>
                  <div class="card-overlay">
                    <div class="card-header">
                      <svg class="card-arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                      <img class="card-thumb" src="img/img1.jpg" alt="" />
                      <div class="card-header-text">
                        <h3 class="card-title" v-text="cardTitle"></h3>
                        <span class="card-tagline">주소</span>
                        <span class="card-status">1 hour ago</span>
                      </div>
                    </div>
                    <p class="card-description">이용시간 : <br>
                  가격: </p>
                  </div>
                </a>      
              </li>
            </ul>`,
  props: ['cardData', 'cardTitle'],
  beforeUpdate : function(){
  }     
}