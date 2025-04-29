<script>
    import { getContext } from "svelte";
    import FileReader from "./file-reader.svelte";

    let lists = getContext("list");

    let newId = $state("");
    let newName = $state("");
    let newTarget = $state("");
    let newStart = $state("");
    let newEnd = $state("");
    let newPercent;
    let newUnit = $state("");

    function percentCalculation() {
        if (!newEnd || !newTarget) return;

        let rawValue = (newEnd / newTarget) * 100;
        let roundedValue = rawValue.toFixed(0);
        let preciseValue = rawValue.toFixed(3);

        newPercent = preciseValue % 1 !== 0 ? `~${roundedValue}` : roundedValue;
    }

    function addNew() {
        percentCalculation();

        newId = lists.list.length
            ? Math.max(...lists.list.map((t) => t.id)) + 1
            : 1;

        if (newStart === "") {
            newStart = 0;
        }

        if (
            newName === "" &&
            newTarget === "" &&
            newStart === 0 &&
            newEnd === "" &&
            newUnit === ""
        ) {
            alert("Can't add empty");
            newStart = "";
        } else {
            let updatedList = lists.list.map((item) => ({ ...item }));

            updatedList.push({
                id: newId,
                check: false,
                name: newName,
                target: newTarget,
                start: newStart,
                end: newEnd,
                percent: newPercent,
                unit: newUnit,
            });

            lists.list = updatedList;

            newName = "";
            newTarget = "";
            newStart = "";
            newEnd = "";
            newPercent = "";
            newUnit = "";
        }
    }
</script>

<div class="add-new-section">
    <div class="create-dataset">
        <div style="display:flex; justify-content:center;">
            <h2 class="create-dataset__title">CREATE NEW INDICATOR</h2>
            <div class="createnew__info__wrapper">
                <img class="createnew__info__icon" alt="info_icon" src="./images/info.png">
                <div class="createnew__info__content">
                    Info Test
                    Component info or a small tutorial will be placed here
                </div>
            </div>
        </div>
        <div class="input__container">
            <input
                class="input"
                type="text"
                placeholder="Name"
                bind:value={newName}
            />
            <input
                class="input input__number"
                type="number"
                placeholder="Target value"
                bind:value={newTarget}
            />
            <input
                class="input input__number"
                type="number"
                placeholder="Start value"
                bind:value={newStart}
            />
            <input
                class="input input__number"
                type="number"
                placeholder="End value"
                bind:value={newEnd}
            />
            <input
                class="input"
                type="text"
                placeholder="Unit"
                bind:value={newUnit}
            />
        </div>
        <div class="add-button">
            <button class="add-button__button" onclick={addNew}
                >Create indicator</button
            >
        </div>
    </div>
</div>

<style>
    
    .createnew__info__wrapper{
        position:relative;
        display:inline-block;
    }
    

    .createnew__info__content{
        visibility: hidden;
        opacity: 0;
        width: 220px;
        background-color: #f9f9f9;
        color: #000;
        text-align: left;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 8px;
        position: absolute;
        z-index: 1;
        top: 50px;
        left: 0;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
        transition: opacity 0.3s ease;
    }

    .createnew__info__icon{
        width:28px;
        height:28px;
        padding-top:19px;
        margin-left:10px;
    }

    .createnew__info__wrapper:hover .createnew__info__content {
        visibility:visible;
        opacity: 1;
    }

    .add-new-section {
        width: 370px;
    }
    .create-dataset {
        background-color: rgba(128, 128, 128, 0.17);
        border-radius: 12px;
    }

    .create-dataset__title {
        display: flex;
        justify-content: center;
        padding-top: 15px;
        margin: 0;
    }

    .add-button {
        display: flex;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-top: 10px;
        justify-content: center;
    }

    .add-button__button {
        font-size:14px;
        padding: 5px 10px;
        margin-bottom: 10px;
        margin-right: 10px;
        background: var(--schemes-primary, #30B2B3);
        color: white;
        border-radius: 100px;
        border-style: solid;
        border-color: #000000;
        border-width: 1px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 220px;
        height: 45px;
        position: relative;
        overflow: hidden;
    }

    .add-button__button:hover {
        cursor: pointer;
    }

    .input__container {
        display: flex;
        flex-direction: column;
    }

    .input::placeholder {
        padding-left: 2px;
    }

    .input {
        border: #5757579e solid 2px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0);
        font-size: 17px;
        padding: 3px 0;
        margin: 15px 15px;
        color: black;
        max-width: 396px;
    }

    .input:first-child {
        margin: 15px 15px;
        margin-top: 35px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
    }
</style>
