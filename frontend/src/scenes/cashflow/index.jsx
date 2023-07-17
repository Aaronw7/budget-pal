import { Box, Typography, Button, TextField, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DataGrid } from "@mui/x-data-grid";
import { mockCashFlowData } from "../../data/mockCashFlowData";
import { tokens } from "../../theme";

const CashFlow = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const initialValues = {
    type: "",
    name: "",
    amount: "",
    category: "",
    month: "",
    year: ""
  };

  const entrySchema = yup.object().shape({
    type: yup.string().required("required"),
    name: yup.string().required("required"),
    amount: yup.string().required("required"),
    category: yup.string().required("required"),
    month: yup.string().required("required"),
    year: yup.string().required("required"),
  })

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values)
  }

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
            ${amount}
          </Typography>
        )
      }
    },
    { field: "category", headerName: "CATEGORY", flex: 1 },
    { field: "month", headerName: "MONTH", headerAlign:"center", align: "center" },
    { field: "year", headerName: "YEAR" }
  ]

  const gridTemplateLarge = `
  "a a a b"
  "a a a b"
  `;

  return (
    <Box m="20px">
      <Header title="CASH FLOW" subtitle="Track your Income and Expenses" />
      {/* <Box
        display="flex"
        sx={{
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        flexWrap:"wrap"
      }}> */}
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{ gridTemplateAreas: gridTemplateLarge }}
      >
        <Box flexGrow={1} sx={{ gridArea: 'b' }}>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={entrySchema}
          >
            {({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4"}
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="type"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.type}
                    name="type"
                    error={!!touched.type && !!errors.type}
                    helperText={touched.type && errors.type}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    error={!!touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="amount"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.amount}
                    name="amount"
                    error={!!touched.amount && !!errors.amount}
                    helperText={touched.amount && errors.amount}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="category"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.category}
                    name="category"
                    error={!!touched.category && !!errors.category}
                    helperText={touched.category && errors.category}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="month"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.month}
                    name="month"
                    error={!!touched.month && !!errors.month}
                    helperText={touched.month && errors.month}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="year"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.year}
                    name="year"
                    error={!!touched.year && !!errors.year}
                    helperText={touched.year && errors.year}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    sx={{ gridColumn: "span 4" }}
                  >
                    Create New Entry
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
        <Box flexGrow={1} sx={{ gridArea:'a' }}>
          <DataGrid rows={mockCashFlowData} columns={columns} />
        </Box>
      </Box>
    </Box>
  )
}

export default CashFlow;