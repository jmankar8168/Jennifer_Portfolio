import React, { useRef, useState, useEffect } from 'react';
import { RotateCcw, RotateCw, Trash2, Check, PenTool } from 'lucide-react';

export default function PlaygroundCanvas() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokeColor, setStrokeColor] = useState('#111111');
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [history, setHistory] = useState([]);
  const [historyStep, setHistoryStep] = useState(-1);
  const [doneToast, setDoneToast] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Set actual resolution
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Draw initial playful heart doodle
    drawInitialDoodle(ctx, canvas.offsetWidth, canvas.offsetHeight);
    saveState();
  }, []);

  const drawInitialDoodle = (ctx, w, h) => {
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 4;
    ctx.beginPath();
    const cx = w / 2;
    const cy = h / 2 - 10;
    ctx.moveTo(cx, cy + 30);
    ctx.bezierCurveTo(cx - 40, cy - 20, cx - 60, cy + 30, cx, cy + 70);
    ctx.bezierCurveTo(cx + 60, cy + 30, cx + 40, cy - 20, cx, cy + 30);
    ctx.stroke();
  };

  const saveState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const data = canvas.toDataURL();
    setHistory(prev => [...prev.slice(0, historyStep + 1), data]);
    setHistoryStep(prev => prev + 1);
  };

  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    saveState();
  };

  const undo = () => {
    if (historyStep > 0) {
      const prevStep = historyStep - 1;
      restoreData(history[prevStep]);
      setHistoryStep(prevStep);
    }
  };

  const redo = () => {
    if (historyStep < history.length - 1) {
      const nextStep = historyStep + 1;
      restoreData(history[nextStep]);
      setHistoryStep(nextStep);
    }
  };

  const restoreData = (dataUrl) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    saveState();
  };

  const handleDone = () => {
    setDoneToast(true);
    setTimeout(() => setDoneToast(false), 3000);
  };

  return (
    <section id="playground" className="namrata-playground-section">
      <div className="section-title-wrap">
        <h2 className="section-heading-blue">
          PLAYGROUND <span className="eyes-emoji">&#128064;</span>
        </h2>
      </div>

      <div className="canvas-outer-frame">
        <canvas
          ref={canvasRef}
          className="interactive-drawing-board"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />

        {/* Floating Drawing Toolbar */}
        <div className="drawing-floating-toolbar">
          {/* Pen Tool Icon */}
          <div className="toolbar-tool-indicator">
            <PenTool size={16} />
          </div>

          <div className="toolbar-divider"></div>

          {/* Color Options */}
          <div className="toolbar-colors-row">
            {['#111111', '#0038ff', '#ea580c', '#16a34a'].map(color => (
              <button
                key={color}
                onClick={() => setStrokeColor(color)}
                className={`color-swatch-btn ${strokeColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                aria-label={`Select ${color}`}
              />
            ))}
          </div>

          <div className="toolbar-divider"></div>

          {/* Stroke Width Options */}
          <div className="toolbar-sizes-row">
            {[2, 5, 10].map(size => (
              <button
                key={size}
                onClick={() => setStrokeWidth(size)}
                className={`size-pill-btn ${strokeWidth === size ? 'selected' : ''}`}
              >
                <span style={{ width: size * 1.5, height: size * 1.5, borderRadius: '50%', background: '#111', display: 'inline-block' }}></span>
              </button>
            ))}
          </div>

          <div className="toolbar-divider"></div>

          {/* Undo / Redo */}
          <button onClick={undo} className="toolbar-btn" aria-label="Undo">
            <RotateCcw size={15} />
          </button>
          <button onClick={redo} className="toolbar-btn" aria-label="Redo">
            <RotateCw size={15} />
          </button>

          {/* Clear */}
          <button onClick={clearCanvas} className="toolbar-btn" aria-label="Clear canvas">
            <Trash2 size={15} />
          </button>

          {/* Done Button */}
          <button onClick={handleDone} className="toolbar-done-btn">
            Done &#10003;
          </button>
        </div>

        {doneToast && (
          <div className="canvas-toast-badge">
            <span>&#10004; Drawing captured! Thanks for playing in the canvas.</span>
          </div>
        )}
      </div>
    </section>
  );
}
