import React from 'react'
import DataTable from 'react-data-table-component'

const Table = ({ column, datas, setRows }) => {

    const getSelectedID = (state) => { setRows(state?.selectedRows?.map((row) => row?._id)); };

    return (
        <div>
            <DataTable
                columns={column}
                data={datas}
                customStyles={{ table: { style: { border: "1px solid rgba(0,0,0,0.2)" } } }}
                fixedHeader
                fixedHeaderScrollHeight="400px"
                pagination
                highlightOnHover
                selectableRows
                selectableRowsHighlight
                onSelectedRowsChange={getSelectedID}
            />
        </div>
    )
}

export default Table
