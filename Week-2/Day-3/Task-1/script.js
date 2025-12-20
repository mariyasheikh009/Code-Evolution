const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const output = document.getElementById('output');
const themeToggle = document.getElementById('themeToggle');

function createMsg(text, type='info'){
  const el = document.createElement('div');
  el.className = `msg ${type}`;
  const dot = document.createElement('span');
  dot.className = 'dot';
  el.appendChild(dot);

  const txt = document.createElement('div');
  txt.innerHTML = text;
  el.appendChild(txt);
  return el;
}

function clearOutput(){
  output.innerHTML = `
    <div class="status-row">
      <span class="badge">Ready</span>
      <span class="small">Click <strong>Start</strong> to simulate</span>
    </div>
  `;
}

// Fake API simulation
function fakeAPICallUI(){
  startBtn.disabled = true;

  output.appendChild(createMsg("Fetching user details... ●●●"));

  setTimeout(() => {
    output.appendChild(createMsg("User data received ✓", "success"));

    setTimeout(() => {
      output.appendChild(createMsg("Processing Data... ●●", "processing"));

      setTimeout(() => {
        output.appendChild(createMsg("Data processed successfully ", "success"));
        startBtn.disabled = false;
      }, 1200);

    }, 1500);
  }, 2000);
}

startBtn.addEventListener('click', fakeAPICallUI);
resetBtn.addEventListener('click', clearOutput);
clearOutput();

// THEME TOGGLE
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});
