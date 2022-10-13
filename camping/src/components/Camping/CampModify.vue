<template>
    <div class="camp-detail-container">
        <div class="camp-detail-title-container">
            <input :value="camp.campName" class="camp-detail-title" readonly/>
            <div class="camp-detail-title-info">
                <div class="camp-detail-review-count"><a href="#camp-detail-sns-container">후기(30)</a></div>
                <div class="camp-detail-address"><a href="#" v-text="camp.campAddress"></a></div>
            </div>
        </div>
        <div class="camp-detail-image-container">
            <CampDetailImage :campId="campId"></CampDetailImage>
        </div>
        <div class="camp-detail-info-container">
            <form class="camp-detail-info-left">
                <input type="text" name="campId" :value="campId" style="display:none;"/>
                <div class="camp-detail-map">
                    <span>위치 정보</span>
                    <div class="prev" v-text="camp.campAddress"></div>
                    <input type="text" name="campAddress" placeholder="" />
                    <KakaoMap :search="camp.campAddress" :isNotList="isNotList"></KakaoMap>
                </div>
                <div class="camp-detail-site">
                    <span>사이트 수</span>
                    <div class="prev" v-text="camp.campSite"></div>
                    <input type="text" name="campSite" value="2개" />
                </div>
                <div class="camp-detail-price">
                    <span>가격</span>
                    <div class="prev" v-text="camp.campPrice"></div>
                    <input type="text" name="campPrice" value="가격정보 없음" />
                </div>
                <div class="camp-detail-info">
                    <span>정보</span>
                    <div class="camp-detail-info-buttons">
                        <div class="row">
                            <label class="checkboxLabel">
                                <input type="checkbox" name="campInfo" value="toilet"  :checked="camp.campInfo.toilet"/>
                                <div class="icon-box" @click="clickCheckBox($event)">
                                    <img src="@/assets/img/Camping/toilet.png" />
                                    <span>화장실</span>
                                </div>
                            </label>
                            <label class="checkboxLabel">
                                <input type="checkbox" name="campInfo" value="parking"  :checked="camp.campInfo.parking"/>
                                <div class="icon-box" @click="clickCheckBox($event)">
                                    <img src="@/assets/img/Camping/parking.png">
                                    <span>주차장</span>
                                </div>
                            </label>
                            <label class="checkboxLabel">
                                <input type="checkbox" name="campInfo" value="shower"  :checked="camp.campInfo.shower"/>
                                <div class="icon-box" @click="clickCheckBox($event)">
                                    <img src="@/assets/img/Camping/shower.png" />
                                    <span>샤워장</span>
                                </div>
                            </label>
                            <label class="checkboxLabel">
                                <input type="checkbox" name="campInfo" value="disposal"  :checked="camp.campInfo.disposal"/>
                                <div class="icon-box" @click="clickCheckBox($event)">
                                    <img src="@/assets/img/Camping/disposal.png" />
                                    <span>쓰레기장</span>
                                </div>
                            </label>

                            <label class="checkboxLabel">
                                <input type="checkbox" name="campInfo" value="deck"  :checked="camp.campInfo.deck"/>
                                <div class="icon-box" @click="clickCheckBox($event)">
                                    <img src="@/assets/img/Camping/deck.png" />
                                    <span>데크</span>
                                </div>
                            </label>

                            <label class="checkboxLabel">
                                <input type="checkbox" name="campInfo" value="bbq"  :checked="camp.campInfo.bbq"/>
                                <div class="icon-box" @click="clickCheckBox($event)">
                                    <img src="@/assets/img/Camping/bbq.png" />
                                    <span>바비큐</span>
                                </div>
                            </label>
                            <label class="checkboxLabel">
                                <input type="checkbox" name="campInfo" value="swim"  :checked="camp.campInfo.swim"/>
                                <div class="icon-box" @click="clickCheckBox($event)">
                                    <img src="@/assets/img/Camping/swim.png" />
                                    <span>수영장</span>
                                </div>
                            </label>
                            <label class="checkboxLabel">
                                <input type="checkbox" name="campInfo" value="spoon"  :checked="camp.campInfo.spoon"/>
                                <div class="icon-box" @click="clickCheckBox($event)">
                                    <img src="@/assets/img/Camping/spoon.png" />
                                    <span>조리도구</span>
                                </div>
                            </label>
                            <label class="checkboxLabel">
                                <input type="checkbox" name="campInfo" value="lease"  :checked="camp.campInfo.lease"/>
                                <div class="icon-box" @click="clickCheckBox($event)">
                                    <img src="@/assets/img/Camping/lease.png" />
                                    <span>장비대여</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </form>
            <div class="camp-detail-info-right">
                <RButton :inputColor="'lightGreen'" :inputSize="'md'" :inputValue="'수정신청'" @clickBtn="confirm()">
                </RButton>
                <RButton :inputColor="'cream'" :inputSize="'md'" :inputValue="'취소'" @clickBtn="cancel()"></RButton>
            </div>
        </div>
        <div id="camp-detail-sns-container" class="camp-detail-sns-container">

        </div>
    </div>
</template>

<script>
import KakaoMap from "../KakaoMap.vue";
import CampDetailImage from "./CampDetailImage.vue";
import RButton from "../Admin/RButton.vue";
export default {
    data: function () {
        return {
            isNotList: true,
            search: '대구광역시 달서구 달서대로 719',
            campId: this.$route.params.campId,
            camp: {},
        }
    },
    created: function () {
        fetch('http://localhost:8087/java/campDetail/' + this.campId)
            .then(result => result.json())
            .then(result => {
                result.campInfo = result.campInfo.split(" ");
                let info = {
                    toilet: false,
                    parking: false,
                    shower: false,
                    disposal: false,
                    deck: false,
                    bbq: false,
                    swin: false,
                    spoon: false,
                    lease: false
                };
                for (let infoTemp of result.campInfo) {
                    info[infoTemp] = true;
                }
                result.campInfo = info;
                this.camp = result;
                console.log(this.camp)
            })
    },
    components: { KakaoMap, CampDetailImage, RButton },
    methods: {
        // 후기 셋팅 필요
        // 주소 카카오맵 할당 필요
        // 기타 정보 할당 필요
        // 사진 Swiper 적용하기
        clickCheckBox(e) {
            e.preventDefault();
            let checkItem = e.target.parentElement;
            while (!checkItem.classList.contains('checkboxLabel')) {
                checkItem = checkItem.parentElement;
            }
            checkItem = checkItem.querySelector('input');

            console.log(checkItem.checked);
            if (checkItem.checked) {
                checkItem.checked = false;
            } else {
                checkItem.checked = true;
            }
        },
        confirm() {
            let fetchData = {};
            new FormData(document.querySelector('.camp-detail-info-left')).forEach((value, key) => fetchData[key] = value);
            for (let aa of document.querySelectorAll('input[type="checkbox"]')) {
                if (aa.checked) {
                    fetchData.camp_info = fetchData.camp_info + ',' + aa.value;
                }
            }
            console.log(fetchData);


        },
        cancel() {

        }
    }
}
</script>

<style scoped src="@/assets/css/Camping/CampDetail.css">

</style>
