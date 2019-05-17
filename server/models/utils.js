const db = require('./db');

const getColumnFromTable = async (columnName, tableName, filter = null) => {
  try {
    const result = await db.any(`SELECT ${columnName} FROM ${tableName} ${filter === null ? '' : `WHERE ${filter.row}='${filter.value}'`}`);
    return result;
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
    return { status: 'error', error: true, message: 'Failed to fetch from table' };
  }
};

const insertTableAll = (values, tableName) => {
  let startArr = 0;
  const columnLength = Object.keys(values).length;
  const arr = Array(columnLength).fill().map(() => `$${startArr += 1}`);

  db.none(`INSERT INTO ${tableName} VALUES(${arr.join(', ')});`,[
    ...Object.keys(values).map((key) => values[key])
  ]);
};

const getColumnsFromTable = async (columnNames, tableName, filter = null) => {
  try {
    const result = await db.any(`SELECT ${columnNames.join(', ')} FROM ${tableName} ${filter === null ? '' : `WHERE ${filter.row}='${filter.value}'`}`);
    return result;
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
    return { status: 'error', error: true, message: 'Failed to fetch from table' };
  } 
};

const deleteColumnFromTableById = (id, tableName) => {
  db.none(`DELETE FROM ${tableName} WHERE id=${id}`);
};

module.exports = {
  getColumnFromTable,
  getColumnsFromTable,
  insertTableAll,
  deleteColumnFromTableById,
};
