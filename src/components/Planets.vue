<template>
    <div class="ui segment">
        <h1>Planets</h1>
        <button class="ui button" @load="getSWPlanets(pageNumber)">Show planets</button>
        <div>
            <h3>Planets count {{planetData.count}}</h3>           
            <div class="ui relaxed divided list">
                <ul class="item">
                    <li class="header" href='#' v-for="item in planetData.results" :key="item.name">
                        <router-link :to="{name: 'Planet', params:{planetName: item.name, data: item}}">{{item.name}}</router-link>
                        
                    </li>
                </ul>
            </div>
            
            <button class="ui left labeled icon button"
            @click="prevPage()"
            >
            <i class="left arrow icon"></i>
            Prev
            </button>
            <button class="ui right labeled icon button"
            @click="nextPage()">
            <i class="right arrow icon"></i>
            Next
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            pageNumber: 1,
            planetData: []
        }
    },
    methods: {
        async getSWPlanets(pageNumber){
            var res = await axios(`https://swapi.dev/api/planets/?page=${ pageNumber }`);
            this.planetData = await res.data;
            console.log(this.planetData)
        },
        prevPage(){
            if (this.planetData.previous != null) {
                this.pageNumber--
                this.getSWPlanets(this.pageNumber)
            } else {
                alert('End of content')
            }
        },
        nextPage(){
            if (this.planetData.next != null) {
                this.pageNumber++
                this.getSWPlanets(this.pageNumber)
            } else {
                alert('End of content')
            }
        }
    },
    mounted: function(){
        this.getSWPlanets(this.pageNumber)
    }
}
</script>