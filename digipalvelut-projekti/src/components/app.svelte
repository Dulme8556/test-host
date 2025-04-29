<script>
    import { setContext } from "svelte";

    import AddNew from "./add-new.svelte";
    import Lines from "./lines.svelte";
    import Charts from "./charts.svelte";
    import FileReader from "./file-reader.svelte";
    import DownloadFile from "./download-file.svelte";
    import GlobalStyles from "./global-styles.svelte";

    let lists = $state({
        list: [],
        selectedValues: [],
        charts: [],
    });

    setContext("list", lists);

</script>

<div class="website">
    <div class="credit">
        <img class="eu_union" src="./images/EN_FundedbytheEU_RGB_POS.png" alt="Funded by the European Union"/>
    </div>
    <div class="titleBar">
        <div class="title">
            <img
                class="vr4vet_logo"
                src="./images/VR4VET_LOGO_DOTS_trnsprnt_Turquoise.png"
                alt="VR4VET"
            />
            <h1 class="titleText">Impact tool</h1>
        </div>
        <div class="buttonGroup">
            <DownloadFile />
            <FileReader />
        </div>
    </div>
    <div class="content">
        <div class="main__functions">
            <AddNew />
            {#key lists.list.length}
                <Lines />
            {/key}
            {#key `${lists.selectedValues.length}-${lists.charts.length}`}
                <Charts />
            {/key}
        </div>
    </div>
</div>

<GlobalStyles />

<style>
    .titleBar {
        border-bottom: 1px solid black;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .title {
        display: flex;
        flex-direction: row;
    }

    .titleText {
        margin: 0;
        font-size: 40px;
        font-weight: 600;
        padding-top: 14px;
    }

    .buttonGroup {
        display: flex;
        align-items: center;
    }

    .website {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .content {
        display: flex;
        flex: 1;
    }

    .main__functions {
        display: flex;
        justify-content: space-between;
        flex: 1;
        padding: 15px;
        margin: 0 1vw;
        margin-top: 20px;
    }

    .credit,
    .credit * {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }

    .credit {
        width: 100%;
        display: flex;
        align-items: center;
        background: linear-gradient(
            90deg,
            rgba(41, 168, 175, 1) 0%,
            rgba(17, 70, 73, 1) 100%
        );
        position: relative;
        flex-shrink: 0;
    }

    .vr4vet_logo {
        width: 220px;
        height: 100px;
        object-fit: cover;
        aspect-ratio: 220 / 100;
    }

    .eu_union {
        height: 100px;
        object-fit: cover;
        aspect-ratio: 448.63 / 100;
    }
</style>
