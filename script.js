document.addEventListener('DOMContentLoaded', function() {
    // Lesson Navigation
    document.getElementById('lesson1-btn').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.remove('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson6-content').classList.add('hidden');
        document.getElementById('lesson7-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.add('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.remove('active');
        document.getElementById('lesson6-btn').classList.remove('active');
        document.getElementById('lesson7-btn').classList.remove('active');
    });
    
    document.getElementById('lesson2-btn').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.remove('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson6-content').classList.add('hidden');
        document.getElementById('lesson7-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.add('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.remove('active');
        document.getElementById('lesson6-btn').classList.remove('active');
        document.getElementById('lesson7-btn').classList.remove('active');
    });
    
    document.getElementById('lesson3-btn').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.remove('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson6-content').classList.add('hidden');
        document.getElementById('lesson7-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.add('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.remove('active');
        document.getElementById('lesson6-btn').classList.remove('active');
        document.getElementById('lesson7-btn').classList.remove('active');
    });
    
    document.getElementById('lesson4-btn').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.remove('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson6-content').classList.add('hidden');
        document.getElementById('lesson7-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.add('active');
        document.getElementById('lesson5-btn').classList.remove('active');
        document.getElementById('lesson6-btn').classList.remove('active');
        document.getElementById('lesson7-btn').classList.remove('active');
    });
    
    document.getElementById('lesson5-btn').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.remove('hidden');
        document.getElementById('lesson6-content').classList.add('hidden');
        document.getElementById('lesson7-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.add('active');
        document.getElementById('lesson6-btn').classList.remove('active');
        document.getElementById('lesson7-btn').classList.remove('active');
    });
    
    document.getElementById('lesson6-btn').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson6-content').classList.remove('hidden');
        document.getElementById('lesson7-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.remove('active');
        document.getElementById('lesson6-btn').classList.add('active');
        document.getElementById('lesson7-btn').classList.remove('active');
    });
    
    document.getElementById('lesson7-btn').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson6-content').classList.add('hidden');
        document.getElementById('lesson7-content').classList.remove('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.remove('active');
        document.getElementById('lesson6-btn').classList.remove('active');
        document.getElementById('lesson7-btn').classList.add('active');
    });
    
    // Cross-lesson navigation
    document.getElementById('next-lesson').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.remove('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.add('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.remove('active');
    });
    
    document.getElementById('back-to-lesson1').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.remove('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.add('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.remove('active');
    });
    
    document.getElementById('back-to-lesson2').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.remove('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.add('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.remove('active');
    });
    
    document.getElementById('next-to-lesson4').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.remove('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.add('active');
        document.getElementById('lesson5-btn').classList.remove('active');
    });
    
    document.getElementById('back-to-lesson3').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.remove('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.add('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.remove('active');
    });
    
    document.getElementById('next-to-lesson5').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.remove('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.add('active');
    });
    
    document.getElementById('back-to-lesson4').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.remove('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.add('active');
        document.getElementById('lesson5-btn').classList.remove('active');
    });
    
    //------------------ LESSON 1 ------------------//
    
    // Activity 1 data: Statement sorting
    const activity1Data = [
        { text: "The cat is sleeping.", isStatement: true },
        { text: "Is it raining?", isStatement: false },
        { text: "Close the door!", isStatement: false },
        { text: "Wow, that's amazing!", isStatement: false },
        { text: "The apple is red.", isStatement: true },
        { text: "Do you like pizza?", isStatement: false },
        { text: "Apples are blue.", isStatement: true },
        { text: "Stop that at once!", isStatement: false }
    ];
    
    // Activity 2 data: True or False
    const activity2Data = [
        { text: "The sun is hot.", isTrue: true },
        { text: "Pigs can fly.", isTrue: false },
        { text: "Water is wet.", isTrue: true },
        { text: "Grass is purple.", isTrue: false },
        { text: "Dogs have tails.", isTrue: true },
        { text: "The moon is made of cheese.", isTrue: false },
        { text: "1 + 1 = 2.", isTrue: true },
        { text: "5 is bigger than 10.", isTrue: false }
    ];
    
    let currentActivity1Index = 0;
    let currentActivity2Index = 0;
    
    // Navigation buttons for Lesson 1
    document.getElementById('start-activity').addEventListener('click', function() {
        document.getElementById('introduction').classList.add('hidden');
        document.getElementById('activity1').classList.remove('hidden');
        loadActivity1Card();
    });
    
    document.getElementById('next1').addEventListener('click', function() {
        currentActivity1Index++;
        
        if (currentActivity1Index < activity1Data.length) {
            document.getElementById('feedback1').textContent = '';
            document.getElementById('next1').classList.add('hidden');
            loadActivity1Card();
        } else {
            document.getElementById('activity1').classList.add('hidden');
            document.getElementById('activity2').classList.remove('hidden');
            loadActivity2Card();
        }
    });
    
    document.getElementById('next2').addEventListener('click', function() {
        currentActivity2Index++;
        
        if (currentActivity2Index < activity2Data.length) {
            document.getElementById('feedback2').textContent = '';
            document.getElementById('next2').classList.add('hidden');
            loadActivity2Card();
        } else {
            document.getElementById('activity2').classList.add('hidden');
            document.getElementById('activity3').classList.remove('hidden');
        }
    });
    
    document.getElementById('submit-statements').addEventListener('click', function() {
        const trueStatement = document.getElementById('true-statement').value.trim();
        const falseStatement = document.getElementById('false-statement').value.trim();
        
        if (trueStatement && falseStatement) {
            document.getElementById('feedback3').classList.remove('hidden');
            document.getElementById('submit-statements').classList.add('hidden');
            document.getElementById('restart').classList.remove('hidden');
        } else {
            alert("Please write both statements before submitting!");
        }
    });
    
    document.getElementById('restart').addEventListener('click', function() {
        resetActivities();
        document.getElementById('activity3').classList.add('hidden');
        document.getElementById('completion1').classList.remove('hidden');
    });
    
    document.getElementById('restart-final1').addEventListener('click', function() {
        resetActivities();
        document.getElementById('completion1').classList.add('hidden');
        document.getElementById('introduction').classList.remove('hidden');
    });
    
    // Activity 1: Statement Sort
    document.getElementById('statement-btn').addEventListener('click', function() {
        checkActivity1Answer(true);
    });
    
    document.getElementById('not-statement-btn').addEventListener('click', function() {
        checkActivity1Answer(false);
    });
    
    // Activity 2: True or False
    document.getElementById('true-btn').addEventListener('click', function() {
        checkActivity2Answer(true);
    });
    
    document.getElementById('false-btn').addEventListener('click', function() {
        checkActivity2Answer(false);
    });
    
    // Helper functions for Lesson 1
    function loadActivity1Card() {
        document.getElementById('card1').textContent = activity1Data[currentActivity1Index].text;
    }
    
    function loadActivity2Card() {
        document.getElementById('card2').textContent = activity2Data[currentActivity2Index].text;
    }
    
    function checkActivity1Answer(isStatement) {
        const correctAnswer = activity1Data[currentActivity1Index].isStatement;
        const feedback = document.getElementById('feedback1');
        const nextButton = document.getElementById('next1');
        
        if (isStatement === correctAnswer) {
            if (correctAnswer) {
                feedback.textContent = "Correct! This is a statement because it can be true or false.";
            } else {
                feedback.textContent = "Correct! This is not a statement because it cannot be true or false.";
            }
            feedback.style.color = "green";
        } else {
            if (correctAnswer) {
                feedback.textContent = "Not quite. This is a statement because it can be true or false.";
            } else {
                feedback.textContent = "Not quite. This is not a statement because it cannot be true or false.";
            }
            feedback.style.color = "red";
        }
        
        nextButton.classList.remove('hidden');
    }
    
    function checkActivity2Answer(isTrue) {
        const correctAnswer = activity2Data[currentActivity2Index].isTrue;
        const feedback = document.getElementById('feedback2');
        const nextButton = document.getElementById('next2');
        
        if (isTrue === correctAnswer) {
            feedback.textContent = "Correct!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Not quite. Try again!";
            feedback.style.color = "red";
        }
        
        nextButton.classList.remove('hidden');
    }
    
    function resetActivities() {
        currentActivity1Index = 0;
        currentActivity2Index = 0;
        
        document.getElementById('feedback1').textContent = '';
        document.getElementById('feedback2').textContent = '';
        document.getElementById('feedback3').classList.add('hidden');
        
        document.getElementById('next1').classList.add('hidden');
        document.getElementById('next2').classList.add('hidden');
        document.getElementById('restart').classList.add('hidden');
        
        document.getElementById('true-statement').value = '';
        document.getElementById('false-statement').value = '';
        document.getElementById('submit-statements').classList.remove('hidden');
    }
    
    //------------------ LESSON 2 ------------------//
    
    // Mirror activity
    document.getElementById('start-activity2').addEventListener('click', function() {
        document.getElementById('introduction2').classList.add('hidden');
        document.getElementById('activity21').classList.remove('hidden');
    });
    
    document.getElementById('say-to-mirror').addEventListener('click', function() {
        const userStatement = document.getElementById('user-statement').value.trim();
        
        if (userStatement) {
            const mirrorResponse = document.getElementById('mirror-response');
            // Create negation by adding NOT at the appropriate position
            let negation = '';
            
            // Check if the statement has "is", "are", "can", "will", etc.
            if (userStatement.includes(' is ')) {
                negation = userStatement.replace(' is ', ' is NOT ');
            } else if (userStatement.includes(' are ')) {
                negation = userStatement.replace(' are ', ' are NOT ');
            } else if (userStatement.includes(' can ')) {
                negation = userStatement.replace(' can ', ' can NOT ');
            } else if (userStatement.includes(' will ')) {
                negation = userStatement.replace(' will ', ' will NOT ');
            } else if (userStatement.includes(' has ')) {
                negation = userStatement.replace(' has ', ' does NOT have ');
            } else if (userStatement.includes(' have ')) {
                negation = userStatement.replace(' have ', ' do NOT have ');
            } else {
                // If no auxiliary verb is found, add "do NOT" after the subject
                const words = userStatement.split(' ');
                if (words.length > 1) {
                    words.splice(1, 0, 'do NOT');
                    negation = words.join(' ');
                } else {
                    negation = 'NOT ' + userStatement;
                }
            }
            
            mirrorResponse.textContent = negation;
            mirrorResponse.classList.remove('hidden');
            
            document.getElementById('feedback21').textContent = "The mirror created the negation of your statement!";
            document.getElementById('feedback21').style.color = "green";
            document.getElementById('next21').classList.remove('hidden');
        } else {
            alert("Please enter a statement first!");
        }
    });
    
    document.getElementById('next21').addEventListener('click', function() {
        document.getElementById('activity21').classList.add('hidden');
        document.getElementById('activity22').classList.remove('hidden');
        initializeMatchingGame();
    });
    
    // Matching game data
    const matchingGameData = [
        { statement: "The sun is bright", negation: "The sun is NOT bright" },
        { statement: "Dogs can bark", negation: "Dogs can NOT bark" },
        { statement: "Apples are red", negation: "Apples are NOT red" },
        { statement: "Birds can fly", negation: "Birds can NOT fly" },
        { statement: "Fish live in water", negation: "Fish do NOT live in water" },
        { statement: "Trees have leaves", negation: "Trees do NOT have leaves" }
    ];
    
    let selectedCards = [];
    let matchedPairs = 0;
    
    function initializeMatchingGame() {
        const gameContainer = document.getElementById('matching-cards');
        gameContainer.innerHTML = '';
        
        // Create an array with all statements and negations
        const allCards = [];
        matchingGameData.forEach(pair => {
            allCards.push({ text: pair.statement, pairId: pair.statement });
            allCards.push({ text: pair.negation, pairId: pair.statement });
        });
        
        // Shuffle the cards
        shuffleArray(allCards);
        
        // Create the card elements
        allCards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'flip-card';
            cardElement.dataset.pairId = card.pairId;
            cardElement.dataset.index = index;
            
            cardElement.innerHTML = `
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <p>Logic Card</p>
                    </div>
                    <div class="flip-card-back">
                        <p>${card.text}</p>
                    </div>
                </div>
            `;
            
            cardElement.addEventListener('click', function() {
                handleCardClick(this);
            });
            
            gameContainer.appendChild(cardElement);
        });
        
        // Reset game state
        selectedCards = [];
        matchedPairs = 0;
    }
    
    function handleCardClick(card) {
        // Ignore if the card is already flipped or if two cards are already selected
        if (card.classList.contains('flipped') || selectedCards.length >= 2) {
            return;
        }
        
        // Flip the card
        card.classList.add('flipped');
        selectedCards.push(card);
        
        // Check if two cards are selected
        if (selectedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
    
    function checkMatch() {
        const card1 = selectedCards[0];
        const card2 = selectedCards[1];
        
        if (card1.dataset.pairId === card2.dataset.pairId && card1.dataset.index !== card2.dataset.index) {
            // It's a match
            card1.style.visibility = 'hidden';
            card2.style.visibility = 'hidden';
            matchedPairs++;
            
            // Check if all pairs are matched
            if (matchedPairs === matchingGameData.length) {
                document.getElementById('feedback22').textContent = "Great job! You've matched all the pairs!";
                document.getElementById('feedback22').style.color = "green";
                document.getElementById('next22').classList.remove('hidden');
            }
        } else {
            // Not a match, flip cards back
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }
        
        // Reset selected cards
        selectedCards = [];
    }
    
    document.getElementById('next22').addEventListener('click', function() {
        document.getElementById('activity22').classList.add('hidden');
        document.getElementById('activity23').classList.remove('hidden');
        initializeDrawingActivity();
    });
    
    // Helper function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    // Drawing activity
    const drawingPrompts = [
        { original: "The circle is red", negation: "The circle is NOT red" },
        { original: "The cat is sitting", negation: "The cat is NOT sitting" },
        { original: "The house is big", negation: "The house is NOT big" },
        { original: "The tree has leaves", negation: "The tree does NOT have leaves" },
        { original: "The sun is shining", negation: "The sun is NOT shining" }
    ];
    
    let currentPromptIndex = 0;
    let originalCanvas, negationCanvas, originalCtx, negationCtx;
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    
    function initializeDrawingActivity() {
        originalCanvas = document.getElementById('original-canvas');
        negationCanvas = document.getElementById('negation-canvas');
        originalCtx = originalCanvas.getContext('2d');
        negationCtx = negationCanvas.getContext('2d');
        
        // Set up event listeners for original canvas
        originalCanvas.addEventListener('mousedown', startDrawingOriginal);
        originalCanvas.addEventListener('mousemove', drawOriginal);
        originalCanvas.addEventListener('mouseup', stopDrawing);
        originalCanvas.addEventListener('mouseout', stopDrawing);
        
        // Set up event listeners for negation canvas
        negationCanvas.addEventListener('mousedown', startDrawingNegation);
        negationCanvas.addEventListener('mousemove', drawNegation);
        negationCanvas.addEventListener('mouseup', stopDrawing);
        negationCanvas.addEventListener('mouseout', stopDrawing);
        
        // Set initial prompt
        updateDrawingPrompt();
        
        // Clear canvas button
        document.getElementById('clear-canvas').addEventListener('click', clearCanvases);
        
        // New prompt button
        document.getElementById('new-drawing-prompt').addEventListener('click', function() {
            currentPromptIndex = (currentPromptIndex + 1) % drawingPrompts.length;
            updateDrawingPrompt();
            clearCanvases();
        });
        
        // Complete lesson button
        document.getElementById('complete-lesson2').addEventListener('click', function() {
            document.getElementById('activity23').classList.add('hidden');
            document.getElementById('completion2').classList.remove('hidden');
        });
        
        document.getElementById('restart-final2').addEventListener('click', function() {
            resetLesson2();
            document.getElementById('completion2').classList.add('hidden');
            document.getElementById('introduction2').classList.remove('hidden');
        });
    }
    
    function updateDrawingPrompt() {
        const prompt = drawingPrompts[currentPromptIndex];
        document.getElementById('drawing-prompt').textContent = `Let's draw: "${prompt.original}"`;
        document.getElementById('negation-text').textContent = `"${prompt.negation}"`;
    }
    
    function startDrawingOriginal(e) {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
    
    function drawOriginal(e) {
        if (!isDrawing) return;
        originalCtx.beginPath();
        originalCtx.moveTo(lastX, lastY);
        originalCtx.lineTo(e.offsetX, e.offsetY);
        originalCtx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
    
    function startDrawingNegation(e) {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
    
    function drawNegation(e) {
        if (!isDrawing) return;
        negationCtx.beginPath();
        negationCtx.moveTo(lastX, lastY);
        negationCtx.lineTo(e.offsetX, e.offsetY);
        negationCtx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
    
    function stopDrawing() {
        isDrawing = false;
    }
    
    function clearCanvases() {
        originalCtx.clearRect(0, 0, originalCanvas.width, originalCanvas.height);
        negationCtx.clearRect(0, 0, negationCanvas.width, negationCanvas.height);
    }
    
    function resetLesson2() {
        document.getElementById('user-statement').value = '';
        document.getElementById('mirror-response').classList.add('hidden');
        document.getElementById('feedback21').textContent = '';
        document.getElementById('next21').classList.add('hidden');
        
        document.getElementById('feedback22').textContent = '';
        document.getElementById('next22').classList.add('hidden');
        
        currentPromptIndex = 0;
        updateDrawingPrompt();
        clearCanvases();
    }
    
    //------------------ LESSON 3 ------------------//
    
    // Potion Ingredients Game
    const potionScenarios = [
        { 
            description: "Wiz uses a Sparkling Berry AND a Glowing Leaf.", 
            hasSparklingBerry: true, 
            hasGlowingLeaf: true,
            potionWorks: true 
        },
        { 
            description: "Wiz uses a Sparkling Berry AND a Withered Leaf.", 
            hasSparklingBerry: true, 
            hasGlowingLeaf: false,
            potionWorks: false 
        },
        { 
            description: "Wiz uses a Dull Berry AND a Glowing Leaf.", 
            hasSparklingBerry: false, 
            hasGlowingLeaf: true,
            potionWorks: false 
        },
        { 
            description: "Wiz uses a Dull Berry AND a Withered Leaf.", 
            hasSparklingBerry: false, 
            hasGlowingLeaf: false,
            potionWorks: false 
        }
    ];
    
    let currentPotionIndex = 0;
    let totalCorrect = 0;
    
    // Navigation and activity initialization for Lesson 3
    document.getElementById('start-activity3').addEventListener('click', function() {
        document.getElementById('introduction3').classList.add('hidden');
        document.getElementById('activity31').classList.remove('hidden');
        loadPotionScenario();
    });
    
    // Activity 1: Potion Ingredients Game
    function loadPotionScenario() {
        const scenario = potionScenarios[currentPotionIndex];
        document.getElementById('potion-description').textContent = scenario.description;
    }
    
    document.getElementById('potion-works-btn').addEventListener('click', function() {
        checkPotionAnswer(true);
    });
    
    document.getElementById('potion-fails-btn').addEventListener('click', function() {
        checkPotionAnswer(false);
    });
    
    function checkPotionAnswer(potionWorks) {
        const scenario = potionScenarios[currentPotionIndex];
        const feedback = document.getElementById('feedback31');
        
        if (potionWorks === scenario.potionWorks) {
            if (scenario.potionWorks) {
                feedback.textContent = "Correct! The potion works because Wiz used BOTH a Sparkling Berry AND a Glowing Leaf.";
            } else {
                if (scenario.hasSparklingBerry && !scenario.hasGlowingLeaf) {
                    feedback.textContent = "Correct! The potion fails because even though Wiz used a Sparkling Berry, the leaf wasn't glowing.";
                } else if (!scenario.hasSparklingBerry && scenario.hasGlowingLeaf) {
                    feedback.textContent = "Correct! The potion fails because even though Wiz used a Glowing Leaf, the berry wasn't sparkling.";
                } else {
                    feedback.textContent = "Correct! The potion fails because Wiz used neither a Sparkling Berry NOR a Glowing Leaf.";
                }
            }
            feedback.style.color = "green";
            totalCorrect++;
        } else {
            if (scenario.potionWorks) {
                feedback.textContent = "Not quite. The potion works because Wiz used BOTH a Sparkling Berry AND a Glowing Leaf.";
            } else {
                if (scenario.hasSparklingBerry && !scenario.hasGlowingLeaf) {
                    feedback.textContent = "Not quite. The potion fails because even though Wiz used a Sparkling Berry, the leaf wasn't glowing.";
                } else if (!scenario.hasSparklingBerry && scenario.hasGlowingLeaf) {
                    feedback.textContent = "Not quite. The potion fails because even though Wiz used a Glowing Leaf, the berry wasn't sparkling.";
                } else {
                    feedback.textContent = "Not quite. The potion fails because Wiz used neither a Sparkling Berry NOR a Glowing Leaf.";
                }
            }
            feedback.style.color = "red";
        }
        
        // Move to the next scenario or show the truth table
        currentPotionIndex++;
        if (currentPotionIndex < potionScenarios.length) {
            document.getElementById('next31').classList.remove('hidden');
        } else {
            document.getElementById('truth-table').classList.remove('hidden');
            document.getElementById('next31').classList.remove('hidden');
            document.getElementById('feedback31').textContent += "\n\nYou've completed all the scenarios! Check out the truth table below to see when potions work with AND.";
        }
    }
    
    document.getElementById('next31').addEventListener('click', function() {
        if (currentPotionIndex < potionScenarios.length) {
            document.getElementById('feedback31').textContent = '';
            document.getElementById('next31').classList.add('hidden');
            loadPotionScenario();
        } else {
            document.getElementById('activity31').classList.add('hidden');
            document.getElementById('activity32').classList.remove('hidden');
        }
    });
    
    // Activity 2: "AND" Sentence Builders
    document.getElementById('evaluate-and').addEventListener('click', function() {
        const firstStatementSelect = document.getElementById('first-statement');
        const secondStatementSelect = document.getElementById('second-statement');
        
        const firstStatementValue = firstStatementSelect.value.split(':');
        const secondStatementValue = secondStatementSelect.value.split(':');
        
        const isFirstTrue = firstStatementValue[0] === 'true';
        const isSecondTrue = secondStatementValue[0] === 'true';
        const firstStatement = firstStatementValue[1];
        const secondStatement = secondStatementValue[1];
        
        const compoundStatement = document.getElementById('compound-statement');
        compoundStatement.textContent = `${firstStatement} AND ${secondStatement}`;
        compoundStatement.classList.remove('hidden');
        
        document.getElementById('truth-buttons').classList.remove('hidden');
        
        // Store the correct answer for evaluation
        compoundStatement.dataset.isTrue = (isFirstTrue && isSecondTrue).toString();
    });
    
    document.getElementById('compound-true-btn').addEventListener('click', function() {
        evaluateCompoundStatement(true);
    });
    
    document.getElementById('compound-false-btn').addEventListener('click', function() {
        evaluateCompoundStatement(false);
    });
    
    function evaluateCompoundStatement(userSaysTrue) {
        const compoundStatement = document.getElementById('compound-statement');
        const isActuallyTrue = compoundStatement.dataset.isTrue === 'true';
        const feedback = document.getElementById('feedback32');
        
        if (userSaysTrue === isActuallyTrue) {
            if (isActuallyTrue) {
                feedback.textContent = "Correct! This compound statement is TRUE because BOTH of the individual statements are true.";
            } else {
                feedback.textContent = "Correct! This compound statement is FALSE because at least one of the individual statements is false.";
            }
            feedback.style.color = "green";
        } else {
            if (isActuallyTrue) {
                feedback.textContent = "Not quite. This compound statement is TRUE because BOTH of the individual statements are true.";
            } else {
                feedback.textContent = "Not quite. This compound statement is FALSE because at least one of the individual statements is false.";
            }
            feedback.style.color = "red";
        }
        
        document.getElementById('next32').classList.remove('hidden');
    }
    
    document.getElementById('next32').addEventListener('click', function() {
        document.getElementById('activity32').classList.add('hidden');
        document.getElementById('activity33').classList.remove('hidden');
        initializeVennDiagram();
    });
    
    // Activity 3: Venn Diagram for "AND"
    function initializeVennDiagram() {
        const vennItems = document.querySelectorAll('.venn-item');
        
        vennItems.forEach(item => {
            item.addEventListener('click', function() {
                const isRed = item.dataset.red === 'true';
                const isRound = item.dataset.round === 'true';
                const feedback = document.getElementById('feedback33');
                
                if (isRed && isRound) {
                    feedback.textContent = "This is a red ball, so it belongs in the overlapping section because it is BOTH red AND round.";
                } else if (isRed && !isRound) {
                    feedback.textContent = "This is a red book, so it belongs in the RED circle (but not in the overlapping section) because it is red but NOT round.";
                } else if (!isRed && isRound) {
                    feedback.textContent = "This is a blue ball, so it belongs in the ROUND circle (but not in the overlapping section) because it is round but NOT red.";
                } else {
                    feedback.textContent = "This is a green box, so it belongs OUTSIDE both circles because it is NEITHER red NOR round.";
                }
            });
        });
    }
    
    document.getElementById('complete-lesson3').addEventListener('click', function() {
        document.getElementById('activity33').classList.add('hidden');
        document.getElementById('completion3').classList.remove('hidden');
    });
    
    document.getElementById('restart-final3').addEventListener('click', function() {
        resetLesson3();
        document.getElementById('completion3').classList.add('hidden');
        document.getElementById('introduction3').classList.remove('hidden');
    });
    
    function resetLesson3() {
        currentPotionIndex = 0;
        totalCorrect = 0;
        
        document.getElementById('feedback31').textContent = '';
        document.getElementById('next31').classList.add('hidden');
        document.getElementById('truth-table').classList.add('hidden');
        
        document.getElementById('compound-statement').classList.add('hidden');
        document.getElementById('truth-buttons').classList.add('hidden');
        document.getElementById('feedback32').textContent = '';
        document.getElementById('next32').classList.add('hidden');
        
        document.getElementById('feedback33').textContent = '';
    }
    
    //------------------ LESSON 4 ------------------//
    
    // Garden Gate Activity
    const visitorScenarios = [
        { 
            description: "Alex has a blue feather but no red flower.", 
            hasRedFlower: false, 
            hasBlueFeather: true,
            canEnter: true 
        },
        { 
            description: "A bird has a red flower in its beak but no blue feather.", 
            hasRedFlower: true, 
            hasBlueFeather: false,
            canEnter: true 
        },
        { 
            description: "A squirrel has both a red flower AND a blue feather!", 
            hasRedFlower: true, 
            hasBlueFeather: true,
            canEnter: true 
        },
        { 
            description: "A badger has neither a red flower nor a blue feather.", 
            hasRedFlower: false, 
            hasBlueFeather: false,
            canEnter: false 
        }
    ];
    
    let currentVisitorIndex = 0;
    let correctAnswers = 0;
    
    // Navigation and activity initialization for Lesson 4
    document.getElementById('start-activity4').addEventListener('click', function() {
        document.getElementById('introduction4').classList.add('hidden');
        document.getElementById('activity41').classList.remove('hidden');
        loadVisitorScenario();
    });
    
    // Activity 1: Garden Gate Game
    function loadVisitorScenario() {
        const scenario = visitorScenarios[currentVisitorIndex];
        document.getElementById('visitor-description').textContent = scenario.description;
    }
    
    document.getElementById('can-enter-btn').addEventListener('click', function() {
        checkGardenEntryAnswer(true);
    });
    
    document.getElementById('cannot-enter-btn').addEventListener('click', function() {
        checkGardenEntryAnswer(false);
    });
    
    function checkGardenEntryAnswer(canEnter) {
        const scenario = visitorScenarios[currentVisitorIndex];
        const feedback = document.getElementById('feedback41');
        
        if (canEnter === scenario.canEnter) {
            if (scenario.canEnter) {
                if (scenario.hasRedFlower && scenario.hasBlueFeather) {
                    feedback.textContent = "Correct! They can enter because they have BOTH a red flower AND a blue feather, so the OR condition is satisfied.";
                } else if (scenario.hasRedFlower) {
                    feedback.textContent = "Correct! They can enter because they have a red flower, which satisfies the OR condition.";
                } else {
                    feedback.textContent = "Correct! They can enter because they have a blue feather, which satisfies the OR condition.";
                }
            } else {
                feedback.textContent = "Correct! They cannot enter because they have neither a red flower NOR a blue feather, so the OR condition is not satisfied.";
            }
            feedback.style.color = "green";
            correctAnswers++;
        } else {
            if (scenario.canEnter) {
                if (scenario.hasRedFlower && scenario.hasBlueFeather) {
                    feedback.textContent = "Not quite. They can enter because they have BOTH a red flower AND a blue feather, so the OR condition is satisfied.";
                } else if (scenario.hasRedFlower) {
                    feedback.textContent = "Not quite. They can enter because they have a red flower, which satisfies the OR condition.";
                } else {
                    feedback.textContent = "Not quite. They can enter because they have a blue feather, which satisfies the OR condition.";
                }
            } else {
                feedback.textContent = "Not quite. They cannot enter because they have neither a red flower NOR a blue feather, so the OR condition is not satisfied.";
            }
            feedback.style.color = "red";
        }
        
        // Move to the next scenario or show the truth table
        currentVisitorIndex++;
        if (currentVisitorIndex < visitorScenarios.length) {
            document.getElementById('next41').classList.remove('hidden');
        } else {
            document.getElementById('or-truth-table').classList.remove('hidden');
            document.getElementById('next41').classList.remove('hidden');
            document.getElementById('feedback41').textContent += "\n\nYou've completed all the scenarios! Check out the truth table below to see how OR works.";
        }
    }
    
    document.getElementById('next41').addEventListener('click', function() {
        if (currentVisitorIndex < visitorScenarios.length) {
            document.getElementById('feedback41').textContent = '';
            document.getElementById('next41').classList.add('hidden');
            loadVisitorScenario();
        } else {
            document.getElementById('activity41').classList.add('hidden');
            document.getElementById('activity42').classList.remove('hidden');
        }
    });
    
    // Activity 2: "OR" Sentence Builders
    document.getElementById('evaluate-or').addEventListener('click', function() {
        const firstStatementSelect = document.getElementById('first-statement-or');
        const secondStatementSelect = document.getElementById('second-statement-or');
        
        const firstStatementValue = firstStatementSelect.value.split(':');
        const secondStatementValue = secondStatementSelect.value.split(':');
        
        const isFirstTrue = firstStatementValue[0] === 'true';
        const isSecondTrue = secondStatementValue[0] === 'true';
        const firstStatement = firstStatementValue[1];
        const secondStatement = secondStatementValue[1];
        
        const compoundStatement = document.getElementById('compound-statement-or');
        compoundStatement.textContent = `${firstStatement} OR ${secondStatement}`;
        compoundStatement.classList.remove('hidden');
        
        document.getElementById('truth-buttons-or').classList.remove('hidden');
        
        // Store the correct answer for evaluation
        compoundStatement.dataset.isTrue = (isFirstTrue || isSecondTrue).toString();
    });
    
    document.getElementById('compound-true-btn-or').addEventListener('click', function() {
        evaluateOrCompoundStatement(true);
    });
    
    document.getElementById('compound-false-btn-or').addEventListener('click', function() {
        evaluateOrCompoundStatement(false);
    });
    
    function evaluateOrCompoundStatement(userSaysTrue) {
        const compoundStatement = document.getElementById('compound-statement-or');
        const isActuallyTrue = compoundStatement.dataset.isTrue === 'true';
        const feedback = document.getElementById('feedback42');
        
        if (userSaysTrue === isActuallyTrue) {
            if (isActuallyTrue) {
                feedback.textContent = "Correct! This compound statement is TRUE because at least one of the individual statements is true.";
            } else {
                feedback.textContent = "Correct! This compound statement is FALSE because both of the individual statements are false.";
            }
            feedback.style.color = "green";
        } else {
            if (isActuallyTrue) {
                feedback.textContent = "Not quite. This compound statement is TRUE because at least one of the individual statements is true.";
            } else {
                feedback.textContent = "Not quite. This compound statement is FALSE because both of the individual statements are false.";
            }
            feedback.style.color = "red";
        }
        
        document.getElementById('next42').classList.remove('hidden');
    }
    
    document.getElementById('next42').addEventListener('click', function() {
        document.getElementById('activity42').classList.add('hidden');
        document.getElementById('activity43').classList.remove('hidden');
        initializeVennDiagramOr();
    });
    
    // Activity 3: Venn Diagram for "OR"
    function initializeVennDiagramOr() {
        const vennItems = document.querySelectorAll('.venn-item-or');
        
        vennItems.forEach(item => {
            item.addEventListener('click', function() {
                const isGreen = item.dataset.green === 'true';
                const isSquare = item.dataset.square === 'true';
                const feedback = document.getElementById('feedback43');
                
                if (isGreen || isSquare) {
                    if (isGreen && isSquare) {
                        feedback.textContent = "This is a green square, so it satisfies the 'GREEN OR SQUARE' condition because it is BOTH green AND square.";
                    } else if (isGreen) {
                        feedback.textContent = "This is a green circle, so it satisfies the 'GREEN OR SQUARE' condition because it is green.";
                    } else {
                        feedback.textContent = "This is a red square, so it satisfies the 'GREEN OR SQUARE' condition because it is square.";
                    }
                    feedback.style.color = "green";
                } else {
                    feedback.textContent = "This is a red circle, so it does NOT satisfy the 'GREEN OR SQUARE' condition because it is neither green NOR square.";
                    feedback.style.color = "red";
                }
            });
        });
        
        // Show comparison table after a delay
        setTimeout(function() {
            document.getElementById('compare-and-or').classList.remove('hidden');
        }, 3000);
    }
    
    document.getElementById('complete-lesson4').addEventListener('click', function() {
        document.getElementById('activity43').classList.add('hidden');
        document.getElementById('completion4').classList.remove('hidden');
    });
    
    document.getElementById('restart-final4').addEventListener('click', function() {
        resetLesson4();
        document.getElementById('completion4').classList.add('hidden');
        document.getElementById('introduction4').classList.remove('hidden');
    });
    
    function resetLesson4() {
        currentVisitorIndex = 0;
        correctAnswers = 0;
        
        document.getElementById('feedback41').textContent = '';
        document.getElementById('next41').classList.add('hidden');
        document.getElementById('or-truth-table').classList.add('hidden');
        
        document.getElementById('compound-statement-or').classList.add('hidden');
        document.getElementById('truth-buttons-or').classList.add('hidden');
        document.getElementById('feedback42').textContent = '';
        document.getElementById('next42').classList.add('hidden');
        
        document.getElementById('feedback43').textContent = '';
        document.getElementById('compare-and-or').classList.add('hidden');
    }
    
    //------------------ LESSON 5 ------------------//
    
    // Navigation and activity initialization for Lesson 5
    document.getElementById('start-activity5').addEventListener('click', function() {
        document.getElementById('introduction5').classList.add('hidden');
        document.getElementById('activity51').classList.remove('hidden');
    });
    
    // Activity 1: Wishing Well Role-Play
    document.getElementById('make-wish').addEventListener('click', function() {
        const ifPart = document.getElementById('if-part').value.trim();
        const thenPart = document.getElementById('then-part').value.trim();
        const wellResponse = document.getElementById('well-response');
        const feedback = document.getElementById('feedback51');
        
        if (ifPart === '' || thenPart === '') {
            wellResponse.textContent = "Please fill in both the IF and THEN parts of your wish.";
            return;
        }
        
        // Check if the format is correct (contains "IF" and "THEN")
        if (ifPart && thenPart) {
            // Simple validation - check that both parts are provided
            wellResponse.textContent = `You said: "IF ${ifPart}, THEN ${thenPart}"\n\nThe Wishing Well has granted your wish because you used the correct IF...THEN format!`;
            feedback.textContent = "Great job using the IF...THEN format!";
            feedback.style.color = "green";
            document.getElementById('next51').classList.remove('hidden');
        } else {
            wellResponse.textContent = "Your wish did not follow the IF...THEN format. Please try again!";
            feedback.textContent = "Remember to use the IF...THEN format.";
            feedback.style.color = "red";
        }
    });
    
    document.getElementById('next51').addEventListener('click', function() {
        document.getElementById('activity51').classList.add('hidden');
        document.getElementById('activity52').classList.remove('hidden');
        initializeSentenceCompletion();
    });
    
    // Activity 2: If-Then Sentence Completion
    function initializeSentenceCompletion() {
        // Set up event listeners for check buttons
        const checkButtons = document.querySelectorAll('.check-completion');
        
        checkButtons.forEach(button => {
            button.addEventListener('click', function() {
                const card = this.closest('.sentence-card');
                const ifPrompt = card.querySelector('.if-prompt');
                const thenPrompt = card.querySelector('.then-prompt');
                const ifInput = card.querySelector('.if-input');
                const thenInput = card.querySelector('.then-input');
                const feedbackElement = card.querySelector('.completion-feedback');
                
                let isValid = false;
                let message = "";
                
                // Check if completing IF part or THEN part
                if (ifPrompt && thenInput) {
                    // Completing THEN part
                    const thenValue = thenInput.value.trim();
                    if (thenValue) {
                        isValid = true;
                        message = `Great job! You completed the conditional statement: "IF ${ifPrompt.textContent.replace('...', '')}, THEN ${thenValue}"`;
                    } else {
                        message = "Please fill in the THEN part of the sentence.";
                    }
                } else if (thenPrompt && ifInput) {
                    // Completing IF part
                    const ifValue = ifInput.value.trim();
                    if (ifValue) {
                        isValid = true;
                        message = `Great job! You completed the conditional statement: "IF ${ifValue}, THEN ${thenPrompt.textContent.replace('THEN ', '')}"`;
                    } else {
                        message = "Please fill in the IF part of the sentence.";
                    }
                }
                
                feedbackElement.textContent = message;
                feedbackElement.style.color = isValid ? "green" : "red";
                
                // Check if both sentences have been completed
                const allFeedbacks = document.querySelectorAll('.completion-feedback');
                let allCompleted = true;
                
                allFeedbacks.forEach(feedback => {
                    if (feedback.textContent === "" || feedback.style.color === "red") {
                        allCompleted = false;
                    }
                });
                
                if (allCompleted) {
                    document.getElementById('feedback52').textContent = "Great job completing all the sentences!";
                    document.getElementById('feedback52').style.color = "green";
                    document.getElementById('next52').classList.remove('hidden');
                }
            });
        });
    }
    
    document.getElementById('next52').addEventListener('click', function() {
        document.getElementById('activity52').classList.add('hidden');
        document.getElementById('activity53').classList.remove('hidden');
        initializeDrawingConditionals();
    });
    
    // Activity 3: Drawing Conditional Scenarios
    const conditionalPrompts = [
        "IF a plant gets water, THEN it will grow.",
        "IF a cat sees a mouse, THEN it will chase it.",
        "IF you drop a glass, THEN it might break.",
        "IF the sun is shining, THEN it is daytime.",
        "IF you eat healthy food, THEN you will feel better."
    ];
    
    let currentConditionalIndex = 0;
    let ifCanvas, thenCanvas, ifCtx, thenCtx;
    let isDrawingIf = false;
    let isDrawingThen = false;
    let lastIfX = 0;
    let lastIfY = 0;
    let lastThenX = 0;
    let lastThenY = 0;
    
    function initializeDrawingConditionals() {
        ifCanvas = document.getElementById('if-canvas');
        thenCanvas = document.getElementById('then-canvas');
        ifCtx = ifCanvas.getContext('2d');
        thenCtx = thenCanvas.getContext('2d');
        
        // Set up drawing for IF canvas
        ifCanvas.addEventListener('mousedown', startDrawingIf);
        ifCanvas.addEventListener('mousemove', drawIf);
        ifCanvas.addEventListener('mouseup', stopDrawingIf);
        ifCanvas.addEventListener('mouseout', stopDrawingIf);
        
        // Set up drawing for THEN canvas
        thenCanvas.addEventListener('mousedown', startDrawingThen);
        thenCanvas.addEventListener('mousemove', drawThen);
        thenCanvas.addEventListener('mouseup', stopDrawingThen);
        thenCanvas.addEventListener('mouseout', stopDrawingThen);
        
        // Clear drawings button
        document.getElementById('clear-drawings').addEventListener('click', clearDrawings);
        
        // New prompt button
        document.getElementById('new-drawing-prompt').addEventListener('click', function() {
            currentConditionalIndex = (currentConditionalIndex + 1) % conditionalPrompts.length;
            updateConditionalPrompt();
            clearDrawings();
        });
        
        // Complete lesson button
        document.getElementById('complete-lesson5').addEventListener('click', function() {
            document.getElementById('activity53').classList.add('hidden');
            document.getElementById('completion5').classList.remove('hidden');
        });
        
        // Set initial prompt
        updateConditionalPrompt();
        
        // Reset lesson button
        document.getElementById('restart-final5').addEventListener('click', function() {
            resetLesson5();
            document.getElementById('completion5').classList.add('hidden');
            document.getElementById('introduction5').classList.remove('hidden');
        });
    }
    
    function updateConditionalPrompt() {
        document.getElementById('draw-prompt').textContent = conditionalPrompts[currentConditionalIndex];
    }
    
    function startDrawingIf(e) {
        isDrawingIf = true;
        [lastIfX, lastIfY] = [e.offsetX, e.offsetY];
    }
    
    function drawIf(e) {
        if (!isDrawingIf) return;
        ifCtx.beginPath();
        ifCtx.lineWidth = 2;
        ifCtx.moveTo(lastIfX, lastIfY);
        ifCtx.lineTo(e.offsetX, e.offsetY);
        ifCtx.stroke();
        [lastIfX, lastIfY] = [e.offsetX, e.offsetY];
    }
    
    function stopDrawingIf() {
        isDrawingIf = false;
    }
    
    function startDrawingThen(e) {
        isDrawingThen = true;
        [lastThenX, lastThenY] = [e.offsetX, e.offsetY];
    }
    
    function drawThen(e) {
        if (!isDrawingThen) return;
        thenCtx.beginPath();
        thenCtx.lineWidth = 2;
        thenCtx.moveTo(lastThenX, lastThenY);
        thenCtx.lineTo(e.offsetX, e.offsetY);
        thenCtx.stroke();
        [lastThenX, lastThenY] = [e.offsetX, e.offsetY];
    }
    
    function stopDrawingThen() {
        isDrawingThen = false;
    }
    
    function clearDrawings() {
        ifCtx.clearRect(0, 0, ifCanvas.width, ifCanvas.height);
        thenCtx.clearRect(0, 0, thenCanvas.width, thenCanvas.height);
    }
    
    function resetLesson5() {
        // Reset Activity 1
        document.getElementById('if-part').value = '';
        document.getElementById('then-part').value = '';
        document.getElementById('well-response').textContent = 'Make a wish using the IF...THEN... format!';
        document.getElementById('feedback51').textContent = '';
        document.getElementById('next51').classList.add('hidden');
        
        // Reset Activity 2
        const completionFeedbacks = document.querySelectorAll('.completion-feedback');
        completionFeedbacks.forEach(feedback => {
            feedback.textContent = '';
        });
        
        const ifInputs = document.querySelectorAll('.if-input');
        ifInputs.forEach(input => {
            input.value = '';
        });
        
        const thenInputs = document.querySelectorAll('.then-input');
        thenInputs.forEach(input => {
            input.value = '';
        });
        
        document.getElementById('feedback52').textContent = '';
        document.getElementById('next52').classList.add('hidden');
        
        // Reset Activity 3
        currentConditionalIndex = 0;
        updateConditionalPrompt();
        clearDrawings();
        document.getElementById('feedback53').textContent = '';
    }
    
    //------------------ LESSON 6 ------------------//
    
    // Detective clue scenarios
    const detectiveScenarios = [
        {
            clue: "IF it rained last night, THEN the ground will be wet.",
            evidence: "The ground is wet.",
            conclusions: [
                "It definitely rained last night.",
                "It might have rained last night, but we can't be certain.",
                "It definitely did not rain last night."
            ],
            correctIndex: 1,
            reasoning: "The conditional says 'IF it rained, THEN the ground will be wet.' But this doesn't mean that rain is the ONLY way the ground can get wet. Maybe someone used a hose, or there was morning dew. So while rain is a possible explanation, we can't be certain based just on this evidence."
        },
        {
            clue: "IF the suspect was at the party, THEN they would have cake frosting on their clothes.",
            evidence: "The suspect does not have cake frosting on their clothes.",
            conclusions: [
                "The suspect was definitely at the party.",
                "The suspect might have been at the party, but we can't be certain.",
                "The suspect was definitely not at the party."
            ],
            correctIndex: 2,
            reasoning: "The conditional says 'IF at party, THEN cake frosting.' But we know there's NO cake frosting, which means the 'THEN' part is false. If the 'THEN' part is false, the 'IF' part must also be false. Therefore, the suspect was definitely NOT at the party."
        },
        {
            clue: "IF the dog barked, THEN someone was at the door.",
            evidence: "Someone was at the door.",
            conclusions: [
                "The dog definitely barked.",
                "The dog might have barked, but we can't be certain.",
                "The dog definitely did not bark."
            ],
            correctIndex: 1,
            reasoning: "The conditional says 'IF dog barked, THEN someone at door.' We know someone WAS at the door (the 'THEN' part is true), but this doesn't tell us for sure about the dog. Maybe the dog was sleeping, or maybe the visitor was very quiet. We can't be certain about the 'IF' part just from knowing the 'THEN' part is true."
        },
        {
            clue: "IF the lights are on, THEN someone is home.",
            evidence: "The lights are on.",
            conclusions: [
                "Someone is definitely home.",
                "Someone might be home, but we can't be certain.",
                "No one is definitely home."
            ],
            correctIndex: 0,
            reasoning: "The conditional says 'IF lights on, THEN someone home.' We know the lights ARE on (the 'IF' part is true), which means the 'THEN' part must also be true. Therefore, someone is definitely home."
        }
    ];
    
    // Chain reaction scenarios
    const chainReactionScenarios = [
        {
            conditional: "IF you water a plant, THEN it will grow.",
            ifTrue: "You water the plant.",
            ifFalse: "You do not water the plant."
        },
        {
            conditional: "IF you study for the test, THEN you will do well.",
            ifTrue: "You study for the test.",
            ifFalse: "You do not study for the test."
        },
        {
            conditional: "IF you eat too much candy, THEN you will get a stomachache.",
            ifTrue: "You eat too much candy.",
            ifFalse: "You eat a healthy amount of candy."
        }
    ];
    
    // Breaking the promise scenarios
    const promiseScenarios = [
        {
            conditional: "IF you press the button, THEN the light will turn on.",
            situation: "You press the button, but the light does not turn on.",
            isRespected: false,
            explanation: "The conditional is broken because the 'IF' part is true (you pressed the button), but the 'THEN' part is false (the light did not turn on). When the 'IF' part is true, the 'THEN' part must also be true for the conditional to be respected."
        },
        {
            conditional: "IF it rains, THEN the sidewalk will get wet.",
            situation: "It does not rain, but the sidewalk is wet because someone washed it.",
            isRespected: true,
            explanation: "The conditional is respected because it only makes a promise about what happens when it rains. If it doesn't rain, the conditional doesn't make any promises about the sidewalk being wet or dry. So even though the sidewalk is wet from washing, the conditional is still respected."
        },
        {
            conditional: "IF you eat all your vegetables, THEN you can have dessert.",
            situation: "You eat all your vegetables and get dessert.",
            isRespected: true,
            explanation: "The conditional is respected because both the 'IF' part (you ate all your vegetables) and the 'THEN' part (you got dessert) are true. The promise was kept!"
        },
        {
            conditional: "IF you finish your homework, THEN you can play video games.",
            situation: "You don't finish your homework, but play video games anyway.",
            isRespected: true,
            explanation: "The conditional is respected because it only makes a promise about what happens when you finish your homework. If you don't finish your homework, the conditional doesn't say you can't play video games. It might not be fair, but logically the conditional is still respected."
        },
        {
            conditional: "IF the toy is broken, THEN it will not work.",
            situation: "The toy is broken and it does not work.",
            isRespected: true,
            explanation: "The conditional is respected because both the 'IF' part (the toy is broken) and the 'THEN' part (it does not work) are true. The prediction was accurate!"
        }
    ];
    
    let currentDetectiveIndex = 0;
    let currentChainIndex = 0;
    let currentPromiseIndex = 0;
    
    // Navigation and activity initialization for Lesson 6
    document.getElementById('start-activity6').addEventListener('click', function() {
        document.getElementById('introduction6').classList.add('hidden');
        document.getElementById('activity61').classList.remove('hidden');
        loadDetectiveScenario();
    });
    
    // Activity 1: Detective Clues
    function loadDetectiveScenario() {
        const scenario = detectiveScenarios[currentDetectiveIndex];
        document.getElementById('clue-text').textContent = scenario.clue;
        document.getElementById('evidence-text').textContent = scenario.evidence;
        
        // Set up the conclusion options
        document.getElementById('conclusion1-label').textContent = scenario.conclusions[0];
        document.getElementById('conclusion2-label').textContent = scenario.conclusions[1];
        document.getElementById('conclusion3-label').textContent = scenario.conclusions[2];
        
        // Reset radio buttons
        const radioButtons = document.querySelectorAll('input[name="conclusion"]');
        radioButtons.forEach(radio => {
            radio.checked = false;
        });
        
        // Hide feedback and explanation
        document.getElementById('feedback61').textContent = '';
        document.getElementById('reasoning-explanation').classList.add('hidden');
        document.getElementById('next61').classList.add('hidden');
    }
    
    document.getElementById('check-conclusion').addEventListener('click', function() {
        const selectedConclusion = document.querySelector('input[name="conclusion"]:checked');
        
        if (!selectedConclusion) {
            alert("Please select a conclusion before checking!");
            return;
        }
        
        const scenario = detectiveScenarios[currentDetectiveIndex];
        const selectedIndex = parseInt(selectedConclusion.id.replace('conclusion', '')) - 1;
        const feedback = document.getElementById('feedback61');
        
        if (selectedIndex === scenario.correctIndex) {
            feedback.textContent = "Correct! That's good detective work!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Not quite right. Keep thinking like a detective!";
            feedback.style.color = "red";
        }
        
        // Show the reasoning explanation
        document.getElementById('reasoning-text').textContent = scenario.reasoning;
        document.getElementById('reasoning-explanation').classList.remove('hidden');
        
        // Show next button
        document.getElementById('next61').classList.remove('hidden');
    });
    
    document.getElementById('next61').addEventListener('click', function() {
        currentDetectiveIndex++;
        
        if (currentDetectiveIndex < detectiveScenarios.length) {
            loadDetectiveScenario();
        } else {
            document.getElementById('activity61').classList.add('hidden');
            document.getElementById('activity62').classList.remove('hidden');
            loadChainScenario();
        }
    });
    
    // Activity 2: Conditional Consequences
    function loadChainScenario() {
        const scenario = chainReactionScenarios[currentChainIndex];
        document.getElementById('chain-conditional').textContent = scenario.conditional;
        document.getElementById('if-true-text').textContent = scenario.ifTrue;
        document.getElementById('if-false-text').textContent = scenario.ifFalse;
        
        // Clear textareas
        document.getElementById('consequence1-true').value = '';
        document.getElementById('consequence2-true').value = '';
        document.getElementById('consequence1-false').value = '';
        document.getElementById('consequence2-false').value = '';
        
        // Hide feedback and next button
        document.getElementById('feedback62').textContent = '';
        document.getElementById('next62').classList.add('hidden');
    }
    
    document.getElementById('check-consequences').addEventListener('click', function() {
        const consequence1True = document.getElementById('consequence1-true').value.trim();
        const consequence2True = document.getElementById('consequence2-true').value.trim();
        const consequence1False = document.getElementById('consequence1-false').value.trim();
        const consequence2False = document.getElementById('consequence2-false').value.trim();
        
        if (!consequence1True || !consequence2True || !consequence1False || !consequence2False) {
            alert("Please fill in all four consequence boxes!");
            return;
        }
        
        // Simple validation - just check that they've written something in each box
        document.getElementById('feedback62').textContent = "Great work! You've thought about how the conditional statement leads to different consequences depending on whether the 'IF' part is true or false.";
        document.getElementById('feedback62').style.color = "green";
        document.getElementById('next62').classList.remove('hidden');
    });
    
    document.getElementById('next62').addEventListener('click', function() {
        currentChainIndex++;
        
        if (currentChainIndex < chainReactionScenarios.length) {
            loadChainScenario();
        } else {
            document.getElementById('activity62').classList.add('hidden');
            document.getElementById('activity63').classList.remove('hidden');
            loadPromiseScenario();
        }
    });
    
    // Activity 3: Breaking the Promise
    function loadPromiseScenario() {
        const scenario = promiseScenarios[currentPromiseIndex];
        document.getElementById('promise-text').textContent = scenario.conditional;
        document.getElementById('situation-text').textContent = scenario.situation;
        
        // Hide feedback, explanation, and complete button
        document.getElementById('feedback63').textContent = '';
        document.getElementById('promise-explanation').classList.add('hidden');
        
        // If it's the last scenario, show the complete button
        if (currentPromiseIndex === promiseScenarios.length - 1) {
            document.getElementById('complete-lesson6').classList.remove('hidden');
        } else {
            document.getElementById('complete-lesson6').classList.add('hidden');
        }
    }
    
    document.getElementById('promise-respected-btn').addEventListener('click', function() {
        checkPromiseAnswer(true);
    });
    
    document.getElementById('promise-broken-btn').addEventListener('click', function() {
        checkPromiseAnswer(false);
    });
    
    function checkPromiseAnswer(isRespected) {
        const scenario = promiseScenarios[currentPromiseIndex];
        const feedback = document.getElementById('feedback63');
        
        if (isRespected === scenario.isRespected) {
            feedback.textContent = "Correct! You've understood how conditionals work.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Not quite right. Think about the relationship between the 'IF' and 'THEN' parts.";
            feedback.style.color = "red";
        }
        
        // Show the explanation
        document.getElementById('promise-explanation-text').textContent = scenario.explanation;
        document.getElementById('promise-explanation').classList.remove('hidden');
        
        // Move to the next scenario
        currentPromiseIndex++;
        
        if (currentPromiseIndex < promiseScenarios.length) {
            setTimeout(loadPromiseScenario, 2000);
        } else {
            // If we've reached the end, show the complete button
            document.getElementById('complete-lesson6').classList.remove('hidden');
            currentPromiseIndex = promiseScenarios.length - 1; // Stay on the last scenario
        }
    }
    
    document.getElementById('complete-lesson6').addEventListener('click', function() {
        document.getElementById('activity63').classList.add('hidden');
        document.getElementById('completion6').classList.remove('hidden');
    });
    
    document.getElementById('restart-final6').addEventListener('click', function() {
        resetLesson6();
        document.getElementById('completion6').classList.add('hidden');
        document.getElementById('introduction6').classList.remove('hidden');
    });
    
    document.getElementById('back-to-lesson5').addEventListener('click', function() {
        document.getElementById('lesson6-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.remove('hidden');
        document.getElementById('lesson6-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.add('active');
    });
    
    function resetLesson6() {
        currentDetectiveIndex = 0;
        currentChainIndex = 0;
        currentPromiseIndex = 0;
        
        // Reset Activity 1
        loadDetectiveScenario();
        
        // Reset Activity 2
        document.getElementById('consequence1-true').value = '';
        document.getElementById('consequence2-true').value = '';
        document.getElementById('consequence1-false').value = '';
        document.getElementById('consequence2-false').value = '';
        document.getElementById('feedback62').textContent = '';
        document.getElementById('next62').classList.add('hidden');
        
        // Reset Activity 3
        document.getElementById('feedback63').textContent = '';
        document.getElementById('promise-explanation').classList.add('hidden');
        document.getElementById('complete-lesson6').classList.add('hidden');
    }
    
    // Add to Lesson 6 to navigate to Lesson 7
    document.getElementById('next-to-lesson7').addEventListener('click', function() {
        document.getElementById('lesson6-content').classList.add('hidden');
        document.getElementById('lesson7-content').classList.remove('hidden');
        document.getElementById('lesson6-btn').classList.remove('active');
        document.getElementById('lesson7-btn').classList.add('active');
    });
    
    //------------------ LESSON 7 ------------------//
    
    // Building Arguments scenarios
    const argumentScenarios = [
        {
            premises: [
                "All dogs have fur.",
                "Buddy is a dog.",
                // Optional third premise can be shown or hidden
                "Things with fur are warm in winter."
            ],
            conclusions: [
                "Buddy has fur.",
                "Buddy is a cat.",
                "All dogs are warm in winter."
            ],
            correctIndex: 0,
            explanation: "Since all dogs have fur (premise 1), and Buddy is a dog (premise 2), we can conclude that Buddy has fur. This is a valid deduction based on the categorical premises."
        },
        {
            premises: [
                "If it rains, the ground gets wet.",
                "The ground is wet."
            ],
            conclusions: [
                "It definitely rained.",
                "It might have rained, but we can't be certain.",
                "It definitely did not rain."
            ],
            correctIndex: 1,
            explanation: "The premises tell us that rain causes wet ground, but they don't tell us that rain is the ONLY thing that causes wet ground. Someone might have watered the garden, or there could be another reason for the wet ground. We can't be certain that it rained based only on these premises."
        },
        {
            premises: [
                "If Tom eats candy before dinner, he will get a stomachache.",
                "Tom has a stomachache."
            ],
            conclusions: [
                "Tom definitely ate candy before dinner.",
                "Tom might have eaten candy before dinner, but we can't be certain.",
                "Tom definitely did not eat candy before dinner."
            ],
            correctIndex: 1,
            explanation: "The premises tell us that eating candy before dinner leads to a stomachache, but they don't tell us that candy is the ONLY cause of stomachaches. Tom might have eaten something else that upset his stomach, or he might be sick for another reason. We can't be certain that he ate candy based only on these premises."
        },
        {
            premises: [
                "If a toy is left outside, it gets dirty.",
                "The teddy bear is not dirty."
            ],
            conclusions: [
                "The teddy bear was left outside.",
                "The teddy bear might have been left outside.",
                "The teddy bear was not left outside."
            ],
            correctIndex: 2,
            explanation: "The first premise tells us: IF left outside, THEN gets dirty. The second premise tells us the teddy bear is NOT dirty. Using the logical rule of modus tollens (denying the consequent), we can conclude that the teddy bear was NOT left outside. If it had been left outside, it would be dirty according to our premises."
        }
    ];
    
    // Story argument scenarios
    const storyScenarios = [
        {
            story: "The cat was meowing loudly. Cats meow when they are hungry. Therefore, the cat was probably hungry.",
            sentences: [
                "The cat was meowing loudly.",
                "Cats meow when they are hungry.",
                "The cat was probably hungry."
            ],
            premises: [0, 1],
            conclusion: 2
        },
        {
            story: "The ground was wet this morning. It must have rained last night because the ground gets wet when it rains.",
            sentences: [
                "The ground was wet this morning.",
                "The ground gets wet when it rains.",
                "It must have rained last night."
            ],
            premises: [0, 1],
            conclusion: 2
        },
        {
            story: "The light was on in the room. Someone must have been in the room because someone needs to turn the light on for it to be on.",
            sentences: [
                "The light was on in the room.",
                "Someone needs to turn the light on for it to be on.",
                "Someone must have been in the room."
            ],
            premises: [0, 1],
            conclusion: 2
        }
    ];
    
    // Mystery scenarios suggestions
    const mysterySuggestions = {
        "toy": {
            title: "The Case of the Missing Toy",
            premise1: "The toy was last seen in the playroom.",
            premise2: "Only the dog and the baby were in the playroom today."
        },
        "vase": {
            title: "The Case of the Broken Vase",
            premise1: "The vase was fine this morning.",
            premise2: "The cat was playing in the room where the vase was."
        },
        "juice": {
            title: "The Case of the Spilled Juice",
            premise1: "The juice was on the table before lunch.",
            premise2: "The little brother was reaching for cookies on the table."
        }
    };
    
    let currentArgumentIndex = 0;
    let currentStoryIndex = 0;
    let draggedElement = null;
    
    // Initialize drag-and-drop functionality
    function initializeDragAndDrop() {
        // Initialize draggable elements
        const sentences = document.querySelectorAll('.sentence');
        sentences.forEach(sentence => {
            sentence.addEventListener('dragstart', handleDragStart);
            sentence.addEventListener('dragend', handleDragEnd);
        });
        
        // Initialize drop targets
        const premisesDrop = document.getElementById('premises-drop');
        const conclusionDrop = document.getElementById('conclusion-drop');
        
        [premisesDrop, conclusionDrop].forEach(dropzone => {
            dropzone.addEventListener('dragover', handleDragOver);
            dropzone.addEventListener('dragenter', handleDragEnter);
            dropzone.addEventListener('dragleave', handleDragLeave);
            dropzone.addEventListener('drop', handleDrop);
        });
    }
    
    // Drag and drop handlers
    function handleDragStart(e) {
        draggedElement = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
        this.style.opacity = '0.4';
    }
    
    function handleDragEnd(e) {
        this.style.opacity = '1';
    }
    
    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    }
    
    function handleDragEnter(e) {
        this.classList.add('dragover');
    }
    
    function handleDragLeave(e) {
        this.classList.remove('dragover');
    }
    
    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        
        if (draggedElement !== null) {
            // Create a clone of the dragged element
            const clone = draggedElement.cloneNode(true);
            clone.classList.add('dropped');
            clone.addEventListener('click', function() {
                this.parentNode.removeChild(this);
                draggedElement.style.display = 'block';
            });
            
            // Remove the original from the source container
            draggedElement.style.display = 'none';
            
            // Add the clone to the target container
            this.appendChild(clone);
            
            // Remove the highlight
            this.classList.remove('dragover');
        }
        
        return false;
    }
    
    // Navigation and activity initialization for Lesson 7
    document.getElementById('start-activity7').addEventListener('click', function() {
        document.getElementById('introduction7').classList.add('hidden');
        document.getElementById('activity71').classList.remove('hidden');
        loadArgumentScenario();
    });
    
    // Activity 1: Building Arguments
    function loadArgumentScenario() {
        const scenario = argumentScenarios[currentArgumentIndex];
        
        // Set premises
        document.getElementById('premise1').textContent = scenario.premises[0];
        document.getElementById('premise2').textContent = scenario.premises[1];
        
        // Handle optional third premise
        const premise3 = document.getElementById('premise3');
        if (scenario.premises.length > 2) {
            premise3.textContent = scenario.premises[2];
            premise3.style.display = 'block';
        } else {
            premise3.style.display = 'none';
        }
        
        // Set conclusion options
        document.getElementById('conclusion-label1').textContent = scenario.conclusions[0];
        document.getElementById('conclusion-label2').textContent = scenario.conclusions[1];
        document.getElementById('conclusion-label3').textContent = scenario.conclusions[2];
        
        // Reset radio buttons
        const radioButtons = document.querySelectorAll('input[name="argument-conclusion"]');
        radioButtons.forEach(radio => {
            radio.checked = false;
        });
        
        // Hide feedback and explanation
        document.getElementById('feedback71').textContent = '';
        document.getElementById('argument-explanation').classList.add('hidden');
        document.getElementById('next71').classList.add('hidden');
    }
    
    document.getElementById('check-argument').addEventListener('click', function() {
        const selectedConclusion = document.querySelector('input[name="argument-conclusion"]:checked');
        
        if (!selectedConclusion) {
            alert("Please select a conclusion before checking!");
            return;
        }
        
        const scenario = argumentScenarios[currentArgumentIndex];
        const selectedIndex = parseInt(selectedConclusion.id.replace('conclusion-option', '')) - 1;
        const feedback = document.getElementById('feedback71');
        
        if (selectedIndex === scenario.correctIndex) {
            feedback.textContent = "Correct! That's excellent logical reasoning!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Not quite right. Think carefully about what logically follows from the premises.";
            feedback.style.color = "red";
        }
        
        // Show the explanation
        document.getElementById('argument-explanation-text').textContent = scenario.explanation;
        document.getElementById('argument-explanation').classList.remove('hidden');
        
        // Show next button
        document.getElementById('next71').classList.remove('hidden');
    });
    
    document.getElementById('next71').addEventListener('click', function() {
        currentArgumentIndex++;
        
        if (currentArgumentIndex < argumentScenarios.length) {
            loadArgumentScenario();
        } else {
            document.getElementById('activity71').classList.add('hidden');
            document.getElementById('activity72').classList.remove('hidden');
            loadStoryScenario();
            initializeDragAndDrop();
        }
    });
    
    // Activity 2: Story Argument Identification
    function loadStoryScenario() {
        const scenario = storyScenarios[currentStoryIndex];
        
        // Set the story
        document.getElementById('story-text').textContent = scenario.story;
        
        // Set the sentences
        document.getElementById('sentence1').textContent = scenario.sentences[0];
        document.getElementById('sentence2').textContent = scenario.sentences[1];
        document.getElementById('sentence3').textContent = scenario.sentences[2];
        
        // Reset the drag and drop areas
        document.getElementById('premises-drop').innerHTML = '';
        document.getElementById('conclusion-drop').innerHTML = '';
        
        // Make sure all sentences are visible
        const sentences = document.querySelectorAll('.sentence');
        sentences.forEach(sentence => {
            sentence.style.display = 'block';
            sentence.classList.remove('dropped');
        });
        
        // Hide feedback and next button
        document.getElementById('feedback72').textContent = '';
        document.getElementById('next72').classList.add('hidden');
    }
    
    document.getElementById('check-identification').addEventListener('click', function() {
        const currentScenario = storyScenarios[currentStoryIndex];
        const premisesDrop = document.getElementById('premises-drop');
        const conclusionDrop = document.getElementById('conclusion-drop');
        const feedback = document.getElementById('feedback72');
        
        // Get the ids of the sentences in the premises and conclusion areas
        const premisesElements = premisesDrop.querySelectorAll('.sentence');
        const conclusionElements = conclusionDrop.querySelectorAll('.sentence');
        
        // Check if all sentences have been placed
        if (premisesElements.length < 2 || conclusionElements.length !== 1) {
            alert("Please place all sentences: 2 premises and 1 conclusion!");
            return;
        }
        
        // Get the indices from the element ids
        const premisesIndices = Array.from(premisesElements).map(el => parseInt(el.id.replace('sentence', '')) - 1);
        const conclusionIndex = parseInt(conclusionElements[0].id.replace('sentence', '')) - 1;
        
        // Check if the premises and conclusion match the correct ones
        const correctPremises = currentScenario.premises;
        const correctConclusion = currentScenario.conclusion;
        
        const premisesCorrect = premisesIndices.length === correctPremises.length && 
                               premisesIndices.every(index => correctPremises.includes(index));
        const conclusionCorrect = conclusionIndex === correctConclusion;
        
        if (premisesCorrect && conclusionCorrect) {
            feedback.textContent = "Correct! You've correctly identified the premises and conclusion in this argument!";
            feedback.style.color = "green";
            document.getElementById('next72').classList.remove('hidden');
        } else if (premisesCorrect) {
            feedback.textContent = "Almost! You've identified the premises correctly, but the conclusion is incorrect.";
            feedback.style.color = "orange";
        } else if (conclusionCorrect) {
            feedback.textContent = "Almost! You've identified the conclusion correctly, but the premises are incorrect.";
            feedback.style.color = "orange";
        } else {
            feedback.textContent = "Not quite right. Try again to identify which sentences are the premises and which is the conclusion.";
            feedback.style.color = "red";
        }
    });
    
    document.getElementById('next72').addEventListener('click', function() {
        currentStoryIndex++;
        
        if (currentStoryIndex < storyScenarios.length) {
            loadStoryScenario();
        } else {
            document.getElementById('activity72').classList.add('hidden');
            document.getElementById('activity73').classList.remove('hidden');
            initializeMysteryActivity();
        }
    });
    
    // Activity 3: Create Your Own Mystery
    function initializeMysteryActivity() {
        // Handle scenario selection changes
        document.getElementById('mystery-scenario').addEventListener('change', function() {
            const selectedValue = this.value;
            const customMysteryDiv = document.getElementById('custom-mystery');
            
            if (selectedValue === 'custom') {
                customMysteryDiv.classList.remove('hidden');
            } else {
                customMysteryDiv.classList.add('hidden');
                
                // Pre-fill with suggestions if a preset scenario is selected
                if (mysterySuggestions[selectedValue]) {
                    document.getElementById('premise-input1').value = mysterySuggestions[selectedValue].premise1;
                    document.getElementById('premise-input2').value = mysterySuggestions[selectedValue].premise2;
                }
            }
        });
        
        // Initialize with the first scenario
        const firstScenario = document.getElementById('mystery-scenario').value;
        if (mysterySuggestions[firstScenario]) {
            document.getElementById('premise-input1').value = mysterySuggestions[firstScenario].premise1;
            document.getElementById('premise-input2').value = mysterySuggestions[firstScenario].premise2;
        }
    }
    
    document.getElementById('check-mystery').addEventListener('click', function() {
        const mysteryScenario = document.getElementById('mystery-scenario').value;
        const premise1 = document.getElementById('premise-input1').value.trim();
        const premise2 = document.getElementById('premise-input2').value.trim();
        const conclusion = document.getElementById('conclusion-input').value.trim();
        
        // Validation
        if (!premise1 || !premise2 || !conclusion) {
            alert("Please fill in both premises and a conclusion!");
            return;
        }
        
        // Get the mystery title
        let mysteryTitle;
        if (mysteryScenario === 'custom') {
            mysteryTitle = document.getElementById('custom-mystery-input').value.trim();
            if (!mysteryTitle) {
                alert("Please provide a title for your custom mystery!");
                return;
            }
        } else {
            mysteryTitle = mysterySuggestions[mysteryScenario].title;
        }
        
        // Display the mystery
        document.getElementById('mystery-title').textContent = mysteryTitle;
        document.getElementById('mystery-premise1').textContent = premise1;
        document.getElementById('mystery-premise2').textContent = premise2;
        document.getElementById('mystery-conclusion').textContent = conclusion;
        
        // Give some positive feedback
        document.getElementById('mystery-evaluation').textContent = `Great job constructing a logical argument to solve this mystery! Your premises provide evidence that supports your conclusion.`;
        
        // Show the mystery feedback and complete button
        document.getElementById('mystery-feedback').classList.remove('hidden');
        document.getElementById('feedback73').textContent = "You've created a logical argument for your mystery. Well done!";
        document.getElementById('feedback73').style.color = "green";
        document.getElementById('complete-lesson7').classList.remove('hidden');
    });
    
    document.getElementById('complete-lesson7').addEventListener('click', function() {
        document.getElementById('activity73').classList.add('hidden');
        document.getElementById('completion7').classList.remove('hidden');
    });
    
    document.getElementById('restart-final7').addEventListener('click', function() {
        resetLesson7();
        document.getElementById('completion7').classList.add('hidden');
        document.getElementById('introduction7').classList.remove('hidden');
    });
    
    document.getElementById('back-to-lesson6').addEventListener('click', function() {
        document.getElementById('lesson7-content').classList.add('hidden');
        document.getElementById('lesson6-content').classList.remove('hidden');
        document.getElementById('lesson7-btn').classList.remove('active');
        document.getElementById('lesson6-btn').classList.add('active');
    });
    
    function resetLesson7() {
        currentArgumentIndex = 0;
        currentStoryIndex = 0;
        
        // Reset Activity 1
        loadArgumentScenario();
        
        // Reset Activity 2
        if (document.getElementById('activity72').classList.contains('hidden')) {
            // If the activity hasn't been loaded yet, we don't need to reset it
        } else {
            loadStoryScenario();
        }
        
        // Reset Activity 3
        document.getElementById('premise-input1').value = '';
        document.getElementById('premise-input2').value = '';
        document.getElementById('conclusion-input').value = '';
        document.getElementById('mystery-feedback').classList.add('hidden');
        document.getElementById('feedback73').textContent = '';
        document.getElementById('complete-lesson7').classList.add('hidden');
        
        // Reset custom mystery input
        document.getElementById('custom-mystery').classList.add('hidden');
        document.getElementById('custom-mystery-input').value = '';
        
        // Reset to first mystery scenario
        document.getElementById('mystery-scenario').selectedIndex = 0;
        const firstScenario = document.getElementById('mystery-scenario').value;
        if (mysterySuggestions[firstScenario]) {
            document.getElementById('premise-input1').value = mysterySuggestions[firstScenario].premise1;
            document.getElementById('premise-input2').value = mysterySuggestions[firstScenario].premise2;
        }
    }
    
    //------------------ LESSON 8 ------------------//
    
    // Argument Sorting scenarios (Activity 1)
    const sortingScenarios = [
        {
            premises: [
                "All birds can fly.",
                "Tweety is a bird."
            ],
            conclusion: "Therefore, Tweety can fly.",
            isValid: true,
            explanation: "This is a valid argument. If all birds can fly, and Tweety is a bird, then Tweety must be able to fly. The structure guarantees that if the premises are true, the conclusion must be true."
        },
        {
            premises: [
                "All cats have fur.",
                "My dog has fur."
            ],
            conclusion: "Therefore, my dog is a cat.",
            isValid: false,
            explanation: "This is an invalid argument. Just because all cats have fur doesn't mean that everything with fur is a cat. Many other animals also have fur, so the conclusion doesn't necessarily follow from the premises."
        },
        {
            premises: [
                "If it rains, the ground gets wet.",
                "It rained."
            ],
            conclusion: "Therefore, the ground is wet.",
            isValid: true,
            explanation: "This is a valid argument using modus ponens (affirming the antecedent). If rain causes wet ground, and it rained, then the ground must be wet."
        },
        {
            premises: [
                "If it rains, the ground gets wet.",
                "The ground is wet."
            ],
            conclusion: "Therefore, it rained.",
            isValid: false,
            explanation: "This is an invalid argument committing the fallacy of affirming the consequent. Just because rain causes wet ground doesn't mean wet ground is only caused by rain. Someone might have watered the lawn, or there could be another reason for the wet ground."
        },
        {
            premises: [
                "All squares have four sides.",
                "This shape has four sides."
            ],
            conclusion: "Therefore, this shape is a square.",
            isValid: false,
            explanation: "This is an invalid argument. While all squares have four sides, not all four-sided shapes are squares. Rectangles, rhombuses, and other quadrilaterals also have four sides."
        },
        {
            premises: [
                "All squares have four sides.",
                "This shape has five sides."
            ],
            conclusion: "Therefore, this shape is not a square.",
            isValid: true,
            explanation: "This is a valid argument. If all squares have exactly four sides, and this shape has five sides, then it cannot be a square. This uses the logical rule of modus tollens (denying the consequent)."
        }
    ];
    
    // Argument Completion scenarios (Activity 2)
    const completionScenarios = [
        {
            premises: [
                "All elephants are big.",
                "Dumbo is an elephant."
            ],
            conclusions: [
                "Dumbo is big.",
                "Dumbo might be big, but we can't be certain.",
                "Dumbo is not big."
            ],
            correctIndex: 0,
            explanation: "This conclusion must be true because all elephants are big (premise 1), and Dumbo is an elephant (premise 2). Therefore, Dumbo must be big. This is a valid deductive argument."
        },
        {
            premises: [
                "If it's sunny, we'll go to the park.",
                "It's sunny."
            ],
            conclusions: [
                "We might go to the park, but we can't be certain.",
                "We'll go to the park.",
                "We won't go to the park."
            ],
            correctIndex: 1,
            explanation: "This conclusion must be true based on modus ponens (affirming the antecedent). If sunny weather means we go to the park (premise 1), and it is sunny (premise 2), then we must go to the park."
        },
        {
            premises: [
                "All triangles have three sides.",
                "This shape is a triangle."
            ],
            conclusions: [
                "This shape has four sides.",
                "This shape might have three sides, but we can't be certain.",
                "This shape has three sides."
            ],
            correctIndex: 2,
            explanation: "This conclusion must be true because all triangles have three sides (premise 1), and this shape is a triangle (premise 2). Therefore, this shape must have three sides."
        },
        {
            premises: [
                "If it rains, the picnic will be canceled.",
                "It is not raining."
            ],
            conclusions: [
                "The picnic will definitely be canceled.",
                "The picnic will definitely not be canceled.",
                "We can't determine whether the picnic will be canceled based only on these premises."
            ],
            correctIndex: 2,
            explanation: "We can't determine if the picnic will be canceled. The first premise tells us that rain leads to cancellation, but it doesn't tell us that rain is the ONLY reason for cancellation. There could be other reasons to cancel the picnic even if it's not raining."
        }
    ];
    
    // Invalid Argument Flaw scenarios (Activity 3)
    const flawScenarios = [
        {
            premises: [
                "If it's raining, the streets are wet.",
                "The streets are wet."
            ],
            conclusion: "Therefore, it's raining.",
            flawOptions: [
                "The premises contradict each other.",
                "The streets could be wet for other reasons (sprinklers, water truck, etc.).",
                "The conclusion assumes facts not present in the premises."
            ],
            correctIndex: 1,
            explanation: "This argument commits the fallacy of affirming the consequent. While rain causes wet streets, wet streets can have other causes. The streets could be wet because of sprinklers, a water truck, or other reasons."
        },
        {
            premises: [
                "All students in Mrs. Smith's class passed the test.",
                "Jamie passed the test."
            ],
            conclusion: "Therefore, Jamie is in Mrs. Smith's class.",
            flawOptions: [
                "Jamie could be in a different class and still have passed the test.",
                "We don't know if the test was difficult or easy.",
                "The argument assumes all students take tests."
            ],
            correctIndex: 0,
            explanation: "This argument commits the fallacy of affirming the consequent. While all students in Mrs. Smith's class passed the test, students from other classes could have passed it too. The fact that Jamie passed doesn't necessarily mean Jamie is in Mrs. Smith's class."
        },
        {
            premises: [
                "If I study hard, I will ace the exam.",
                "I didn't ace the exam."
            ],
            conclusion: "Therefore, I didn't study hard.",
            flawOptions: [
                "The conclusion contradicts the premises.",
                "Studying hard doesn't guarantee acing the exam.",
                "This is actually a valid argument using modus tollens."
            ],
            correctIndex: 2,
            explanation: "This is actually a valid argument using modus tollens (denying the consequent). If P implies Q, and Q is false, then P must be false. In this case, if studying hard leads to acing the exam, and I didn't ace the exam, then I must not have studied hard."
        },
        {
            premises: [
                "All dogs are mammals.",
                "All mammals have fur."
            ],
            conclusion: "Therefore, all cats are mammals.",
            flawOptions: [
                "The conclusion involves cats, which aren't mentioned in the premises.",
                "Not all mammals have fur (e.g., dolphins, whales).",
                "The argument assumes all dogs have fur."
            ],
            correctIndex: 0,
            explanation: "This argument introduces a completely new term (cats) in the conclusion that doesn't appear in the premises. We can't draw conclusions about cats based solely on premises about dogs and mammals."
        }
    ];
    
    let currentSortingIndex = 0;
    let currentCompletionIndex = 0;
    let currentFlawIndex = 0;
    
    // Navigation and activity initialization for Lesson 8
    document.getElementById('lesson8-btn').addEventListener('click', function() {
        // Hide all lesson contents
        const lessonContents = document.querySelectorAll('[id$="-content"]');
        lessonContents.forEach(content => {
            content.classList.add('hidden');
        });
        
        // Deactivate all buttons
        const lessonButtons = document.querySelectorAll('.lesson-btn');
        lessonButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Show Lesson 8 content and activate button
        document.getElementById('lesson8-content').classList.remove('hidden');
        this.classList.add('active');
    });
    
    document.getElementById('start-activity8').addEventListener('click', function() {
        document.getElementById('introduction8').classList.add('hidden');
        document.getElementById('activity81').classList.remove('hidden');
        loadSortingScenario();
    });
    
    // Activity 1: Argument Sorting
    function loadSortingScenario() {
        const scenario = sortingScenarios[currentSortingIndex];
        
        // Set premises and conclusion
        document.getElementById('sorting-premise1').textContent = scenario.premises[0];
        document.getElementById('sorting-premise2').textContent = scenario.premises[1];
        document.getElementById('sorting-conclusion').textContent = scenario.conclusion;
        
        // Hide feedback and explanation
        document.getElementById('feedback81').textContent = '';
        document.getElementById('explanation81').classList.add('hidden');
        document.getElementById('next81').classList.add('hidden');
    }
    
    document.getElementById('valid-btn').addEventListener('click', function() {
        checkSortingAnswer(true);
    });
    
    document.getElementById('invalid-btn').addEventListener('click', function() {
        checkSortingAnswer(false);
    });
    
    function checkSortingAnswer(isValidAnswer) {
        const scenario = sortingScenarios[currentSortingIndex];
        const feedback = document.getElementById('feedback81');
        
        if (isValidAnswer === scenario.isValid) {
            feedback.textContent = "Correct! You've correctly identified whether this argument is valid or invalid.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Not quite right. Think about whether the conclusion necessarily follows from the premises.";
            feedback.style.color = "red";
        }
        
        // Show the explanation
        document.getElementById('explanation-text81').textContent = scenario.explanation;
        document.getElementById('explanation81').classList.remove('hidden');
        
        // Show next button
        document.getElementById('next81').classList.remove('hidden');
    }
    
    document.getElementById('next81').addEventListener('click', function() {
        currentSortingIndex++;
        
        if (currentSortingIndex < sortingScenarios.length) {
            loadSortingScenario();
        } else {
            document.getElementById('activity81').classList.add('hidden');
            document.getElementById('activity82').classList.remove('hidden');
            loadCompletionScenario();
        }
    });
    
    // Activity 2: Argument Completion
    function loadCompletionScenario() {
        const scenario = completionScenarios[currentCompletionIndex];
        
        // Set premises
        document.getElementById('completion-premise1').textContent = scenario.premises[0];
        document.getElementById('completion-premise2').textContent = scenario.premises[1];
        
        // Set conclusion options
        document.getElementById('conclusion-label1').textContent = scenario.conclusions[0];
        document.getElementById('conclusion-label2').textContent = scenario.conclusions[1];
        document.getElementById('conclusion-label3').textContent = scenario.conclusions[2];
        
        // Reset radio buttons
        const radioButtons = document.querySelectorAll('input[name="completion-conclusion"]');
        radioButtons.forEach(radio => {
            radio.checked = false;
        });
        
        // Hide feedback and explanation
        document.getElementById('feedback82').textContent = '';
        document.getElementById('completion-explanation').classList.add('hidden');
        document.getElementById('next82').classList.add('hidden');
    }
    
    document.getElementById('check-completion').addEventListener('click', function() {
        const selectedConclusion = document.querySelector('input[name="completion-conclusion"]:checked');
        
        if (!selectedConclusion) {
            alert("Please select a conclusion before checking!");
            return;
        }
        
        const scenario = completionScenarios[currentCompletionIndex];
        const selectedIndex = parseInt(selectedConclusion.id.replace('conclusion-option', '')) - 1;
        const feedback = document.getElementById('feedback82');
        
        if (selectedIndex === scenario.correctIndex) {
            feedback.textContent = "Correct! That's the right conclusion for this argument.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Not quite right. Think carefully about what must be true given the premises.";
            feedback.style.color = "red";
        }
        
        // Show the explanation
        document.getElementById('explanation-text82').textContent = scenario.explanation;
        document.getElementById('completion-explanation').classList.remove('hidden');
        
        // Show next button
        document.getElementById('next82').classList.remove('hidden');
    });
    
    document.getElementById('next82').addEventListener('click', function() {
        currentCompletionIndex++;
        
        if (currentCompletionIndex < completionScenarios.length) {
            loadCompletionScenario();
        } else {
            document.getElementById('activity82').classList.add('hidden');
            document.getElementById('activity83').classList.remove('hidden');
            loadFlawScenario();
        }
    });
    
    // Activity 3: Spotting the Flaw
    function loadFlawScenario() {
        const scenario = flawScenarios[currentFlawIndex];
        
        // Set premises and conclusion
        document.getElementById('flaw-premise1').textContent = scenario.premises[0];
        document.getElementById('flaw-premise2').textContent = scenario.premises[1];
        document.getElementById('flaw-conclusion').textContent = scenario.conclusion;
        
        // Set flaw options
        document.getElementById('flaw-label1').textContent = scenario.flawOptions[0];
        document.getElementById('flaw-label2').textContent = scenario.flawOptions[1];
        document.getElementById('flaw-label3').textContent = scenario.flawOptions[2];
        
        // Reset radio buttons
        const radioButtons = document.querySelectorAll('input[name="flaw-reason"]');
        radioButtons.forEach(radio => {
            radio.checked = false;
        });
        
        // Hide feedback and explanation
        document.getElementById('feedback83').textContent = '';
        document.getElementById('flaw-explanation').classList.add('hidden');
        document.getElementById('next83').classList.add('hidden');
    }
    
    document.getElementById('check-flaw').addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="flaw-reason"]:checked');
        
        if (!selectedOption) {
            alert("Please select an option before checking!");
            return;
        }
        
        const scenario = flawScenarios[currentFlawIndex];
        const selectedIndex = parseInt(selectedOption.id.replace('flaw-option', '')) - 1;
        const feedback = document.getElementById('feedback83');
        
        if (selectedIndex === scenario.correctIndex) {
            feedback.textContent = "Correct! You've correctly identified the flaw in this argument.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Not quite right. Think carefully about why the conclusion doesn't necessarily follow from the premises.";
            feedback.style.color = "red";
        }
        
        // Show the explanation
        document.getElementById('explanation-text83').textContent = scenario.explanation;
        document.getElementById('flaw-explanation').classList.remove('hidden');
        
        // Show next button
        document.getElementById('next83').classList.remove('hidden');
    });
    
    document.getElementById('next83').addEventListener('click', function() {
        currentFlawIndex++;
        
        if (currentFlawIndex < flawScenarios.length) {
            loadFlawScenario();
        } else {
            document.getElementById('activity83').classList.add('hidden');
            document.getElementById('completion8').classList.remove('hidden');
        }
    });
    
    document.getElementById('restart-final8').addEventListener('click', function() {
        resetLesson8();
        document.getElementById('completion8').classList.add('hidden');
        document.getElementById('introduction8').classList.remove('hidden');
    });
    
    document.getElementById('back-to-lesson7').addEventListener('click', function() {
        document.getElementById('lesson8-content').classList.add('hidden');
        document.getElementById('lesson7-content').classList.remove('hidden');
        document.getElementById('lesson8-btn').classList.remove('active');
        document.getElementById('lesson7-btn').classList.add('active');
    });
    
    function resetLesson8() {
        currentSortingIndex = 0;
        currentCompletionIndex = 0;
        currentFlawIndex = 0;
        
        // Hide all activities
        document.querySelectorAll('#activity81, #activity82, #activity83, #completion8').forEach(el => {
            el.classList.add('hidden');
        });
        
        // Reset Activity 1, 2, and 3
        document.getElementById('feedback81').textContent = '';
        document.getElementById('explanation81').classList.add('hidden');
        document.getElementById('next81').classList.add('hidden');
        
        document.getElementById('feedback82').textContent = '';
        document.getElementById('completion-explanation').classList.add('hidden');
        document.getElementById('next82').classList.add('hidden');
        
        document.getElementById('feedback83').textContent = '';
        document.getElementById('flaw-explanation').classList.add('hidden');
        document.getElementById('next83').classList.add('hidden');
    }
    
    //------------------ LESSON 9 ------------------//
    
    // Fallacy Identification scenarios (Activity 1)
    const fallacyStories = [
        {
            story: "I saw a black cat cross my path, and then I tripped. Therefore, black cats are bad luck.",
            type: "hasty",
            explanation: "This is a hasty generalization. One experience with a black cat doesn't prove that black cats always bring bad luck. There could be many other reasons the person tripped that have nothing to do with the cat."
        },
        {
            story: "You should give me an A on this paper because I worked really hard on it, and I'll be so disappointed if I get a bad grade.",
            type: "emotion",
            explanation: "This is an appeal to emotion. The argument tries to use feelings (disappointment) instead of the quality of the paper to justify getting an A grade."
        },
        {
            story: "My grandpa smoked every day and lived to be 100. Therefore, smoking isn't bad for you.",
            type: "hasty",
            explanation: "This is a hasty generalization. One example of someone who smoked and lived a long life doesn't prove that smoking is safe. Many factors affect how long a person lives."
        },
        {
            story: "You should let me stay up late because all my friends get to, and I'll be really embarrassed if I have to go to bed earlier.",
            type: "emotion",
            explanation: "This is an appeal to emotion. The argument tries to use feelings (embarrassment) instead of logical reasons to justify staying up late."
        },
        {
            story: "All squares have four equal sides. This shape has four equal sides. Therefore, this shape is a square.",
            type: "none",
            explanation: "This is not a fallacy! This is actually a valid argument, though it's missing that a square also needs four right angles. With that additional premise, it would be completely valid."
        },
        {
            story: "If it rains, the grass gets wet. The grass is wet. It must have rained recently.",
            type: "hasty",
            explanation: "This is a logical fallacy called 'affirming the consequent'. Just because rain causes wet grass doesn't mean wet grass is always caused by rain. Someone might have watered the lawn, or there could be morning dew."
        }
    ];
    
    // Fallacy types and descriptions for Activity 2
    const fallacyTypes = [
        {
            name: "Hasty Generalization",
            description: "A fallacy where someone makes a broad conclusion based on too little evidence or a small sample size."
        },
        {
            name: "Appeal to Emotion",
            description: "A fallacy where someone tries to win an argument by making you feel certain emotions rather than using logical reasoning."
        }
    ];
    
    // Role-play scenarios for Activity 3
    const rolePlayScenarios = [
        {
            situation: "You want your friend to try a new food they've never tasted before.",
            hastyExample: "I tried this food once and loved it, so everyone loves this food!",
            emotionExample: "If you don't try it, I'll be really upset with you. Don't you want me to be happy?"
        },
        {
            situation: "You want your parent to buy you a new video game.",
            hastyExample: "My friend played this game once and said it was good, so it must be the best game ever made!",
            emotionExample: "I'll be the only kid in my class who doesn't have this game. Everyone will make fun of me!"
        },
        {
            situation: "You're trying to convince your teacher to postpone a test.",
            hastyExample: "One student isn't ready for the test, so none of us are ready.",
            emotionExample: "We'll all be so stressed and anxious if you give the test tomorrow. Think about how terrible we'll feel!"
        },
        {
            situation: "You want your sibling to share their toy with you.",
            hastyExample: "You shared your toy with me once, which means you should always share all your toys!",
            emotionExample: "If you don't share, I'll be so sad and lonely playing by myself. Don't you care about my feelings?"
        }
    ];
    
    let currentFallacyStoryIndex = 0;
    let currentFallacyTypeIndex = 0;
    let currentRolePlayIndex = 0;
    let selectedFallacyType = "";
    
    // Navigation and activity initialization for Lesson 9
    document.getElementById('lesson9-btn').addEventListener('click', function() {
        // Hide all lesson contents
        const lessonContents = document.querySelectorAll('[id$="-content"]');
        lessonContents.forEach(content => {
            content.classList.add('hidden');
        });
        
        // Deactivate all buttons
        const lessonButtons = document.querySelectorAll('.lesson-btn');
        lessonButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Show Lesson 9 content and activate button
        document.getElementById('lesson9-content').classList.remove('hidden');
        this.classList.add('active');
    });
    
    document.getElementById('start-activity9').addEventListener('click', function() {
        document.getElementById('introduction9').classList.add('hidden');
        document.getElementById('activity91').classList.remove('hidden');
        loadFallacyStory();
    });
    
    // Activity 1: Fallacy Identification
    function loadFallacyStory() {
        const story = fallacyStories[currentFallacyStoryIndex];
        
        // Set the story text
        document.getElementById('fallacy-story').textContent = story.story;
        
        // Hide feedback and explanation
        document.getElementById('feedback91').textContent = '';
        document.getElementById('explanation91').classList.add('hidden');
        document.getElementById('next91').classList.add('hidden');
    }
    
    document.getElementById('hasty-btn').addEventListener('click', function() {
        checkFallacyAnswer("hasty");
    });
    
    document.getElementById('emotion-btn').addEventListener('click', function() {
        checkFallacyAnswer("emotion");
    });
    
    document.getElementById('no-fallacy-btn').addEventListener('click', function() {
        checkFallacyAnswer("none");
    });
    
    function checkFallacyAnswer(answerType) {
        const story = fallacyStories[currentFallacyStoryIndex];
        const feedback = document.getElementById('feedback91');
        
        if (answerType === story.type) {
            feedback.textContent = "Correct! You've correctly identified the type of fallacy (or lack thereof).";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Not quite right. Think about the type of reasoning being used.";
            feedback.style.color = "red";
        }
        
        // Show the explanation
        document.getElementById('explanation-text91').textContent = story.explanation;
        document.getElementById('explanation91').classList.remove('hidden');
        
        // Show next button
        document.getElementById('next91').classList.remove('hidden');
    }
    
    document.getElementById('next91').addEventListener('click', function() {
        currentFallacyStoryIndex++;
        
        if (currentFallacyStoryIndex < fallacyStories.length) {
            loadFallacyStory();
        } else {
            document.getElementById('activity91').classList.add('hidden');
            document.getElementById('activity92').classList.remove('hidden');
            loadFallacyType();
        }
    });
    
    // Activity 2: Fallacy Warning Signs
    function loadFallacyType() {
        const fallacyType = fallacyTypes[currentFallacyTypeIndex];
        
        // Set the fallacy information
        document.getElementById('current-fallacy').textContent = fallacyType.name;
        document.getElementById('fallacy-description').textContent = fallacyType.description;
        
        // Clear previous inputs and results
        document.getElementById('definition-input').value = '';
        document.getElementById('example-input').value = '';
        document.getElementById('tip-input').value = '';
        
        document.getElementById('definition-text').textContent = '';
        document.getElementById('example-text').textContent = '';
        document.getElementById('tip-text').textContent = '';
        
        // Hide feedback and next button
        document.getElementById('feedback92').textContent = '';
        document.getElementById('next-fallacy-container').classList.add('hidden');
    }
    
    document.getElementById('check-warning').addEventListener('click', function() {
        const definitionInput = document.getElementById('definition-input').value.trim();
        const exampleInput = document.getElementById('example-input').value.trim();
        const tipInput = document.getElementById('tip-input').value.trim();
        
        // Validation
        if (!definitionInput || !exampleInput || !tipInput) {
            alert("Please fill in all fields: definition, example, and warning tip!");
            return;
        }
        
        // Display the warning sign
        document.getElementById('definition-text').textContent = definitionInput;
        document.getElementById('example-text').textContent = exampleInput;
        document.getElementById('tip-text').textContent = tipInput;
        
        // Show feedback and next button
        document.getElementById('feedback92').textContent = "Great job creating a warning sign for this fallacy!";
        document.getElementById('feedback92').style.color = "green";
        document.getElementById('next-fallacy-container').classList.remove('hidden');
    });
    
    document.getElementById('next92').addEventListener('click', function() {
        currentFallacyTypeIndex++;
        
        if (currentFallacyTypeIndex < fallacyTypes.length) {
            loadFallacyType();
        } else {
            document.getElementById('activity92').classList.add('hidden');
            document.getElementById('activity93').classList.remove('hidden');
            loadRolePlayScenario();
        }
    });
    
    // Activity 3: Fallacy Role-Play
    function loadRolePlayScenario() {
        const scenario = rolePlayScenarios[currentRolePlayIndex];
        
        // Set the situation text
        document.getElementById('situation-text').textContent = scenario.situation;
        
        // Reset the fallacy selection
        selectedFallacyType = "";
        
        // Hide argument input, feedback, and next button
        document.getElementById('argument-input-container').classList.add('hidden');
        document.getElementById('feedback93').textContent = '';
        document.getElementById('explanation93').classList.add('hidden');
        document.getElementById('next93').classList.add('hidden');
    }
    
    document.getElementById('use-hasty').addEventListener('click', function() {
        selectedFallacyType = "hasty";
        showArgumentInput();
    });
    
    document.getElementById('use-emotion').addEventListener('click', function() {
        selectedFallacyType = "emotion";
        showArgumentInput();
    });
    
    function showArgumentInput() {
        document.getElementById('argument-input-container').classList.remove('hidden');
        document.getElementById('argument-input').value = '';
    }
    
    document.getElementById('check-argument9').addEventListener('click', function() {
        const argumentInput = document.getElementById('argument-input').value.trim();
        
        // Validation
        if (!argumentInput) {
            alert("Please write your argument first!");
            return;
        }
        
        const scenario = rolePlayScenarios[currentRolePlayIndex];
        const feedback = document.getElementById('feedback93');
        
        // Provide positive feedback regardless of content
        feedback.textContent = "Good attempt! Let's see how your argument uses the fallacy.";
        feedback.style.color = "green";
        
        // Show example of how this fallacy might be used in this scenario
        let explanationText = "";
        
        if (selectedFallacyType === "hasty") {
            explanationText = `Here's an example of a hasty generalization for this situation: "${scenario.hastyExample}" Your argument might be different, but should follow the pattern of drawing a big conclusion from limited evidence.`;
        } else {
            explanationText = `Here's an example of an appeal to emotion for this situation: "${scenario.emotionExample}" Your argument might be different, but should focus on feelings rather than logical reasons.`;
        }
        
        document.getElementById('explanation-text93').textContent = explanationText;
        document.getElementById('explanation93').classList.remove('hidden');
        
        // Show next button
        document.getElementById('next93').classList.remove('hidden');
    });
    
    document.getElementById('next93').addEventListener('click', function() {
        currentRolePlayIndex++;
        
        if (currentRolePlayIndex < rolePlayScenarios.length) {
            loadRolePlayScenario();
        } else {
            document.getElementById('activity93').classList.add('hidden');
            document.getElementById('completion9').classList.remove('hidden');
        }
    });
    
    document.getElementById('restart-final9').addEventListener('click', function() {
        resetLesson9();
        document.getElementById('completion9').classList.add('hidden');
        document.getElementById('introduction9').classList.remove('hidden');
    });
    
    document.getElementById('back-to-lesson8').addEventListener('click', function() {
        document.getElementById('lesson9-content').classList.add('hidden');
        document.getElementById('lesson8-content').classList.remove('hidden');
        document.getElementById('lesson9-btn').classList.remove('active');
        document.getElementById('lesson8-btn').classList.add('active');
    });
    
    function resetLesson9() {
        currentFallacyStoryIndex = 0;
        currentFallacyTypeIndex = 0;
        currentRolePlayIndex = 0;
        
        // Hide all activities
        document.querySelectorAll('#activity91, #activity92, #activity93, #completion9').forEach(el => {
            el.classList.add('hidden');
        });
        
        // Reset Activity 1, 2, and 3
        document.getElementById('feedback91').textContent = '';
        document.getElementById('explanation91').classList.add('hidden');
        document.getElementById('next91').classList.add('hidden');
        
        document.getElementById('feedback92').textContent = '';
        document.getElementById('next-fallacy-container').classList.add('hidden');
        
        document.getElementById('feedback93').textContent = '';
        document.getElementById('explanation93').classList.add('hidden');
        document.getElementById('next93').classList.add('hidden');
        document.getElementById('argument-input-container').classList.add('hidden');
    }
    
    //------------------ LESSON 10 ------------------//
    
    // Event 1: True/False Sprint scenarios
    const sprintStatements = [
        {
            statement: "All squares are rectangles.",
            isTrue: true,
            explanation: "This is true because a square is a special type of rectangle where all sides are equal in length."
        },
        {
            statement: "All birds can fly.",
            isTrue: false,
            explanation: "This is false because there are birds that cannot fly, such as penguins, ostriches, and emus."
        },
        {
            statement: "If it is raining, then the ground is wet.",
            isTrue: true,
            explanation: "This is generally true as rain causes the ground to get wet. (It could be false in unusual circumstances, like if there's a roof over the ground.)"
        },
        {
            statement: "If the ground is wet, then it is raining.",
            isTrue: false,
            explanation: "This is false because the ground could be wet for other reasons, such as someone watering the lawn or a water spill."
        },
        {
            statement: "2 + 2 = 5",
            isTrue: false,
            explanation: "This is clearly false. 2 + 2 = 4."
        }
    ];
    
    // Event 2: Negation Relay scenarios
    const negationStatements = [
        {
            statement: "All cats are black.",
            negation: "Not all cats are black.",
            explanation: "The negation of 'All X are Y' is 'Not all X are Y' or 'Some X are not Y'. It means there exists at least one cat that is not black."
        },
        {
            statement: "No dogs can swim.",
            negation: "Some dogs can swim.",
            explanation: "The negation of 'No X are Y' is 'Some X are Y'. It means there exists at least one dog that can swim."
        },
        {
            statement: "It is raining outside.",
            negation: "It is not raining outside.",
            explanation: "For simple statements, we can negate by adding 'not' or using a word that means the opposite."
        },
        {
            statement: "The book is either red or blue.",
            negation: "The book is neither red nor blue.",
            explanation: "The negation of 'X or Y' is 'not X and not Y', which means 'neither X nor Y'."
        },
        {
            statement: "If you study, then you will pass the test.",
            negation: "You study, but you do not pass the test.",
            explanation: "The negation of 'If X, then Y' is 'X and not Y'. This means the only way to break the promise 'If you study, then you will pass the test' is to study but not pass."
        }
    ];
    
    // Event 3: AND/OR Obstacle Course scenarios
    const logicObjects = [
        { shape: "circle", color: "red", size: "large", texture: "smooth" },
        { shape: "circle", color: "blue", size: "small", texture: "rough" },
        { shape: "square", color: "red", size: "small", texture: "smooth" },
        { shape: "square", color: "blue", size: "large", texture: "rough" }
    ];
    
    const logicConditions = [
        {
            condition: "Find an object that is red AND large.",
            correctIndices: [0],
            explanation: "For AND conditions, an object must satisfy BOTH criteria. Only the red large circle (Object 1) meets both requirements."
        },
        {
            condition: "Find an object that is blue OR square.",
            correctIndices: [1, 2, 3],
            explanation: "For OR conditions, an object must satisfy EITHER criterion (or both). The blue small circle (Object 2), the red small square (Object 3), and the blue large square (Object 4) all meet at least one requirement."
        },
        {
            condition: "Find an object that is (small AND smooth) OR (large AND rough).",
            correctIndices: [2, 3],
            explanation: "This complex condition has two parts joined by OR. An object must either be both small AND smooth, or it must be both large AND rough. The red small smooth square (Object 3) meets the first part, and the blue large rough square (Object 4) meets the second part."
        },
        {
            condition: "Find an object that is blue AND square AND large.",
            correctIndices: [3],
            explanation: "For multiple AND conditions, an object must satisfy ALL criteria. Only the blue large rough square (Object 4) meets all three requirements."
        }
    ];
    
    // Event 4: If-Then Challenge scenarios
    const conditionalScenarios = [
        {
            statement: "If it is sunny, then the picnic will happen.",
            scenario: "It is sunny today.",
            question: "Will the picnic happen?",
            answer: true,
            explanation: "When the 'if' part (antecedent) is true, and we have an if-then statement, the 'then' part (consequent) must also be true. This is modus ponens."
        },
        {
            statement: "If it rains, then the soccer game will be canceled.",
            scenario: "The soccer game was not canceled.",
            question: "Did it rain?",
            answer: false,
            explanation: "When the 'then' part (consequent) is false, the 'if' part (antecedent) must also be false. This is modus tollens. If it had rained, the game would have been canceled."
        },
        {
            statement: "If you do your homework, then you can play video games.",
            scenario: "You did not do your homework.",
            question: "Can you play video games?",
            answer: false,
            explanation: "If the 'if' part (antecedent) is false, and we have an if-then statement, then the promise doesn't apply. However, in this scenario, the condition for playing video games hasn't been met, so you cannot play."
        },
        {
            statement: "If the alarm rings, then there is a fire.",
            scenario: "There is a fire.",
            question: "Did the alarm ring?",
            answer: false,
            explanation: "When the 'then' part (consequent) is true, we cannot determine whether the 'if' part (antecedent) is true or false. The fire might have started without triggering the alarm yet."
        }
    ];
    
    // Event 5: Argument Clinic Diagnosis scenarios
    const diagnosticArguments = [
        {
            argument: "All mammals have hair. Whales are mammals. Therefore, whales have hair.",
            diagnosis: "valid",
            explanation: "This is a valid argument. The conclusion follows necessarily from the premises. If all mammals have hair (premise 1), and whales are mammals (premise 2), then whales must have hair."
        },
        {
            argument: "All dogs have four legs. My pet has four legs. Therefore, my pet is a dog.",
            diagnosis: "invalid",
            explanation: "This is an invalid argument. It commits the fallacy of affirming the consequent. While all dogs have four legs, not all four-legged animals are dogs. Your pet could be a cat, a rabbit, or another four-legged animal."
        },
        {
            argument: "Jane ate at that restaurant once and got sick. Therefore, that restaurant always makes people sick.",
            diagnosis: "hasty",
            explanation: "This argument contains a hasty generalization. It draws a broad conclusion about the restaurant making people sick based on a single instance of Jane getting sick. There could have been many other reasons Jane got sick."
        },
        {
            argument: "You should agree with my argument because if you don't, I'll feel very sad and disappointed. Don't you care about my feelings?",
            diagnosis: "emotion",
            explanation: "This is an appeal to emotion. The argument tries to persuade by making you feel guilty about the speaker's feelings rather than providing logical reasons to agree."
        },
        {
            argument: "If it snows, the schools close. The schools are closed today. Therefore, it snowed.",
            diagnosis: "invalid",
            explanation: "This is an invalid argument. It commits the fallacy of affirming the consequent. The schools might be closed for other reasons, such as a holiday, a power outage, or a teacher training day."
        }
    ];
    
    // Event 6: Logic Grid Puzzle solution
    const puzzleSolution = {
        alex: { pet: "dog", color: "blue" },
        bella: { pet: "fish", color: "green" },
        carlos: { pet: "bird", color: "red" },
        diana: { pet: "cat", color: "yellow" }
    };
    
    let currentSprintIndex = 0;
    let currentNegationIndex = 0;
    let currentLogicConditionIndex = 0;
    // Reusing the existing currentConditionalIndex variable instead of redeclaring
    currentConditionalIndex = 0;
    let currentDiagnosticIndex = 0;
    let selectedObjects = [];
    
    // Navigation and activity initialization for Lesson 10
    document.getElementById('lesson10-btn').addEventListener('click', function() {
        // Hide all lesson contents
        const lessonContents = document.querySelectorAll('[id$="-content"]');
        lessonContents.forEach(content => {
            content.classList.add('hidden');
        });
        
        // Deactivate all buttons
        const lessonButtons = document.querySelectorAll('.lesson-btn');
        lessonButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Show Lesson 10 content and activate button
        document.getElementById('lesson10-content').classList.remove('hidden');
        this.classList.add('active');
    });
    
    document.getElementById('start-activity10').addEventListener('click', function() {
        document.getElementById('introduction10').classList.add('hidden');
        document.getElementById('activity101').classList.remove('hidden');
        loadSprintStatement();
    });
    
    // Event 1: True/False Sprint
    function loadSprintStatement() {
        const statement = sprintStatements[currentSprintIndex];
        
        // Set the statement text
        document.getElementById('sprint-statement').textContent = statement.statement;
        
        // Hide feedback and explanation
        document.getElementById('feedback101').textContent = '';
        document.getElementById('explanation101').classList.add('hidden');
        document.getElementById('next101').classList.add('hidden');
    }
    
    document.getElementById('sprint-true-btn').addEventListener('click', function() {
        checkSprintAnswer(true);
    });
    
    document.getElementById('sprint-false-btn').addEventListener('click', function() {
        checkSprintAnswer(false);
    });
    
    function checkSprintAnswer(answerIsTrue) {
        const statement = sprintStatements[currentSprintIndex];
        const feedback = document.getElementById('feedback101');
        
        if (answerIsTrue === statement.isTrue) {
            feedback.textContent = "Correct! You've correctly identified the truth value of the statement.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Not quite right. Think about whether the statement is true or false.";
            feedback.style.color = "red";
        }
        
        // Show the explanation
        document.getElementById('explanation-text101').textContent = statement.explanation;
        document.getElementById('explanation101').classList.remove('hidden');
        
        // Show next button
        document.getElementById('next101').classList.remove('hidden');
    }
    
    document.getElementById('next101').addEventListener('click', function() {
        currentSprintIndex++;
        
        if (currentSprintIndex < sprintStatements.length) {
            loadSprintStatement();
        } else {
            document.getElementById('activity101').classList.add('hidden');
            document.getElementById('activity102').classList.remove('hidden');
            loadNegationStatement();
        }
    });
    
    // Event 2: Negation Relay
    function loadNegationStatement() {
        const statement = negationStatements[currentNegationIndex];
        
        // Set the statement text
        document.getElementById('original-statement').textContent = statement.statement;
        
        // Clear the input
        document.getElementById('negation-input').value = '';
        
        // Hide feedback and explanation
        document.getElementById('feedback102').textContent = '';
        document.getElementById('explanation102').classList.add('hidden');
        document.getElementById('next102').classList.add('hidden');
    }
    
    document.getElementById('check-negation').addEventListener('click', function() {
        const negationInput = document.getElementById('negation-input').value.trim();
        
        // Validation
        if (!negationInput) {
            alert("Please enter the negation of the statement!");
            return;
        }
        
        const statement = negationStatements[currentNegationIndex];
        const feedback = document.getElementById('feedback102');
        
        // Basic evaluation - check if key words are present
        // This is a simplified approach for educational purposes
        const inputLower = negationInput.toLowerCase();
        const possibleNegationLower = statement.negation.toLowerCase();
        
        // Check if the input is similar to the expected negation
        // More sophisticated NLP could be used in a real-world application
        if (inputLower.includes('not') || 
            inputLower.includes('no ') || 
            inputLower.includes('none') || 
            inputLower.includes('never') ||
            inputLower.includes('neither') ||
            inputLower.includes('isn\'t') ||
            inputLower.includes('aren\'t') ||
            inputLower.includes('doesn\'t') ||
            inputLower.includes('don\'t') ||
            inputLower.includes('some') && possibleNegationLower.includes('some')) {
            
            feedback.textContent = "Good attempt at the negation!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Try again. Look for a way to negate the statement.";
            feedback.style.color = "orange";
        }
        
        // Show the explanation
        document.getElementById('explanation-text102').textContent = statement.explanation;
        document.getElementById('suggested-negation').textContent = statement.negation;
        document.getElementById('explanation102').classList.remove('hidden');
        
        // Show next button
        document.getElementById('next102').classList.remove('hidden');
    });
    
    document.getElementById('next102').addEventListener('click', function() {
        currentNegationIndex++;
        
        if (currentNegationIndex < negationStatements.length) {
            loadNegationStatement();
        } else {
            document.getElementById('activity102').classList.add('hidden');
            document.getElementById('activity103').classList.remove('hidden');
            loadLogicCondition();
            setupObjectVisuals();
        }
    });
    
    // Event 3: AND/OR Obstacle Course
    function setupObjectVisuals() {
        for (let i = 0; i < logicObjects.length; i++) {
            const obj = logicObjects[i];
            const visualElement = document.getElementById(`visual${i+1}`);
            const descElement = document.getElementById(`object-desc${i+1}`);
            
            // Set up appearance of the visual element
            visualElement.style.width = '50px';
            visualElement.style.height = '50px';
            visualElement.style.backgroundColor = obj.color;
            visualElement.style.borderRadius = obj.shape === 'circle' ? '50%' : '0';
            visualElement.style.transform = obj.size === 'large' ? 'scale(1.5)' : 'scale(1)';
            visualElement.style.border = obj.texture === 'rough' ? '3px dashed black' : '1px solid black';
            
            // Set description
            descElement.textContent = `${obj.color} ${obj.size} ${obj.texture} ${obj.shape}`;
            
            // Add click event to select/deselect object
            const objectElement = document.getElementById(`object${i+1}`);
            objectElement.addEventListener('click', function() {
                toggleObjectSelection(i);
            });
        }
        
        // Initial setup - clear any previous selections
        selectedObjects = [];
        updateObjectSelectionDisplay();
    }
    
    function toggleObjectSelection(index) {
        const objectIndex = selectedObjects.indexOf(index);
        
        if (objectIndex === -1) {
            // Object not selected, add it
            selectedObjects.push(index);
        } else {
            // Object already selected, remove it
            selectedObjects.splice(objectIndex, 1);
        }
        
        updateObjectSelectionDisplay();
    }
    
    function updateObjectSelectionDisplay() {
        // Update visual indication of selection
        for (let i = 0; i < logicObjects.length; i++) {
            const objectElement = document.getElementById(`object${i+1}`);
            
            if (selectedObjects.includes(i)) {
                objectElement.style.backgroundColor = '#e6ffe6'; // Light green background
                objectElement.style.border = '2px solid green';
            } else {
                objectElement.style.backgroundColor = '';
                objectElement.style.border = '';
            }
        }
    }
    
    function loadLogicCondition() {
        const condition = logicConditions[currentLogicConditionIndex];
        
        // Set the condition text
        document.getElementById('logic-condition').textContent = condition.condition;
        
        // Reset selections
        selectedObjects = [];
        updateObjectSelectionDisplay();
        
        // Add check button
        document.getElementById('feedback103').innerHTML = '<button id="check-condition" class="next-btn">Check Selection</button>';
        document.getElementById('check-condition').addEventListener('click', function() {
            checkLogicSelection();
        });
        
        // Hide explanation and next button
        document.getElementById('explanation103').classList.add('hidden');
        document.getElementById('next103').classList.add('hidden');
    }
    
    function checkLogicSelection() {
        const condition = logicConditions[currentLogicConditionIndex];
        const feedback = document.getElementById('feedback103');
        
        // Sort both arrays to make comparison easier
        const sortedSelected = [...selectedObjects].sort();
        const sortedCorrect = [...condition.correctIndices].sort();
        
        // Check if arrays have the same length and same elements
        const isCorrect = sortedSelected.length === sortedCorrect.length && 
                         sortedSelected.every((value, index) => value === sortedCorrect[index]);
        
        if (isCorrect) {
            feedback.textContent = "Correct! You've selected the right object(s) for this condition.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Not quite right. Check the condition again and make sure you understand how AND and OR work.";
            feedback.style.color = "red";
        }
        
        // Show the explanation
        document.getElementById('explanation-text103').textContent = condition.explanation;
        document.getElementById('explanation103').classList.remove('hidden');
        
        // Show next button
        document.getElementById('next103').classList.remove('hidden');
    }
    
    document.getElementById('next103').addEventListener('click', function() {
        currentLogicConditionIndex++;
        
        if (currentLogicConditionIndex < logicConditions.length) {
            loadLogicCondition();
        } else {
            document.getElementById('activity103').classList.add('hidden');
            document.getElementById('activity104').classList.remove('hidden');
            loadConditionalScenario();
        }
    });
    
    // Event 4: If-Then Challenge
    function loadConditionalScenario() {
        const scenario = conditionalScenarios[currentConditionalIndex];
        
        // Set the scenario text
        document.getElementById('conditional-statement').textContent = scenario.statement;
        document.getElementById('scenario-text').textContent = scenario.scenario;
        document.getElementById('conditional-question').textContent = scenario.question;
        
        // Hide feedback and explanation
        document.getElementById('feedback104').textContent = '';
        document.getElementById('explanation104').classList.add('hidden');
        document.getElementById('next104').classList.add('hidden');
    }
    
    document.getElementById('condition-true-btn').addEventListener('click', function() {
        checkConditionalAnswer(true);
    });
    
    document.getElementById('condition-false-btn').addEventListener('click', function() {
        checkConditionalAnswer(false);
    });
    
    function checkConditionalAnswer(answerIsTrue) {
        const scenario = conditionalScenarios[currentConditionalIndex];
        const feedback = document.getElementById('feedback104');
        
        if (answerIsTrue === scenario.answer) {
            feedback.textContent = "Correct! You've drawn the right conclusion from the conditional statement.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Not quite right. Think about how conditional statements work.";
            feedback.style.color = "red";
        }
        
        // Show the explanation
        document.getElementById('explanation-text104').textContent = scenario.explanation;
        document.getElementById('explanation104').classList.remove('hidden');
        
        // Show next button
        document.getElementById('next104').classList.remove('hidden');
    }
    
    document.getElementById('next104').addEventListener('click', function() {
        currentConditionalIndex++;
        
        if (currentConditionalIndex < conditionalScenarios.length) {
            loadConditionalScenario();
        } else {
            document.getElementById('activity104').classList.add('hidden');
            document.getElementById('activity105').classList.remove('hidden');
            loadDiagnosticArgument();
        }
    });
    
    // Event 5: Argument Clinic Diagnosis
    function loadDiagnosticArgument() {
        const argument = diagnosticArguments[currentDiagnosticIndex];
        
        // Set the argument text
        document.getElementById('olympics-argument').textContent = argument.argument;
        
        // Reset radio buttons
        const radioButtons = document.querySelectorAll('input[name="argument-diagnosis"]');
        radioButtons.forEach(radio => {
            radio.checked = false;
        });
        
        // Hide feedback and explanation
        document.getElementById('feedback105').textContent = '';
        document.getElementById('explanation105').classList.add('hidden');
        document.getElementById('next105').classList.add('hidden');
    }
    
    document.getElementById('check-diagnosis').addEventListener('click', function() {
        const selectedDiagnosis = document.querySelector('input[name="argument-diagnosis"]:checked');
        
        if (!selectedDiagnosis) {
            alert("Please select a diagnosis before checking!");
            return;
        }
        
        const argument = diagnosticArguments[currentDiagnosticIndex];
        const selectedOption = selectedDiagnosis.id.replace('-option', '');
        const feedback = document.getElementById('feedback105');
        
        if (selectedOption === argument.diagnosis) {
            feedback.textContent = "Correct! You've correctly diagnosed the argument.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Not quite right. Analyze the argument structure more carefully.";
            feedback.style.color = "red";
        }
        
        // Show the explanation
        document.getElementById('explanation-text105').textContent = argument.explanation;
        document.getElementById('explanation105').classList.remove('hidden');
        
        // Show next button
        document.getElementById('next105').classList.remove('hidden');
    });
    
    document.getElementById('next105').addEventListener('click', function() {
        currentDiagnosticIndex++;
        
        if (currentDiagnosticIndex < diagnosticArguments.length) {
            loadDiagnosticArgument();
        } else {
            document.getElementById('activity105').classList.add('hidden');
            document.getElementById('activity106').classList.remove('hidden');
        }
    });
    
    // Event 6: Logic Grid Puzzle
    document.getElementById('check-puzzle').addEventListener('click', function() {
        // Get all selections
        const alexPet = document.getElementById('alex-pet').value;
        const bellaPet = document.getElementById('bella-pet').value;
        const carlosPet = document.getElementById('carlos-pet').value;
        const dianaPet = document.getElementById('diana-pet').value;
        
        const alexColor = document.getElementById('alex-color').value;
        const bellaColor = document.getElementById('bella-color').value;
        const carlosColor = document.getElementById('carlos-color').value;
        const dianaColor = document.getElementById('diana-color').value;
        
        // Validation - check that all dropdowns have a selection
        if (!alexPet || !bellaPet || !carlosPet || !dianaPet || 
            !alexColor || !bellaColor || !carlosColor || !dianaColor) {
            alert("Please complete all selections in the solution table!");
            return;
        }
        
        // Check for duplicates in pets
        const pets = [alexPet, bellaPet, carlosPet, dianaPet];
        const uniquePets = new Set(pets);
        if (uniquePets.size !== 4) {
            alert("Each child must have a different pet! Check your pet selections.");
            return;
        }
        
        // Check for duplicates in colors
        const colors = [alexColor, bellaColor, carlosColor, dianaColor];
        const uniqueColors = new Set(colors);
        if (uniqueColors.size !== 4) {
            alert("Each pet must have a different color! Check your color selections.");
            return;
        }
        
        // Check against solution
        const isAlexCorrect = alexPet === puzzleSolution.alex.pet && alexColor === puzzleSolution.alex.color;
        const isBellaCorrect = bellaPet === puzzleSolution.bella.pet && bellaColor === puzzleSolution.bella.color;
        const isCarlosCorrect = carlosPet === puzzleSolution.carlos.pet && carlosColor === puzzleSolution.carlos.color;
        const isDianaCorrect = dianaPet === puzzleSolution.diana.pet && dianaColor === puzzleSolution.diana.color;
        
        const allCorrect = isAlexCorrect && isBellaCorrect && isCarlosCorrect && isDianaCorrect;
        
        const feedback = document.getElementById('feedback106');
        
        if (allCorrect) {
            feedback.textContent = "Perfect! You've solved the logic puzzle correctly.";
            feedback.style.color = "green";
            
            // Show explanation
            document.getElementById('explanation-text106').textContent = 
                "You correctly used the clues to deduce that: " +
                "Alex bought the blue dog, " +
                "Bella bought the green fish, " +
                "Carlos bought the red bird, " +
                "and Diana bought the yellow cat.";
            document.getElementById('explanation106').classList.remove('hidden');
            
            // Show next button
            document.getElementById('next106').classList.remove('hidden');
        } else {
            // Give hints about which parts are wrong
            let hints = [];
            
            if (!isAlexCorrect) hints.push("Check Alex's pet and color.");
            if (!isBellaCorrect) hints.push("Check Bella's pet and color.");
            if (!isCarlosCorrect) hints.push("Check Carlos's pet and color.");
            if (!isDianaCorrect) hints.push("Check Diana's pet and color.");
            
            feedback.innerHTML = "Not quite right. " + hints.join(" ") + "<br>Review the clues carefully.";
            feedback.style.color = "red";
        }
    });
    
    document.getElementById('next106').addEventListener('click', function() {
        document.getElementById('activity106').classList.add('hidden');
        document.getElementById('activity107').classList.remove('hidden');
    });
    
    // Event 7: Create-Your-Own Logic Puzzle
    document.getElementById('create-puzzle').addEventListener('click', function() {
        const puzzleTitle = document.getElementById('puzzle-title').value.trim();
        const puzzleContent = document.getElementById('puzzle-content').value.trim();
        const puzzleAnswer = document.getElementById('puzzle-answer').value.trim();
        
        // Validation
        if (!puzzleTitle || !puzzleContent || !puzzleAnswer) {
            alert("Please fill in all fields: title, content, and answer/solution!");
            return;
        }
        
        // Display the created puzzle
        document.getElementById('display-title').textContent = puzzleTitle;
        document.getElementById('display-content').textContent = puzzleContent;
        document.getElementById('display-answer').textContent = puzzleAnswer;
        
        // Show the puzzle display
        document.getElementById('puzzle-display').classList.remove('hidden');
        document.getElementById('solution-section').classList.add('hidden');
        
        // Show feedback and completion button
        document.getElementById('feedback107').textContent = "Excellent job creating your own logic puzzle!";
        document.getElementById('feedback107').style.color = "green";
        document.getElementById('next107').classList.remove('hidden');
    });
    
    document.getElementById('show-solution').addEventListener('click', function() {
        document.getElementById('solution-section').classList.remove('hidden');
        this.style.display = 'none';
    });
    
    document.getElementById('next107').addEventListener('click', function() {
        document.getElementById('activity107').classList.add('hidden');
        document.getElementById('completion10').classList.remove('hidden');
    });
    
    document.getElementById('restart-final10').addEventListener('click', function() {
        resetLesson10();
        document.getElementById('completion10').classList.add('hidden');
        document.getElementById('introduction10').classList.remove('hidden');
    });
    
    document.getElementById('back-to-lesson9').addEventListener('click', function() {
        document.getElementById('lesson10-content').classList.add('hidden');
        document.getElementById('lesson9-content').classList.remove('hidden');
        document.getElementById('lesson10-btn').classList.remove('active');
        document.getElementById('lesson9-btn').classList.add('active');
    });
    
    function resetLesson10() {
        currentSprintIndex = 0;
        currentNegationIndex = 0;
        currentLogicConditionIndex = 0;
        currentConditionalIndex = 0;
        currentDiagnosticIndex = 0;
        
        // Hide all activities
        document.querySelectorAll('#activity101, #activity102, #activity103, #activity104, #activity105, #activity106, #activity107, #completion10').forEach(el => {
            el.classList.add('hidden');
        });
        
        // Reset puzzle display
        document.getElementById('puzzle-display').classList.add('hidden');
        
        // Reset feedback and explanations for all activities
        for (let i = 1; i <= 7; i++) {
            const feedbackElement = document.getElementById(`feedback10${i}`);
            if (feedbackElement) feedbackElement.textContent = '';
            
            const explanationElement = document.getElementById(`explanation10${i}`);
            if (explanationElement) explanationElement.classList.add('hidden');
            
            const nextButton = document.getElementById(`next10${i}`);
            if (nextButton) nextButton.classList.add('hidden');
        }
    }
});