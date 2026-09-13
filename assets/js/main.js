/**
 * GEODETIC ENGINEERING ePORTFOLIO - JAVASCRIPT
 * Interactive navigation, document zoom controls, certificate modal, and filter tabs
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sidebar Drawer Toggle (Mobile/Tablet Navigation)
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebarNav = document.getElementById('sidebarNav');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
  const sidebarNavItems = document.querySelectorAll('.sidebar-nav-item');

  const openSidebar = () => {
    if (sidebarNav && sidebarBackdrop) {
      sidebarNav.classList.add('open');
      sidebarBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (sidebarToggle) sidebarToggle.setAttribute('aria-expanded', 'true');
    }
  };

  const closeSidebar = () => {
    if (sidebarNav && sidebarBackdrop) {
      sidebarNav.classList.remove('open');
      sidebarBackdrop.classList.remove('active');
      document.body.style.overflow = '';
      if (sidebarToggle) sidebarToggle.setAttribute('aria-expanded', 'false');
    }
  };

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (sidebarNav && sidebarNav.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener('click', closeSidebar);
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', closeSidebar);
  }

  // Close drawer when clicking any nav item on mobile
  sidebarNavItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 992) {
        closeSidebar();
      }
    });
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebarNav && sidebarNav.classList.contains('open')) {
      closeSidebar();
    }
  });

  // 2. Document Zoom Controls (for Application Letter & Resume pages)
  const docViewport = document.querySelector('.document-viewport');
  const btnZoomIn = document.getElementById('btnZoomIn');
  const btnZoomOut = document.getElementById('btnZoomOut');
  const btnZoomReset = document.getElementById('btnZoomReset');
  const zoomLevelDisplay = document.getElementById('zoomLevelDisplay');
  const btnPrintDoc = document.getElementById('btnPrintDoc');

  if (docViewport) {
    let currentZoom = 1.0;

    const updateZoom = (newZoom) => {
      currentZoom = Math.min(Math.max(newZoom, 0.6), 1.5);
      docViewport.style.transform = `scale(${currentZoom})`;
      if (zoomLevelDisplay) {
        zoomLevelDisplay.textContent = `${Math.round(currentZoom * 100)}%`;
      }
    };

    if (btnZoomIn) {
      btnZoomIn.addEventListener('click', () => updateZoom(currentZoom + 0.1));
    }
    if (btnZoomOut) {
      btnZoomOut.addEventListener('click', () => updateZoom(currentZoom - 0.1));
    }
    if (btnZoomReset) {
      btnZoomReset.addEventListener('click', () => updateZoom(1.0));
    }
    if (btnPrintDoc) {
      btnPrintDoc.addEventListener('click', () => {
        window.print();
      });
    }
  }

  // 3. Certificate Filter Functionality (for Credential Archive)
  const filterTabs = document.querySelectorAll('.cert-filter-tab, .filter-btn');
  const archiveRows = document.querySelectorAll('.archive-row[data-category]');
  const featuredSection = document.querySelector('.featured-cert-section[data-category]');

  if (filterTabs.length > 0) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const category = tab.getAttribute('data-filter');

        // Filter archive rows
        archiveRows.forEach(row => {
          const rowCategory = row.getAttribute('data-category');
          if (category === 'all' || rowCategory === category) {
            row.style.display = 'grid';
          } else {
            row.style.display = 'none';
          }
        });

        // Filter featured section (if applicable)
        if (featuredSection) {
          const featCategory = featuredSection.getAttribute('data-category');
          if (category === 'all' || featCategory === category) {
            featuredSection.style.display = 'block';
          } else {
            featuredSection.style.display = 'none';
          }
        }
      });
    });
  }

  // 4. Certificate Lightbox Modal
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxDownload = document.getElementById('lightboxDownload');
  const viewCertTriggers = document.querySelectorAll('[data-lightbox-src]');

  if (lightboxModal && lightboxImage) {
    viewCertTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const src = trigger.getAttribute('data-lightbox-src');
        const caption = trigger.getAttribute('data-lightbox-caption') || '';
        const downloadUrl = trigger.getAttribute('data-lightbox-download') || src;
        
        lightboxImage.src = src;
        if (lightboxCaption) lightboxCaption.textContent = caption;
        if (lightboxDownload) {
          lightboxDownload.href = downloadUrl;
          lightboxDownload.setAttribute('download', downloadUrl.split('/').pop());
        }
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
      if (lightboxImage) lightboxImage.src = '';
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }
});
