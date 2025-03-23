document.addEventListener('DOMContentLoaded', function() {
    // Lesson Navigation
    document.getElementById('lesson1-btn').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.remove('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson6-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.add('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.remove('active');
        document.getElementById('lesson6-btn').classList.remove('active');
    });
    
    document.getElementById('lesson2-btn').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.remove('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson6-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.add('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.remove('active');
        document.getElementById('lesson6-btn').classList.remove('active');
    });
    
    document.getElementById('lesson3-btn').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.remove('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson6-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.add('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.remove('active');
        document.getElementById('lesson6-btn').classList.remove('active');
    });
    
    document.getElementById('lesson4-btn').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.remove('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson6-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.add('active');
        document.getElementById('lesson5-btn').classList.remove('active');
        document.getElementById('lesson6-btn').classList.remove('active');
    });
    
    document.getElementById('lesson5-btn').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.remove('hidden');
        document.getElementById('lesson6-content').classList.add('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.add('active');
        document.getElementById('lesson6-btn').classList.remove('active');
    });
    
    document.getElementById('lesson6-btn').addEventListener('click', function() {
        document.getElementById('lesson1-content').classList.add('hidden');
        document.getElementById('lesson2-content').classList.add('hidden');
        document.getElementById('lesson3-content').classList.add('hidden');
        document.getElementById('lesson4-content').classList.add('hidden');
        document.getElementById('lesson5-content').classList.add('hidden');
        document.getElementById('lesson6-content').classList.remove('hidden');
        document.getElementById('lesson1-btn').classList.remove('active');
        document.getElementById('lesson2-btn').classList.remove('active');
        document.getElementById('lesson3-btn').classList.remove('active');
        document.getElementById('lesson4-btn').classList.remove('active');
        document.getElementById('lesson5-btn').classList.remove('active');
        document.getElementById('lesson6-btn').classList.add('active');
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
});