import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(2),
    },

    paper: {
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        marginBottom: 12,
    },

    settingOption: {
        marginLeft: "auto",
    },

    margin: {
        margin: theme.spacing(1),
    },

    color: {
        color: "#0241AD"
    },

    text: {
        marginLeft: "42px",
    },

    textP: {
        marginLeft: "42px",
    },

}));

const Api = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <h2>Documentation for sending messages</h2>

                 <h2 className={classes.color}>Sending Methods</h2>

                 <p className={classes.text}>1. Text Messages</p>
                 <p className={classes.text}>2. Media Messages</p>

                 <h2 className={classes.color}>Instructions</h2>
                 <p><b>Important Observations</b></p>
                 <ul>
                     <li>To get the API token, go to settings and your token will be there, without it it will not be possible to send messages.</li>
                     <li>The number to send must not have a mask or special characters and must consist of:</li>
                     <br />
                     <ol>
                         <ul>
                             <li>whatsappId</li>
                             <li>Country code - Ex: 91 (INDIA)</li>
                             <li>DDD</li>
                             <li>Number</li>
                         </ul>
                     </ol>
                 </ul>
                 <h2 className={classes.color}>1. Text Messages</h2>
                 <p>The following is a list of information needed to send text messages:</p>
                 <p className={classes.textP}><b>URL: </b>{process.env.REACT_APP_BACKEND_URL}/api/messages/send</p>
                 <p className={classes.textP}><b>Method: </b>POST</p>
                 <p className={classes.textP}><b>Headers: </b>Authorization: Bearer (token) and Content-Type application/json</p>
                 <p className={classes.textP}><b>Body: </b>whatsappId: 1 , "number": "9199999999999", "body": "Sent via api"</p>

                 <h2 className={classes.color}>2. Media Messages</h2>
                 <p>The following is a list of information needed to send media:</p>
                 <p className={classes.textP}><b>URL: </b>{process.env.REACT_APP_BACKEND_URL}/api/messages/send</p>
                 <p className={classes.textP}><b>Method: </b>POST</p>
                 <p className={classes.textP}><b>Headers: </b>Authorization: Bearer (token) and Content-Type multipart/form-data</p>
                 <p className={classes.textP}><b>Body: </b>whatsappId: 1 , "number": "9199999999999", "medias": "here's your media", "body": "Sent via api "</p>
            </Container>
        </div>
    );
};

export default Api; 
