<template>
    <div class="ui segment">
        <h1>Other</h1>     
        <div class="ui segment">
            <h2>Statistic</h2>
            <h4>Peoples: {{peopleData.count}}</h4>
            <h4>Films: {{filmsData.count}}</h4>
            <h4>Species: {{speciesData.count}}</h4>
            <h4>Vehicles: {{vehiclesData.count}}</h4>
            <h4>Starships: {{starshipsData.count}}</h4>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            peopleData: [],
            filmsData: [],
            speciesData: [],
            vehiclesData: [],
            starshipsData: [],
        }
    },
    methods:{
        async getSWpeople(){
            var res = await axios(`https://swapi.dev/api/people/`);
            this.peopleData = await res.data;
            console.log(this.peopleData)
        },
        async getSWfilms(){
            var res = await axios(`https://swapi.dev/api/films/`);
            this.filmsData = await res.data;
            console.log(this.filmsData)
        },
        async getSWspecies(){
            var res = await axios(`https://swapi.dev/api/species/`);
            this.speciesData = await res.data;
            console.log(this.speciesData)
        },
        async getSWvehicles(){
            var res = await axios(`https://swapi.dev/api/vehicles/`);
            this.vehiclesData = await res.data;
            console.log(this.vehiclesData)
        },
        async getSWstarships(){
            var res = await axios(`https://swapi.dev/api/starships/`);
            this.starshipsData = await res.data;
            console.log(this.starshipsData)
        },
    },
    mounted: function(){
        this.getSWpeople()
        this.getSWfilms()
        this.getSWspecies()
        this.getSWvehicles()
        this.getSWstarships()
    }
}
</script>