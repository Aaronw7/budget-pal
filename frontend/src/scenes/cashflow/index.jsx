import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockCashFlowData } from "../../data/mockCashFlowData";
import { tokens } from "../../theme";

const CashFlow = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "type", headerName: "TYPE" },
    { field: "name", headerName: "ITEM NAME", flex: 1 },
    {
      field: "amount",
      headerName: "AMOUNT",
      renderCell: ({ row: { type, amount }}) => {
        return (
          <Typography color={
            type === "income"
              ? colors.greenAccent[400]
              : colors.redAccent[400]
          }>
            {amount}
          </Typography>
        )
      }
    },
    { field: "category", headerName: "CATEGORY", flex: 1 },
    { field: "month", headerName: "MONTH", align: "center" },
    { field: "year", headerName: "YEAR" }
  ]

  return (
    <Box m="20px">
      <Header title="CASH FLOW" subtitle="Track your Income and Expenses" />
      <Box>
        <DataGrid rows={mockCashFlowData} columns={columns} />
      </Box>
    </Box>
  )
}

export default CashFlow;