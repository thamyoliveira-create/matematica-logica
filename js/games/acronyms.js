import { ACRONYM_LEVELS } from '../puzzles.js';
import {
  celebrate,
  clearBoardState,
  clearMessage,
  getBoardState,
  isLevelComplete,
  markLevelComplete,
  playerCallout,
  saveBoardState,
  showMessage
} from '../core.js';

const GAME_ID = 'acronyms';
const level = ACRONYM_LEVELS[0];
const panel = document.querySelector('#panel-acronyms');
const board = panel.querySelector('[data-board]');
const wordsInput = panel.querySelector('[data-acronym-words]');
const message = panel.querySelector('[data-message]');
const checkButton = panel.querySelector('[data-action="check"]');
const resetButton = panel.querySelector('[data-action="reset"]');
const validCodes = new Set(level.regions.flatMap(region => region.states.map(([, code]) => code)));
let answers = {};
let words = '';

function normalize(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toUpperCase();
}

function wordUsesStateCodes(word) {
  const clean = normalize(word).replace(/[^A-Z]/g, '');
  if (clean.length < 4 || clean.length % 2 !== 0) return false;
  for (let index = 0; index < clean.length; index += 2) {
    if (!validCodes.has(clean.slice(index, index + 2))) return false;
  }
  return true;
}

function save() {
  saveBoardState(GAME_ID, 0, { answers, words });
}

function renderBoard() {
  const regions = document.createElement('div');
  regions.className = 'acronym-regions';
  level.regions.forEach(region => {
    const section = document.createElement('section');
    section.className = 'acronym-region';
    const heading = document.createElement('h3');
    heading.textContent = `Região ${region.name}`;
    section.append(heading);
    region.states.forEach(([state, code]) => {
      const row = document.createElement('label');
      row.className = 'acronym-row';
      const name = document.createElement('span');
      name.textContent = state;
      const input = document.createElement('input');
      input.type = 'text';
      input.inputMode = 'text';
      input.maxLength = 2;
      input.autocomplete = 'off';
      input.value = answers[code] || '';
      input.placeholder = 'UF';
      input.setAttribute('aria-label', `Sigla de ${state}`);
      input.dataset.code = code;
      input.dataset.correct = String(normalize(input.value) === code);
      input.addEventListener('input', () => {
        input.value = normalize(input.value).slice(0, 2);
        answers[code] = input.value;
        input.dataset.correct = String(input.value === code);
        save();
        clearMessage(message);
      });
      row.append(name, input);
      section.append(row);
    });
    regions.append(section);
  });
  board.replaceChildren(regions);
}

function check() {
  const incorrect = [...board.querySelectorAll('input')].filter(input => normalize(input.value) !== input.dataset.code);
  const submittedWords = words.split(/[,;\n]+/).map(value => value.trim()).filter(Boolean);
  const validWords = [...new Set(submittedWords.filter(wordUsesStateCodes).map(normalize))];
  board.querySelectorAll('input').forEach(input => {
    input.setAttribute('aria-invalid', String(normalize(input.value) !== input.dataset.code));
  });
  if (incorrect.length) {
    showMessage(message, 'error', `Revise ${incorrect.length} ${incorrect.length === 1 ? 'sigla' : 'siglas'} destacadas.`, { focus: true });
    incorrect[0].focus();
    return;
  }
  if (validWords.length < level.minimumWords) {
    showMessage(message, 'error', `As siglas estão certas. Agora forme pelo menos ${level.minimumWords} palavras juntando UFs, como PA + TO = PATO.`, { focus: true });
    wordsInput.focus();
    return;
  }
  const wasComplete = isLevelComplete(GAME_ID, 0);
  markLevelComplete(GAME_ID, 0);
  celebrate(panel.querySelector('.play-surface'));
  showMessage(message, 'success', `${wasComplete ? 'Mapa refeito' : 'Brasil completo'}, ${playerCallout()}! Você acertou as 27 siglas e formou ${validWords.length} palavras.`, { focus: true });
}

function reset() {
  clearBoardState(GAME_ID, 0);
  answers = {};
  words = '';
  wordsInput.value = '';
  clearMessage(message);
  renderBoard();
  board.querySelector('input')?.focus();
}

function restore() {
  const stored = getBoardState(GAME_ID, 0);
  answers = stored?.answers && typeof stored.answers === 'object' ? stored.answers : {};
  words = typeof stored?.words === 'string' ? stored.words : '';
  wordsInput.value = words;
  renderBoard();
}

wordsInput.addEventListener('input', () => {
  words = wordsInput.value;
  save();
  clearMessage(message);
});
checkButton.addEventListener('click', check);
resetButton.addEventListener('click', reset);
restore();

export function refreshAcronyms() {
  restore();
}
