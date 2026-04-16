import React from 'react';

function ImageGeneratorForm({ prompt, setPrompt, onGenerate }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Describe la imagen que quieres generar..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button className="btn btn-primary w-100" onClick={onGenerate} disabled={!prompt}>
        Generar Imagen
      </button>
    </div>
  );
}

export default ImageGeneratorForm;