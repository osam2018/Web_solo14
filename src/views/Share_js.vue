<template>
      <div class="share">
            <div class="left">
                  <div class="d3"></div>
            </div>
            <div class="right">
                  <el-input v-model="search" placeholder="찾을 위치의 카쉐어링을 검색하세요. "></el-input>


                  <transition-group name="list" tag="div">

                        <div class="card" v-for="(item, idex) in filteredshareList" :key="idex">
                              <img :src="carImg">
                              <p class="name">{{item.name}} - {{item.place}}</p>
                              <p class="include">{{item.include}}</p>
                              <el-rate v-model="item.star" disabled show-score text-color="#ff9900" score-template="{value} 점">
                              </el-rate>
                              <el-button @click="applyCar(item.id, item.name)">카쉐어링신청하기</el-button>
                        </div>
                  </transition-group>
            </div>
      </div>
</template>

<script lang="js">
      import * as d3 from 'd3';
      import * as topojson from 'topojson';
      import ShareManager from '../data/ShareManager.js'
      const carImg = require('../assets/car.png')
      export default {
            name: 'Share_js',
            data() {
                  return {
                        search: "",
                        shareList: [],
                        svg: "",
                        projection: "",
                        carImg: carImg
                  }
            },
            async mounted() {

                  this.shareList = await ShareManager.fetchShareList()
                  this.draw();
            },
            computed: {
                  filteredshareList() {
                        const t = this.shareList.filter(share => {
                              return share.place.includes(this.search);
                        })
                        return t;
                  }
            },
            watch: {

            },
            methods: {
                  applyCar(id, name) {  
                        this.$alert(name + '님께 카쉐어링신청이 완료 되었습니다.', '알림', {
                              confirmButtonText: '확인',
                              callback: action => {
                                    this.$emit("getShare", name)
                                    // this.$message({
                                    //       type: 'info',
                                    //       message: `action: ${ action }`
                                    // });
                              }
                        });
                  },
                  draw() {
                        const koreaMap = require('../assets/map/skorea_municipalities_topo_simple.json');
                        const geojson = topojson.feature(koreaMap, koreaMap.objects.skorea_municipalities_geo);
                        const center = d3.geoCentroid(geojson);
                        const width = 600;
                        const height = 1000;
                        this.svg = d3
                              .select('.d3')
                              .append('svg')
                              .attr('width', width).attr('height', height);
                        const map = this.svg.append('g');
                        this.projection = d3.geoMercator()
                              .scale(1)
                              .translate([0, 0]);

                        const path = d3.geoPath().projection(this.projection);
                        const bounds = path.bounds(geojson);
                        const widthScale = (bounds[1][0] - bounds[0][0]) / width;
                        const heightScale = (bounds[1][1] - bounds[0][1]) / height;
                        const scale = 2 / Math.max(widthScale, heightScale);
                        const xoffset = width / 2 - scale * (bounds[1][0] + bounds[0][0]) / 2 + 10;
                        const yoffset = height / 2 - scale * (bounds[1][1] + bounds[0][1]) / 2 + 80;
                        const offset = [xoffset, yoffset];
                        this.projection = this.projection.scale(scale).translate(offset);

                        map.selectAll('path').data(geojson.features)
                              .enter().append('path')
                              .attr('d', path);
                        const icons = this.svg.append('g').selectAll('svg')
                              .data(this.filteredshareList)
                              .enter()
                              .append("svg:image")
                              .attr("width", 50)
                              .attr("height", 50)
                              .attr('x', d => this.projection([d.lon, d.lat])[0])
                              .attr('y', d => this.projection([d.lon, d.lat])[1])
                              .attr('opacity', 1)
                              .attr("xlink:href", d => carImg)
                        const text = this.svg.append('g').selectAll('text').data(this.filteredshareList).enter().append(
                                    "text")
                              .attr('x', d => this.projection([d.lon, d.lat])[0] - 10)
                              .attr('y', d => this.projection([d.lon, d.lat])[1] + 50)
                              .text(d => d.place)
                              .attr("class", "textClass")
                        const zoomed = () => {
                              map.attr("transform", d3.event.transform)
                              icons.attr("transform", d3.event.transform)
                              text.attr("transform", d3.event.transform)
                        }
                        const zoom = d3.zoom().scaleExtent([1, 8]).on('zoom', zoomed)
                        this.svg.call(zoom)

                  }
            }
      }
</script>

<style>
      .el-input {
            margin-bottom: 30px;
      }

      .card {
            text-align: center;
            padding: 16px;
            margin-bottom: 10px;
            box-shadow: 0 10px 6px -6px #777;
            background: #fff;
            transition: all .5s ease;
      }

      .textClass {
            font-family: 'Kakao'
      }

      .card {
            text-align: center;
      }

      .el-progress-bar__inner {
            transition: all 0.5s ease;
      }

      .share {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            width: 80%;
      }

      .left {
            flex: 2;
      }

      .d3 {
            text-align: center;
      }

      .right {
            flex: 1;
      }

      path {
            fill: #fff;
            stroke: #2f3543;
      }

      .name {
            font-size: 24px;
      }
</style>