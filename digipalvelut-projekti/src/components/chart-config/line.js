class Line {
    constructor() {
        this.dataset;
    }

    changeData(start, end, target, unit, labels) {
        let colorList = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]
        let datasetList = [];
        let data = { start: start, end: end, target: target }

        for (let i = 0; i < labels.length; i++) {
            let test = [data.start[i], data.end[i], data.target[i]]
            let dataset = { label: labels[i], data: test, backgroundColor: colorList[i], unit: unit[i]}
            datasetList.push(dataset)
        }

        this.dataset = { datasets: datasetList, labels: ["start", "end", "target"] };
    }

    getData() {
        return this.dataset
    }
}
export default Line;