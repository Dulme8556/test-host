import "clsx";
import { d as current_component, g as getContext, c as pop, p as push, e as bind_props, f as ensure_array_like, s as setContext } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "jspdf";
import "chart.js/auto";
import "chartjs-plugin-datalabels";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function clsx(value) {
  {
    return value ?? "";
  }
}
function to_class(value, hash, directives) {
  var classname = value == null ? "" : "" + value;
  {
    classname = classname ? classname + " " + hash : hash;
  }
  return classname === "" ? null : classname;
}
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function File_reader($$payload, $$props) {
  push();
  getContext("list");
  $$payload.out += `<div style="text-align: center; padding: 0 10px;"><input type="file" accept=".xlsx" class="svelte-d1cx1l"> <div class="tooltip-container svelte-d1cx1l"><button class="svelte-d1cx1l">Open file</button> <span class="tooltip-text svelte-d1cx1l">Click to upload<br>an Excel file</span></div></div>`;
  pop();
}
function Add_new($$payload, $$props) {
  push();
  getContext("list");
  let newName = "";
  let newTarget = "";
  let newStart = "";
  let newEnd = "";
  let newUnit = "";
  $$payload.out += `<div class="add-new-section svelte-1ed3d7"><div class="create-dataset svelte-1ed3d7"><div style="display:flex; justify-content:center;"><h2 class="create-dataset__title svelte-1ed3d7">CREATE NEW INDICATOR</h2> <div class="createnew__info__wrapper svelte-1ed3d7"><img class="createnew__info__icon svelte-1ed3d7" alt="info_icon" src="./images/info.png"> <div class="createnew__info__content svelte-1ed3d7">Info Test
                    Component info or a small tutorial will be placed here</div></div></div> <div class="input__container svelte-1ed3d7"><input class="input svelte-1ed3d7" type="text" placeholder="Name"${attr("value", newName)}> <input class="input input__number svelte-1ed3d7" type="number" placeholder="Target value"${attr("value", newTarget)}> <input class="input input__number svelte-1ed3d7" type="number" placeholder="Start value"${attr("value", newStart)}> <input class="input input__number svelte-1ed3d7" type="number" placeholder="End value"${attr("value", newEnd)}> <input class="input svelte-1ed3d7" type="text" placeholder="Unit"${attr("value", newUnit)}></div> <div class="add-button svelte-1ed3d7"><button class="add-button__button svelte-1ed3d7">Create indicator</button></div></div></div>`;
  pop();
}
function Line($$payload, $$props) {
  push();
  let {
    function: parentFunction,
    update: updateEditedValues,
    id,
    check,
    name,
    target,
    start,
    end,
    percent = "placeholder",
    unit
  } = $$props;
  getContext("list");
  let checked = check;
  function checkAll() {
    checked = true;
  }
  function uncheckAll() {
    checked = false;
  }
  function selected() {
    return checked;
  }
  function values() {
    return {
      id,
      check,
      name,
      target,
      start,
      end,
      unit
    };
  }
  $$payload.out += `<div>`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="line svelte-q62gdf"><input class="checkbox svelte-q62gdf" type="checkbox"${attr("checked", checked, true)}> <div class="data__container svelte-q62gdf"><div class="component svelte-q62gdf"><h3 class="svelte-q62gdf">indicator:</h3> <div class="long1 svelte-q62gdf"${attr("title", name)}>${escape_html(name)}</div></div> <div class="column svelte-q62gdf"><div class="component svelte-q62gdf"><h3 class="svelte-q62gdf">target:</h3> <div class="long svelte-q62gdf">${escape_html(target)}</div></div> <div class="component svelte-q62gdf"><h3 class="svelte-q62gdf">percent:</h3> `;
    if (percent !== "placeholder") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="long svelte-q62gdf">${escape_html(percent)}%</div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div> <div class="column svelte-q62gdf"><div class="start_end__group svelte-q62gdf"><div class="component svelte-q62gdf"><h3 class="svelte-q62gdf">start:</h3> <div class="long svelte-q62gdf">${escape_html(start)}</div></div> <div class="component component__last svelte-q62gdf"><h3 class="svelte-q62gdf">end:</h3> <div class="long svelte-q62gdf">${escape_html(end)}</div></div></div> <div class="component svelte-q62gdf"><h3 class="svelte-q62gdf">unit:</h3> <div class="long1 svelte-q62gdf"${attr("title", unit)}>${escape_html(unit)}</div></div></div></div> <div class="button__container svelte-q62gdf"><button class="button button__edit svelte-q62gdf"><img src="./images/edit-icon.svg" class="image image__edit svelte-q62gdf" alt=""></button> <button class="button button__delete svelte-q62gdf"><img src="./images/delete-icon.svg" class="image image__delete svelte-q62gdf" alt=""></button></div></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { checkAll, uncheckAll, selected, values });
  pop();
}
function Lines($$payload, $$props) {
  push();
  let filteredIndicators;
  let lists = getContext("list");
  let searchQuery = "";
  let lines = [];
  let allChecked = false;
  let selectedLines = [];
  let sortingOptions = ["oldest", "newest", "highest", "lowest"];
  async function checkSelected() {
    let count = 0;
    selectedLines = [];
    for (let i = 0; i < filteredIndicators.length; i++) {
      let current = filteredIndicators[i];
      if (current.check) {
        selectedLines.push(current);
        count++;
      }
    }
    if (count !== filteredIndicators.length) {
      allChecked = false;
    } else {
      allChecked = true;
    }
    lists.selectedValues = selectedLines;
  }
  function updateValues() {
    lists.selectedValues = [];
    setTimeout(
      () => {
        checkSelected();
        for (let i = 0; i < lists.list.length; i++) {
          let element = lines[i];
          element.check = lists.list[i].check;
        }
      },
      1
    );
  }
  function sortBy(value) {
    let sortedList = lists.list;
    sortedList.forEach((element) => {
      try {
        let rawPercent = element.percent.toString().trim();
        element.isRounded = rawPercent.startsWith("~");
        element.percent = element.percent.replace("~", "").trim();
      } catch {
      }
      element.percent = Number(element.percent);
    });
    {
      sortedList.sort(({ id: a }, { id: b }) => a - b);
    }
    sortedList.forEach((element) => {
      if (element.isRounded) {
        element.percent = `~${element.percent}`;
      } else {
        element.percent = `${element.percent}`;
      }
    });
    sortedList = lists.selectedValues;
    lists.selectedValues = [];
    setTimeout(() => lists.selectedValues = sortedList, 1);
  }
  filteredIndicators = lists.list.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  sortBy();
  const each_array = ensure_array_like(sortingOptions);
  $$payload.out += `<div><div class="active-lines svelte-1fyqyu7"><div class="toolbar svelte-1fyqyu7"><div class="top svelte-1fyqyu7"><div><h2 class="svelte-1fyqyu7">Indicators</h2> <p style="margin-top: 5px; font-size:14px;">Create and display indicators</p></div> <input id="searchbar" class="searchbar svelte-1fyqyu7"${attr("value", searchQuery)} placeholder="Search indicators..." type="text"></div> <div class="actions-bar svelte-1fyqyu7"><div class="button-group svelte-1fyqyu7">`;
  if (allChecked) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="select__button svelte-1fyqyu7">Unselect all</button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button class="select__button svelte-1fyqyu7">Select all</button>`;
  }
  $$payload.out += `<!--]--></div> <select class="selectList svelte-1fyqyu7"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out += `<option${attr("value", sortingOptions[i])}>${escape_html(sortingOptions[i])}</option>`;
  }
  $$payload.out += `<!--]--></select> <button class="saveButton svelte-1fyqyu7">Save</button></div> `;
  if (filteredIndicators.length > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div><p style="font-size:14px; margin-bottom:5px;">Download selected indicators to an excel</p> <button style="width:120px;">Download</button></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <!---->`;
  {
    const each_array_1 = ensure_array_like(filteredIndicators);
    $$payload.out += `<ul class="svelte-1fyqyu7"><!--[-->`;
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let line = each_array_1[i];
      $$payload.out += `<li class="svelte-1fyqyu7">`;
      Line($$payload, {
        function: checkSelected,
        update: updateValues,
        check: line.check,
        id: line.id,
        name: line.name,
        target: line.target,
        start: line.start,
        end: line.end,
        percent: line.percent,
        unit: line.unit
      });
      $$payload.out += `<!----></li>`;
    }
    $$payload.out += `<!--]--></ul>`;
  }
  $$payload.out += `<!----></div></div>`;
  pop();
}
function Chart_1($$payload, $$props) {
  push();
  getContext("list");
  let data = $$props["data"];
  let checkSelected = $$props["checkSelected"];
  let id;
  let chartName;
  let canvas;
  let checked = false;
  onDestroy(() => {
  });
  function checkAll() {
    checked = true;
  }
  function uncheckAll() {
    checked = false;
  }
  function returnCanvas() {
    return canvas;
  }
  function returnType() {
    return data.type;
  }
  function returnCheck() {
    return checked;
  }
  function returnId() {
    return id;
  }
  $$payload.out += `<div class="chartContainer svelte-1qm6484"><div class="actionBar svelte-1qm6484"><div class="chartName svelte-1qm6484"><input type="checkbox" class="CheckBox svelte-1qm6484"${attr("checked", checked, true)}> `;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="chartTitle svelte-1qm6484">${escape_html(chartName)}</div>`;
  }
  $$payload.out += `<!--]--></div> <div class="buttonContainer svelte-1qm6484"><button class="chart-button pdf-download__button svelte-1qm6484"><img class="pdf-download__image svelte-1qm6484" src="./images/download-icon.svg" alt=""></button> <button class="chart-button chart-delete__button svelte-1qm6484"><img class="chart-delete__image svelte-1qm6484" src="./images/delete-icon.svg" alt=""></button></div></div> <div id="content" style="width:400px; max-height:300px;"><canvas style="width: 400px; max-height:300px;"></canvas></div></div>`;
  bind_props($$props, {
    data,
    checkSelected,
    checkAll,
    uncheckAll,
    returnCanvas,
    returnType,
    returnCheck,
    returnId
  });
  pop();
}
function Charts($$payload, $$props) {
  push();
  let filteredCharts;
  let lists = getContext("list");
  let selected = lists.selectedValues;
  let chartName = "";
  let datasetDataEnd = [];
  let datasetDataTarget = [];
  let datasetDataStart = [];
  let labels = [];
  let chartTypes = [
    "bar (vertical)",
    "bar (horizontal)",
    "line",
    "pie",
    "doughnut"
  ];
  let storeChildComponents = [];
  let allChecked = false;
  let searchQuery = "";
  selected.forEach((element) => {
    datasetDataEnd = [...datasetDataEnd, element.end];
    datasetDataTarget = [...datasetDataTarget, element.target];
    datasetDataStart = [...datasetDataStart, element.start];
    labels = [...labels, element.name];
  });
  function checkSelected() {
    let tempStoreChild = storeChildComponents.filter((item) => item !== null);
    let count = 0;
    tempStoreChild.forEach((element) => {
      if (element.returnCheck()) {
        count++;
      }
    });
    if (count === storeChildComponents.length) {
      allChecked = true;
    } else {
      allChecked = false;
    }
  }
  lists.charts.length ? Math.max(...lists.charts.map((t) => t.id)) + 1 : 1;
  filteredCharts = JSON.parse(JSON.stringify(lists.charts.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))));
  const each_array = ensure_array_like(chartTypes);
  $$payload.out += `<div class="chartsSection svelte-kxlf5v"><div class="toolbar svelte-kxlf5v"><div style="display:flex;"><h2 class="title svelte-kxlf5v">Active charts</h2> <div class="info__wrapper svelte-kxlf5v"><img class="info__icon svelte-kxlf5v" alt="info_icon" src="./images/info.png"> <div class="info__content svelte-kxlf5v">Info Test
                    Component info or a small tutorial will be placed here</div></div></div> <div class="firstLine svelte-kxlf5v"><div class="chartName svelte-kxlf5v"><input style="width: 120px;" placeholder="Chart Name"${attr("value", chartName)}></div> <select class="selectList svelte-kxlf5v"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out += `<option${attr("value", chartTypes[i])}>${escape_html(chartTypes[i])}</option>`;
  }
  $$payload.out += `<!--]--></select> <div style="position:relative; display:flex; flex-direction:column; align-items:center;">`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="extraOptionsToggle svelte-kxlf5v">▼</div>`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="chartButton svelte-kxlf5v"><button class="chartButton__button svelte-kxlf5v">Create a chart</button></div></div> <div class="secondLine svelte-kxlf5v"><input type="search" style="margin-top: 5px;" placeholder="Search..."${attr("value", searchQuery)}> `;
  if (allChecked) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="toggleButton svelte-kxlf5v">Unselect all</button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button class="toggleButton svelte-kxlf5v">Select all</button>`;
  }
  $$payload.out += `<!--]--></div> <div class="thirdLine"><div class="downloadButtons svelte-kxlf5v"><button class="showSpanButton svelte-kxlf5v">Download</button> <span${attr("class", to_class(clsx("hideOptions"), "svelte-kxlf5v"))}><button class="downloadButton svelte-kxlf5v">Download chosen charts</button> <button class="downloadButton svelte-kxlf5v">Download 1 chart per page</button></span></div></div></div> <!---->`;
  {
    const each_array_1 = ensure_array_like(filteredCharts);
    $$payload.out += `<div class="chartList svelte-kxlf5v"><!--[-->`;
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let data = each_array_1[i];
      $$payload.out += `<div>`;
      Chart_1($$payload, { data, checkSelected });
      $$payload.out += `<!----></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!----></div>`;
  pop();
}
function Download_file($$payload) {
  $$payload.out += `<div class="container svelte-op3i0j"><div class="tooltip-container svelte-op3i0j"><a href="impact_tool.xlsx" class="link__container svelte-op3i0j"><img class="download svelte-op3i0j" src="./images/download-icon.svg" alt="Download excel template"></a> <span class="tooltip-text svelte-op3i0j">Download a premade<br>excel template</span></div></div>`;
}
function App($$payload, $$props) {
  push();
  let lists = { list: [], selectedValues: [], charts: [] };
  setContext("list", lists);
  $$payload.out += `<div class="website svelte-lwwp08"><div class="credit svelte-lwwp08"><img class="eu_union svelte-lwwp08" src="./images/EN_FundedbytheEU_RGB_POS.png" alt="Funded by the European Union"></div> <div class="titleBar svelte-lwwp08"><div class="title svelte-lwwp08"><img class="vr4vet_logo svelte-lwwp08" src="./images/VR4VET_LOGO_DOTS_trnsprnt_Turquoise.png" alt="VR4VET"> <h1 class="titleText svelte-lwwp08">Impact tool</h1></div> <div class="buttonGroup svelte-lwwp08">`;
  Download_file($$payload);
  $$payload.out += `<!----> `;
  File_reader($$payload);
  $$payload.out += `<!----></div></div> <div class="content svelte-lwwp08"><div class="main__functions svelte-lwwp08">`;
  Add_new($$payload);
  $$payload.out += `<!----> <!---->`;
  {
    Lines($$payload);
  }
  $$payload.out += `<!----> <!---->`;
  {
    Charts($$payload);
  }
  $$payload.out += `<!----></div></div></div> `;
  $$payload.out += `<!---->`;
  pop();
}
function _page($$payload) {
  App($$payload);
}
export {
  _page as default
};
