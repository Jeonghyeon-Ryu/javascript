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
            <div class="camp-detail-info-left">
                <div class="camp-detail-map">
                    <span>위치 정보</span>
                    <KakaoMap :search="camp.campAddress" :isNotList="isNotList"></KakaoMap>
                </div>
                <div class="camp-detail-site">
                    <span>사이트 수</span>
                    <input type="text" :value="camp.campSite" readonly />
                </div>
                <div class="camp-detail-price">
                    <span>가격</span>
                    <input type="text" :value="camp.campPrice" readonly />
                </div>
                <div class="camp-detail-info">
                    <span>정보</span>
                    <div class="camp-detail-info-buttons">
                        <div class="row">
                            <label>
                                <input type="checkbox" name="toilet" :checked="camp.campInfo.toilet"/>
                                <div class="icon-box">
                                    <img src="@/assets/img/Camping/toilet.png" />
                                    <span>화장실</span>
                                </div>
                            </label>
                            <label>
                                <input type="checkbox" name="parking" :checked="camp.campInfo.parking"/>
                                <div class="icon-box">
                                    <img src="@/assets/img/Camping/parking.png">
                                    <span>주차장</span>
                                </div>
                            </label>
                            <label>
                                <input type="checkbox" name="shower" :checked="camp.campInfo.shower"/>
                                <div class="icon-box">
                                    <img src="@/assets/img/Camping/shower.png" />
                                    <span>샤워장</span>
                                </div>
                            </label>
                            <label>
                                <input type="checkbox" name="disposal" :checked="camp.campInfo.disposal"/>
                                <div class="icon-box">
                                    <img src="@/assets/img/Camping/disposal.png" />
                                    <span>쓰레기장</span>
                                </div>
                            </label>

                            <label>
                                <input type="checkbox" name="deck" :checked="camp.campInfo.deck"/>
                                <div class="icon-box">
                                    <img src="@/assets/img/Camping/deck.png" />
                                    <span>데크</span>
                                </div>
                            </label>

                            <label>
                                <input type="checkbox" name="bbq" :checked="camp.campInfo.bbq"/>
                                <div class="icon-box">
                                    <img src="@/assets/img/Camping/bbq.png" />
                                    <span>바비큐</span>
                                </div>
                            </label>
                            <label>
                                <input type="checkbox" name="swim" :checked="camp.campInfo.pool"/>
                                <div class="icon-box">
                                    <img src="@/assets/img/Camping/swim.png" />
                                    <span>수영장</span>
                                </div>
                            </label>
                            <label>
                                <input type="checkbox" name="spoon" :checked="camp.campInfo.spoon"/>
                                <div class="icon-box">
                                    <img src="@/assets/img/Camping/spoon.png" />
                                    <span>조리도구</span>
                                </div>
                            </label>
                            <label>
                                <input type="checkbox" name="lease" :checked="camp.campInfo.lease"/>
                                <div class="icon-box">
                                    <img src="@/assets/img/Camping/lease.png" />
                                    <span>장비대여</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="camp-detail-info-right">
                <button type="button" @click="saveItem()">저장하기</button>
                <button type="button" @click="getCompanion()">동행자 구하기</button>
                <button type="button" @click="modifyItem()">수정하기</button>
                <button type="button" @click="reportItem()">신고하기</button>
            </div>
        </div>
        <div id="camp-detail-sns-container" class="camp-detail-sns-container">

        </div>
    </div>
</template>

<script>
import KakaoMap from "../KakaoMap.vue";
import CampDetailImage from "./CampDetailImage.vue";
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
            })
    },
    methods: {
        // 후기 셋팅 필요
        // 주소 카카오맵 할당 필요
        // 기타 정보 할당 필요
        // 사진 Swiper 적용하기
        saveItem() {

        },
        getCompanion() {

        },
        modifyItem() {
            this.$router.push({name:"CampModify", params:{campId:this.campId}});
        },
        reportItem() {

        }
    },
    components: { KakaoMap, CampDetailImage },
}
</script>

<style scoped src="@/assets/css/Camping/CampDetail.css">

</style>
