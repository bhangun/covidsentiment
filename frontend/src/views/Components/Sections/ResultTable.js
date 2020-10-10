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
            <TableRow key="lang">
                <TableCell >
                    Language
                </TableCell>
                <TableCell >
                <Badge color='warning'>{language}</Badge>
                </TableCell>
            </TableRow>
            <TableRow key="Words">
                <TableCell >
                    Words
                </TableCell>
                <TableCell >
                    {words.map((w,i) =>
                      <Badge key={'b'+i} color={colors(i)}>{w}</Badge>
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
                    <Badge color={colors(i)}>{w[0]} ({w[1]})</Badge>
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
                  <span>Polarity: <Badge color='primary'>{sentiment_assessments[0]}</Badge></span><br/>
                  <span>Subjectivity: <Badge color='primary'>{sentiment_assessments[1]}</Badge></span><br/>
                  <div>Assesment:</div>
                    {sentiment_assessments[2]!=null?sentiment_assessments[2].map((w,x) =>
                      <div>
                        <Badge color='warning'>{w}</Badge><br/>
                        {/* {
                          w.map(n =>
                            <br><span>{n}</span></br>
                          )
                        } */}
                      </div>
                    ):''} 
                    
                    {/* {sentiment_assessments.map((w,i) =>
                    <Badge color={colors(i)}>{w}
                    </Badge>
                    )}  */}
                </TableCell>
            </TableRow>
{/* 
  Sentiment(
    polarity=0.09090909090909091, 
    subjectivity=0.26731601731601734, 
    assessments=[
      (['new'], 0.13636363636363635, 0.45454545454545453, None), 
      (['dynamic'], 0.0, 0.16666666666666666, None), 
      (['currently'], 0.0, 0.4, None), 
      (['daily'], 0.0, 0.0, None), 
      (['starting'], 0.0, 0.1, None),
      (['most'], 0.5, 0.5, None), 
      (['recently'], 0.0, 0.25, None)
    ])
*/}

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
            <TableRow key="trans">
                <TableCell >
                    Translation
                </TableCell>
                <TableCell >
                    {translation}
                </TableCell>
            </TableRow> 
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ResultTable