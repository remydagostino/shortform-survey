import * as React from "react"

export type ClearUndoButtonProps = {
  clearEffectFn: () => void;
  undoEffectFn: () => void;
}

type ClearUndoMode = 'clear' | 'undo';

const UNDO_TIMEOUT_MILLIS = 5000;

export const ClearUndoButton: React.FC<ClearUndoButtonProps> = ({ clearEffectFn, undoEffectFn }) => {
  const [millisAtLastClear, setMillisAtLastClear] = React.useState<number | null>(null);
  const [millisSinceClear, setMillisSinceClear] = React.useState<number | null>(null);

  const currentMode: ClearUndoMode = (millisSinceClear === null || millisSinceClear > UNDO_TIMEOUT_MILLIS) ? 'clear' : 'undo';

  const onClearClick = React.useCallback(() => {
    clearEffectFn();
    setMillisAtLastClear(window.performance.now());
    setMillisSinceClear(0);
  }, [clearEffectFn, setMillisAtLastClear, setMillisSinceClear]);

  const onUndoClick = React.useCallback(() => {
    undoEffectFn();
    setMillisAtLastClear(null);
    setMillisSinceClear(null);
  }, [clearEffectFn, setMillisAtLastClear, setMillisSinceClear]);

  React.useEffect(() => {
    let animationFrameId: null | number = null;

    if (currentMode === 'undo') {
      animationFrameId = window.requestAnimationFrame((timestamp) => {
        if (millisAtLastClear !== null) {
          setMillisSinceClear(timestamp - millisAtLastClear);
        }
      });
    }

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [setMillisSinceClear, millisAtLastClear, millisSinceClear]);

  if (currentMode === 'clear') {
    return (<button onClick={onClearClick}>Clear</button>);
  } else {
    const percentUndoRemaining = 1 - (millisSinceClear || 0) / UNDO_TIMEOUT_MILLIS;
    const undoText = (() => {
      if (percentUndoRemaining > 0.75) {
        return 'Undo...';
      } else if (percentUndoRemaining > 0.5) {
        return 'Undo..';
      } else if (percentUndoRemaining > 0.25) {
        return 'Undo.';
      } else {
        return 'Undo';
      }
    })();

    return (<button onClick={onUndoClick}>{undoText}</button>)
  } 
}
