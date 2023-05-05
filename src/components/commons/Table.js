import React from 'react'
import DataTable from 'react-data-table-component'

const Table = ({ column, datas, setRows }) => {
    // const column = [
    //     {
    //         name: "Nom",
    //         selector: (row) => row?.name,
    //         sortable: true,
    //     },
    //     {
    //         name: "Ville",
    //         selector: (row) => row?.city,
    //         sortable: true,
    //     },
    //     {
    //         name: "Pays",
    //         selector: (row) => row?.country,
    //         sortable: true,
    //     },
    // ];

    // const datas = [
    //     { name: "akz", city: "bko", country: "ML" },
    //     { name: "yg", city: "og", country: "BF" },
    //     { name: "ka", city: "bko", country: "ML" },
    //     { name: "ls", city: "bg", country: "CI" },

    //     { name: "akz", city: "bko", country: "ML" },
    //     { name: "yg", city: "og", country: "BF" },
    //     { name: "ka", city: "bko", country: "ML" },
    //     { name: "ls", city: "bg", country: "CI" },

    //     { name: "akz", city: "bko", country: "ML" },
    //     { name: "yg", city: "og", country: "BF" },
    //     { name: "ka", city: "bko", country: "ML" },
    //     { name: "ls", city: "bg", country: "CI" },

    //     { name: "akz", city: "bko", country: "ML" },
    //     { name: "yg", city: "og", country: "BF" },
    //     { name: "ka", city: "bko", country: "ML" },
    //     { name: "ls", city: "bg", country: "CI" },

    //     { name: "akz", city: "bko", country: "ML" },
    //     { name: "yg", city: "og", country: "BF" },
    //     { name: "ka", city: "bko", country: "ML" },
    //     { name: "ls", city: "bg", country: "CI" },
    // ]

    const getSelectedID = (state) => { setRows(state.selectedRows.map((row) => row?._id)); };

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
