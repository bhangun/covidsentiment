import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const ResultTable =({result})=> {
  const classes = useStyles();

  const { 
    words, 
    word_counts,
    tags,
    noun_phrases,
    sentiment_assessments,
    tokenize,
    language,
    translation} = result

    function cr(label,value){
        return {label,value}
    }
    const rows = [
        cr('Word', words),
        cr('Word Counts',word_counts),
        cr('Tags',tags),
        cr('Noun Phrases',noun_phrases),
        cr('Sentiment Assesment',sentiment_assessments),
        cr('Tokenize',tokenize),
        cr('Language',language),
        cr('Translatin',translation)
    ]
    console.log(words, 
        word_counts,
        tags,
        noun_phrases,
        sentiment_assessments,
        tokenize,
        language,
        translation)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{backgroundColor:'GrayText'}}>
            <TableCell>Keterangan</TableCell>
            <TableCell>Nilai</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           { rows.map(row =>
                <TableRow key={row.label}>
                <TableCell component="th" scope="row">
                    {row.label}
                </TableCell>
                <TableCell >
                    {row.value}
                </TableCell>
            </TableRow>
  )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ResultTable