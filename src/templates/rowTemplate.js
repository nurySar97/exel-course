export function rowTemplate(columns, index = '') {
  const newColumns = Array.isArray(columns) ? columns.join('') : columns;
  return `
    <div class="row" data-type="resizeable-row" data-row="${index}">
      <div class="row-info">
      ${index}
      ${index &&`<div class="resize resize-row" data-resize="row=${index}"></div>`}
      </div>
      <div class="row-data">
        ${newColumns}
      </div>
    </div>`
}
