import test from 'node:test';
import assert from 'node:assert/strict';
import { JIGSAW_LEVELS } from '../js/puzzles.js';
import {
  jigsawPlacementFits,
  rotateJigsawCells,
  validateJigsaw
} from '../js/rules.js';

const SOLUTIONS = [
  {
    rosa: { row: 0, col: 0, rotation: 0 },
    menta: { row: 0, col: 2, rotation: 0 },
    amarela: { row: 2, col: 0, rotation: 0 },
    ameixa: { row: 2, col: 2, rotation: 0 }
  },
  {
    linha: { row: 0, col: 0, rotation: 0 },
    ele: { row: 1, col: 0, rotation: 0 },
    jota: { row: 1, col: 2, rotation: 0 },
    quadrado: { row: 1, col: 1, rotation: 0 }
  },
  {
    'linha-1': { row: 0, col: 0, rotation: 1 },
    'linha-2': { row: 0, col: 3, rotation: 1 },
    'linha-3': { row: 0, col: 4, rotation: 1 },
    'quadrado-1': { row: 0, col: 1, rotation: 0 },
    'quadrado-2': { row: 2, col: 1, rotation: 0 }
  },
  {
    'linha-final': { row: 0, col: 0, rotation: 0 },
    'te-1': { row: 1, col: 4, rotation: 1 },
    'te-2': { row: 2, col: 2, rotation: 2 },
    esse: { row: 0, col: 3, rotation: 0 },
    'ele-final': { row: 1, col: 0, rotation: 0 },
    'quadrado-final': { row: 1, col: 1, rotation: 0 }
  },
  {
    'faixa-1': { row: 0, col: 0, rotation: 0 },
    'faixa-2': { row: 1, col: 0, rotation: 0 },
    'faixa-3': { row: 2, col: 0, rotation: 0 },
    'faixa-4': { row: 3, col: 0, rotation: 0 },
    'faixa-5': { row: 4, col: 0, rotation: 0 }
  },
  {
    'qe-1': { row: 0, col: 0, rotation: 0 },
    'qe-2': { row: 0, col: 2, rotation: 0 },
    'qe-3': { row: 0, col: 4, rotation: 0 },
    'col-1': { row: 2, col: 0, rotation: 0 },
    'col-2': { row: 2, col: 1, rotation: 0 },
    'col-3': { row: 2, col: 2, rotation: 0 },
    'col-4': { row: 2, col: 3, rotation: 0 },
    'col-5': { row: 2, col: 4, rotation: 0 },
    'col-6': { row: 2, col: 5, rotation: 0 }
  },
  Object.fromEntries(Array.from({ length: 9 }, (_, index) => [
    `nq-${index + 1}`,
    { row: Math.floor(index / 3) * 2, col: (index % 3) * 2, rotation: 0 }
  ])),
  Object.fromEntries(Array.from({ length: 12 }, (_, index) => [
    `mg-${index + 1}`,
    { row: Math.floor(index / 4) * 2, col: (index % 4) * 2, rotation: 0 }
  ]))
];

test('Logic Jigsaw levels use pieces that exactly cover each board', () => {
  JIGSAW_LEVELS.forEach(level => {
    const pieceCells = level.pieces.reduce((sum, piece) => sum + piece.cells.length, 0);
    assert.equal(pieceCells, level.rows * level.cols, level.id);
  });
});

test('Logic Jigsaw accepts a complete tiling for every level', () => {
  JIGSAW_LEVELS.forEach((level, index) => {
    assert.equal(validateJigsaw(level, SOLUTIONS[index]).valid, true, level.id);
  });
});

test('Logic Jigsaw rotates pieces and rejects overlap or overflow', () => {
  const level = JIGSAW_LEVELS[1];
  assert.deepEqual(rotateJigsawCells(level.pieces[0].cells, 1), [[0, 0], [1, 0], [2, 0], [3, 0]]);
  assert.equal(jigsawPlacementFits(level, {}, 'linha', { row: 0, col: 1, rotation: 1 }), true);
  assert.equal(jigsawPlacementFits(level, {}, 'linha', { row: 1, col: 1, rotation: 1 }), false);
  assert.equal(jigsawPlacementFits(level, {
    linha: { row: 0, col: 0, rotation: 0 }
  }, 'quadrado', { row: 0, col: 0, rotation: 0 }), false);
});
