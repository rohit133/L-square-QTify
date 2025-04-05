import React from 'react';
import styles from './FAQ.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function FAQ() {
    return (
        <div className={styles.faqContainer}>
            <h1 className={styles.faqTitle}>FAQs</h1>
            <div className="faq-item">
                <Accordion defaultExpanded>
                    <AccordionSummary className={styles.questionContainer} expandIcon={<ExpandMoreIcon sx={{fill: '#34C94B', width: '2rem', height: '2rem'}} />} aria-controls="panel1-content" id="panel1-header">
                        <Typography className={styles.question} component="span">Is Qtify free to use?</Typography>
                    </AccordionSummary>
                    
                    <AccordionDetails sx={{padding: '18px 14px'}} className={styles.answerContainer}>
                        <Typography>
                            Yes, Qtify is free to use. You can access all the features without any cost.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                
                <Accordion>
                    <AccordionSummary className={styles.questionContainer} expandIcon={<ExpandMoreIcon sx={{fill: '#34C94B', width: '2rem', height: '2rem'}} />} aria-controls="panel2-content" id="panel2-header">
                        <Typography className={styles.question}  component="span">Can I download and listen to song offline?</Typography>
                    </AccordionSummary>
                    
                    <AccordionDetails sx={{padding: '18px 14px'}} className={styles.answerContainer}>
                        <Typography>
                            Yes, you can download songs for offline listening. Just click the download button on the song page.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            
            </div>
        </div>
    )
}