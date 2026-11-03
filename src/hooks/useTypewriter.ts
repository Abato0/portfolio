import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useTypewriter(words: string[], { type = 75, erase = 35, hold = 1900, gap = 350 } = {}) {
  const reduced = usePrefersReducedMotion();
  const [state, setState] = useState({ idx: 0, chars: 0, deleting: false });

  useEffect(() => {
    if (reduced) return;
    const word = words[state.idx];
    let delay = type;
    let next = state;

    if (!state.deleting && state.chars < word.length) next = { ...state, chars: state.chars + 1 };
    else if (!state.deleting) { next = { ...state, deleting: true }; delay = hold; }
    else if (state.chars > 0) { next = { ...state, chars: state.chars - 1 }; delay = erase; }
    else { next = { idx: (state.idx + 1) % words.length, chars: 0, deleting: false }; delay = gap; }

    const id = setTimeout(() => setState(next), delay);
    return () => clearTimeout(id);
  }, [state, words, reduced, type, erase, hold, gap]);

  return reduced ? words[0] : words[state.idx].slice(0, state.chars);
}
