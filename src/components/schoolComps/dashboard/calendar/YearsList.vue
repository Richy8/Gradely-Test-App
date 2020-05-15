<template>
    <div>
        <div class="years-view-section">
            <div class="years-view">
                <div class="years">1988</div>
                <div class="years">1989</div>
                <div class="years">1990</div>
                <div class="years">1991</div>
                <div class="years">1992</div>
                <div class="years">1993</div>
                <div class="years">1994</div>
                <div class="years">1995</div>
                <div class="years">1996</div>
                <div class="years">1997</div>
                <div class="years">1998</div>
                <div class="years">1999</div>
                <div class="years">2000</div>
                <div class="years">2001</div>
                <div class="years">2002</div>
                <div class="years">2003</div>
                <div class="years">2004</div>
                <div class="years">2005</div>
                <div class="years">2006</div>
                <div class="years">2007</div>
                <div class="years">2008</div>
                <div class="years">2009</div>
                <div class="years">2010</div>
                <div class="years">2011</div>
                <div class="years">2012</div>
                <div class="years">2013</div>
                <div class="years">2014</div>
                <div class="years">2015</div>
                <div class="years">2016</div>
                <div class="years">2017</div>
                <div class="years">2018</div>
                <div class="years">2019</div>
                <div class="years active">2020</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "YearsList",

    mounted(){
        this.$nextTick(() => {
            let years_view = document.querySelector('.years-view');
            years_view.scrollTop = years_view.scrollHeight;
        })
    }
}
</script>

<style>

</style>
