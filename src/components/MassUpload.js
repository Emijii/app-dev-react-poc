import Axios from "axios";
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CheckIcon from '@material-ui/icons/Check';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { green, red } from '@material-ui/core/colors';
import { CSVReader } from 'react-papaparse';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const showUploadStatus = (status) => {
  if (status === 'Success') {
    return <CheckIcon style={{ color: green[500] }} />
  }
  else if (status === 'Failure') {
    return <ErrorOutlineIcon style={{ color: red[500] }} />
  }
}

export default function BasicTable() {
  //const { items } = useContext(ItemContext);
  const classes = useStyles();

  const [rows, setRows] = useState([]);

  const handleCatNumChange = id => (event) => {
    let data = [...rows];
    data[id].catnum = event.target.value;
    setRows(data);
  }

  const handleLongDescriptionChange = id => (event) => {
    let data = [...rows];
    data[id].longDescription = event.target.value;
    setRows(data);
  }

  const handleStatusChange = id => (event) => {
    let data = [...rows];
    data[id].status = event.target.value;
    setRows(data);
  }

  const handleUSDChange = id => (event) => {
    let data = [...rows];
    data[id].usd = event.target.value;
    setRows(data);
  }

  const handleGBPChange = id => (event) => {
    let data = [...rows];
    data[id].gbp = event.target.value;
    setRows(data);
  }

  const handleEUROChange = id => (event) => {
    let data = [...rows];
    data[id].euro = event.target.value;
    setRows(data);
  }

  const handleUploadStatushange = (id, status) => {
    let data = [...rows];
    data[id].uploadStatus = status;
    setRows(data);
  }

  const handleUploadNoteshange = (id, notes) => {
    let data = [...rows];
    data[id].uploadNotes = notes;
    setRows(data);
  }

  const parseFile = (data) => {
    data.map(() => {
      data.uploadStatus = ''
      data.uploadNotes = ''
      return true
    })
    setRows(data);
  };

  const handleUpload = () => {
    let data = [...rows];
    data.map((input,index) => {
      if (input.uploadStatus !== 'Success') {
        //Validate data before attempting upload
        if (validate(input)) {
          //Set up API arguements
          let payload = {
            catnum: input.catnum,
            description: input.longDescription,
            productStatus: input.status,
            naPricing: input.usd,
            euroPricing: input.euro,
            gbpPricing: input.gbp                            
          }
          //Call API
          Axios.post("http://localhost:5000/products",payload)
          .then((res) => {
              if (res.status === 201) {
                handleUploadStatushange(index,'Success')
                handleUploadNoteshange(index,'')
              } else {
                handleUploadStatushange(index,'Failure')
                handleUploadNoteshange(index,'API call hit an error')
              }              
          })
          .catch((err) => {
              console.log(err)
              handleUploadStatushange(index,'Failure')
              handleUploadNoteshange(index,'API call hit an error')
          });
        }
        else {
          handleUploadStatushange(index,'Failure')
          handleUploadNoteshange(index,'Did not pass validation')
        }
      }
      return true
    })
  };

  const validate = (input) => {
    //Only return true if all input fields are empty
    if (
      input.catnum === '' ||
      input.longDescription === '' ||
      input.status === '' ||
      input.usd === '' ||
      input.gbp === '' ||
      input.euro === ''
    ) {
      return false;
    }
    else {
      return true
    }
  };

  return (
    <div>
      <CSVReader
        addRemoveButton
        config={{
          header: true,
          complete: function (results) {
            parseFile(results.data)
          }
        }}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
      <button onClick={handleUpload}>
        Upload Data
      </button>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category Number</TableCell>
              <TableCell >Description</TableCell>
              <TableCell >Status</TableCell>
              <TableCell >Price (USD)</TableCell>
              <TableCell >Price (GBP)</TableCell>
              <TableCell >Price (EURO)</TableCell>
              <TableCell >Upload Status</TableCell>
              <TableCell >Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <TextField value={row.catnum} onChange={handleCatNumChange(index)} error={row.catnum === '' ? true : false}>
                  </TextField>
                </TableCell>
                <TableCell >
                  <TextField required multiline
                    value={row.longDescription}
                    onChange={handleLongDescriptionChange(index)}
                    error={row.longDescription === '' ? true : false}>
                  </TextField>
                </TableCell>
                <TableCell >
                  <Select value={row.status} onChange={handleStatusChange(index)} error={row.status === '' ? true : false}>
                    <MenuItem value='Active'>Active</MenuItem>
                    <MenuItem value='Development'>Development</MenuItem>
                    <MenuItem value='Discontinued'>Discontinued</MenuItem>
                  </Select>
                </TableCell>
                <TableCell >
                  <TextField value={row.usd}
                    onChange={handleUSDChange(index)}
                    error={row.usd === '' ? true : false}>
                  </TextField>
                </TableCell>
                <TableCell >
                  <TextField value={row.gbp}
                    onChange={handleGBPChange(index)}
                    error={row.gbp === '' ? true : false}>
                  </TextField>
                </TableCell>
                <TableCell >
                  <TextField value={row.euro}
                    onChange={handleEUROChange(index)}
                    error={row.euro === '' ? true : false}>
                  </TextField>
                </TableCell>
                <TableCell>
                  <Icon>{showUploadStatus(row.uploadStatus)}</Icon>
                </TableCell>
                <TableCell>
                  <TextField disabled value={row.uploadNotes} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}