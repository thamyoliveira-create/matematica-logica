import { ACRONYM_LEVELS } from '../puzzles.js';
import {
  cancelAdvance,
  celebrate,
  clearBoardState,
  clearMessage,
  getBoardState,
  getSelectedLevel,
  isLevelComplete,
  markLevelComplete,
  playerCallout,
  renderLevelPicker,
  saveBoardState,
  scheduleAdvance,
  setSelectedLevel,
  showMessage
} from '../core.js';

const GAME_ID = 'acronyms';
const panel = document.querySelector('#panel-acronyms');
const picker = panel.querySelector('[data-level-picker]');
const board = panel.querySelector('[data-board]');
const wordsField = panel.querySelector('.acronym-words-field');
const wordsInput = panel.querySelector('[data-acronym-words]');
const message = panel.querySelector('[data-message]');
const checkButton = panel.querySelector('[data-action="check"]');
const resetButton = panel.querySelector('[data-action="reset"]');
let currentLevel = getSelectedLevel(GAME_ID);
let answers = {};
let words = '';

function normalize(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toUpperCase();
}

function levelKey(regionIndex, itemIndex) {
  return `${regionIndex}:${itemIndex}`;
}

function wordUsesStateCodes(word) {
  const codes = new Set(ACRONYM_LEVELS[0].regions.flatMap(region => region.states.map(([, code]) => code)));
  const clean = normalize(word).replace(/[^A-Z]/g, '');
  if (clean.length < 4 || clean.length % 2 !== 0) return false;
  for (let index = 0; index < clean.length; index += 2) {
    if (!codes.has(clean.slice(index, index + 2))) return false;
  }
  return true;
}

function save() {
  saveBoardState(GAME_ID, currentLevel, { answers, words });
}

function setLevel(index) {
  cancelAdvance(GAME_ID);
  currentLevel = index;
  setSelectedLevel(GAME_ID, index);
  const stored = getBoardState(GAME_ID, index);
  answers = stored?.answers && typeof stored.answers === 'object' ? stored.answers : {};
  words = typeof stored?.words === 'string' ? stored.words : '';
  wordsInput.value = words;
  clearMessage(message);
  render();
}

function renderBoard() {
  const level = ACRONYM_LEVELS[currentLevel];
  const regions = document.createElement('div');
  regions.className = 'acronym-regions';
  level.regions.forEach((region, regionIndex) => {
    const section = document.createElement('section');
    section.className = 'acronym-region';
    const heading = document.createElement('h3');
    heading.textContent = region.name.startsWith('Estados') ? region.name : `Região ${region.name}`;
    section.append(heading);
    region.states.forEach(([label, expected], itemIndex) => {
      const key = levelKey(regionIndex, itemIndex);
      const row = document.createElement('label');
      row.className = 'acronym-row';
      if ((level.maxLength || 2) > 2) row.classList.add('has-long-answer');
      const name = document.createElement('span');
      name.textContent = label;
      const input = document.createElement('input');
      input.type = 'text';
      input.inputMode = 'text';
      input.maxLength = level.maxLength || 2;
      input.autocomplete = 'off';
      input.value = answers[key] || (currentLevel === 0 ? answers[expected] || '' : '');
      input.placeholder = level.placeholder || 'UF';
      input.setAttribute('aria-label', `${level.placeholder || 'Sigla'} de ${label}`);
      input.dataset.answer = normalize(expected);
      input.dataset.correct = String(normalize(input.value) === normalize(expected));
      input.addEventListener('input', () => {
        input.value = input.value.slice(0, input.maxLength);
        answers[key] = input.value;
        input.dataset.correct = String(normalize(input.value) === input.dataset.answer);
        input.removeAttribute('aria-invalid');
        save();
        clearMessage(message);
      });
      row.append(name, input);
      section.append(row);
    });
    regions.append(section);
  });
  board.replaceChildren(regions);
  wordsField.hidden = !level.minimumWords;
}

function renderPicker() {
  renderLevelPicker(picker, {
    gameId: GAME_ID,
    levels: ACRONYM_LEVELS,
    current: currentLevel,
    onSelect: setLevel
  });
}

function render() {
  renderPicker();
  renderBoard();
}

function check() {
  const level = ACRONYM_LEVELS[currentLevel];
  const incorrect = [...board.querySelectorAll('input')].filter(input => normalize(input.value) !== input.dataset.answer);
  board.querySelectorAll('input').forEach(input => {
    input.setAttribute('aria-invalid', String(normalize(input.value) !== input.dataset.answer));
  });
  if (incorrect.length) {
    showMessage(message, 'error', `Revise ${incorrect.length} ${incorrect.length === 1 ? 'resposta' : 'respostas'} destacadas.`, { focus: true });
    incorrect[0].focus();
    return;
  }
  if (level.minimumWords) {
    const submittedWords = words.split(/[,;\n]+/).map(value => value.trim()).filter(Boolean);
    const validWords = [...new Set(submittedWords.filter(wordUsesStateCodes).map(normalize))];
    if (validWords.length < level.minimumWords) {
      showMessage(message, 'error', `As siglas estão certas. Agora forme pelo menos ${level.minimumWords} palavras juntando UFs, como PA + TO = PATO.`, { focus: true });
      wordsInput.focus();
      return;
    }
  }
  const wasComplete = isLevelComplete(GAME_ID, currentLevel);
  markLevelComplete(GAME_ID, currentLevel);
  celebrate(panel.querySelector('.play-surface'));
  const isLast = currentLevel === ACRONYM_LEVELS.length - 1;
  showMessage(message, 'success', `${wasComplete ? 'Atividade refeita' : 'Resposta perfeita'}, ${playerCallout()}! ${isLast ? 'Você concluiu toda a série de geografia.' : 'A próxima fase foi liberada.'}`, { focus: true });
  renderPicker();
  if (!isLast) scheduleAdvance(GAME_ID, () => setLevel(currentLevel + 1));
}

function reset() {
  cancelAdvance(GAME_ID);
  clearBoardState(GAME_ID, currentLevel);
  answers = {};
  words = '';
  wordsInput.value = '';
  clearMessage(message);
  renderBoard();
  board.querySelector('input')?.focus();
}

wordsInput.addEventListener('input', () => {
  words = wordsInput.value;
  save();
  clearMessage(message);
});
checkButton.addEventListener('click', check);
resetButton.addEventListener('click', reset);
setLevel(currentLevel);

export function refreshAcronyms() {
  setLevel(getSelectedLevel(GAME_ID));
}
