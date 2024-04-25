import React, { useEffect, useState } from "react";
import SideBar from "../component/sideBar/SideBar";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Transaction({ email }) {
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    const instance = new RaptorX({
      api_key: "9a60f01e9b7d2d5d37a1b134241311fd7dfdbc38",
    });

    const fetchTransactionData = async () => {
      try {
        const transactionData = await instance.getTransaction({
          user_email: inpval.email,
          user_fullname: inpval.name,
          transactiondate: currentDate,
          transactioncurrency: "INR",
          status: "complete",
          pan_card: inpval.panCard,
          user_phone_number: mobileNumber,
          user_city: inpval.city,
          user_zip: inpval.pinCode,
          user_street: inpval.address,
          transactionamount: amounts?.grand_total,
          user_id: instance.retrieveCustomerId(),
        });
        setTransactionData(transactionData);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    };

    fetchTransactionData();
  }, [email]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "user_fullname",
        header: "Full Name",
        size: 100,
      },
      {
        accessorKey: "user_city",
        header: "Address",
        size: 100,
      },
      {
        accessorKey: "transactiondate",
        header: "Transaction Date",
        size: 100,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 100,
      },
      {
        accessorKey: "transactioncurrency",
        header: "Currency",
        size: 100,
      },
      {
        accessorKey: "transactionamount",
        header: "Amount",
        size: 100,
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
    data: transactionData,
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
            data={transactionData}
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
