import React from "react";
import SideBar from "../component/sideBar/SideBar";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const data = [
  {
    date: "02/04/2024",
    particulars: "UPI/prmungle",
    drcr: "Credited",
    category: "Food",
    balance: "1500.02",
  },
  {
    date: "02/04/2024",
    particulars: "UPI/prmungle",
    drcr: "Debited",
    category: "Travel",
    balance: "1500.02",
  },
  {
    date: "02/04/2024",
    particulars: "UPI/prmungle",
    drcr: "Credited",
    category: "Medical",
    balance: "1500.02",
  },
  {
    date: "02/04/2024",
    particulars: "UPI/prmungle",
    drcr: "Debited",
    category: "Miscellaneous",
    balance: "1500.02",
  },
  
  
];

export default function Transaction() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "date",
        header: "Date",
        size: 150,
      },
      {
        accessorKey: "particulars",
        header: "Particulars",
        size: 200,
      },
      {
        accessorKey: "drcr",
        header: "DR/CR",
        size: 150,
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 150,
      },
      {
        accessorKey: "balance",
        header: "Balance",
        size: 150,
      },
    ],
    []
  );

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      fontFamily: "Gilroy-Medium",
    },
  });

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnResizing: false,
    enableColumnActions: false,
    enableRowSelection: true,
    positionToolbarAlertBanner: "bottom",
    muiTableProps: {
      sx: {
        boxShadow: "none",
        width: "100%",
        fontFamily: "Gilroy-Medium",
      },
    },
    muiTablePaperProps: {
      sx: {
        width: "132%",
        boxShadow: "none",
        background: "#11171F",
        fontFamily: "Gilroy-Medium",
      },
    },
    mrtTheme: (theme) => ({
      baseBackgroundColor: "#11171F",
      color: "#000000",
      fontFamily: "Gilroy-Medium",
    }),

    enableRowActions: false,
    positionActionsColumn: "last",
    initialState: {
      showGlobalFilter: false,
    },
    positionGlobalFilter: "left",
  });

  return (
    <div className="bg-[#020811] h-screen flex">
      <SideBar />
      <div className="m-10">
        <ThemeProvider theme={darkTheme}>
          <MaterialReactTable
            table={table}
            columns={columns}
            data={data}
            layoutMode="grid"
            displayColumnDefOptions={{
              "mrt-row-actions": {
                size: 100,
                grow: true,
              },
            }}
            enableRowActions
            positionActionsColumn
            mrtTheme={darkTheme}
          />
        </ThemeProvider>
      </div>

      
    </div>
  );
}
