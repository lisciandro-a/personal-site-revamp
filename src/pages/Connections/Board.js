import { Box, Button, ButtonBase, Grid, Paper, Typography, Stack } from "@mui/material";
import _ from "lodash";
import { useState, useEffect } from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import { Container, Toast, ToastContainer } from "react-bootstrap";
import CircleIcon from '@mui/icons-material/Circle';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f0f2f7',
    width: '150px', 
    height: '80px', 
    alignItems: 'center', 
    lineHeight: '80px',
    color: theme.palette.black,
    fontWeight: 'bold',
  }));

  const SolvedItem = styled(Item)(({ theme }) => ({
    backgroundColor: '#f0f2f7',
    width: '628px', 
    whiteSpace: 'pre-line'
  }));

function Board({ revealAnswers }) {
    const categories = {
        yellow: {
            title: 'Supplies for my hobbies',
            color: '#faefa7',
            words: [
                'Yarn',
                'Pens',
                'Camera',
                'Fabric'
            ]
        },
        green: {
            title: 'Query types used/learning',
            color: '#c8f2b6',
            words: [
                'OData',
                'GraphQL',
                'REST',
                'SQL'
            ]
        },
        blue: {
            title: 'Programming languages I know',
            color: '#bdd7f2',
            words: [
                'JS',
                'TS',
                'Python',
                'Java'
            ]
        },
        purple: {
            title: 'Abbreviations for work experience',
            color: '#cbb4f0',
            words: [
                'TA',
                'SWE',
                'WJM',
                'CSI'
            ]
        }
    };

    const messages = {
        win: 'You win!',
        lose: 'Nice try!',
        hint: 'One away...',
    }

    const getWords = () => {
        const shuffledWords = [];
        for (const [color, value] of Object.entries(categories)) {
            const categoryWords = value.words;

            shuffledWords.push(...categoryWords.map((word) => {return {word, category: color}}));
        };
        return _.shuffle(shuffledWords);
    }

    const [unsolvedWords, setUnsolvedWords] = useState(getWords());
    const [solvedCategories, setSolvedCategories] = useState([]);
    const [remainingMistakes, setRemainingMistakes] = useState(4);
    const [selectedWords, setSelectedWords] = useState([]);

    const [showModal, setShowModal] = useState({show: false});

    const [gameOver, setGameOver] = useState(false);

    const onClickWord = (newSelection) => {
        if (selectedWords.includes(newSelection)) {
            const filteredWords = selectedWords.filter((word) => word !== newSelection);
            setSelectedWords([...filteredWords]);
        } else if (selectedWords.length < 4){
            setSelectedWords([...selectedWords, newSelection]);
        }
    }

    const handleSubmit = () => {
        const countCorrect = selectedWords.reduce((acc, currVal) => {
            const count = acc[currVal.category] ?? 0;
            return {
                ...acc,
               [currVal.category]: count + 1
            };
        }, {});
        
        const highestGroupCount = Math.max(...Object.values(countCorrect));
        if (highestGroupCount === 4) {
            const solvedCategory = selectedWords[0].category
            setSolvedCategories([...solvedCategories, solvedCategory]);
            setUnsolvedWords([...unsolvedWords.filter((unsolved) => unsolved.category !== solvedCategory)]);
        } else {
            setRemainingMistakes(remainingMistakes - 1);
            if (highestGroupCount === 3 && remainingMistakes > 1) {
                setShowModal({show: true, message: messages.hint});
            }
        }

        setSelectedWords([]);
    }

    const handleCloseOneAway = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShowModal({show: false})
    }

    useEffect(() => {
        if (solvedCategories.length === 4) {
            setGameOver(true);
            
        }
    }, [solvedCategories])

    useEffect(() => {
        if (gameOver && !revealAnswers) {
            remainingMistakes && setShowModal({show: true, message: messages.win});
        }
    }, [gameOver])

    useEffect(() => {
        if (remainingMistakes === 0) {
            setShowModal({show: true, message: messages.lose});
            setTimeout(() => {
                const allSolved = new Set([...solvedCategories]);
                Object.keys(categories).forEach((category) => allSolved.add(category));
                setSolvedCategories(Array.from(allSolved));
                setUnsolvedWords([]);
            }, [500])   
        }
    }, [remainingMistakes])

    useEffect(() => {
        if (revealAnswers) {
            setSolvedCategories(Object.keys(categories));
            setUnsolvedWords([]);
        } else {
            setSolvedCategories([]);
            setUnsolvedWords(getWords());
            setGameOver(false);
            setRemainingMistakes(4);
        }
    }, [revealAnswers])

    return (
        <Box width={"620px"} margin='auto'>
            {showModal.show && <ToastContainer position="top-center" style={{ width: '100px', translate: '0px 120px', opacity: 1 }}>
                <Toast
                    show={showModal.show}
                    autohide
                    delay={3000}
                    onClose={handleCloseOneAway}
                >
                    <Toast.Body>{showModal.message}</Toast.Body>
                </Toast>
            </ToastContainer>}
            <Grid container spacing={{ xs: 2}} columns={4}>
                {solvedCategories?.map((solved, index) => { 
                    const category = categories[solved];
                    return (
                    <Grid item key={index} xs={4}>    
                        <SolvedItem elevation={3} sx={{ backgroundColor: category.color }}>
                            <Typography style={{whiteSpace: 'pre-line', lineHeight: '40px', textAlign: 'center'}}>
                                <b>{category.title + "\n"}</b>
                                {category.words.join(", ")}
                            </Typography>
                        </SolvedItem>
                    </Grid> 
                    
                );
                })}
                {unsolvedWords?.map((unsolved, index) => { return (
                    <Grid item key={index} xs={1} >
                        <ButtonBase disableRipple onClick={() => onClickWord(unsolved)}>
                            <Item elevation={3} sx={selectedWords.includes(unsolved) ? { backgroundColor: 'grey' } : {}}  >{unsolved.word}</Item>
                        </ButtonBase>
                        
                    </Grid> 
                );
                })}
            </Grid>
            {!gameOver &&
            <Container style={{ marginTop: "20px"}}>
                <Typography>
                    Mistakes Remaining: {[...Array(remainingMistakes)].map(() => { 
                        return (
                            <CircleIcon fontSize="12px" sx={{ color: 'grey', margin: '2px' }} />
                        );
                    })}  
                </Typography>
                <Stack spacing={2} direction='row' justifyContent='center' padding="20px">
                    <Button 
                        variant='contained' 
                        color="periwinkle" 
                        centerRipple
                        onClick={() => setUnsolvedWords(_.shuffle(unsolvedWords))}
                        >
                            Shuffle
                    </Button>
                    <Button 
                        variant='contained' 
                        color="periwinkle" 
                        centerRipple
                        disabled={selectedWords.length === 0}
                        onClick={() => setSelectedWords([])}
                        >
                            Deselect All
                    </Button>
                    <Button 
                        variant='contained' 
                        color="periwinkle" 
                        centerRipple
                        disabled={selectedWords.length !== 4}
                        onClick={handleSubmit}
                        >
                            Submit
                    </Button>
                </Stack>
            </Container>}
        </Box>
    );
};

export default Board;