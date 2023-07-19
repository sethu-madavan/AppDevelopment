import * as React from 'react';
// import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(sno, start, end, title, tutor) {
  return { sno, start, end, title, tutor };
}

const rows = [
  createData(
    1,
    '09:00 AM',
    '10:00 AM',
    'C++',
    'Geerinath',
  ),
  createData(
    2,
    '10:15 AM',
    '12:00 PM',
    'C++',
    'Geerinath',
  ),
  createData(
    3,
    '02:00 PM',
    '02:30 PM',
    'Python',
    'Sofia',
  ),
  createData(
    4,
    '04:00 PM',
    '05:00 PM',
    'Java',
    'Rohini',
  ),
];

// function preventDefault(event) {
//   event.preventDefault();
// }

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Schedules</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align='center'>S.No</TableCell>
            <TableCell align='center'>Start-Time</TableCell>
            <TableCell align='center'>End-Time</TableCell>
            <TableCell align='center'>Course-Title</TableCell>
            <TableCell align='center'>Tutor</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align='center'>{row.sno}</TableCell>
              <TableCell align='center'>{row.start}</TableCell>
              <TableCell align='center'>{row.end}</TableCell>
              <TableCell align='center'>{row.title}</TableCell>
              <TableCell align='center'>{row.tutor}</TableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
