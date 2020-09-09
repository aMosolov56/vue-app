<template>
    <div class="ui segment">
        <h1>Planet {{$route.params.data.name}}</h1>
        <h4>Population: {{$route.params.data.population}}</h4>
        <h4>Climate: {{$route.params.data.climate}}</h4>
        <h4>Diameter: {{$route.params.data.diameter}}</h4>
        <h4>Gravity: {{$route.params.data.gravity}}</h4>
        <h4>Terrain: {{$route.params.data.terrain}}</h4>
    </div>
</template>