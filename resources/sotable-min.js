const ROW_SELECTOR = "tr:not(table table tr)";
let settings, whiteElements, blackElements, defaults = { indicatorAsc: "ᐃ", indicatorDsc: "ᐁ", sortHint: "Sort the table by clicking on a column heading.", restoreHint: "Restore the original order by clicking <button>Restore Order</button>.", whiteList: "", blackList: "" };

function getArray(t) { return t && "string" == typeof t || t instanceof String ? t.split(",") : t || [] }

function isWhitelisted(t) { return !(!t.classList.contains("so-so") && !t.classList.contains("soso")) || (whiteElements.size ? whiteElements.has(t) : !settings.whiteList) }

function isBlacklisted(t) { return !(!t.classList.contains("no-so") && !t.classList.contains("noso")) || blackElements.has(t) }

function setConfig(t) { settings = Object.assign({}, defaults, t), whiteElements = new Set, blackElements = new Set; for (let t of getArray(settings.whiteList))
        for (let e of document.querySelectorAll(t)) whiteElements.add(e); for (let t of getArray(settings.blackList))
        for (let e of document.querySelectorAll(t)) blackElements.add(e) }

function getIndexedRowValue(t, e) { return t.children && t.children[e] ? t.children[e].innerText || t.children[e].textContent : "" }

function getColumnIndex(t) { return Array.from(t.parentNode.children).indexOf(t) }

function getColumn(t, e) { return Array.from(t.querySelectorAll("tr")).map(t => t.children[e]) }

function canColumnSort(t, e) { let n = getColumn(t, e); return !!n && ((!n.length || "TH" == n[0].tagName) && n.length == getBodyRows(t).length + 1) }

function getBodyRowsContainer(t) { let e = t.querySelector("tbody"); return e || t }

function getBodyRows(t) { let e = getBodyRowsContainer(t); return Array.from(e.querySelectorAll(ROW_SELECTOR)).filter(t => !t.querySelector("th:not(table table th)")) }

function getCellValue(t) { return t.innerText || t.textContent }

function compareValues(t, e) { return isNaN(t) || isNaN(e) ? String(t).localeCompare(String(e)) : t - e }

function isColumnAsc(t, e) { let n = getColumn(t, e).filter(t => t && "TH" != t.tagName).map(t => getCellValue(t)),
        r = [...n].sort(compareValues); return String(n) == String(r) }

function comparer(t, e) { return function(n, r) { return compareValues(getIndexedRowValue(e ? n : r, t), getIndexedRowValue(e ? r : n, t)) } }

function clearTableSortIndication(t) { t.querySelectorAll("th.sotable-column:not(table table th)").forEach(t => { t.classList.remove("asc"), t.classList.remove("dsc"), t.ariaSort = null, t.querySelectorAll(".indicator").forEach(t => t.remove()) }) }

function indicateColumnSortDirection(t, e, n) { clearTableSortIndication(t); let r = document.createElement("span");
    e.firstChild.appendChild(r), r.classList.add("indicator"), r.ariaHidden = !0, n ? (e.classList.add("asc"), e.ariaSort = "ascending", r.innerHTML = settings.indicatorAsc) : (e.classList.add("dsc"), e.ariaSort = "descending", r.innerHTML = settings.indicatorDsc), indicateRestoreTableOrder(t) }

function storeOrigTableOrder(t) { let e = 1;
    getBodyRows(t).forEach(t => { t.querySelector("[orig-order]:not(table table [orig-order])") || (t.setAttribute("orig-order", e), e++) }) }

function restoreOrigTableOrder(t) { clearTableSortIndication(t); let e = getBodyRowsContainer(t);
    Array.from(e.querySelectorAll("[orig-order]:not(table table [orig-order])")).sort((t, e) => parseInt(t.getAttribute("orig-order")) - parseInt(e.getAttribute("orig-order"))).forEach(t => e.appendChild(t)) }

function indicateRestoreTableOrder(t) { t.querySelectorAll("caption p.indicator:not(table table caption p.indicator)").forEach(e => {!e.querySelector(".restore-hint") && settings.restoreHint && (e.innerHTML += ` <span class="restore-hint">${settings.restoreHint}</span>`, e.querySelectorAll(".restore-hint button").forEach(e => { e.classList.add("restore-order"), e.addEventListener("click", () => { restoreOrigTableOrder(t) }) })) }) }

function indicateSortableTable(t) { let e = t.querySelector("caption:not(table table caption)");
    e || (e = document.createElement("caption"), t.prepend(e)); let n = t.querySelector("p.indicator:not(table table p.indicator)");
    n || ((n = document.createElement("p")).classList.add("indicator"), n.innerHTML = settings.sortHint, e.appendChild(n)), indicateRestoreTableOrder(t) }

function insertColumnSortToggle(t) { return t.querySelectorAll(":not(abbr):not(b):not(br):not(cite):not(code):not(em):not(i):not(img):not(kbd):not(label):not(mark):not(small):not(span):not(strong):not(sub):not(sup):not(svg):not(time)").length ? null : (t.innerHTML = `<button>${t.innerHTML}</button>`, t.firstChild) }

function sotable(t) { setConfig(t), document.querySelectorAll("tr:first-child>th:not(.noso):not(.no-so)").forEach(t => { let e = t.closest("table"); if (!isBlacklisted(e) && isWhitelisted(e)) { let n = getColumnIndex(t); if (canColumnSort(e, n)) { storeOrigTableOrder(e); let r = insertColumnSortToggle(t);
                r && (t.classList.add("sotable-column"), e.classList.add("sotable"), indicateSortableTable(e), r.addEventListener("click", () => { let r = !isColumnAsc(e, n),
                        o = getBodyRowsContainer(e);
                    getBodyRows(e).sort(comparer(getColumnIndex(t), r)).forEach(t => o.appendChild(t)), indicateColumnSortDirection(e, t, r) })) } } }) }
try { module && module.exports && (module.exports.sotable = sotable, module.exports.run = sotable) } catch (t) {}