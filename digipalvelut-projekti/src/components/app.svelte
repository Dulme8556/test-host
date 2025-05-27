<script>
    import Excel from "./excel.svelte"
    import Text from "./text.svelte"
    import Smile from "./smile.svelte"
</script>

<div class="website">
    <div class="title">
        <h1>Kumpaa haluat painaa</h1>
        <div class="ps">noi napit lataa asioita eri tavalla / lataa eri asioita</div>
    </div>
    <div class="buttons">
        <Excel />
        <Text />
    </div>
    <div>
        <Smile />
    </div>
</div>

<style>
    :global(body) {
        margin: 0;
    }
    
    .website {
        background-color: pink;
        height: 100vh;
    }

    .title {
        padding-left: 20px;
        padding-top: 20px;
    }
    
    h1 {
        margin-top: 0;
        font-family: sans-serif;
    }

    .ps {
        font-size: 12px;
        font-family: sans-serif;
    }

    .buttons {
        display: flex;
        padding: 20px;
    }
</style>