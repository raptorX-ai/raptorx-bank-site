import React from "react";
import SideBar from "../component/sideBar/SideBar";
import { useMemo } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Transaction({ transactions }) {
  const columns = useMemo(
    () => [
      {
        accessorKey: "date",
        header: "Date & Time",
        size: 250,
      },
      {
        accessorKey: "sender",
        header: "Sender",
        size: 200,
      },
      {
        accessorKey: "receiver",
        header: "Receiver",
        size: 150,
      },
      {
        accessorKey: "type",
        header: "CR/DB",
        size: 150,
      },
      {
        accessorKey: "amount",
        header: "Amount",
        size: 150,
      },
      {
        accessorKey: "balance",
        header: "Current Balance",
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
    data: transactions,
    enableColumnResizing: false,
    enableColumnActions: true,
    enableRowSelection: false,
    positionToolbarAlertBanner: "bottom",
    muiTableProps: {
      sx: {
        boxShadow: "none",
        width: "100%",
        fontFamily: "Gilroy-Medium",
        overflowX: "hidden",
      },
    },
    muiTablePaperProps: {
      sx: {
        width: "100%",
        boxShadow: "none",
        background: "#11171F",
        borderRadius: "9px",
        overflowX: "hidden",
      },
    },
    mrtTheme: (theme) => ({
      baseBackgroundColor: "#11171F",
      color: "#FFFFFF",
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
      <div className="m-10 overflow-x-auto">
        <ThemeProvider theme={darkTheme}>
          <MaterialReactTable
            table={table}
            columns={columns}
            data={transactions}
            layoutMode="grid"
            displayColumnDefOptions={{
              "mrt-row-actions": {
                size: 100,
                grow: true,
              },
            }}
            enableRowActions={false}
            positionActionsColumn="last"
            mrtTheme={darkTheme}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}
