import React from "react";
import SideBar from "../component/sideBar/SideBar";
import { useMemo } from "react";
import Navbar from '../component/common/Navbar'
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
        size: 170,
      },
      {
        accessorKey: "receiver",
        header: "Receiver",
        size: 170,
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
        fontFamily: "Gilroy-Medium",
        overflowX: "auto",
      },
    },
    muiTablePaperProps: {
      sx: {
        width: "100%",
        boxShadow: "none",
        background: "#020811",
        borderRadius: "9px",
        overflowX: "auto",
      },
    },
    mrtTheme: (theme) => ({
      baseBackgroundColor: "#020811",
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
    <div className="bg-[#0F141D] w-full min-h-screen flex flex-col md:flex-row">
      <SideBar />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="m-8 flex-grow overflow-x-auto">
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
    </div>
  );
}
