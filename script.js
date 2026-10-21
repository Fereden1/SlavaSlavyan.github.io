import Panzoom from 'https://cdn.jsdelivr.net/npm/@panzoom/panzoom@4/+esm';

document.addEventListener('DOMContentLoaded', () => {
    const viewport = document.getElementById('viewport');
    const content  = document.getElementById('content');

    if (!content) {
        console.error('Элемент #content не найден в DOM');
        return; // ← без этого Panzoom снова упадёт
    }

    const pz = Panzoom(content, {
        minScale: 0.3,
        maxScale: 6,
        cursor: 'grab',
        contain: 'outside',
    });

    viewport.addEventListener('wheel', pz.zoomWithWheel, { passive: false });
});