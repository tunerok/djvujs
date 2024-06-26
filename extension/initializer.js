'use strict';

window.onload = () => {
    const viewer = new DjVu.Viewer({
        uiOptions: {
            hideFullPageSwitch: true,
        }
    });
    viewer.render(document.getElementById('root'));

    viewer.on(DjVu.Viewer.Events.DOCUMENT_CHANGED, () => {
        document.title = viewer.getDocumentName();
    });

    viewer.on(DjVu.Viewer.Events.DOCUMENT_CLOSED, () => {
        document.title = 'DjVu.js Viewer';
    });

    const params = new URLSearchParams(location.search.slice(1));
    if (params.get('url')) {
        viewer.loadDocumentByUrl(params.get('url'), params.get('name') ? { name: params.get('name') } : undefined);
    }
};