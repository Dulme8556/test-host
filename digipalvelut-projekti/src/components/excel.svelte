<script>
    import * as XLSX from "xlsx";

    function clicker() {
        const headers = [{ Tosi_hieno_otsikko: "tosi hieno teksti" }];
        const worksheet = XLSX.utils.json_to_sheet(headers, { skipHeader: false });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "ime-munaa");
        XLSX.writeFile(workbook, "ime-munaa.xlsx");
    };
</script>

<div class="website">
    <button onclick={clicker} class="button">
        lataus vaihtoehto 1
    </button>
</div>

<style>
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 50px;
        border: 1px solid black;
        border-radius: 3px;
        color: blueviolet;
        background-color: lightblue;
    }
</style>