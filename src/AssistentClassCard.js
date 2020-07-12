import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {useVideoContext} from './VideoContext';
import SelectedClassContext, {useSelectedClassContext} from './SelectedClassContext';
import {useEffect} from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginLeft: '5%'
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    actionsContainer: {
        marginBottom: theme.spacing(2)
    },
    resetContainer: {
        padding: theme.spacing(3)
    }
}));

function getSteps() {
    return ['Primeiro step', 'Segundo step', 'Terceiro step'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Apresentando nosso estudo de caso`;
        case 1:
            return 'test2';
        case 2:
            return `test3`;
        case 3:
            return `test4`;
        case 4:
            return `test5`;
        default:
            return 'Unknown step';
    }
}

export default function AssistentClassCard() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const playlist = useVideoContext()
    const actualClass = useSelectedClassContext()
    const {setSelectedClass} = useContext(SelectedClassContext)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSelectedClass({actualClass: activeStep})
        console.log(actualClass)

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setSelectedClass({actualClass: activeStep})
    };

    const handleReset = () => {
        setActiveStep(0);
        setSelectedClass(0)
    };

    useEffect(() => {}, [setSelectedClass, setActiveStep])

    return (
        <div className={
            classes.root
        }>
            <Stepper activeStep={activeStep}
                orientation="vertical">

                {
                playlist.title.map((video, index) => (
                    <Step key={index}>
                        <StepLabel>{video}</StepLabel>

                        <StepContent>
                            <Typography>{
                                getStepContent(index)
                            }</Typography>
                            <div className={
                                classes.actionsContainer
                            }>
                                <div>

                                    <Button disabled={
                                            activeStep === 0
                                        }
                                        onClick={handleBack}
                                        className={
                                            classes.button
                                    }>
                                        Back
                                    </Button>

                                    <Button variant="contained" color="primary"
                                        onClick={handleNext}
                                        className={
                                            classes.button
                                    }>
                                        {
                                        activeStep === playlist.title.length ? 'Finish' : 'Next'
                                    } </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))
            } </Stepper>
            {
            activeStep === steps.length && (
                <Paper square
                    elevation={0}
                    className={
                        classes.resetContainer
                }>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset}
                        className={
                            classes.button
                    }>
                        Reset
                    </Button>
                </Paper>
            )
        } </div>
    );
}
