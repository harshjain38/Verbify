import classes from "./home.module.css";
import upload from "../../Images/upload.png";
import voice from "../../Images/voice.png";
import pen from "../../Images/pen.png";

const Home = () => {
    return <div className={classes.mainHome}>
        <h1 className={classes.head1}>Verbify</h1>
        <hr className={classes.hr1} />
        <h3 className={classes.head2}>Your ideas, effortlessly transcribed.</h3>
        <h4 className={classes.head4}>Press the mic, express yourself, let verbify compose.</h4>

        <div className={classes.butDiv}>
            <button className={classes.but1}>sign up / log in</button>
            <button className={classes.but2}>see how it works</button>
        </div>
        
        <img className={classes.uploadImg} src={upload} alt="upload img" />
        <img className={classes.voiceImg} src={voice} alt="voice img" />
        <img className={classes.penImg} src={pen} alt="pen img" />
    </div> 
}

export default Home;