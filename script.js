
    // ========== DATA GENERATION ==========
    // We generate 200 questions programmatically to simulate the full bank requested.
    
    const generateQuestionBank = (subjectId) => {
      let questions = [];
      
      // MTS 101: Math
      if (subjectId === 'mts101') {
        // 1. Square Roots (1-100)
        for(let i=1; i<=100; i++) {
          questions.push({
            q: `√${i*i} = ?`,
            options: [String(i), String(i+1), String(i-1 || 1), String(i*2)],
            answer: 0,
            explanation: `${i} × ${i} = ${i*i}.`
          });
        }
        // 2. Trig Values
        const trig = [
            {fn:'sin', deg:30, ans:'1/2'}, {fn:'cos', deg:60, ans:'1/2'}, {fn:'tan', deg:45, ans:'1'},
            {fn:'sin', deg:90, ans:'1'}, {fn:'cos', deg:0, ans:'1'}, {fn:'sin', deg:0, ans:'0'},
            {fn:'tan', deg:60, ans:'√3'}, {fn:'sin', deg:45, ans:'√2/2'}, {fn:'cos', deg:45, ans:'√2/2'},
            {fn:'sin', deg:60, ans:'√3/2'}, {fn:'cos', deg:30, ans:'√3/2'}, {fn:'tan', deg:30, ans:'1/√3'},
            {fn:'sin', deg:150, ans:'1/2'}, {fn:'cos', deg:180, ans:'-1'}, {fn:'tan', deg:135, ans:'-1'}
        ];
        trig.forEach(t => {
           questions.push({
             q: `${t.fn}${t.deg}° = ?`,
             options: [t.ans, "0", "1", "Undefined"],
             answer: 0,
             explanation: `Standard trigonometric value for ${t.fn}${t.deg}°.`
           });
        });
        // 3. Algebra/Sets
        for(let i=1; i<=85; i++) {
           questions.push({
             q: `If A={1,2,3} and B={3,4,5}, find A∩B. (Variation ${i})`,
             options: ["{3}", "{1,2}", "{4,5}", "{}"],
             answer: 0,
             explanation: "Intersection means elements common to both sets."
           });
           questions.push({
             q: `Solve x² - ${i+1}x + ${i} = 0.`,
             options: [`${i}, 1`, `${i+1}, -1`, `${i}, -1`, `${i+1}, 1`],
             answer: 0,
             explanation: `Factorizing gives (x-${i})(x-1)=0.`
           });
        }
        return questions.slice(0, 200);
      }
      
      // GST 111: English
      if (subjectId === 'gst111') {
        const topics = [
          { q: "Time management involves?", opts: ["Planning", "Sleeping", "Eating", "Running"], a: 0 },
          { q: "Adjectives describe?", opts: ["Nouns", "Verbs", "Adverbs", "Pronouns"], a: 0 },
          { q: "A clause has?", opts: ["Subject and Verb", "Only Nouns", "No verb", "No subject"], a: 0 },
          { q: "Prefix example is?", opts: ["unhappy", "happiness", "quickly", "running"], a: 0 },
          { q: "Suffix example is?", opts: ["happiness", "redo", "unhappy", "beside"], a: 0 },
          { q: "Phoneme is?", opts: ["Sound unit", "Word unit", "Letter", "Sentence"], a: 0 },
          { q: "Listening skill requires?", opts: ["Concentration", "Talking", "Sleeping", "Reading"], a: 0 },
          { q: "Silent letter in 'comb'?", opts: ["b", "o", "c", "m"], a: 0 },
          { q: "Conjunction example?", opts: ["And", "Beautiful", "Run", "Quickly"], a: 0 },
        ];
        for(let i=0; i<200; i++) {
          const t = topics[i % topics.length];
          questions.push({ q: t.q, options: t.opts, answer: t.a, explanation: "Standard English grammar rule." });
        }
      }
      
      // COS 101: Computer
      if (subjectId === 'cos101') {
        const topics = [
          { q: "CPU stands for?", opts: ["Central Processing Unit", "Central Program Unit", "Computer Personal Unit", "Central Power Unit"], a: 0 },
          { q: "1 Byte = ? bits", opts: ["8", "16", "32", "4"], a: 0 },
          { q: "Operating System example?", opts: ["Windows", "Word", "Excel", "Chrome"], a: 0 },
          { q: "Smallest data unit?", opts: ["Bit", "Byte", "Nibble", "Word"], a: 0 },
          { q: "Input device?", opts: ["Keyboard", "Monitor", "Printer", "Speaker"], a: 0 },
          { q: "Output device?", opts: ["Monitor", "Mouse", "Keyboard", "Scanner"], a: 0 },
          { q: "Brain of computer?", opts: ["CPU", "RAM", "Hard Disk", "ROM"], a: 0 },
          { q: "RAM is?", opts: ["Volatile", "Non-volatile", "Permanent", "Read-only"], a: 0 },
        ];
        for(let i=0; i<200; i++) {
          const t = topics[i % topics.length];
          questions.push({ q: t.q, options: t.opts, answer: t.a, explanation: "Computing fundamental." });
        }
      }
      
      // PHY 101: Physics
      if (subjectId === 'phy101') {
        const topics = [
          { q: "Force unit?", opts: ["Newton", "Joule", "Watt", "Pascal"], a: 0 },
          { q: "KE formula?", opts: ["1/2 mv²", "mgh", "ma", "F=ma"], a: 0 },
          { q: "Vector quantity?", opts: ["Velocity", "Speed", "Mass", "Time"], a: 0 },
          { q: "Scalar quantity?", opts: ["Mass", "Velocity", "Force", "Displacement"], a: 0 },
          { q: "Acceleration due to gravity?", opts: ["9.8 m/s²", "10 m/s²", "8 m/s²", "12 m/s²"], a: 0 },
          { q: "Power unit?", opts: ["Watt", "Newton", "Joule", "Pascal"], a: 0 },
          { q: "Work formula?", opts: ["F × d", "F / d", "m × a", "v / t"], a: 0 },
        ];
        for(let i=0; i<200; i++) {
          const t = topics[i % topics.length];
          questions.push({ q: t.q, options: t.opts, answer: t.a, explanation: "Physics fundamental." });
        }
      }
      
      // STA 111: Stats
      if (subjectId === 'sta111') {
        for(let i=0; i<200; i++) {
          const n1 = Math.floor(Math.random()*20);
          const n2 = Math.floor(Math.random()*20);
          const n3 = Math.floor(Math.random()*20);
          const mean = ((n1+n2+n3)/3).toFixed(1);
          questions.push({ 
            q: `Find the mean of: ${n1}, ${n2}, ${n3}.`,
            options: [mean, String(n1), String(n2), String(n3)],
            answer: 0,
            explanation: "Mean = Sum / Count."
          });
        }
      }
      
      // IFT 101: Internet
      if (subjectId === 'ift101') {
        const topics = [
          { q: "HTTP stands for?", opts: ["HyperText Transfer Protocol", "High Text Transfer Protocol", "HyperText Transmission Protocol", "High Transmission Protocol"], a: 0 },
          { q: "URL stands for?", opts: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"], a: 0 },
          { q: "IP stands for?", opts: ["Internet Protocol", "Internal Protocol", "Internet Program", "Internal Program"], a: 0 },
          { q: "HTTPS port?", opts: ["443", "80", "21", "25"], a: 0 },
          { q: "DNS function?", opts: ["Name to IP", "IP to Name", "Encrypt data", "Transfer files"], a: 0 },
        ];
        for(let i=0; i<200; i++) {
          const t = topics[i % topics.length];
          questions.push({ q: t.q, options: t.opts, answer: t.a, explanation: "Internet fundamental." });
        }
      }
      
      // GNS 103: Library
      if (subjectId === 'gns103') {
        const topics = [
          { q: "Library function?", opts: ["Store info", "Sell books", "Cook food", "Play music"], a: 0 },
          { q: "Primary source?", opts: ["Diary", "Textbook", "Encyclopedia", "Review"], a: 0 },
          { q: "Boolean AND?", opts: ["Narrows search", "Broadens search", "Ignores search", "Deletes search"], a: 0 },
          { q: "Dewey Decimal?", opts: ["Classification", "Building design", "Map system", "Book shelf"], a: 0 },
        ];
        for(let i=0; i<200; i++) {
          const t = topics[i % topics.length];
          questions.push({ q: t.q, options: t.opts, answer: t.a, explanation: "Library science concept." });
        }
      }
      
      return questions;
    };

    const theoryBank = {
      mts101: [
        { q: "Define a set.", a: "A set is a collection of distinct objects." },
        { q: "Explain AP.", a: "Arithmetic Progression is a sequence with constant difference." },
        { q: "Explain GP.", a: "Geometric Progression is a sequence with constant ratio." },
        { q: "Prove √2 is irrational.", a: "Assume √2=p/q leads to contradiction." },
        { q: "Solve quadratic equation.", a: "Use formula x = (-b ± √(b²-4ac))/2a." },
      ],
      gst111: [
        { q: "Time Management definition.", a: "Planning and controlling time." },
        { q: "Parts of speech.", a: "Noun, Verb, Adjective, Adverb, Pronoun, Preposition, Conjunction, Interjection." },
        { q: "Prefix vs Suffix.", a: "Prefix: beginning (un-). Suffix: end (-ness)." },
      ],
      cos101: [
        { q: "Define CPU.", a: "Central Processing Unit, the brain of the computer." },
        { q: "Input vs Output.", a: "Input: Keyboard, Mouse. Output: Monitor, Printer." },
        { q: "Software types.", a: "System software (OS) and Application software (Word)." },
      ],
      phy101: [
        { q: "Newton's Laws.", a: "1st: Inertia. 2nd: F=ma. 3rd: Action-Reaction." },
        { q: "Define Work.", a: "Work = Force × Distance." },
        { q: "Kinetic Energy.", a: "KE = 1/2 mv²." },
      ],
      sta111: [
        { q: "Mean, Median, Mode.", a: "Mean: Average. Median: Middle. Mode: Most frequent." },
        { q: "Variance.", a: "Average of squared deviations from mean." },
      ],
      ift101: [
        { q: "Define Internet.", a: "Global network of computers." },
        { q: "HTTP vs HTTPS.", a: "HTTPS is encrypted, HTTP is not." },
      ],
      gns103: [
        { q: "Library types.", a: "Academic, Public, Special, National." },
        { q: "Dewey Decimal.", a: "Classification system using numbers 000-999." },
      ]
    };

    // ========== STATE ==========
    let currentUser = null;
    let currentCourseId = 'mts101';
    let totalPoints = 0;
    
    // Quiz State
    let quizType = 'objectives';
    let questionCount = 20;
    let currentQuizQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let quizTimer = null;
    let timeLeft = 30;
    let quizScore = { correct: 0, wrong: 0, skipped: 0 };
    let websiteRatingValue = 0;

    // ========== INITIALIZATION ==========
    document.addEventListener('DOMContentLoaded', () => {
      loadUserData();
      renderCourseNav();
    });

    // ========== AUTH ==========
    function toggleAuthForm() {
      document.getElementById('login-form').classList.toggle('hidden');
      document.getElementById('signup-form').classList.toggle('hidden');
    }
    function handleLogin() {
      const email = document.getElementById('login-email').value.trim();
      if(email) {
        currentUser = { name: email.split('@')[0], email };
        localStorage.setItem('examforge_user', JSON.stringify(currentUser));
        closeModal('auth-modal');
      }
    }
    function handleSignup() {
      const name = document.getElementById('signup-name').value.trim();
      const email = document.getElementById('signup-email').value.trim();
      if(name && email) {
        currentUser = { name, email };
        localStorage.setItem('examforge_user', JSON.stringify(currentUser));
        closeModal('auth-modal');
      }
    }
    function loadUserData() {
      const saved = localStorage.getItem('examforge_user');
      if (saved) {
        currentUser = JSON.parse(saved);
        document.getElementById('user-avatar').textContent = currentUser.name.charAt(0).toUpperCase();
      }
      const pts = localStorage.getItem('examforge_points');
      if(pts) totalPoints = parseInt(pts);
      document.getElementById('totalPoints').textContent = totalPoints.toLocaleString();
    }

    // ========== SIDEBAR ==========
    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('open');
      document.getElementById('sidebar-overlay').classList.toggle('open');
    }
    function renderCourseNav() {
      const container = document.getElementById('course-nav');
      const courses = ['mts101', 'gst111', 'cos101', 'phy101', 'sta111', 'ift101', 'gns103'];
      const names = { mts101: 'Mathematics', gst111: 'Use of English', cos101: 'Computer Science', phy101: 'Physics', sta111: 'Statistics', ift101: 'Internet Fund.', gns103: 'Library Science' };
      
      container.innerHTML = courses.map(id => `
        <div class="topic-nav-item ${id === currentCourseId ? 'active' : ''}" onclick="loadCourse('${id}')">
          <span class="font-mono text-xs px-2 py-1 rounded bg-[var(--bg)] border border-[var(--border)]">${id.toUpperCase()}</span>
          <span class="text-sm">${names[id]}</span>
        </div>
      `).join('');
    }

    // ========== VIEW MANAGEMENT ==========
    function showView(viewId) {
      document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
      document.getElementById('view-' + viewId).classList.add('active');
      window.scrollTo(0,0);
    }

    function loadCourse(courseId) {
      currentCourseId = courseId;
      const names = { mts101: 'Mathematics', gst111: 'Use of English', cos101: 'Computer Science', phy101: 'Physics', sta111: 'Statistics', ift101: 'Internet Fundamentals', gns103: 'Library & Info Studies' };
      document.getElementById('current-course-title').textContent = `${courseId.toUpperCase()} - ${names[courseId]}`;
      renderCourseNav();
      toggleSidebar();
      showView('dashboard');
    }

    // ========== QUIZ SETUP ==========
    function openModal(id) { document.getElementById(id).classList.add('active'); }
    function closeModal(id) { document.getElementById(id).classList.remove('active'); }
    
    function setQuizType(type) {
      quizType = type;
      document.getElementById('type-obj').classList.toggle('active', type === 'objectives');
      document.getElementById('type-theory').classList.toggle('active', type === 'theory');
      document.getElementById('question-count-section').style.display = type === 'objectives' ? 'block' : 'none';
    }
    function setQuestionCount(count) {
      questionCount = count;
      document.querySelectorAll('[data-count]').forEach(btn => btn.classList.toggle('active', parseInt(btn.dataset.count) === count));
    }

    function showRulesModal() {
      closeModal('quiz-setup-modal');
      document.getElementById('rules-subject').textContent = currentCourseId.toUpperCase();
      document.getElementById('rules-count').textContent = questionCount;
      openModal('rules-modal');
    }
    
    // ========== QUIZ LOGIC ==========
    function startQuiz() {
      closeModal('rules-modal');
      
      if(quizType === 'theory') {
        startTheoryQuiz();
        return;
      }
      
      const allQ = generateQuestionBank(currentCourseId);
      currentQuizQuestions = allQ.sort(() => Math.random() - 0.5).slice(0, questionCount);
      userAnswers = new Array(currentQuizQuestions.length).fill(null);
      currentQuestionIndex = 0;
      quizScore = { correct: 0, wrong: 0, skipped: 0 };
      
      document.getElementById('quiz-title').textContent = currentCourseId.toUpperCase();
      document.getElementById('total-q').textContent = currentQuizQuestions.length;
      
      showView('quiz');
      renderQuizQuestion();
      startTimer();
    }
    
    function startTheoryQuiz() {
      const theory = theoryBank[currentCourseId] || [];
      currentQuizQuestions = theory;
      
      const container = document.getElementById('theory-quiz-container');
      document.getElementById('theory-quiz-title').textContent = currentCourseId.toUpperCase();
      
      container.innerHTML = theory.map((t, i) => `
        <div class="theory-card">
          <p class="font-medium mb-3">${i+1}. ${t.q}</p>
          <details class="theory-answer"><summary class="cursor-pointer text-[var(--accent)] text-sm">Show Answer</summary><p class="mt-2 text-[var(--muted)]">${t.a}</p></details>
        </div>
      `).join('');
      
      showView('theory-quiz');
    }

    function renderQuizQuestion() {
      const q = currentQuizQuestions[currentQuestionIndex];
      const letters = ['A', 'B', 'C', 'D'];
      
      document.getElementById('current-q').textContent = currentQuestionIndex + 1;
      document.getElementById('question-text').textContent = q.q;
      document.getElementById('quiz-progress').style.width = `${((currentQuestionIndex+1)/currentQuizQuestions.length)*100}%`;
      
      const optContainer = document.getElementById('options-container');
      optContainer.innerHTML = q.options.map((opt, i) => `
        <button class="option-item ${userAnswers[currentQuestionIndex] === i ? 'selected' : ''}" onclick="selectAnswer(${i})">
          <span class="option-marker">${letters[i]}</span>
          <span>${opt}</span>
        </button>
      `).join('');
      
      document.getElementById('next-btn').textContent = currentQuestionIndex === currentQuizQuestions.length - 1 ? 'Submit' : 'Next';
    }

    function selectAnswer(idx) {
      userAnswers[currentQuestionIndex] = idx;
      renderQuizQuestion();
    }

    function nextQuestion() {
      if(currentQuestionIndex === currentQuizQuestions.length - 1) {
        submitQuiz();
      } else {
        currentQuestionIndex++;
        renderQuizQuestion();
        resetTimer();
      }
    }

    function submitQuiz() {
      clearInterval(quizTimer);
      
      currentQuizQuestions.forEach((q, i) => {
        if(userAnswers[i] === null) quizScore.skipped++;
        else if(userAnswers[i] === q.answer) quizScore.correct++;
        else quizScore.wrong++;
      });
      
      const total = currentQuizQuestions.length;
      const pct = Math.round((quizScore.correct / total) * 100);
      
      totalPoints += quizScore.correct * 10;
      localStorage.setItem('examforge_points', totalPoints);
      document.getElementById('totalPoints').textContent = totalPoints;
      
      document.getElementById('final-score').textContent = `${pct}%`;
      document.getElementById('correct-count').textContent = quizScore.correct;
      document.getElementById('total-questions').textContent = total;
      document.getElementById('score-correct').textContent = quizScore.correct;
      document.getElementById('score-wrong').textContent = quizScore.wrong;
      document.getElementById('score-skipped').textContent = quizScore.skipped;
      
      // Stars
      const stars = Math.max(1, Math.min(5, Math.ceil(pct / 20)));
      document.getElementById('result-stars').innerHTML = Array(5).fill(0).map((_, i) => 
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="${i < stars ? 'var(--star)' : 'var(--border)'}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
      ).join('');
      
      // Rating
      websiteRatingValue = 0;
      document.getElementById('rating-text').textContent = "Click to rate";
      document.getElementById('website-rating').innerHTML = renderRatingStars();
      
      showView('results');
    }
    
    // ========== RATING ==========
    function renderRatingStars() {
       let html = '';
       for(let i=1; i<=5; i++) {
         html += `<svg class="star ${i <= websiteRatingValue ? 'filled' : ''}" onclick="setWebsiteRating(${i})" style="cursor:pointer; transition: 0.2s; fill: ${i <= websiteRatingValue ? 'var(--star)' : 'var(--border)'}" width="32" height="32" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
       }
       return html;
    }
    function setWebsiteRating(val) {
       websiteRatingValue = val;
       document.getElementById('website-rating').innerHTML = renderRatingStars();
       document.getElementById('rating-text').textContent = `You rated ${val} star${val > 1 ? 's' : ''}!`;
    }

    // ========== TIMER ==========
    function startTimer() {
      timeLeft = 30;
      updateTimerDisplay();
      quizTimer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if(timeLeft <= 0) nextQuestion();
      }, 1000);
    }
    function resetTimer() {
      clearInterval(quizTimer);
      timeLeft = 30;
      updateTimerDisplay();
      startTimer();
    }
    function updateTimerDisplay() {
      const circ = document.getElementById('timer-circle');
      document.getElementById('timer-display').textContent = timeLeft;
      circ.style.strokeDashoffset = 150.8 * (1 - timeLeft / 30);
    }

    // ========== CORRECTIONS ==========
    function showCorrections() {
      const container = document.getElementById('corrections-container');
      const letters = ['A', 'B', 'C', 'D'];
      
      container.innerHTML = currentQuizQuestions.map((q, i) => {
        const ua = userAnswers[i];
        const isCorrect = ua === q.answer;
        const isSkipped = ua === null;
        
        return `
          <div class="bg-[var(--card)] border-l-4 ${isCorrect ? 'border-[var(--success)]' : 'border-[var(--danger)]'} rounded-xl p-5 mb-4">
            <p class="font-medium mb-3">${i+1}. ${q.q}</p>
            <div class="space-y-2">
              ${q.options.map((opt, j) => `
                <div class="option-item ${j === q.answer ? 'correct-answer' : ''} ${j === ua && !isCorrect ? 'user-wrong' : ''}">
                  <span class="option-marker">${letters[j]}</span>
                  <span>${opt}</span>
                </div>
              `).join('')}
            </div>
            <div class="explanation-box">${q.explanation}</div>
          </div>
        `;
      }).join('');
      
      showView('corrections');
    }
    
    function retryQuiz() { startQuiz(); }
    function exitQuiz() {
      clearInterval(quizTimer);
      showView('dashboard');
    }
    function downloadResultsPDF() { alert('Downloading Results PDF...'); }
