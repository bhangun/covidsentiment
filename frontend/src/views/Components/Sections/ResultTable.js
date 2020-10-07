import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Badge from '../../../components/Badge/Badge.js';

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

    // const rows = []
    console.log(words, 
        word_counts,
        tags,
        noun_phrases,
        sentiment_assessments,
        tokenize,
        language,
        translation)
    function colors(i){
        return (i%2 === 0)?"info": "success"
    }
        
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow style={{backgroundColor:'GrayText'}}>
            <TableCell>Keterangan</TableCell>
            <TableCell>Nilai</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
            <TableRow key="Words">
                <TableCell >
                    Words
                </TableCell>
                <TableCell >
                    {words.map((w,i) =>
                    <Badge color={colors(i)}>{w}</Badge>
                    )} 
                </TableCell>
            </TableRow>

            {/* <TableRow key="count">
                <TableCell >
                    Words Counts
                </TableCell>
                <TableCell >
                {word_counts!=null?word_counts.map((w,i) =>
                    <Badge color={colors(i)}>{w}</Badge>
                    ):''} 
                </TableCell>
            </TableRow> */}
    
            <TableRow key="tags">
                <TableCell >
                Tags
              </TableCell>
              <TableCell >
              {tags.map((w,i) =>
                    <Badge color={colors(i)}>{w}</Badge>
                    )} 
              </TableCell>
            </TableRow>
            <TableRow key="npun">
            <TableCell >
                Noun Phrases
              </TableCell>
                <TableCell >
                {noun_phrases.map((w,i) =>
                    <Badge color={colors(i)}>{w}</Badge>
                    )} 
                </TableCell>
            </TableRow>
            <TableRow key="sent">
            <TableCell >
                Sentiment Assesment
              </TableCell>
                <TableCell >
                    {sentiment_assessments.map((w,i) =>
                    <Badge color={colors(i)}>{w}</Badge>
                    )} 
                </TableCell>
            </TableRow>
             <TableRow key="token">
            <TableCell >
                Tokenize
              </TableCell>
                <TableCell >
                {tokenize.map((w,i) =>
                    <Badge color={colors(i)}>{w}</Badge>
                    )} 
                </TableCell>
            </TableRow>
            <TableRow key="lang">
                <TableCell >
                    Language
                </TableCell>
                <TableCell >
                    {language}
                </TableCell>
            </TableRow>

           {/*  <TableRow key="trans">
                <TableCell >
                    Translation
                </TableCell>
                <TableCell >
                    {translation}
                </TableCell>
            </TableRow>  */}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ResultTable