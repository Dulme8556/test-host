<script>
    import { getContext } from "svelte";
    import { writable } from "svelte/store";
    import * as XLSX from "xlsx";

    let lists = getContext("list");
    let readExcelData = [];

    let fileGiven = false;
    let fileInput;
    const previewStore = writable("");

    async function handleFileChange(file) {
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        previewStore.set(JSON.stringify(jsonData, null, 2));

        readExcelData = jsonData;

        readExcelData.forEach((element) => {
            let percent;
            let rawValue = (element.End / element.Target) * 100;
            let calculation = rawValue.toFixed(3);

            percent = rawValue.toFixed(0);

            if (calculation % 1 !== 0) {
                percent = "~" + percent;
            }

            let newId = lists.list.length? Math.max(...lists.list.map((t) => t.id)) + 1 : 1;
            lists.list = [
                ...lists.list,
                {
                    id: newId,
                    check: false,
                    name: element.Title,
                    target: element.Target,
                    start: element.Start,
                    end: element.End,
                    percent: percent,
                    unit: element.Unit,
                },
            ];
        });
    }

    function handleFileInput(event) {
        const file = event.target.files[0];
        if (file) {
            handleFileChange(file);
        }
    }

    function fileDialog() {
        if (fileInput) {
            fileInput.value = "";
            fileInput.click();
        }
    }

    function fileFound() {
        if (fileGiven) {
            previewStore.set("");
            fileInput = null;
        }
        fileGiven = !fileGiven;
    }
</script>

<div style="text-align: center; padding: 0 10px;">
    <input
        type="file"
        accept=".xlsx"
        bind:this={fileInput}
        onchange={handleFileInput}
    />

    <div class="tooltip-container">
        <button onclick={fileDialog}>Open file</button>
        <span class="tooltip-text">Click to upload<br>an Excel file</span>
    </div>
</div>


<style>
    input {
        display: none;
    }
    
    button {
        display: flex;
        justify-self: center;
        padding: 5px 20px;
        margin-bottom: 10px;
        background-color: #30B2B3;
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
        width: 150px;
        height: 50px;
        position: relative;
        overflow: hidden;
    }

    button:hover {
        cursor: pointer;
    }

    .tooltip-container {
        position: relative;
        display: inline-block;
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
</style>
