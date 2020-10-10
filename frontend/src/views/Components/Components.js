import React,{useState} from "react";
import classNames from "classnames";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import Button from "../../components/CustomButtons/Button.js";
import Parallax from "../../components/Parallax/Parallax.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import SectionPills from "./Sections/SectionPills.js";
import styles from "../../assets/jss/material-kit-react/views/components.js";
import ResultChart from "./Sections/SectionChart.js";
import axios from "axios";
import TeamUntirta from "../TeamUntirta.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [page,setPage] = useState({
    home:true,tentang:false
  })

  const title = "Sentiment Analysis"
  const subtitle = " Pengembangan Aplikasi Sistem Cerdas Untuk Pendekteksi dan Penangkal Hoaks Seputar Covid-19 Dengan Intelligent Sentiment Analysis dan Intelligent Public Opinion Mining"

  const url = "http://149.129.245.30:443/api/submit";
  //const url = "http://localhost:5000/api/submit";
  const [change, setChange] = useState(false);
  const [result, setResult] = useState({
    "polarity":0.0,
    "positive":0.0,
    "negative":0.0,
    "isHoax": "",
    "tags": [],
    "noun_phrases": [],
    "word_counts": {},
    "words":[],
    "sentiment_assessments":[],
    "tokenize":[],
    "language":"",
    "translation":""
  });

  const [success, setSuccess] = useState(null);


  function handleInput(e) {
    setChange(true);
  }

  function home(){
    setPage({tentang:false,home:true})
  }

  function tentang(){
    setPage({tentang:true,home:false})
  }

  function handleSubmit(data) {
    /* e.preventDefault();
    const data = new FormData();
    data.set("payload", form.payload); */

    axios({
      method: "post",
      url: url,
      data: data,
    })
      .then(function (response) {
        const res = response.data
       
        setResult({
            "polarity":res.polarity,
            "positive":res.positive,
            "negative":res.negative,
            "isHoax": res.isHoax,
            "tags": res.tags,
            "noun_phrases": res.noun_phrases, 
            "word_counts": res.word_counts,
            "words":res.words,
            "sentiment_assessments":res.sentiment_assessments,
            "tokenize":res.tokenize,
            "language": res.language,
            "translation":res.translation
        })
        console.log('>>>>>>>>>>>>>',result);
        setSuccess(true);
      })
      .catch(function (response) {
        setResult(response)
        setSuccess(false);
        // console.log(response);
      });
  }
  return (
    <div>
      <Header
        brand="Sentiment Analysis"
        rightLinks={<HeaderLinks onClick={home}/>}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
        onClick={home}
      />
      <Parallax image={require("../../assets/img/virus.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>{title}</h1>
                <h3 className={classes.subtitle}>
                {subtitle}
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {page.tentang ?<TeamUntirta />:
        <SectionPills handleInput={handleInput} handleSubmit={handleSubmit} success={success}/>
        }
        { change && page.home?<ResultChart result={result}/>:<div/>
        }
      </div>
      <Footer onClick={tentang}/>
    </div>
  );
}
