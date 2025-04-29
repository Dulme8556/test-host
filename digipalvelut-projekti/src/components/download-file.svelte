<script>
</script>

<div class="container">
    <!-- <h3 class="title">Download the excel template:</h3> -->
    <div class="tooltip-container">
        <a href="impact_tool.xlsx" class="link__container">
            <img class="download" src="./images/download-icon.svg" alt="Download excel template" />
        </a>
        <span class="tooltip-text">Download a premade<br>excel template</span>
    </div>
</div>

<style>
    .container {
    text-align: center;
    margin-bottom: 10px;
    pointer-events: none;
    }

    .tooltip-container {
        position: relative;
        display: inline-block;
        pointer-events: auto;
    }

    .tooltip-text {
        visibility: hidden;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 5px 8px;
        border-radius: 4px;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        opacity: 0;
        transition: opacity 0.3s;
        font-size: 12px;
    }

    .tooltip-container:hover .tooltip-text {
        visibility: visible;
        opacity: 1;
    }

    .link__container {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: #3B3B3B solid 2px;
        border-radius: 5px;
        background-color: #757575;
        width: 45px;
        height: 45px;
    }

    .link__container:hover {
        background-color: #919191;
    }

    .download {
        width: 45px;
        height: 40px;
        filter: brightness(0) saturate(100%) invert(96%) sepia(8%) saturate(7%)
            hue-rotate(314deg) brightness(89%) contrast(93%);
    }
</style>
